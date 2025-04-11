# Express RESTful API

一个基于 Express.js 和 TypeScript 构建的 RESTful API 服务器，采用现代化的开发实践和工具链。

## 项目结构

```
src/
├── app.ts          # 应用程序入口
├── config/         # 配置文件
├── models/         # 数据模型
├── router/         # 路由定义
├── controller/     # 业务逻辑控制器
├── helpers/        # 辅助函数
└── middlewares/    # 中间件
```

## 开始使用

### 环境要求

- Node.js 16+
- pnpm
- MongoDB

### 安装

1. 克隆项目
```bash
git clone [your-repository-url]
cd express-restful
```

2. 安装依赖
```bash
pnpm install
```

3. 环境配置
```bash
cp .env.example .env
# 编辑 .env 文件，配置必要的环境变量
```

### 开发

```bash
# 开发模式（支持热重载）
pnpm dev

# 构建项目
pnpm build

# 生产模式运行
pnpm start
```

## License

MIT
