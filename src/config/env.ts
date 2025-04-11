import { config } from 'dotenv';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// 加载环境变量
config({
  path: path.resolve(__dirname, '../../.env'),
  // 如果.env文件不存在，不会抛出错误
  debug: process.env.DEBUG === 'true',
});

// 环境变量配置
export const ENV_CONFIG = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '3000', 10),
  MONGO_URL: process.env.MONGO_URL || 'mongodb://youzi:helloworld123..@127.0.0.1:27017/express_restful',
} as const;

// 类型声明
export type EnvConfig = typeof ENV_CONFIG;