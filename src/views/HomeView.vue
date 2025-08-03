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
          <svg class="icon" viewBox="0 -1 17 17" fill="currentColor">
            <path fill-rule="evenodd" d="m10.995 0 .573.001q.241 0 .483.007c.35.01.705.03 1.051.093.352.063.68.166.999.329a3.36 3.36 0 0 1 1.47 1.468c.162.32.265.648.328 1 .063.347.084.7.093 1.051q.007.241.007.483l.001.573v5.99l-.001.573q0 .241-.008.483c-.01.35-.03.704-.092 1.05a3.5 3.5 0 0 1-.33 1 3.36 3.36 0 0 1-1.468 1.468 3.5 3.5 0 0 1-1 .33 7 7 0 0 1-1.05.092q-.241.007-.483.008l-.573.001h-5.99l-.573-.001q-.241 0-.483-.008a7 7 0 0 1-1.052-.092 3.6 3.6 0 0 1-.998-.33 3.36 3.36 0 0 1-1.47-1.468 3.6 3.6 0 0 1-.328-1 7 7 0 0 1-.093-1.05Q.002 11.81 0 11.568V5.005l.001-.573q0-.241.007-.483c.01-.35.03-.704.093-1.05a3.6 3.6 0 0 1 .329-1A3.36 3.36 0 0 1 1.9.431 3.5 3.5 0 0 1 2.896.1 7 7 0 0 1 3.95.008Q4.19.002 4.432 0h.573zm-.107 2.518-4.756.959H6.13a.66.66 0 0 0-.296.133.5.5 0 0 0-.16.31c-.004.027-.01.08-.01.16v5.952c0 .14-.012.275-.106.39-.095.115-.21.15-.347.177l-.31.063c-.393.08-.65.133-.881.223a1.4 1.4 0 0 0-.519.333 1.25 1.25 0 0 0-.332.995c.031.297.166.582.395.792.156.142.35.25.578.296.236.047.49.031.858-.043.196-.04.38-.102.555-.205a1.4 1.4 0 0 0 .438-.405 1.5 1.5 0 0 0 .233-.55c.042-.202.052-.386.052-.588V6.347c0-.276.08-.35.302-.404.024-.005 3.954-.797 4.138-.833.257-.049.378.025.378.294v3.524c0 .14-.001.28-.096.396-.094.115-.211.15-.348.178l-.31.062c-.393.08-.649.133-.88.223a1.4 1.4 0 0 0-.52.334 1.26 1.26 0 0 0-.34.994c.03.297.174.582.404.792a1.2 1.2 0 0 0 .577.294c.237.048.49.03.858-.044.197-.04.381-.098.556-.202a1.4 1.4 0 0 0 .438-.405q.173-.252.233-.549a2.7 2.7 0 0 0 .044-.589V2.865c0-.273-.143-.443-.4-.42-.04.003-.383.064-.424.073"/>
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
    width: 100%;
  }
  
  .social-link {
    width: 200px;
    justify-content: center;
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
