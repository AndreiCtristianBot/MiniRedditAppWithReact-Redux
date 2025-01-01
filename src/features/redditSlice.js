import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Fetch posts from subreddit
export const fetchPosts = createAsyncThunk(
  'reddit/fetchPosts',
  async (subreddit) => {
    const response = await axios.get(`https://www.reddit.com/${subreddit}.json`);
    return response.data.data.children.map((post) => {
      const likes = post.data.ups; // Numărul de like-uri
      const views = likes + Math.floor(Math.random() * 1000) + 1; // Asigurăm că vizualizările sunt mai multe ca like-urile

      return {
        id: post.data.id,
        title: post.data.title,
        thumbnail: post.data.preview
          ? post.data.preview.images[0].source.url.replace(/&amp;/g, '&') // Imagine clară
          : post.data.thumbnail, // Fallback la thumbnail
        url: post.data.url,
        permalink: post.data.permalink,
        subreddit: post.data.subreddit,
        likes, // Numărul de like-uri
        dislikes: post.data.downs, // Numărul de dislike-uri
        views, // Numărul de vizualizări
        userInteraction: null, // Stare interacțiune utilizator
        likeLocked: false, // Blochează temporar like-ul
        dislikeLocked: false, // Blochează temporar dislike-ul
        backgroundColor: 'white', // Fundal implicit
        commentsVisible: false, // Controlează afișarea comentariilor
        comments: [], // Comentariile fiecărei postări
        author: post.data.author || 'Unknown Author', // Autorul postării
        created: post.data.created_utc * 1000, // Timpul UTC convertit în ms
        isFavorite: false, // Stare implicită pentru favorite
      };
    });
  }
);

// Fetch comments for a specific post
export const fetchComments = createAsyncThunk(
  'reddit/fetchComments',
  async (postId) => {
    const response = await axios.get(`https://www.reddit.com/comments/${postId}.json`);
    return {
      postId,
      comments: response.data[1].data.children.map((comment) => ({
        id: comment.data.id,
        author: comment.data.author,
        body: comment.data.body,
      })),
    };
  }
);

const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    likePost: (state, action) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        if (post.userInteraction === 'like') {
          post.likes -= 1;
          post.userInteraction = null;
        } else {
          if (post.userInteraction === 'dislike') post.dislikes -= 1;
          post.likes += 1;
          post.userInteraction = 'like';
        }
      }
    },
    dislikePost: (state, action) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        if (post.userInteraction === 'dislike') {
          post.dislikes -= 1;
          post.userInteraction = null;
        } else {
          if (post.userInteraction === 'like') post.likes -= 1;
          post.dislikes += 1;
          post.userInteraction = 'dislike';
        }
      }
    },
    toggleCommentsVisibility: (state, action) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        post.commentsVisible = !post.commentsVisible;
        post.commentsLoading = post.commentsVisible; // Marchează încărcarea comentariilor
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const post = state.posts.find((p) => p.id === action.payload.postId);
        if (post) {
          post.comments = action.payload.comments;
          post.commentsLoading = false; // Comentariile au fost încărcate
        }
      });
  },
});


export const {
  likePost,
  dislikePost,
  toggleCommentsVisibility,
  toggleFavorite, // Exportăm funcția pentru toggling favorite
} = redditSlice.actions;

export default redditSlice.reducer;









