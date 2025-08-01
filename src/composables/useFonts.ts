import { ref } from 'vue'

export const fonts = [
  // Current font
  { name: 'Inter', displayName: 'Inter (Current)', category: 'Sans-serif', googleFont: false },
  
  // Top Modern Google Fonts for Artists 2025
  { name: 'Plus Jakarta Sans', displayName: 'Plus Jakarta Sans', category: 'Modern Sans', googleFont: true },
  { name: 'Montserrat', displayName: 'Montserrat', category: 'Geometric Sans', googleFont: true },
  { name: 'Nunito', displayName: 'Nunito', category: 'Rounded Sans', googleFont: true },
  { name: 'Poppins', displayName: 'Poppins', category: 'Geometric Sans', googleFont: true },
  
  // Display & Serif Options
  { name: 'Playfair Display', displayName: 'Playfair Display', category: 'Elegant Serif', googleFont: true },
  { name: 'Space Grotesk', displayName: 'Space Grotesk', category: 'Modern Sans', googleFont: true },
  { name: 'DM Sans', displayName: 'DM Sans', category: 'Clean Sans', googleFont: true },
  { name: 'Work Sans', displayName: 'Work Sans', category: 'Versatile Sans', googleFont: true },
  
  // Artistic Options
  { name: 'Outfit', displayName: 'Outfit', category: 'Contemporary', googleFont: true },
  { name: 'Manrope', displayName: 'Manrope', category: 'Modern Sans', googleFont: true }
]

export const currentFont = ref('Inter')

export function useFonts() {
  const applyFont = (fontName: string) => {
    const font = fonts.find(f => f.name === fontName)
    if (!font) return

    currentFont.value = fontName
    
    // Update CSS custom property
    document.documentElement.style.setProperty('--primary-font', `'${fontName}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
    
    // Load Google Font if needed
    if (font.googleFont && !isGoogleFontLoaded(fontName)) {
      loadGoogleFont(fontName)
    }
  }

  const isGoogleFontLoaded = (fontName: string): boolean => {
    const links = document.head.querySelectorAll('link[href*="fonts.googleapis.com"]')
    return Array.from(links).some(link => 
      (link as HTMLLinkElement).href.includes(fontName.replace(' ', '+'))
    )
  }

  const loadGoogleFont = (fontName: string) => {
    const link = document.createElement('link')
    const encodedFont = fontName.replace(' ', '+')
    link.href = `https://fonts.googleapis.com/css2?family=${encodedFont}:wght@300;400;500;600;700&display=swap`
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }

  const getCurrentFont = () => currentFont.value

  return {
    fonts,
    currentFont,
    applyFont,
    getCurrentFont
  }
}