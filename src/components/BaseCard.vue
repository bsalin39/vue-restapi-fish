<script setup>
const props = defineProps({
  films: {
    type: Object,
    default: () => ({
      id: -1,
      title: 'Unknown',
      image: 'https://via.placeholder.com/150',
    }),
  },
})
</script>

<template>
  <RouterLink
    :to="`/films/${props.films.id}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <img class="w-full rounded-t-lg object-cover" :src="props.films.image" />
    <div class="p-4">
      <h2 class="text-2xl font-semibold text-gray-800">
        {{ props.films.title }}
      </h2>
    </div>
  </RouterLink>
</template>
