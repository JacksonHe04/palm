<script setup lang="ts">
import { onMounted } from 'vue'

// 飞书表单 URL
const formUrl = 'https://icnaf3oiyzmh.feishu.cn/wiki/IjQ2wgNK5i8mJ0ktXvLcsBwVnUf'

onMounted(() => {
  // 直接跳转（当前窗口打开）
  window.location.href = formUrl
})
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="animate-pulse text-gray-500">
      正在跳转到飞书页面...
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>