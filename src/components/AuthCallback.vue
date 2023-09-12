<template>
    <div>
      <!-- Your template content goes here -->
    </div>
  </template>
  
  <script>
import axios from 'axios'; // Import Axios

export default {
  created() {
    // Extract the authorization code from the URL
    const authorizationCode = this.$route.query.code;
    
    // Make a POST request to Spotify's token endpoint to exchange the code for an access token
    const clientId = 'ea75aa546e674f61892f8ac486f68dd4';
    const clientSecret = '5a35ca413fb843efae594b0325385538';
    const redirectUri = 'http://localhost:8085/auth/callback'; // Should match your redirect URI
    
    const authHeader = `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`;
    
    axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        code: authorizationCode,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      },
      headers: {
        'Authorization': authHeader,
      },
    })
    .then(response => {
      const accessToken = response.data.access_token;
      // Store the access token securely (e.g., in Vuex, localStorage, or a state management solution).
      // You can also redirect the user to the main application or perform other actions.
    })
    .catch(error => {
      console.error('Error exchanging authorization code for access token:', error);
    });
  },
};
</script>

  
  <style>
  /* Your component-specific styles go here */
  </style>
  