<template>
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <!-- Nadpis sekce s podtržením v modré barvě -->
        <div class="relative mb-16 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Často kladené otázky</h2>
          <div class="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#009FE1]"></div>
        </div>
        
        <!-- Dvousloupcový layout na větších obrazovkách -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Jednotlivé FAQ položky -->
          <div v-for="(faq, index) in faqs" :key="index" 
               class="border-b border-gray-200 last:border-b-0 lg:last:border-b lg:even:border-b-0 pb-6 mb-6">
            <div 
              @click="toggleFaq(index)" 
              class="flex justify-between items-start cursor-pointer group"
            >
              <h3 class="text-xl font-semibold pr-8 group-hover:text-[#009FE1] transition-colors duration-300">
                {{ faq.question }}
              </h3>
              <div class="relative flex-shrink-0 w-6 h-6">
                <!-- Ikona plus -->
                <div 
                  class="absolute inset-0 transition-transform duration-300" 
                  :class="{ 'rotate-180 opacity-0': faq.isOpen }"
                >
                  <Icon name="ph:plus-bold" class="w-6 h-6 text-[#009FE1]" />
                </div>
                <!-- Ikona minus -->
                <div 
                  class="absolute inset-0 transition-transform duration-300" 
                  :class="{ 'rotate-180 opacity-100': faq.isOpen, 'opacity-0': !faq.isOpen }"
                >
                  <Icon name="ph:minus-bold" class="w-6 h-6 text-[#009FE1]" />
                </div>
              </div>
            </div>
            
            <!-- Animovaná odpověď -->
            <div 
              class="mt-4 overflow-hidden transition-all duration-300 ease-in-out"
              :class="{ 'max-h-96': faq.isOpen, 'max-h-0': !faq.isOpen }"
            >
              <p class="text-gray-600 leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Data pro FAQ sekci
  const faqs = ref([
    {
      question: "Jaké kurzy jízdy na koni nabízíte?",
      answer: "Nabízíme širokou škálu kurzů pro začátečníky i pokročilé jezdce všech věkových kategorií. Pro děti máme speciální programy zaměřené na bezpečné seznámení s koňmi. Pro pokročilé jezdce nabízíme tréninky zaměřené na drezuru, parkur nebo rekreační ježdění v terénu. Všechny kurzy vedou kvalifikovaní instruktoři s dlouholetou praxí.",
      isOpen: false
    },
    {
      question: "Je možné u vás ustájit vlastního koně?",
      answer: "Ano, nabízíme profesionální ustájení s komplexní péčí o vašeho koně. Máme k dispozici prostorné boxy, kvalitní krmivo, pravidelný výběh, jízdárnu i terény v okolí. Součástí služby je každodenní čištění boxů, krmení třikrát denně a pravidelná veterinární péče. Pro více informací o cenách a dostupnosti nás prosím kontaktujte.",
      isOpen: false
    },
    {
      question: "Jak probíhá první hodina jízdy na koni?",
      answer: "První hodina začíná teoretickým úvodem, kde se seznámíte se základy bezpečnosti a komunikace s koněm. Následuje praktická část, kdy se naučíte koně správně čistit, sedlat a uzdit. Samotná jízda probíhá pod vedením instruktora v kryté nebo venkovní jízdárně podle počasí. Hodina je přizpůsobena vašim zkušenostem a dovednostem.",
      isOpen: false
    },
    {
      question: "Poskytujete vybavení pro jízdu na koni?",
      answer: "Pro začátečníky máme k dispozici helmy, které jsou povinnou součástí výcviku. Doporučujeme vlastní jezdecké kalhoty a boty s podpatkem, ale pro první hodiny stačí pohodlné oblečení a pevná obuv. Pokročilým jezdcům doporučujeme mít vlastní kompletní vybavení.",
      isOpen: false
    },
    {
      question: "Jaká je minimální věková hranice pro jízdu na koni?",
      answer: "Pro individuální lekce přijímáme děti od 6 let. Pro mladší děti (od 3 do 5 let) nabízíme speciální program vodění na ponících s doprovodem rodiče. Bezpečnost dětí je naší prioritou, proto vždy přizpůsobujeme tempo výuky individuálním schopnostem a vývoji dítěte.",
      isOpen: false
    },
    {
      question: "Pořádáte jezdecké tábory nebo soustředění?",
      answer: "Ano, během letních prázdnin organizujeme týdenní jezdecké tábory pro děti a mládež. Víkendová soustředění pro pokročilé jezdce pořádáme několikrát do roka. Program zahrnuje intenzivní trénink, teoretické lekce a péči o koně. Veškeré informace o termínech a přihláškách najdete v sekci Aktuality na našich webových stránkách.",
      isOpen: false
    }
  ]);
  
  // Funkce pro otevírání/zavírání FAQ položek
  const toggleFaq = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen;
  };
  </script>