<template>
  <FrontMain>
    <div v-if="shouldShowNotice" class="dev-notice">
      <div class="custom-alert">
        <div class="alert-content">
          <div class="alert-title">网址更改提示</div>
          <div class="alert-description">由于服务器稳定性问题，网址已更改为 <a href="http://139.155.248.15">http://139.155.248.15</a></div>
        </div>
      </div>
    </div>
    <HeroSection />
    <HomeCards />
  </FrontMain>
</template>

<script setup lang="ts">
import HeroSection from "./HeroSection.vue";
import HomeCards from "./HomeCards.vue";
import FrontMain from "@/views/front-desk/components/FrontMain.vue";
import { computed } from 'vue';

// 检查当前访问的网址是否需要显示提示
const shouldShowNotice = computed(() => {
  const currentHost = window.location.host;
  return !currentHost.includes('139.155.248.15');
});
</script>

<style scoped lang="scss">
.custom-alert {
  padding: 16px;
  border-radius: 4px;
  background-color: #f0f9eb;
  border: 1px solid #e1f3d8;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  .alert-content {
    .alert-title {
      font-size: 16px;
      color: #67c23a;
      margin-bottom: 8px;
      font-weight: 500;
    }
    
    .alert-description {
      font-size: 14px;
      color: #5daf34;
      line-height: 1.4;
      
      a {
        color: #409eff;
        text-decoration: underline;
        transition: color 0.3s ease;
        
        &:hover {
          color: #66b1ff;
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: 640px) {
  .custom-alert {
    padding: 12px;
    
    .alert-content {
      .alert-title {
        font-size: 14px;
      }
      
      .alert-description {
        font-size: 12px;
      }
    }
  }
}
</style>
