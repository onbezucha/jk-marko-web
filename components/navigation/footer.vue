<template>
    <footer class="bg-black text-white pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Horní část patičky -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <!-- Logo a popis -->
          <div class="col-span-1 md:col-span-2 lg:col-span-1">
            <div class="flex items-center mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/2199/2199939.png" alt="JK Marko Logo" class="h-10 w-auto bg-white p-1 rounded-full" />
              <span class="ml-3 text-xl font-bold text-white">JK Marko</span>
            </div>
            <p class="text-gray-400 mb-4">
              Jezdecký areál JK Marko nabízí profesionální zázemí pro jezdce i koně v příjemném prostředí.
            </p>
            <div class="flex space-x-4 mb-8">
              <a href="#" class="text-gray-400 hover:text-[#009FE1] transition-colors">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-[#009FE1] transition-colors">
                <span class="sr-only">Instagram</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-[#009FE1] transition-colors">
                <span class="sr-only">YouTube</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
  
          <!-- Odkazy 1 -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-[#009FE1]">Rychlé odkazy</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors">Úvod</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/o-nas" class="text-gray-400 hover:text-white transition-colors">O nás</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/sluzby" class="text-gray-400 hover:text-white transition-colors">Služby</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/akce-zavody" class="text-gray-400 hover:text-white transition-colors">Akce a závody</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cenik" class="text-gray-400 hover:text-white transition-colors">Ceník</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/kontakt" class="text-gray-400 hover:text-white transition-colors">Kontakt</NuxtLink>
              </li>
            </ul>
          </div>
  
          <!-- Odkazy 2 -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-[#009FE1]">Služby</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/sluzby#vycvik-jezdcu" class="text-gray-400 hover:text-white transition-colors">Výcvik jezdců/koní</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/sluzby#ustajeni-koni" class="text-gray-400 hover:text-white transition-colors">Ustájení koní</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/sluzby#jezdecka-skola" class="text-gray-400 hover:text-white transition-colors">Doprava a doprovod na závodech</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/sluzby#pronajem-jizdarny" class="text-gray-400 hover:text-white transition-colors">Pronájem jízdárny</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/sluzby#hipoterapie" class="text-gray-400 hover:text-white transition-colors">Doplňkové služby</NuxtLink>
              </li>
            </ul>
          </div>
  
          <!-- Kontakt -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-[#009FE1]">Kontakt</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-[#009FE1] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-gray-400">
                  JK Marko<br />
                  Doubek ev. č. 12<br />
                  251 01 Doubek-Říčany u Prahy
                </span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-[#009FE1] mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="text-gray-400">+420 777 213 109</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-[#009FE1] mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@jkmarko.cz" class="text-gray-400 hover:text-white transition-colors">jkmarko@seznam.cz</a>
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
            <div class="flex space-x-6">
              <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Ochrana osobních údajů</a>
              <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Obchodní podmínky</a>
              <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Mapa stránek</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter'
  }
  </script>