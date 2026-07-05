# PALM Web 技术栈升级与重构记录

## 1. 背景与目标
根据全局项目统一规范（`AGENTS.md`），将 PALM (`app/`) 项目的依赖版本锁定升级，并补齐缺少的核心基础设施包，建立高一致性、高复用的前端架构。

## 2. 依赖升级与锁定明细

### 核心与框架依赖
- **Next.js**: `16.2.10`
- **React / React-DOM**: `19.2.7`
- **TypeScript**: `6.0.3`
- **Tailwind CSS / PostCSS**: `4.3.2`

### 补齐与锁定的 UI & 状态库依赖
- `lucide-react`: `1.22.0`
- `framer-motion`: `12.42.2`
- `zustand`: `5.0.14`
- `@tanstack/react-query`: `5.101.2`
- `react-hook-form`: `7.80.0`
- `zod`: `3.23.8`
- `next-themes`: `0.4.6`
- `nuqs`: `2.8.9`
- `clsx`: `2.1.1`
- `tailwind-merge`: `3.6.0`

## 3. 架构重构与变更
1. **基础工具合并**: `app/lib/utils.ts` 导出标准的 `cn` 函数。
2. **全局 Provider**: `app/components/providers.tsx` 整合 `QueryClientProvider`、`NextThemesProvider` 和 `NuqsAdapter`，于 `app/app/layout.tsx` 根布局完成包裹。

## 4. 验证与测试结果
- **包管理器**: PNPM (`pnpm-lock.yaml` 已重新锁盘)
- **编译与构建验证**: `pnpm run build`
  - Next.js 16.2.10 Turbopack 编译成功 (4.3s)
  - TypeScript 6.0.3 校验完全零报错 (1190ms)
  - 页面全量打包成功
