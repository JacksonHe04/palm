<script setup lang="ts">
// 飞书表单 URL
const formUrl = 'https://icnaf3oiyzmh.feishu.cn/share/base/form/shrcnyrnWtSNrgvXi1UWw5dXJBd'
</script>

<template>
  <div class="w-full h-screen">
    <iframe
      :src="formUrl"
      class="w-full h-full border-0"
      frameborder="0"
      scrolling="auto"
      allow="camera *; microphone *"
    ></iframe>
  </div>
</template>

<style scoped lang="scss">
</style>