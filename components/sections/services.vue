<template>
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Naše služby
          </h2>
          <div class="w-24 h-1 bg-[#009FE1] mx-auto mb-6"></div>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            V jezdeckém areálu JK Marko poskytujeme komplexní služby pro jezdce a jejich koně. Naším cílem je vytvořit profesionální a přátelské prostředí pro všechny milovníky koní.
          </p>
        </div>
  
        <!-- Hlavní služby s ikonami -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <!-- Služba 1: Výcvik jezdců -->
          <div class="bg-gray-50 rounded-lg p-8 shadow-md transition duration-300 hover:shadow-lg">
            <div class="bg-[#009FE1] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#009FE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 text-center mb-4">Výcvik jezdců</h3>
            <p class="text-gray-600 text-center mb-6">
              Nabízíme individuální i skupinové lekce jezdectví pod vedením kvalifikovaných trenérů pro začátečníky i pokročilé jezdce.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-[#009FE1] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Lekce pro začátečníky i pokročilé</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-[#009FE1] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Individuální přístup</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-[#009FE1] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Profesionální trenéři</span>
              </li>
            </ul>
            <div class="text-center">
              <a href="/sluzby#vycvik-jezdcu" class="text-[#009FE1] hover:text-black font-medium transition-colors">
                Více informací
              </a>
            </div>
          </div>
  
          <!-- Služba 2: Ustájení koní -->
          <div class="bg-gray-50 rounded-lg p-8 shadow-md transition duration-300 hover:shadow-lg">
            <div class="bg-[#009FE1] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#009FE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 text-center mb-4">Ustájení koní</h3>
            <p class="text-gray-600 text-center mb-6">
              Poskytujeme kvalitní ustájení v prostorných boxech s celodenní péčí o koně, pravidelným krmením a přístupem do výběhů.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-[#009FE1] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Prostorné boxy s napáječkami</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-[#009FE1] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Pravidelné krmení a péče</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-[#009FE1] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Přístup do výběhů a jízdárny</span>
              </li>
            </ul>
            <div class="text-center">
              <a href="/sluzby#ustajeni-koni" class="text-[#009FE1] hover:text-black font-medium transition-colors">
                Více informací
              </a>
            </div>
          </div>
  
          <!-- Služba 3: Jezdecká škola -->
          <div class="bg-gray-50 rounded-lg p-8 shadow-md transition duration-300 hover:shadow-lg">
            <div class="bg-[#009FE1] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#009FE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 text-center mb-4">Jezdecká škola</h3>
            <p class="text-gray-600 text-center mb-6">
              Jezdecká škola pro děti i dospělé s možností výuky základů jezdectví až po pokročilé techniky pod vedením zkušených trenérů.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-[#009FE1] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Kurzy pro začátečníky i pokročilé</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-[#009FE1] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Dětské jezdecké skupiny</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-[#009FE1] mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Teoretická i praktická výuka</span>
              </li>
            </ul>
            <div class="text-center">
              <a href="/sluzby#jezdecka-skola" class="text-[#009FE1] hover:text-black font-medium transition-colors">
                Více informací
              </a>
            </div>
          </div>
        </div>
  
        <!-- Další služby v kompaktnějším formátu -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <!-- Služba 4: Pronájem jízdárny -->
          <div class="bg-gray-50 rounded-lg p-6 shadow-md flex items-start">
            <div class="bg-[#009FE1] bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#009FE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Pronájem jízdárny</h3>
              <p class="text-gray-600 mb-3">
                Možnost pronájmu kryté i venkovní jízdárny pro vlastní trénink, soustředění nebo závody.
              </p>
              <a href="/sluzby#pronajem-jizdarny" class="text-[#009FE1] hover:text-black font-medium transition-colors text-sm">
                Více informací
              </a>
            </div>
          </div>
  
          <!-- Služba 5: Hipoterapie -->
          <div class="bg-gray-50 rounded-lg p-6 shadow-md flex items-start">
            <div class="bg-[#009FE1] bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#009FE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Hipoterapie</h3>
              <p class="text-gray-600 mb-3">
                Léčebná metoda využívající koně jako terapeutický prostředek pro osoby s různými druhy postižení nebo znevýhodnění.
              </p>
              <a href="/sluzby#hipoterapie" class="text-[#009FE1] hover:text-black font-medium transition-colors text-sm">
                Více informací
              </a>
            </div>
          </div>
  
          <!-- Služba 6: Přeprava koní -->
          <div class="bg-gray-50 rounded-lg p-6 shadow-md flex items-start">
            <div class="bg-[#009FE1] bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#009FE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Přeprava koní</h3>
              <p class="text-gray-600 mb-3">
                Zajišťujeme bezpečnou přepravu koní na závody, veterinární kliniky nebo při přesunu do jiného ustájení.
              </p>
              <a href="/sluzby#preprava-koni" class="text-[#009FE1] hover:text-black font-medium transition-colors text-sm">
                Více informací
              </a>
            </div>
          </div>
  
          <!-- Služba 7: Půjčovna jezdeckého vybavení -->
          <div class="bg-gray-50 rounded-lg p-6 shadow-md flex items-start">
            <div class="bg-[#009FE1] bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#009FE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Půjčovna vybavení</h3>
              <p class="text-gray-600 mb-3">
                Nabízíme možnost zapůjčení jezdeckého vybavení včetně přileb, chráničů a dalších nezbytných pomůcek.
              </p>
              <a href="/sluzby#pujcovna-vybaveni" class="text-[#009FE1] hover:text-black font-medium transition-colors text-sm">
                Více informací
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ServicesSection'
  }
  </script>