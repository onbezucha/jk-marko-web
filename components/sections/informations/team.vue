<template>
     <!-- Náš tým -->
     <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-black">
            Náš <span class="text-[#009FE1]">tým</span>
          </h2>
          <div class="w-16 h-1 bg-[#009FE1] mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-2xl mx-auto">
            Profesionální tým s dlouholetými zkušenostmi a láskou ke koním.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <!-- Člen týmu 1 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg group">
            <div class="relative overflow-hidden h-80">
              <img 
                src="https://picsum.photos/600/800" 
                alt="František Marek" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 class="text-white font-bold text-lg">František Marek</h4>
                  <p class="text-white/80">Zakladatel a hlavní trenér</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">František Marek</h3>
              <p class="text-[#009FE1] font-medium mb-4">Zakladatel a hlavní trenér</p>
              <p class="text-gray-600">
                Bývalý úspěšný jezdec s mnohaletými zkušenostmi v parkurovém i drezurním ježdění. Specializuje se na výcvik mladých koní a pokročilých jezdců.
              </p>
            </div>
          </div>

          <!-- Člen týmu 2 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg group">
            <div class="relative overflow-hidden h-80">
              <img 
                src="https://picsum.photos/600/801" 
                alt="Jana Marková" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 class="text-white font-bold text-lg">Jana Marková</h4>
                  <p class="text-white/80">Hlavní cvičitelka</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">Jana Marková</h3>
              <p class="text-[#009FE1] font-medium mb-4">Hlavní cvičitelka</p>
              <p class="text-gray-600">
                Specializuje se na výcvik začátečníků a dětí. S její trpělivostí a laskavým přístupem se naučí jezdit i ti nejmenší jezdci.
              </p>
            </div>
          </div>

          <!-- Člen týmu 3 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg group">
            <div class="relative overflow-hidden h-80">
              <img 
                src="https://picsum.photos/600/802" 
                alt="Petr Novák" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 class="text-white font-bold text-lg">Petr Novák</h4>
                  <p class="text-white/80">Trenér parkuru</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">Petr Novák</h3>
              <p class="text-[#009FE1] font-medium mb-4">Trenér parkuru</p>
              <p class="text-gray-600">
                Bývalý reprezentant v parkurovém skákání. Specializuje se na přípravu jezdců a koní na parkurové závody všech úrovní.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

   <!-- Animace pro fade-in efekt -->
   <style>
   @keyframes fadeInUp {
     from {
       opacity: 0;
       transform: translateY(20px);
     }
     to {
       opacity: 1;
       transform: translateY(0);
     }
   }
   
   .animate-fade-in-up {
     animation: fadeInUp 0.5s ease-out forwards;
   }
   
   .animation-delay-200 {
     animation-delay: 0.2s;
   }
 </style>