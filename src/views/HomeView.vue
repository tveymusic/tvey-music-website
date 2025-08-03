<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'

const isDarkMode = ref(true)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light')
}

// Set initial theme
document.documentElement.setAttribute('data-theme', 'dark')
</script>

<template>
  <div class="landing-page" :class="{ 'dark': isDarkMode, 'light': !isDarkMode }">
    <div class="theme-toggle">
      <Button 
        @click="toggleTheme" 
        :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'"
        class="p-button-text p-button-rounded theme-btn"
      />
    </div>
    
    <main class="main-content">
      <h1 class="title">tveymusic</h1>
      <div class="links">
        <a 
          href="https://open.spotify.com/track/34v7lyqSqAbMkbMWZQiT8q?si=5c6733e33c814b25" 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-link spotify-link"
        >
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          Spotify
        </a>
        <a 
          href="https://www.youtube.com/watch?v=duV-NJ9bfk8" 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-link youtube-link"
        >
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          YouTube
        </a>
        <a 
          href="https://music.apple.com/us/album/this-is-where-ill-start-feat-will-brahm-single/1822375099?uo=4&app=music&at=1001lry3&ct=dashboard" 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-link apple-link"
        >
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.994 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043-.317-.208-.65-.377-.993-.517-.63-.26-1.297-.445-1.997-.53-.739-.09-1.49-.14-2.25-.14h-8.668c-.76 0-1.511.05-2.25.14-.7.085-1.368.27-1.997.53-.343.14-.676.309-.993.517-1.118.733-1.863 1.732-2.18 3.043-.175.72-.24 1.452-.24 2.19v11.752c0 .738.065 1.47.24 2.19.317 1.31 1.062 2.31 2.18 3.043.317.208.65.377.993.517.63.26 1.297.445 1.997.53.739.09 1.49.14 2.25.14h8.668c.76 0 1.511-.05 2.25-.14.7-.085 1.368-.27 1.997-.53.343-.14.676-.309.993-.517 1.118-.733 1.863-1.732 2.18-3.043.175-.72.24-1.452.24-2.19V6.124zM19.35 15.9c-.25.4-.75.65-1.25.65-.2 0-.4-.05-.6-.15-.6-.25-1.35-.6-2.4-.6s-1.8.35-2.4.6c-.2.1-.4.15-.6.15-.5 0-1-.25-1.25-.65-.3-.5-.3-1.1 0-1.6.25-.4.75-.65 1.25-.65.2 0 .4.05.6.15.6.25 1.35.6 2.4.6s1.8-.35 2.4-.6c.2-.1.4-.15.6-.15.5 0 1 .25 1.25.65.3.5.3 1.1 0 1.6zm0-4c-.25.4-.75.65-1.25.65-.2 0-.4-.05-.6-.15-.6-.25-1.35-.6-2.4-.6s-1.8.35-2.4.6c-.2.1-.4.15-.6.15-.5 0-1-.25-1.25-.65-.3-.5-.3-1.1 0-1.6.25-.4.75-.65 1.25-.65.2 0 .4.05.6.15.6.25 1.35.6 2.4.6s1.8-.35 2.4-.6c.2-.1.4-.15.6-.15.5 0 1 .25 1.25.65.3.5.3 1.1 0 1.6z"/>
          </svg>
          Apple Music
        </a>
        <a 
          href="https://www.instagram.com/tvey.music" 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-link instagram-link"
        >
          <i class="pi pi-instagram"></i>
          Instagram
        </a>
      </div>
    </main>
  </div>
</template>

<style scoped>
.landing-page {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  margin: 0;
  padding: 0;
  font-family: var(--primary-font);
}

.landing-page.dark {
  background-color: #000000;
  color: #d1d5db;
}

.landing-page.light {
  background-color: #ffffff;
  color: #374151;
}

.theme-toggle {
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 10;
}

.theme-btn {
  background: transparent !important;
  border: none !important;
  color: inherit !important;
  font-size: 1.5rem !important;
  width: 3rem !important;
  height: 3rem !important;
  border-radius: 50% !important;
}

.theme-btn:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 3rem;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
}

.links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Desktop: horizontal layout */
@media (min-width: 1024px) {
  .links {
    flex-direction: row;
    align-items: center;
  }
}

/* Medium screens and smaller: vertical layout */
@media (max-width: 1023px) {
  .links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  color: inherit;
}

.social-link .icon {
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;
}

.social-link i {
  font-size: 1.2rem;
}

/* Dark mode base styling */
.dark .social-link {
  color: #d1d5db;
  border-color: #374151;
}

.dark .social-link:hover {
  background-color: #1f2937;
  border-color: #6b7280;
}

/* Light mode base styling */
.light .social-link {
  color: #374151;
  border-color: #d1d5db;
}

.light .social-link:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
}

/* Platform-specific hover colors */
.spotify-link:hover {
  border-color: #1db954 !important;
  background-color: rgba(29, 185, 84, 0.1) !important;
}

.youtube-link:hover {
  border-color: #ff0000 !important;
  background-color: rgba(255, 0, 0, 0.1) !important;
}

.apple-link:hover {
  border-color: #fa243c !important;
  background-color: rgba(250, 36, 60, 0.1) !important;
}

.instagram-link:hover {
  border-color: #e4405f !important;
  background-color: rgba(228, 64, 95, 0.1) !important;
}

/* Desktop-specific styles */
@media (min-width: 769px) {
  .title {
    font-size: 5rem;
  }
  
  .main-content {
    padding: 4rem 2rem;
  }
  
  .social-link {
    font-size: 1.1rem;
    padding: 1.1rem 2rem;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .theme-toggle {
    top: 1rem;
    right: 1rem;
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .links {
    gap: 1rem;
  }
  
  .social-link {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }
}

/* Extra small mobile */
@media (max-width: 480px) {
  .title {
    font-size: 2rem;
  }
  
  .main-content {
    padding: 0.5rem;
  }
}
</style>
