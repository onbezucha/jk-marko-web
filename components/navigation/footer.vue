<template>
  <footer class="bg-gradient-to-b from-black to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
    <!-- Dekorativní elementy -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#009FE1] to-transparent opacity-70"></div>
    <div class="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#009FE1] opacity-5 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#009FE1] opacity-5 translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Horní část patičky -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
        <!-- Logo a popis -->
        <div class="col-span-1 md:col-span-2 lg:col-span-4">
          <div class="flex items-center mb-5 group">
            <div class="bg-white p-2 rounded-xl shadow-md transform transition-transform group-hover:scale-105">
              <img src="https://cdn-icons-png.flaticon.com/512/2199/2199939.png" alt="JK Marko Logo" class="h-10 w-auto" />
            </div>
            <div class="ml-3">
              <span class="text-2xl font-bold text-white tracking-tight">JK Marko</span>
              <div class="h-0.5 w-0 group-hover:w-full bg-[#009FE1] transition-all duration-300 mt-1"></div>
            </div>
          </div>
          <p class="text-gray-400 mb-5 leading-relaxed">
            Jezdecký areál JK Marko nabízí profesionální zázemí pro jezdce i koně v příjemném prostředí obklopeném přírodou. Specializujeme se na výcvik, ustájení a komplexní služby v jezdeckém sportu.
          </p>
          <div class="flex space-x-4 mb-8">
            <a href="#" class="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#009FE1] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#009FE1]/20">
              <span class="sr-only">Facebook</span>
              <Icon name="mdi:facebook" class="h-5 w-5" />
            </a>
            <a href="#" class="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#009FE1] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#009FE1]/20">
              <span class="sr-only">Instagram</span>
              <Icon name="mdi:instagram" class="h-5 w-5" />
            </a>
            <a href="#" class="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#009FE1] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#009FE1]/20">
              <span class="sr-only">YouTube</span>
              <Icon name="mdi:youtube" class="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <!-- Mezera -->
        <div class="hidden lg:block lg:col-span-1"></div>

        <!-- Rychlé odkazy -->
        <div class="lg:col-span-2">
          <h3 class="text-lg font-semibold mb-4 text-white relative inline-block pb-2">
            Rychlé odkazy
            <span class="absolute bottom-0 left-0 w-12 h-0.5 bg-[#009FE1]"></span>
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-[#009FE1] transition-colors flex items-center group">
                <span class="w-0 h-0.5 bg-[#009FE1] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Úvod
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/o-nas" class="text-gray-400 hover:text-[#009FE1] transition-colors flex items-center group">
                <span class="w-0 h-0.5 bg-[#009FE1] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                O nás
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sluzby" class="text-gray-400 hover:text-[#009FE1] transition-colors flex items-center group">
                <span class="w-0 h-0.5 bg-[#009FE1] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Služby
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/akce-zavody" class="text-gray-400 hover:text-[#009FE1] transition-colors flex items-center group">
                <span class="w-0 h-0.5 bg-[#009FE1] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Akce a závody
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cenik" class="text-gray-400 hover:text-[#009FE1] transition-colors flex items-center group">
                <span class="w-0 h-0.5 bg-[#009FE1] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Ceník
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/kontakt" class="text-gray-400 hover:text-[#009FE1] transition-colors flex items-center group">
                <span class="w-0 h-0.5 bg-[#009FE1] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Kontakt
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Služby -->
        <div class="lg:col-span-2">
          <h3 class="text-lg font-semibold mb-4 text-white relative inline-block pb-2">
            Služby
            <span class="absolute bottom-0 left-0 w-12 h-0.5 bg-[#009FE1]"></span>
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/sluzby#vycvik-jezdcu" class="text-gray-400 hover:text-[#009FE1] transition-colors flex items-center group">
                <span class="w-0 h-0.5 bg-[#009FE1] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Výcvik jezdců/koní
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sluzby#ustajeni-koni" class="text-gray-400 hover:text-[#009FE1] transition-colors flex items-center group">
                <span class="w-0 h-0.5 bg-[#009FE1] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Ustájení koní
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sluzby#doprava" class="text-gray-400 hover:text-[#009FE1] transition-colors flex items-center group">
                <span class="w-0 h-0.5 bg-[#009FE1] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Doprava na závody
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sluzby#pronajem-jizdarny" class="text-gray-400 hover:text-[#009FE1] transition-colors flex items-center group">
                <span class="w-0 h-0.5 bg-[#009FE1] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Pronájem jízdárny
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sluzby#doplnkove" class="text-gray-400 hover:text-[#009FE1] transition-colors flex items-center group">
                <span class="w-0 h-0.5 bg-[#009FE1] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Doplňkové služby
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Kontakt -->
        <div class="lg:col-span-3">
          <h3 class="text-lg font-semibold mb-4 text-white relative inline-block pb-2">
            Kontakt
            <span class="absolute bottom-0 left-0 w-12 h-0.5 bg-[#009FE1]"></span>
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start group">
              <div class="bg-gray-800 p-2 rounded-lg mr-3 text-[#009FE1] group-hover:bg-[#009FE1] group-hover:text-white transition-all duration-300 mt-1">
                <Icon name="mdi:map-marker" class="h-5 w-5" />
              </div>
              <div>
                <span class="text-gray-300 font-medium block mb-1">Adresa</span>
                <address class="text-gray-400 not-italic">
                  JK Marko<br />
                  Doubek ev. č. 12<br />
                  251 01 Doubek-Říčany u Prahy
                </address>
              </div>
            </li>
            <li class="flex items-center group">
              <div class="bg-gray-800 p-2 rounded-lg mr-3 text-[#009FE1] group-hover:bg-[#009FE1] group-hover:text-white transition-all duration-300">
                <Icon name="mdi:phone" class="h-5 w-5" />
              </div>
              <div>
                <span class="text-gray-300 font-medium block mb-1">Telefon</span>
                <a href="tel:+420777213109" class="text-gray-400 hover:text-[#009FE1] transition-colors">+420 777 213 109</a>
              </div>
            </li>
            <li class="flex items-center group">
              <div class="bg-gray-800 p-2 rounded-lg mr-3 text-[#009FE1] group-hover:bg-[#009FE1] group-hover:text-white transition-all duration-300">
                <Icon name="mdi:email" class="h-5 w-5" />
              </div>
              <div>
                <span class="text-gray-300 font-medium block mb-1">Email</span>
                <a href="mailto:jkmarko@seznam.cz" class="text-gray-400 hover:text-[#009FE1] transition-colors">jkmarko@seznam.cz</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Dolní část patičky -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {{ new Date().getFullYear() }} JK Marko. Všechna práva vyhrazena.
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Ochrana osobních údajů</a>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Obchodní podmínky</a>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Mapa stránek</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Komponenta footeru pro JK Marko
</script>