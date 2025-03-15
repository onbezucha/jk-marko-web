<template>
    <header class="bg-black shadow-md">
      <!-- Desktop & Tablet Navigation -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
          <!-- Logo a název -->
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/2199/2199939.png" alt="JK Marko Logo" class="h-12 w-auto bg-white p-1 rounded-full" />
              <span class="ml-3 text-2xl font-bold text-white">JK Marko</span>
            </NuxtLink>
          </div>
          
          <!-- Hlavní navigace - desktop -->
          <nav class="hidden md:flex items-center space-x-6">
            <NuxtLink
              v-for="(item, index) in navItems" 
              :key="index"
              :to="item.path"
              class="py-2 px-3 text-white hover:text-[#009FE1] transition duration-200 font-medium relative group"
              :class="{ 'text-[#009FE1]': isActive(item.path) }"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <a :href="href" @click="navigate" class="block">
                {{ item.name }}
                <span 
                  class="absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-200 origin-left" 
                  :class="[
                    isExactActive ? 'bg-[#009FE1] scale-x-100' : 'bg-[#009FE1] scale-x-0 group-hover:scale-x-100'
                  ]"
                ></span>
              </a>
            </NuxtLink>
          </nav>
          
          <!-- Mobilní menu tlačítko -->
          <div class="md:hidden flex items-center">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen" 
              class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#009FE1]"
            >
              <span class="sr-only">Otevřít hlavní menu</span>
              <svg 
                class="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path 
                  v-if="!mobileMenuOpen" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
                <path 
                  v-else 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobilní menu -->
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden bg-gray-900"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="(item, index) in navItems" 
            :key="index"
            :to="item.path"
            class="block px-3 py-2 text-base font-medium text-white hover:text-[#009FE1] relative"
            :class="{ 'text-[#009FE1] border-l-4 border-[#009FE1] pl-2': isActive(item.path) }"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </header>
  </template>

  <script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const mobileMenuOpen = ref(false)
  
  // Seznam položek navigace
  const navItems = [
    { name: 'Úvod', path: '/' },
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
  </script>
  
  <style scoped>
  /* Případné dodatečné styly lze přidat zde */
  </style>