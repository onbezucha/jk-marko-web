<template>
  <section id="pricing" class="bg-white py-28 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Hlavička sekce -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
          Ceník služeb
        </h2>
        <div class="w-24 h-1 bg-[#009FE1] mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto text-gray-600 text-lg">
          Nabízíme komplexní služby pro vás i vaše koně. Vyberte si z našich cenových balíčků to, co nejlépe vyhovuje vašim potřebám.
        </p>
      </div>

      <!-- Přepínač kategorií - desktop -->
      <div class="hidden md:flex justify-center mb-12">
        <div class="inline-flex p-1 bg-gray-100 rounded-xl">
          <button 
            v-for="(tab, index) in tabs" 
            :key="index"
            @click="activeTab = tab.id"
            :class="[
              'px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap',
              activeTab === tab.id ? 'bg-[#009FE1] text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>

      <!-- Přepínač kategorií - mobilní (tlačítka) -->
      <div class="md:hidden mb-8">
        <div class="flex flex-wrap justify-center gap-2">
          <button 
            v-for="(tab, index) in tabs" 
            :key="index"
            @click="activeTab = tab.id"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex-1 text-center min-w-[110px]',
              activeTab === tab.id ? 'bg-[#009FE1] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>

      <!-- Sekce ceníku -->
      <div class="relative">
        <!-- Ustájení koní -->
        <div v-show="activeTab === 'boarding'" class="transition-all duration-300">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Hlavní služby -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div class="bg-gradient-to-r from-[#009FE1] to-[#0077B6] p-6">
                <h3 class="text-2xl font-bold text-white">Ustájení koní</h3>
                <p class="text-blue-100 mt-2">Kompletní péče o vaše koně v našem areálu</p>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div v-for="(item, index) in boardingServices" :key="index" class="flex items-start gap-3">
                    <div class="p-1 bg-blue-100 rounded-full mt-1">
                      <Icon name="ph:check-bold" class="w-4 h-4 text-[#009FE1]" />
                    </div>
                    <div>
                      <h4 class="font-medium text-black">{{ item.title }}</h4>
                      <p class="text-gray-600 text-sm mt-1">{{ item.description }}</p>
                      <div class="mt-2 font-bold text-[#009FE1]">{{ item.price }} Kč</div>
                    </div>
                  </div>
                </div>
                <div class="mt-8">
                  <button class="w-full py-3 px-4 bg-[#009FE1] text-white rounded-lg font-medium transition hover:bg-[#0077B6] focus:ring-4 focus:ring-blue-200">
                    Rezervovat ustájení
                  </button>
                </div>
              </div>
            </div>

            <!-- Doplňkové služby -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div class="bg-gradient-to-r from-gray-800 to-black p-6">
                <h3 class="text-2xl font-bold text-white">Doplňkové služby k ustájení</h3>
                <p class="text-gray-300 mt-2">Nadstandardní péče pro vaše koně</p>
              </div>
              <div class="p-6">
                <div class="space-y-6">
                  <div v-for="(item, index) in boardingAdditionalServices" :key="index" class="flex justify-between items-center border-b border-gray-100 pb-4">
                    <div>
                      <h4 class="font-medium text-black">{{ item.title }}</h4>
                      <p class="text-gray-600 text-sm mt-1">{{ item.description }}</p>
                    </div>
                    <div class="font-bold text-black">{{ item.price }} Kč</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trénink koní a jezdců -->
        <div v-show="activeTab === 'training'" class="transition-all duration-300">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Balíček 1 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div class="relative overflow-hidden">
                <img src="https://picsum.photos/id/1025/800/400" alt="Trénink koní" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-white">Základní trénink</h3>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">Ideální pro začínající jezdce a koně ve výcviku</p>
                <div class="flex justify-between items-end mb-4">
                  <span class="text-3xl font-bold text-black">450 Kč</span>
                  <span class="text-gray-500">/ lekce (45 min)</span>
                </div>
                <div class="space-y-3 mb-6">
                  <div class="flex items-center gap-2">
                    <Icon name="ph:check-circle-fill" class="w-5 h-5 text-[#009FE1]" />
                    <span class="text-gray-700">Individuální přístup</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="ph:check-circle-fill" class="w-5 h-5 text-[#009FE1]" />
                    <span class="text-gray-700">Základní dovednosti</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="ph:check-circle-fill" class="w-5 h-5 text-[#009FE1]" />
                    <span class="text-gray-700">Práce na jízdárně</span>
                  </div>
                </div>
                <button class="w-full py-3 px-4 bg-[#009FE1] text-white rounded-lg font-medium transition hover:bg-[#0077B6] focus:ring-4 focus:ring-blue-200">
                  Rezervovat trénink
                </button>
              </div>
            </div>

            <!-- Balíček 2 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 lg:scale-105 z-10">
              <div class="relative overflow-hidden">
                <div class="absolute top-3 right-3 bg-[#009FE1] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Nejoblíbenější
                </div>
                <img src="https://picsum.photos/id/1028/800/400" alt="Pokročilý trénink" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-white">Pokročilý trénink</h3>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">Pro zkušenější jezdce a koně s základním výcvikem</p>
                <div class="flex justify-between items-end mb-4">
                  <span class="text-3xl font-bold text-black">650 Kč</span>
                  <span class="text-gray-500">/ lekce (60 min)</span>
                </div>
                <div class="space-y-3 mb-6">
                  <div class="flex items-center gap-2">
                    <Icon name="ph:check-circle-fill" class="w-5 h-5 text-[#009FE1]" />
                    <span class="text-gray-700">Specializované cvičení</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="ph:check-circle-fill" class="w-5 h-5 text-[#009FE1]" />
                    <span class="text-gray-700">Parkurová příprava</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="ph:check-circle-fill" class="w-5 h-5 text-[#009FE1]" />
                    <span class="text-gray-700">Drezurní prvky</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="ph:check-circle-fill" class="w-5 h-5 text-[#009FE1]" />
                    <span class="text-gray-700">Video analýza</span>
                  </div>
                </div>
                <button class="w-full py-3 px-4 bg-[#009FE1] text-white rounded-lg font-medium transition hover:bg-[#0077B6] focus:ring-4 focus:ring-blue-200">
                  Rezervovat trénink
                </button>
              </div>
            </div>

            <!-- Balíček 3 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div class="relative overflow-hidden">
                <img src="https://picsum.photos/id/1059/800/400" alt="Závodní trénink" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-white">Závodní příprava</h3>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">Komplexní příprava pro závodní dvojice</p>
                <div class="flex justify-between items-end mb-4">
                  <span class="text-3xl font-bold text-black">850 Kč</span>
                  <span class="text-gray-500">/ lekce (90 min)</span>
                </div>
                <div class="space-y-3 mb-6">
                  <div class="flex items-center gap-2">
                    <Icon name="ph:check-circle-fill" class="w-5 h-5 text-[#009FE1]" />
                    <span class="text-gray-700">Závodní simulace</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="ph:check-circle-fill" class="w-5 h-5 text-[#009FE1]" />
                    <span class="text-gray-700">Mentální příprava</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="ph:check-circle-fill" class="w-5 h-5 text-[#009FE1]" />
                    <span class="text-gray-700">Kompletní strategie</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="ph:check-circle-fill" class="w-5 h-5 text-[#009FE1]" />
                    <span class="text-gray-700">Konzultace s týmem</span>
                  </div>
                </div>
                <button class="w-full py-3 px-4 bg-[#009FE1] text-white rounded-lg font-medium transition hover:bg-[#0077B6] focus:ring-4 focus:ring-blue-200">
                  Rezervovat trénink
                </button>
              </div>
            </div>
          </div>

          <!-- Doplňkové služby k tréninku -->
          <div class="mt-12">
            <h3 class="text-xl font-bold text-black mb-6">Doplňkové služby k tréninku</h3>
            <div class="bg-gray-50 rounded-xl p-6">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(item, index) in trainingAdditionalServices" :key="index" class="flex items-start gap-4">
                  <div class="bg-white p-3 rounded-full shadow-md">
                    <Icon :name="item.icon" class="w-6 h-6 text-[#009FE1]" />
                  </div>
                  <div>
                    <h4 class="font-medium text-black">{{ item.title }}</h4>
                    <p class="text-gray-600 text-sm mt-1">{{ item.description }}</p>
                    <div class="mt-2 font-bold text-[#009FE1]">{{ item.price }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Doplňkové služby -->
        <div v-show="activeTab === 'additionalServices'" class="transition-all duration-300">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div class="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 p-6">
              <h3 class="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <Icon name="ph:first-aid-kit" class="w-6 h-6 text-[#009FE1]" />
                Ošetření a manipulace s koněm
              </h3>
              <div class="space-y-4">
                <div v-for="(item, index) in horseCareServices" :key="index" class="flex justify-between items-start pb-4 border-b border-gray-100">
                  <div>
                    <h4 class="font-medium text-black">{{ item.title }}</h4>
                    <p class="text-gray-600 text-sm mt-1">{{ item.description }}</p>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-black">{{ item.price }}</div>
                    <div class="text-xs text-gray-500">{{ item.unit }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 p-6">
              <h3 class="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <Icon name="ph:car" class="w-6 h-6 text-[#009FE1]" />
                Doprava a doprovod na závodech
              </h3>
              <div class="space-y-4">
                <div v-for="(item, index) in transportServices" :key="index" class="flex justify-between items-start pb-4 border-b border-gray-100">
                  <div>
                    <h4 class="font-medium text-black">{{ item.title }}</h4>
                    <p class="text-gray-600 text-sm mt-1">{{ item.description }}</p>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-black">{{ item.price }}</div>
                    <div class="text-xs text-gray-500">{{ item.unit }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Banner -->
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#009FE1] to-[#0077B6] p-8 md:p-12">
            <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 class="text-2xl font-bold text-white mb-2">Potřebujete individuální služby?</h3>
                <p class="text-blue-100">Kontaktujte nás pro vytvoření nabídky na míru vašim potřebám.</p>
              </div>
              <button class="px-6 py-3 bg-white text-[#009FE1] rounded-lg font-medium transition hover:bg-gray-100 focus:ring-4 focus:ring-white/30 whitespace-nowrap">
                Kontaktovat nás
              </button>
            </div>
            <!-- Dekorativní prvky -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div class="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>
          </div>
        </div>
      </div>

      <!-- Konec sekce ceníku - bez FAQ -->
      <div>
        <!-- Prázdný prostor pro vlastní implementaci FAQ sekce -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Definice záložek
const tabs = [
  { id: 'boarding', name: 'Ustájení koní' },
  { id: 'training', name: 'Trénink koní a jezdců' },
  { id: 'additionalServices', name: 'Doplňkové služby' },
];

// Aktivní záložka
const activeTab = ref('boarding');

// Data pro ustájení koní
const boardingServices = [
  { 
    title: 'Boxové ustájení - standard', 
    description: 'Box o velikosti 3x3m, krmení 3x denně, seno ad libitum, denní úklid boxu, výběh v paddocku', 
    price: '9 500',
  },
  { 
    title: 'Boxové ustájení - premium', 
    description: 'Box o velikosti 4x4m, krmení 3x denně dle individuálního plánu, seno ad libitum, denní úklid boxu, výběh v paddocku, denní kontrola', 
    price: '12 000',
  },
  { 
    title: 'Pastevní ustájení', 
    description: 'Celodenní pastva ve výběhu, přístřešek, přikrmování v zimě, základní péče', 
    price: '6 000',
  },
];

// Doplňkové služby k ustájení
const boardingAdditionalServices = [
  { 
    title: 'Lonžování koně', 
    description: '20 min. práce s koněm', 
    price: '250',
  },
  { 
    title: 'Individuální krmný plán', 
    description: 'Sestavení a úprava krmné dávky dle potřeb koně', 
    price: '500',
  },
  { 
    title: 'Dekování/oddekování', 
    description: 'Každodenní služba', 
    price: '1 200',
  },
  { 
    title: 'Medikace dle potřeby', 
    description: 'Podávání léků dle instrukcí veterináře', 
    price: '500',
  },
  { 
    title: 'Asistence při kování', 
    description: 'Držení koně při kování/úpravě kopyt', 
    price: '300',
  },
];

// Doplňkové služby k tréninku
const trainingAdditionalServices = [
  { 
    title: 'Video analýza tréninku', 
    description: 'Natočení a rozbor videa z tréninku', 
    price: '450 Kč / hod',
    icon: 'ph:video-camera',
  },
  { 
    title: 'Sestavení tréninkového plánu', 
    description: 'Individuální plán na 3 měsíce', 
    price: '1 500 Kč',
    icon: 'ph:notepad',
  },
  { 
    title: 'Konzultace s trenérem', 
    description: 'Osobní nebo online konzultace', 
    price: '600 Kč / hod',
    icon: 'ph:chats-circle',
  },
];

// Služby ošetření a manipulace
const horseCareServices = [
  { 
    title: 'Základní ošetření koně', 
    description: 'Čištění, kontrola zdravotního stavu', 
    price: '300 Kč',
    unit: 'za úkon',
  },
  { 
    title: 'Bandážování', 
    description: 'Aplikace bandáží na končetiny', 
    price: '150 Kč',
    unit: 'za úkon',
  },
  { 
    title: 'Aplikace léčiv', 
    description: 'Dle instrukcí veterináře', 
    price: '200 Kč',
    unit: 'za úkon',
  },
  { 
    title: 'Asistence při veterinárním ošetření', 
    description: 'Držení koně, asistence', 
    price: '350 Kč',
    unit: 'za hodinu',
  },
  { 
    title: 'Stříhání koně', 
    description: 'Kompletní úprava srsti strojkem', 
    price: '1 500 Kč',
    unit: 'za úkon',
  },
];

// Služby dopravy
const transportServices = [
  { 
    title: 'Přeprava koně - do 50 km', 
    description: 'Jedno zvíře, jednosměrná cesta', 
    price: '25 Kč/km',
    unit: 'min. 1000 Kč',
  },
  { 
    title: 'Přeprava koně - nad 50 km', 
    description: 'Jedno zvíře, jednosměrná cesta', 
    price: '20 Kč/km',
    unit: 'min. 1500 Kč',
  },
  { 
    title: 'Doprovod na závodech - základní', 
    description: 'Příprava koně, sedlání, asistence', 
    price: '1 500 Kč',
    unit: 'za den',
  },
  { 
    title: 'Doprovod na závodech - kompletní', 
    description: 'Vč. přihlášení, taktika, péče o koně', 
    price: '2 500 Kč',
    unit: 'za den',
  },
  { 
    title: 'Ubytování koně na závodech', 
    description: 'Zajištění ustájení, krmiva', 
    price: 'dle aktuální nabídky',
    unit: 'plus 15% poplatek',
  },
];

// FAQ sekce byla odstraněna
</script>