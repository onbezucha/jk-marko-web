<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hlavička sekce -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 rounded-full bg-blue-50 text-[#009FE1] font-medium text-sm mb-4">NOVINKY A AKTUALITY</span>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Náš blog a novinky
        </h2>
        <div class="w-24 h-1 bg-[#009FE1] mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Přečtěte si nejnovější příspěvky z dění v našem jezdeckém areálu, tipy pro jezdce a zajímavosti ze světa koní.
        </p>
      </div>
      
      <!-- Blog články - Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mb-16">
        <!-- Článek 1 -->
        <article class="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-0 group-hover:opacity-60 z-10 transition-opacity duration-300"></div>
          
          <!-- Badge -->
          <div class="absolute top-4 left-4 z-20">
            <span class="bg-[#009FE1] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full">
              Událost
            </span>
          </div>
          
          <!-- Obrázek -->
          <div class="relative h-64 overflow-hidden">
            <img
              src="https://picsum.photos/id/1040/800/600"
              alt="Letní jezdecký tábor"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <!-- Obsah -->
          <div class="p-6 relative">
            <!-- Datum a autor -->
            <div class="flex items-center mb-4 text-sm text-gray-500">
              <span class="inline-flex items-center">
                <IconRigidCalendar class="h-4 w-4 mr-2 text-[#009FE1]" />
                <span>15. června 2025</span>
              </span>
              <span class="mx-2">•</span>
              <span class="inline-flex items-center">
                <IconRigidUser class="h-4 w-4 mr-2 text-[#009FE1]" />
                <span>Jan Novák</span>
              </span>
            </div>
            
            <!-- Nadpis článku -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#009FE1] transition-colors">
              <a href="/blog/letni-tabor-2025" class="before:absolute before:inset-0 before:z-30">
                Letní jezdecký tábor 2025 - Registrace otevřeny
              </a>
            </h3>
            
            <!-- Text článku -->
            <p class="text-gray-600 mb-5 line-clamp-3">
              Otevíráme registrace na letní jezdecký tábor pro děti a mládež. V tomto roce jsme připravili bohatý program včetně výuky jízdy na koni, péče o koně, teoretických lekcí a mnoha zábavných aktivit. Tábor je vhodný pro začátečníky i pokročilé.
            </p>
            
            <!-- Tlačítko -->
            <div class="flex items-center justify-between mt-auto">
              <a 
                href="/blog/letni-tabor-2025" 
                class="group inline-flex items-center font-medium text-[#009FE1]"
              >
                Přečíst více
                <span class="inline-block ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  <IconRigidArrowRight class="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </article>
        
        <!-- Článek 2 -->
        <article class="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-0 group-hover:opacity-60 z-10 transition-opacity duration-300"></div>
          
          <!-- Badge -->
          <div class="absolute top-4 left-4 z-20">
            <span class="bg-[#009FE1] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full">
              Závody
            </span>
          </div>
          
          <!-- Obrázek -->
          <div class="relative h-64 overflow-hidden">
            <img
              src="https://picsum.photos/id/1059/800/600"
              alt="Jarní drezurní závody"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <!-- Obsah -->
          <div class="p-6 relative">
            <!-- Datum a autor -->
            <div class="flex items-center mb-4 text-sm text-gray-500">
              <span class="inline-flex items-center">
                <IconRigidCalendar class="h-4 w-4 mr-2 text-[#009FE1]" />
                <span>18. dubna 2025</span>
              </span>
              <span class="mx-2">•</span>
              <span class="inline-flex items-center">
                <IconRigidUser class="h-4 w-4 mr-2 text-[#009FE1]" />
                <span>Petra Malá</span>
              </span>
            </div>
            
            <!-- Nadpis článku -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#009FE1] transition-colors">
              <a href="/blog/jarni-drezurni-zavody" class="before:absolute before:inset-0 before:z-30">
                Blíží se jarní drezurní závody v JK Marko
              </a>
            </h3>
            
            <!-- Text článku -->
            <p class="text-gray-600 mb-5 line-clamp-3">
              Jako každý rok i letos pořádáme tradiční jarní drezurní závody. Závody jsou otevřeny pro všechny věkové kategorie od dětí po dospělé a budou zahrnovat různé úrovně obtížnosti. Přihlášky závodníků jsou již otevřeny a uzavíráme je 10. dubna.
            </p>
            
            <!-- Tlačítko -->
            <div class="flex items-center justify-between mt-auto">
              <a 
                href="/blog/jarni-drezurni-zavody" 
                class="group inline-flex items-center font-medium text-[#009FE1]"
              >
                Přečíst více
                <span class="inline-block ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  <IconRigidArrowRight class="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </article>
        
        <!-- Článek 3 -->
        <article class="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-0 group-hover:opacity-60 z-10 transition-opacity duration-300"></div>
          
          <!-- Badge -->
          <div class="absolute top-4 left-4 z-20">
            <span class="bg-[#009FE1] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full">
              Novinky
            </span>
          </div>
          
          <!-- Obrázek -->
          <div class="relative h-64 overflow-hidden">
            <img
              src="https://picsum.photos/id/1060/800/600"
              alt="Nové vybavení"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <!-- Obsah -->
          <div class="p-6 relative">
            <!-- Datum a autor -->
            <div class="flex items-center mb-4 text-sm text-gray-500">
              <span class="inline-flex items-center">
                <IconRigidCalendar class="h-4 w-4 mr-2 text-[#009FE1]" />
                <span>2. března 2025</span>
              </span>
              <span class="mx-2">•</span>
              <span class="inline-flex items-center">
                <IconRigidUser class="h-4 w-4 mr-2 text-[#009FE1]" />
                <span>Martin Svoboda</span>
              </span>
            </div>
            
            <!-- Nadpis článku -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#009FE1] transition-colors">
              <a href="/blog/nove-vybaveni-arealu" class="before:absolute before:inset-0 before:z-30">
                Modernizace vybavení areálu dokončena
              </a>
            </h3>
            
            <!-- Text článku -->
            <p class="text-gray-600 mb-5 line-clamp-3">
              S radostí oznamujeme, že jsme dokončili rozsáhlou modernizaci vybavení jízdárny a ustájení. Nové překážky, povrch jízdárny a vybavení stájí přispějí k ještě lepším podmínkám pro koně i jezdce. Přijďte si vyzkoušet nové prostředí!
            </p>
            
            <!-- Tlačítko -->
            <div class="flex items-center justify-between mt-auto">
              <a 
                href="/blog/nove-vybaveni-arealu" 
                class="group inline-flex items-center font-medium text-[#009FE1]"
              >
                Přečíst více
                <span class="inline-block ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  <IconRigidArrowRight class="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>
      
      <!-- Tlačítko pro všechny články -->
      <div class="text-center">
        <a 
          href="/blog" 
          class="relative inline-flex items-center justify-center bg-[#009FE1] hover:bg-black text-white py-3.5 px-8 rounded-lg font-medium overflow-hidden transform hover:-translate-y-1 transition duration-300 group shadow-md"
        >
          <span class="relative z-10 flex items-center">
            Všechny články
            <span class="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              <IconRigidArrowRight class="h-5 w-5" />
            </span>
          </span>
          <span class="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Alternativně můžete použít vlastní implementaci ikon:
const IconRigidCalendar = defineComponent({
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: this.$attrs.class,
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
      })
    ])
  }
})

const IconRigidUser = defineComponent({
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: this.$attrs.class,
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
      })
    ])
  }
})

const IconRigidArrowRight = defineComponent({
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: this.$attrs.class,
      viewBox: '0 0 20 20',
      fill: 'currentColor'
    }, [
      h('path', {
        'fill-rule': 'evenodd',
        d: 'M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z',
        'clip-rule': 'evenodd'
      })
    ])
  }
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>