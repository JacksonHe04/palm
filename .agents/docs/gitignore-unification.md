# Gitignore 规范统一方案

## 方案说明
全量统一 6 个核心项目的 `.gitignore` 模板，分为 6 大模块：
1. Agent 运行时与私有数据
2. 依赖与环境
3. 构建输出与缓存
4. 系统与编辑器
5. 日志与测试
6. 项目专属特有规则

在 PALM 中完整保留了 `*.pyc`、`__pycache__/`、`/back-django/static_root`、`/archive`、`/resourses`、`.git.bak` 等特定属性。
