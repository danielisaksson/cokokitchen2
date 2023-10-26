<script setup>
  import ms from 'ms'
  
  const { data } = await useFetch('/api/getDemoData')
  const generatedAt = useState(() => new Date().toISOString())
  const date = new Date(generatedAt.value)
  const timeAgo = ref()
  onMounted(() => {
    timeAgo.value = ms(Date.now() - date.valueOf(), { long: true })
  })

</script>

<template>
  <div>
    <pre>{{ data }}</pre>  
  
    <div class="contents">
      <span>Generated</span>
      <span>
        <strong v-if="timeAgo">{{ timeAgo }} ago</strong>
        <strong v-else>...</strong>
      </span>
    </div>

    <div class="debug">Regenerated at {{ generatedAt }}</div>
  
  </div>


</template>