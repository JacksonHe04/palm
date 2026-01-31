<template>
  <div class="cards mt-0">
    <a href="https://palm.seu.edu.cn/application.html" target="_blank">
      <div class="stats-card h-full">
        <div class="stats-number">{{ currentAdmissionYear }}<br />Join Us</div>
        <div>请阅读PALM实验室招生说明</div>
        <div class="mt-2 read">点击阅读</div>
      </div>
    </a>

    <div class="small-cards-list">
      <a href="https://palm.seu.edu.cn" target="_blank">
        <div class="horizontal-card">
          <div class="flex justify-center">
            <!-- <div
              class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
            >
              🤖
            </div> -->
            <div>
              <div style="font-weight: 600">
                东南大学 PALM 实验室
              </div>
              <p style="font-size: 14px; color: #6b7280; margin-top: 4px">
                计算机科学与工程学院
              </p>
              <div style="margin-top: 8px">了解详情</div>
            </div>
          </div>
        </div>
      </a>

      <div class="small-cards">
        <a v-for="(card, index) in smallCards" :key="index" :href="card.href " target="_blank">
          <div class="small-card">
            <span>{{ card.icon }}</span>
            <div>{{ card.title }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 当前招生年份 - 使用默认值，避免首页加载时发起网络请求
const currentAdmissionYear = ref("2025");

// const bubbleItems = ref([
//   "🤖 Machine Learning",
//   "🔍 Pattern Recognition",
//   "🔨 Data Mining",
//   "👓 Computer Vision",
//   "✏️ Natural Language Processing",
//   "💻 ......",
// ]);

const smallCards = ref([
  {
    icon: "👥",
    title: "PALM 实验室简介",
    href: "https://palm.seu.edu.cn/home.html",
  },
  {
    icon: "👩‍🎓",
    title: "研究队伍及人才培养",
    href: "https://palm.seu.edu.cn/members.html",
  },
  {
    icon: "🎓",
    title: "科学研究及主要成果",
    href: "https://palm.seu.edu.cn/publication.html",
  },
  {
    icon: "📚️",
    title: "科研资源共享",
    href: "https://palm.seu.edu.cn/projects.html",
  },
]);
</script>

<style scoped lang="scss">
$primary-color: #3b82f6;
$secondary-color: #1f2937;
$text-color: #6b7280;
$white-color: white;
$hover-bg-color: wheat;

/* Features Grid */
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.stats-card {
  background: $secondary-color;
  color: $white-color;
  padding: 32px;
  border-radius: 16px;
  .read {
    color: $hover-bg-color;
  }
}

.stats-card:hover {
  color: $hover-bg-color;
}

.stats-number {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
}

.bubble-cards {
  background: $primary-color;
  padding: 32px;
  border-radius: 16px;
  color: $white-color;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.bubble-item {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  // margin-bottom: 12px;
  display: inline-block;
  width: fit-content;
}

.small-cards-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.horizontal-card {
  background: $white-color;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.horizontal-card:hover {
  background: $hover-bg-color;
}

.small-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  a {
    .small-card {
      span {
        font-size: 24px;
      }
      div {
        font-size: 14px;
        margin-top: 8px;
      }
    }
  }
}

.small-card:hover {
  background: $hover-bg-color;
}

.small-card {
  background: $white-color;
  padding: 16px;
  border-radius: 12px;
  text-align: center;

  a:hover {
    background: transparent;
  }
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-apply {
  background-color: $primary-color;
  color: $white-color;
}

.btn-apply:hover {
  background-color: $hover-bg-color;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
