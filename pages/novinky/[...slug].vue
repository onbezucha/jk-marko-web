<template>
    <div class="default-layout">
        <ContentDoc :path="`articles/${route.params.slug}`" v-slot="{ doc }">
            <div class="prose max-w-none">
                <h1 class="text-3xl font-bold mb-6">{{ doc.title }}</h1>
                <div class="text-sm text-gray-500 mb-8">{{ doc.date }}</div>
                <ContentRenderer :value="doc" />
            </div>
        </ContentDoc>
    </div>
</template>
