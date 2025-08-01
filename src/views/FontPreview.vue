<template>
  <div class="font-preview-page" :class="{ 'dark': isDarkMode, 'light': !isDarkMode }">
    <div class="controls">
      <h2>Font Preview for tveymusic</h2>
      <div class="font-grid">
        <button 
          v-for="font in fonts" 
          :key="font.name"
          @click="selectedFont = font.name"
          :class="{ active: selectedFont === font.name }"
          class="font-option"
        >
          {{ font.displayName }}
        </button>
      </div>
      <div class="actions">
        <button @click="toggleTheme" class="theme-toggle-btn">
          {{ isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode' }}
        </button>
        <button @click="applyFont" class="apply-btn" :disabled="!selectedFont">
          Apply {{ fonts.find(f => f.name === selectedFont)?.displayName }}
        </button>
      </div>
    </div>

    <!-- Preview Section -->
    <div class="preview-section" :style="{ fontFamily: selectedFont }">
      <div class="theme-toggle">
        <button class="preview-theme-btn">{{ isDarkMode ? '☀️' : '🌙' }}</button>
      </div>
      
      <main class="main-content">
        <h1 class="title">tveymusic</h1>
        <div class="links">
          <a href="#" class="instagram-link">
            <i class="pi pi-instagram"></i>
            Instagram
          </a>
        </div>
        <p class="sample-text">Coming August 3rd</p>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFonts } from '../composables/useFonts'
import { useRouter } from 'vue-router'

const router = useRouter()
const { fonts, applyFont: applyFontGlobally } = useFonts()

const isDarkMode = ref(true)
const selectedFont = ref('Inter')

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

const applyFont = () => {
  const selectedFontObj = fonts.find(f => f.name === selectedFont.value)
  if (selectedFontObj) {
    // Apply font globally
    applyFontGlobally(selectedFont.value)
    
    // Show confirmation and redirect
    setTimeout(() => {
      alert(`✅ Font "${selectedFontObj.displayName}" has been applied to your website!\n\nRedirecting to home page...`)
      router.push('/')
    }, 500)
  }
}

onMounted(() => {
  // Load Google Fonts dynamically
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap'
  link.rel = 'stylesheet'
  document.head.appendChild(link)
})
</script>

<style scoped>
.font-preview-page {
  min-height: 100vh;
  transition: all 0.3s ease;
}

.font-preview-page.dark {
  background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
  color: #d1d5db;
}

.font-preview-page.light {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  color: #374151;
}

.controls {
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.controls h2 {
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
}

.font-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.font-option {
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.font-option:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.font-option.active {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.theme-toggle-btn, .apply-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.theme-toggle-btn:hover, .apply-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.apply-btn {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

.apply-btn:hover:not(:disabled) {
  background: #2563eb;
  border-color: #2563eb;
}

.apply-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Preview Section - Mimics your actual website */
.preview-section {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2rem;
  border-radius: 12px;
  overflow: hidden;
}

.dark .preview-section {
  background-color: #000000;
  color: #d1d5db;
}

.light .preview-section {
  background-color: #ffffff;
  color: #374151;
}

.theme-toggle {
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 10;
}

.preview-theme-btn {
  background: transparent;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.preview-theme-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
}

.links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 2.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  color: inherit;
}

.dark .instagram-link {
  border-color: #374151;
}

.dark .instagram-link:hover {
  background-color: #1f2937;
  border-color: #6b7280;
}

.light .instagram-link {
  border-color: #d1d5db;
}

.light .instagram-link:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
}

.sample-text {
  font-size: 1.1rem;
  opacity: 0.8;
  font-style: italic;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .font-grid {
    grid-template-columns: 1fr;
  }
  
  .actions {
    flex-direction: column;
    align-items: center;
  }
  
  .main-content {
    padding: 2rem 1rem;
  }
}
</style>