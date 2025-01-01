import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

<<<<<<< HEAD
=======
// Fetch posts from subreddit
>>>>>>> fcd7c4a (added major stuff)
export const fetchPosts = createAsyncThunk(
  'reddit/fetchPosts',
  async (subreddit) => {
    const response = await axios.get(`https://www.reddit.com/${subreddit}.json`);
<<<<<<< HEAD
    return response.data.data.children.map((post) => ({
      id: post.data.id,
      title: post.data.title,
      thumbnail: post.data.preview
        ? post.data.preview.images[0].source.url.replace(/&amp;/g, '&') // Imagine clară dacă există preview
        : post.data.thumbnail, // Fallback la thumbnail dacă preview nu există
      url: post.data.url,
      permalink: post.data.permalink,
      subreddit: post.data.subreddit,
      likes: post.data.ups, // Preluăm numărul de like-uri din Reddit
      dislikes: post.data.downs, // Preluăm numărul de dislike-uri din Reddit
      userInteraction: null, // Inițial, utilizatorul nu a interacționat
      likeLocked: false, // Blochează temporar interacțiunile de like
      dislikeLocked: false, // Blochează temporar interacțiunile de dislike
      backgroundColor: 'white', // Fundalul implicit alb
      commentsVisible: false, // Controlăm afișarea comentariilor
      comments: [], // Comentariile pentru fiecare postare
      author: post.data.author, // Adăugăm autorul postării
    }));
  }
);

=======
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
>>>>>>> fcd7c4a (added major stuff)
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
<<<<<<< HEAD
        if (post.likeLocked) {
          post.likes -= 1;
          post.userInteraction = null;
          post.likeLocked = false;
          post.backgroundColor = 'white';
          return;
        }

        if (post.userInteraction === 'dislike') {
          post.dislikes -= 1;
        }

        if (post.userInteraction !== 'like') {
          post.likes += 1;
          post.userInteraction = 'like';
          post.likeLocked = true;
          post.dislikeLocked = false;
          post.backgroundColor = 'green';
=======
        if (post.userInteraction === 'like') {
          post.likes -= 1;
          post.userInteraction = null;
        } else {
          if (post.userInteraction === 'dislike') post.dislikes -= 1;
          post.likes += 1;
          post.userInteraction = 'like';
>>>>>>> fcd7c4a (added major stuff)
        }
      }
    },
    dislikePost: (state, action) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
<<<<<<< HEAD
        if (post.dislikeLocked) {
          post.dislikes -= 1;
          post.userInteraction = null;
          post.dislikeLocked = false;
          post.backgroundColor = 'white';
          return;
        }

        if (post.userInteraction === 'like') {
          post.likes -= 1;
        }

        if (post.userInteraction !== 'dislike') {
          post.dislikes += 1;
          post.userInteraction = 'dislike';
          post.dislikeLocked = true;
          post.likeLocked = false;
          post.backgroundColor = 'red';
=======
        if (post.userInteraction === 'dislike') {
          post.dislikes -= 1;
          post.userInteraction = null;
        } else {
          if (post.userInteraction === 'like') post.likes -= 1;
          post.dislikes += 1;
          post.userInteraction = 'dislike';
>>>>>>> fcd7c4a (added major stuff)
        }
      }
    },
    toggleCommentsVisibility: (state, action) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
<<<<<<< HEAD
        post.commentsVisible = !post.commentsVisible; // Inversăm starea de afișare a comentariilor
=======
        post.commentsVisible = !post.commentsVisible;
        post.commentsLoading = post.commentsVisible; // Marchează încărcarea comentariilor
>>>>>>> fcd7c4a (added major stuff)
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
<<<<<<< HEAD
=======
          post.commentsLoading = false; // Comentariile au fost încărcate
>>>>>>> fcd7c4a (added major stuff)
        }
      });
  },
});

<<<<<<< HEAD
export const { likePost, dislikePost, toggleCommentsVisibility } = redditSlice.actions;
=======

export const {
  likePost,
  dislikePost,
  toggleCommentsVisibility,
  toggleFavorite, // Exportăm funcția pentru toggling favorite
} = redditSlice.actions;
>>>>>>> fcd7c4a (added major stuff)

export default redditSlice.reducer;









