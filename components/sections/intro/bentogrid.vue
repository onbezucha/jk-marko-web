<template>
    <section class="py-12 md:py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <h2 class="text-2xl md:text-3xl font-bold mb-3 text-black">
            Tréninky koní
          </h2>
          <div class="w-16 h-1 bg-[#009FE1] mx-auto mb-4"></div>
          <p class="text-base text-gray-700">
            Nabízíme profesionální tréninky pro vaše koně s individuálním přístupem.
          </p>
        </div>
  
        <!-- BentoGrid Layout - 5 karet -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <!-- Feature Box 1 - Individuální tréninky -->
          <div class="col-span-1 lg:col-span-2 bg-black group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
            <img 
              src="https://picsum.photos/800/400" 
              alt="Individuální trénink" 
              class="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
            />
            <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 text-white">
              <div class="flex items-center mb-3">
                <div class="bg-[#009FE1] p-2 rounded-lg">
                  <Icon name="ph:horse" class="text-white text-lg" />
                </div>
              </div>
              <h3 class="text-xl md:text-2xl font-bold mb-2">Individuální tréninky</h3>
              <p class="text-white/80 mb-3 text-sm md:text-base">
                Komplexní tréninkový program přizpůsobený potřebám vašeho koně.
              </p>
              <NuxtLink to="/treninky" class="inline-flex items-center text-[#009FE1] font-semibold group-hover:underline text-sm">
                Zjistit více
                <Icon name="uil:arrow-right" class="ml-1" />
              </NuxtLink>
            </div>
          </div>
  
          <!-- Feature Box 2 - Westernový trénink -->
          <div class="col-span-1 bg-white border border-gray-200 group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="p-4 flex flex-col h-full">
              <div class="flex items-center mb-3">
                <div class="bg-[#009FE1]/10 p-2 rounded-lg">
                  <Icon name="ph:hat-cowboy" class="text-[#009FE1] text-lg" />
                </div>
              </div>
              <h3 class="text-lg font-bold mb-2 text-black">Westernový trénink</h3>
              <p class="text-gray-600 mb-3 flex-grow text-sm">Specializovaný trénink pro westernové disciplíny.</p>
              <NuxtLink to="/western" class="inline-flex items-center text-[#009FE1] font-semibold group-hover:underline text-sm">
                Více informací
                <Icon name="uil:arrow-right" class="ml-1" />
              </NuxtLink>
            </div>
          </div>
          
          <!-- Feature Box 3 - Drezúrní výcvik -->
          <div class="col-span-1 bg-gradient-to-br from-[#009FE1] to-[#007bb0] group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="p-4 flex flex-col h-full">
              <div class="flex items-center mb-3">
                <div class="bg-white/20 p-2 rounded-lg">
                  <Icon name="ph:medal" class="text-white text-lg" />
                </div>
              </div>
              <h3 class="text-lg font-bold mb-2 text-white">Drezúrní výcvik</h3>
              <p class="text-white/90 mb-3 flex-grow text-sm">Pokročilé drezúrní techniky pro zlepšení rovnováhy.</p>
              <NuxtLink to="/drezura" class="inline-flex items-center text-white font-semibold group-hover:underline text-sm">
                Zjistit více
                <Icon name="uil:arrow-right" class="ml-1" />
              </NuxtLink>
            </div>
          </div>
          
          <!-- Feature Box 4 - Skokový trénink -->
          <div class="col-span-1 bg-white border border-gray-200 group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="p-4 flex flex-col h-full">
              <div class="flex items-center mb-3">
                <div class="bg-[#009FE1]/10 p-2 rounded-lg">
                  <Icon name="ph:trophy" class="text-[#009FE1] text-lg" />
                </div>
              </div>
              <h3 class="text-lg font-bold mb-2 text-black">Skokový trénink</h3>
              <p class="text-gray-600 mb-3 flex-grow text-sm">Trénink skoků přes překážky pro koně všech úrovní.</p>
              <NuxtLink to="/skoky" class="inline-flex items-center text-[#009FE1] font-semibold group-hover:underline text-sm">
                Zobrazit detaily
                <Icon name="uil:arrow-right" class="ml-1" />
              </NuxtLink>
            </div>
          </div>
          
          <!-- Feature Box 5 - Rozvrh tréninků -->
          <div class="col-span-1 bg-gradient-to-r from-gray-50 to-white border border-gray-200 group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="p-4 flex flex-col h-full">
              <div class="flex items-center mb-3">
                <div class="bg-[#009FE1]/10 p-2 rounded-lg">
                  <Icon name="ph:calendar" class="text-[#009FE1] text-lg" />
                </div>
              </div>
              <h3 class="text-lg font-bold mb-2 text-black">Rozvrh tréninků</h3>
              <p class="text-gray-600 mb-3 flex-grow text-sm">Prohlédněte si náš aktuální rozvrh tréninků.</p>
              <NuxtLink to="/rozvrh" class="inline-flex items-center text-[#009FE1] font-semibold group-hover:underline text-sm">
                Zobrazit rozvrh
                <Icon name="uil:arrow-right" class="ml-1" />
              </NuxtLink>
            </div>
          </div>
        </div>
  
        <!-- CTA Button -->
        <div class="mt-8 text-center">
          <NuxtLink 
            to="/kontakt" 
            class="inline-flex items-center justify-center px-6 py-3 bg-[#009FE1] text-white font-semibold rounded-full shadow-md hover:bg-[#0087c1] transition-colors duration-300 transform hover:scale-105 text-sm"
          >
            Rezervovat trénink
            <Icon name="uil:arrow-right" class="ml-1" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>