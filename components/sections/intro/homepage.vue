<template>
  <section class="intro-section py-20 md:py-28 bg-gray-50 relative overflow-hidden">
    <!-- Dekorativní prvky pozadí -->
    <div class="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
    <div class="absolute -top-16 -right-16 w-64 h-64 bg-[#009FE1]/5 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-24 -left-16 w-72 h-72 bg-[#009FE1]/5 rounded-full blur-3xl"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Nadpis sekce s moderním podtržením -->
      <div class="text-center mb-16 md:mb-24">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
          Jezdecký areál <span class="text-[#009FE1]">JK Marko</span>
        </h2>
        <div class="relative w-24 h-1.5 mx-auto">
          <div class="absolute inset-0 bg-[#009FE1] rounded-full"></div>
          <div class="absolute inset-0 bg-[#009FE1] rounded-full animate-pulse opacity-50 blur-sm"></div>
        </div>
      </div>
      
      <!-- Hlavní obsah s obrázkem a textem -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <!-- Obrázek areálu s moderním zpracováním - zvětšený -->
        <div class="md:col-span-6 relative group">
          <div class="relative z-10 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[#009FE1]/20 group-hover:scale-[1.01] transform-gpu h-full">
            <img 
              src="https://picsum.photos/id/15/900/800" 
              alt="Jezdecký areál JK Marko v horské krajině" 
              class="w-full h-full object-cover object-center"
            />
            <!-- Překryvný gradient -->
            <div class="absolute inset-0 bg-gradient-to-tr from-[#009FE1]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <!-- Dekorativní prvek za obrázkem -->
          <div class="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-xl border-2 border-[#009FE1]/20"></div>
        </div>
        
        <!-- Textový obsah s moderními prvky -->
        <div class="md:col-span-6">
          <div class="space-y-6">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Vítejte v našem areálu
            </h3>
            
            <p class="text-lg text-gray-700 leading-relaxed">
              JK Marko je <span class="font-medium text-gray-900">moderní jezdecký areál</span> nabízející komplexní služby pro jezdce všech úrovní i jejich koně. Nacházíme se v klidné lokalitě s krásnou přírodou, která poskytuje ideální podmínky pro jezdecký sport.
            </p>
            
            <p class="text-lg text-gray-700 leading-relaxed">
              Náš areál disponuje profesionálním zázemím včetně kryté jízdárny, venkovního kolbiště, kvalitního ustájení a zkušeného týmu trenérů a ošetřovatelů.
            </p>
            
            <!-- Výhody s Nuxt Icons -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
              <div class="flex items-start">
                <div class="shrink-0 mr-4 flex items-center justify-center" style="min-width: 60px; min-height: 60px;">
                  <Icon name="heroicons:building-office" class="w-15 h-15 text-[#009FE1]" style="width: 60px; height: 60px;" />
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-gray-900 mb-1">Moderní zázemí</h4>
                  <p class="text-gray-600">Komfortní prostředí pro jezdce i koně</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="shrink-0 mr-4 flex items-center justify-center" style="min-width: 60px; min-height: 60px;">
                  <Icon name="heroicons:user-group" class="w-15 h-15 text-[#009FE1]" style="width: 60px; height: 60px;" />
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-gray-900 mb-1">Profesionální tým</h4>
                  <p class="text-gray-600">Zkušení trenéři a ošetřovatelé</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="shrink-0 mr-4 flex items-center justify-center" style="min-width: 60px; min-height: 60px;">
                  <Icon name="heroicons:home" class="w-15 h-15 text-[#009FE1]" style="width: 60px; height: 60px;" />
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-gray-900 mb-1">Krytá jízdárna</h4>
                  <p class="text-gray-600">Možnost tréninku za každého počasí</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="shrink-0 mr-4 flex items-center justify-center" style="min-width: 60px; min-height: 60px;">
                  <Icon name="heroicons:shield-check" class="w-15 h-15 text-[#009FE1]" style="width: 60px; height: 60px;" />
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-gray-900 mb-1">Kvalitní ustájení</h4>
                  <p class="text-gray-600">Prostorné boxy a celodenní péče</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 📋 Intro sekce s funkcionalitou pro scroll z hero sekce
// Sekce má CSS třídu "intro-section" pro správné cílení scroll animace z hero sekce
// Využívá Nuxt ikony - ujistěte se, že máte nainstalovaný modul @nuxtjs/icons
</script>

<style>
/* Přidáváme vlastní styly pro ikony, které zajistí jejich správnou velikost */
.icon-large {
  width: 60px !important;
  height: 60px !important;
  min-width: 60px !important;
  min-height: 60px !important;
}
</style>