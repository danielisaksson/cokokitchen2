<script setup>
  const { data } = await useFetch('/api/getDemoData')
</script>

<template>
  <div>
    <pre>{{ data }}</pre>  
  </div>
</template>