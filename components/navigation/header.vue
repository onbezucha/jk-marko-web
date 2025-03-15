<template>
  <header class="bg-black border-b border-gray-800 fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Desktop & Tablet Navigation -->
      <div class="flex justify-between items-center h-20">
        <!-- Logo and Brand -->
        <div class="flex items-center">
          <NuxtLink to="/" class="group flex items-center transition-all duration-300 relative">
            <div class="relative overflow-hidden rounded-full w-14 h-14 transform transition-transform duration-300 group-hover:scale-105 border-2 border-white flex items-center justify-center">
              <!-- Přímý vložený obrázek bez dalších komplikací -->
              <img 
                src="https://as2.ftcdn.net/v2/jpg/02/77/09/51/1000_F_277095121_x3qqGdX0ZufEN90I5RgjIieSTqFNJbm6.jpg" 
                alt="JK Marko Logo - Kůň" 
                class="min-w-full min-h-full object-cover"
              />
            </div>
            <div class="ml-3 flex flex-col">
              <span class="text-2xl font-bold text-white tracking-tight group-hover:text-[#009FE1] transition-colors duration-300">JK Marko</span>
              <span class="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transform -translate-y-1 group-hover:translate-y-0 transition-all duration-300">Jezdecký Areál</span>
            </div>
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center">
          <div class="flex space-x-2 lg:space-x-3">
            <NuxtLink
              v-for="(item, index) in navItems" 
              :key="index"
              :to="item.path"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <a 
                :href="href" 
                @click="navigate" 
                class="relative px-4 py-2 font-medium transition-all duration-300 text-white hover:text-[#009FE1] group"
              >
                <span class="relative">
                  {{ item.name }}
                  <span 
                    class="absolute left-0 bottom-[-6px] h-0.5 bg-[#009FE1] transition-all duration-300"
                    :class="isExactActive ? 'w-full' : 'w-0 group-hover:w-full'"
                  ></span>
                </span>
              </a>
            </NuxtLink>
          </div>
        </nav>
        
        <!-- Contact button on desktop -->
        <div class="hidden md:flex items-center">
          <NuxtLink to="/kontakt" class="ml-6">
            <button class="bg-[#009FE1] hover:bg-[#007db3] text-white font-medium px-5 py-2 rounded-md transition-all duration-300 flex items-center space-x-2 transform hover:translate-y-[-2px] border border-[#009FE1]">
              <span>Kontaktovat</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </NuxtLink>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button 
            @click="toggleMobileMenu" 
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#009FE1] hover:bg-opacity-70 transition-colors duration-300"
            aria-label="Hlavní menu"
          >
            <span class="sr-only">{{ mobileMenuOpen ? 'Zavřít menu' : 'Otevřít menu' }}</span>
            <div class="relative w-6 h-6">
              <span 
                class="absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out"
                :class="mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'"
              ></span>
              <span 
                class="absolute h-0.5 w-6 bg-current transform transition-all duration-200 ease-in-out"
                :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100'"
              ></span>
              <span 
                class="absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out"
                :class="mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu, animated slide-in from right -->
    <div 
      class="md:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-black transform transition-transform duration-300 ease-in-out z-50 border-l border-gray-800"
      :class="mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex flex-col h-full pt-20 pb-6 px-6">
        <!-- Close button for mobile -->
        <button 
          @click="toggleMobileMenu" 
          class="absolute top-4 right-4 p-2 rounded-full bg-gray-900 text-white hover:text-[#009FE1] focus:outline-none"
          aria-label="Zavřít menu"
        >
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- Mobile Navigation Links -->
        <nav class="flex-1 flex flex-col justify-center">
          <div class="space-y-4">
            <NuxtLink
              v-for="(item, index) in navItems" 
              :key="index"
              :to="item.path"
              class="block py-3 px-4 text-xl font-medium text-white hover:text-[#009FE1] transition-colors duration-200 border-b border-gray-800 relative"
              :class="{ 'text-[#009FE1]': isActive(item.path) }"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </nav>
        
        <!-- Mobile Contact Button -->
        <div class="mt-8 pt-6 border-t border-gray-800">
          <NuxtLink to="/kontakt" @click="closeMobileMenu">
            <button class="w-full bg-[#009FE1] hover:bg-[#007db3] text-white font-medium py-4 px-4 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 border border-[#009FE1]">
              <span>Kontaktovat</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </NuxtLink>
        </div>
        
        <!-- Social Icons -->
        <div class="mt-6 flex justify-center space-x-6">
          <a href="#" class="text-gray-400 hover:text-[#009FE1] transition-colors duration-300">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-[#009FE1] transition-colors duration-300">
            <span class="sr-only">Instagram</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Dimmed overlay for mobile menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40 backdrop-blur-sm"
      @click="closeMobileMenu"
    ></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

// Seznam položek navigace
const navItems = [
  { name: 'O nás', path: '/onas' },
  { name: 'Služby', path: '/sluzby' },
  { name: 'Ceník', path: '/cenik' },
  { name: 'Kontakt', path: '/kontakt' }
]

// Funkce pro kontrolu aktivní položky
const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  
  // Prevent scrolling when menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// Close mobile menu
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close menu on escape key
const handleEscKey = (e) => {
  if (e.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Close menu on resize to desktop
const handleResize = () => {
  if (window.innerWidth >= 768 && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Event listeners
onMounted(() => {
  window.addEventListener('keydown', handleEscKey)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscKey)
  window.removeEventListener('resize', handleResize)
  // Ensure body scroll is enabled when component is unmounted
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Optional: smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Prevent content jumping when scrollbar appears/disappears */
html {
  scrollbar-width: thin;
}

/* Add padding to body to prevent content from being hidden under the fixed header */
body {
  padding-top: 5rem; /* Adjust this value based on your header height */
}
</style>