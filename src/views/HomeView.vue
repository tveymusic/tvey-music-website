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
          href="https://www.instagram.com/tvey.music" 
          target="_blank" 
          rel="noopener noreferrer"
          class="instagram-link"
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
  gap: 2rem;
  justify-content: center;
}

.instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.dark .instagram-link {
  color: #d1d5db;
  border-color: #374151;
}

.dark .instagram-link:hover {
  background-color: #1f2937;
  border-color: #6b7280;
}

.light .instagram-link {
  color: #374151;
  border-color: #d1d5db;
}

.light .instagram-link:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
}

/* Desktop-specific styles */
@media (min-width: 769px) {
  .title {
    font-size: 5rem;
  }
  
  .main-content {
    padding: 4rem 2rem;
  }
  
  .instagram-link {
    font-size: 1.2rem;
    padding: 1.25rem 2.5rem;
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
  
  .instagram-link {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
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
