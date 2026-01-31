<template>
  <nav class="bg-cover bg-center" :style="navStyle">
    <div class="container mx-auto flex justify-between items-center py-3 md:py-4">
      <RouterLink to="/" class="flex items-center gap-2 text-2xl font-bold text-gray-800">
        <img src="/palm_logo_cicle.png" alt="Palm Logo" class="logo">
        <div class="nav-title">SEU PALM Lab</div>
      </RouterLink>

      <div class="hidden md:flex space-x-8">
        <template v-for="item in navItems">
          <RouterLink
            v-if="item.to"
            :key="item.to"
            :to="item.to"
            class="text-gray-600 hover:text-gray-800"
          >
            {{ item.name }}
          </RouterLink>
          <a
            v-else-if="item.href"
            :key="item.href"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-gray-800"
          >
            {{ item.name }}
          </a>
        </template>
      </div>

      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-transparent py-4 px-4 space-y-4">
      <template v-for="item in navItems">
        <RouterLink
          v-if="item.to"
          :key="item.to"
          :to="item.to"
          class="block text-gray-600 hover:text-gray-800"
        >
          {{ item.name }}
        </RouterLink>
        <a
          v-else-if="item.href"
          :key="item.href"
          :href="item.href"
          target="_blank"
                   rel="noopener noreferrer"
          class="block text-gray-600 hover:text-gray-800"
        >
          {{ item.name }}
        </a>
      </template>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { createNavItems } from '@/config/navConfig';

const route = useRoute();
const isMenuOpen = ref(false);

// 计算当前招生年份
// 下半年（7月1日至12月31日）显示当前年份+1
// 上半年（1月1日至6月30日）显示当前年份
const currentAdmissionYear = computed(() => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-11，0表示1月
  
  // 如果是下半年（7月及以后，即月份>=6），返回当前年份+1
  // 如果是上半年（1-6月，即月份<6），返回当前年份
  return currentMonth >= 6 ? currentYear + 1 : currentYear;
});

// 将 navItems 改为 computed 属性
const navItems = computed(() => createNavItems(currentAdmissionYear.value));

// 根据路由路径设置导航栏背景颜色
const navStyle = computed(() => {
  return route.path.startsWith('/admin')
    ? { backgroundColor: 'white' }
    : { backgroundImage: "url('/home-bg-m.png')" };
});

// 切换菜单
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-title {
  color: $title-color;
}

.logo {
  display: flex;
  gap: 16px;
  height: 30px;
}

.md\:hidden {
  transition: all 2s ease;
}
</style>
