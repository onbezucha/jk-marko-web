<template>
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jezdecký areál JK Marko
          </h2>
          <div class="w-24 h-1 bg-[#009FE1] mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Obrázek areálu -->
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://dummyimage.com/800x600/009FE1/ffffff&text=O+Našem+Areálu" 
              alt="Jezdecký areál JK Marko" 
              class="w-full h-auto"
            />
          </div>
          
          <!-- Popis areálu -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">
              Vítejte v našem areálu
            </h3>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              JK Marko je moderní jezdecký areál nabízející komplexní služby pro jezdce všech úrovní i jejich koně. Nacházíme se v klidné lokalitě s krásnou přírodou, která poskytuje ideální podmínky pro jezdecký sport.
            </p>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Náš areál disponuje profesionálním zázemím včetně kryté jízdárny, venkovního kolbiště, kvalitního ustájení a zkušeného týmu trenérů a ošetřovatelů.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-[#009FE1] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#009FE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-800">Moderní zázemí</span>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-[#009FE1] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#009FE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-800">Profesionální tým</span>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-[#009FE1] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#009FE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-800">Krytá jízdárna</span>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-[#009FE1] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#009FE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-800">Kvalitní ustájení</span>
              </div>
            </div>
            <NuxtLink 
              to="/o-nas" 
              class="inline-flex items-center font-medium text-[#009FE1] hover:text-black transition duration-200"
            >
              Více o nás
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Sekce představení areálu nepotřebuje další logiku
  </script>