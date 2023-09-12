import { createRouter, createWebHistory } from 'vue-router';

// Import the component that will handle the authentication callback
// Update this import statement in router/index.js
import AuthCallback from '../components/AuthCallback.vue';


const routes = [
  // Your existing routes go here...

  // Route for the Spotify authentication callback
  {
    path: '/auth/callback',
    name: 'auth-callback',
    component: AuthCallback,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
