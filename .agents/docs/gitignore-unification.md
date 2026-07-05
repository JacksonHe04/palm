# Gitignore 规范统一方案 (标准层级与顺序调整)

## 规范顺序
1. 项目专属的特有规则
2. Agent 的运行时与私有数据
3. 依赖与环境
4. 构建输出与缓存
5. 系统与编辑器
6. 日志与测试

其中 3 ~ 6 模块全量跨仓库一致。PALM 的第 1 模块指定为 `*.pyc`、`__pycache__/`、`/back-django/static_root`、`/archive`、`/resourses`、`.git.bak`。
