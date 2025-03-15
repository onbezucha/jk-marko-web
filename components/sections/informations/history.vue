<template>
        <!-- Hlavní obsah -->
        <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-black">
              Naše <span class="text-[#009FE1]">historie</span>
            </h2>
            <div class="w-16 h-1 bg-[#009FE1] mb-8"></div>
            <p class="text-gray-800 mb-6 leading-relaxed">
              Jezdecký klub Marko působí na českém jezdeckém poli již více než 20 let. Zakladatelem klubu je pan František Marek, bývalý úspěšný jezdec a trenér, který spolu se svojí rodinou vybudoval tento moderní areál ve Velkých Němčicích.
            </p>
            <p class="text-gray-800 mb-6 leading-relaxed">
              Za dobu svého působení jsme vychovali mnoho úspěšných jezdců a koní, kteří dosahují vynikajících výsledků na domácích i mezinárodních závodech.
            </p>
            <div class="flex items-center space-x-4 mt-8">
              <div class="w-12 h-12 rounded-full bg-[#009FE1] flex items-center justify-center text-white">
                <Icon name="ph:medal" size="24" />
              </div>
              <div>
                <h4 class="font-bold text-lg">Desítky ocenění</h4>
                <p class="text-gray-600">Na domácích i mezinárodních soutěžích</p>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2 relative">
            <img 
              src="https://picsum.photos/800/600" 
              alt="Historie jezdeckého areálu" 
              class="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
            <div class="absolute -bottom-6 -left-6 w-40 h-40 rounded-lg bg-[#009FE1] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
</template>