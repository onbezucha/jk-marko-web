<template>
    <!-- Naše zázemí -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-black">
            Naše <span class="text-[#009FE1]">zázemí</span>
          </h2>
          <div class="w-16 h-1 bg-[#009FE1] mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-2xl mx-auto">
            Disponujeme moderním areálem, který poskytuje veškerý komfort pro koně i jezdce.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="relative group overflow-hidden rounded-lg">
            <img 
              src="https://picsum.photos/800/500" 
              alt="Krytá jízdárna" 
              class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div class="p-6">
                <h3 class="text-xl text-white font-bold mb-2">Krytá jízdárna</h3>
                <p class="text-white/80">
                  Krytá jízdárna o rozměrech 25 x 65 m s kvalitním povrchem umožňuje trénink za každého počasí.
                </p>
              </div>
            </div>
          </div>

          <div class="relative group overflow-hidden rounded-lg">
            <img 
              src="https://picsum.photos/800/501" 
              alt="Venkovní kolbiště" 
              class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div class="p-6">
                <h3 class="text-xl text-white font-bold mb-2">Venkovní kolbiště</h3>
                <p class="text-white/80">
                  Venkovní kolbiště 40 x 80 m s profesionálním povrchem vhodným pro parkurové i drezurní tréninky.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex flex-col items-center text-center p-4">
              <div class="w-16 h-16 bg-[#009FE1] rounded-full flex items-center justify-center mb-4">
                <Icon name="ph:horse-duotone" class="text-white" size="32" />
              </div>
              <h4 class="text-lg font-bold mb-2">30+ koní</h4>
              <p class="text-gray-600">Ustájených v našem areálu</p>
            </div>
            
            <div class="flex flex-col items-center text-center p-4">
              <div class="w-16 h-16 bg-[#009FE1] rounded-full flex items-center justify-center mb-4">
                <Icon name="ph:users-duotone" class="text-white" size="32" />
              </div>
              <h4 class="text-lg font-bold mb-2">50+ členů</h4>
              <p class="text-gray-600">Aktivních jezdců v našem klubu</p>
            </div>
            
            <div class="flex flex-col items-center text-center p-4">
              <div class="w-16 h-16 bg-[#009FE1] rounded-full flex items-center justify-center mb-4">
                <Icon name="ph:calendar-duotone" class="text-white" size="32" />
              </div>
              <h4 class="text-lg font-bold mb-2">20+ let</h4>
              <p class="text-gray-600">Zkušeností v jezdeckém sportu</p>
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