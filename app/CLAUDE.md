# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

PALM Lab 官方网站前端，基于 Next.js 16 + React 19 + Tailwind CSS 4 构建的静态展示页面。

## 开发命令

```bash
pnpm dev      # 启动开发服务器
pnpm build    # 构建生产版本
pnpm start    # 启动生产服务器
pnpm lint     # 运行 ESLint 检查
```

## 技术栈

- **框架**: Next.js 16.2.6 (App Router)
- **UI**: React 19.2.4, lucide-react 图标库
- **样式**: Tailwind CSS 4 (CSS @import 方式集成)
- **字体**: JetBrains Mono (代码), Noto Serif SC (中文正文)
- **包管理**: pnpm

## 架构要点

### 页面结构
- [app/layout.tsx](app/layout.tsx) - 根布局，配置字体和全局 metadata
- [app/page.tsx](app/page.tsx) - 入口页面，渲染 HomePage 组件
- [app/components/HomePage.tsx](app/components/HomePage.tsx) - 主页组合组件

### 组件层级
```
HomePage
├── Header
├── HeroSection
├── HomeCards
│   ├── stats-card (Join Us 卡片)
│   ├── horizontal-card (实验室标题)
│   └── small-cards (4个导航卡片)
└── Footer
```

### 重要约定
- 所有外部链接必须通过 [urls.ts](app/constants/urls.ts) 统一管理，避免硬编码
- 当前 [HomeCards.tsx](app/components/HomeCards.tsx) 中仍使用硬编码的 PALM_BASE_URL，需逐步迁移到 urls.ts

### 静态资源
- [public/home-bg-m.png](public/home-bg-m.png) - 背景图片
- [public/palm_logo_cicle.png](public/palm_logo_cicle.png) - 实验室 Logo

### 样式系统
- 使用 CSS 变量定义主题色 (`--primary-color`, `--secondary-color` 等)
- 玻璃态效果通过 `backdrop-filter: blur()` 实现
- 暗色模式支持通过 `prefers-color-scheme` media query

## 相关资源

- PALM 实验室旧站: http://8.149.133.61/
- 飞书文档/Wiki: https://seu-palm.feishu.cn/wiki/PgEFwrnPvi9pZwkfCmQcYnKWnbe