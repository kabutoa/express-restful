/**
 * PM2 配置文件
 * 用于管理 Node.js 应用程序的进程和部署
 */

const { name } = require("./package.json");
const path = require("path");

module.exports = {
  apps: [
    {
      // 应用名称，从 package.json 中导入
      name,

      // 入口文件的绝对路径
      script: path.resolve(__dirname, './dist/app.js'),

      // 启动实例个数
      // 可以是具体数字或 'max'（CPU核心数）
      instances: 1,

      // 执行模式
      // cluster: 多进程多实例，支持负载均衡
      // fork: 单实例模式（默认）
      exec_mode: 'cluster',

      // 文件变化监控
      // 启用后，文件变化时自动重启应用
      watch: true,

      // 不需要监控的文件夹
      // 排除这些文件夹可以提高性能
      ignore_watch: ['node_modules', 'logs'],

      // 开发环境变量配置
      env: {
        NODE_ENV: 'development'
      },

      // 生产环境变量配置
      // 使用 --env production 时生效
      env_production: {
        NODE_ENV: 'production'
      },

      // 日志时间格式化
      log_date_format: 'YYYY-MM-DD HH:mm:ss',

      // 错误日志文件路径
      // 记录 stderr 和未捕获的异常
      error_file: './logs/error.log',

      // 普通日志文件路径
      // 记录 stdout 输出
      out_file: './logs/out.log',

      // 是否合并实例日志
      // true: 所有实例日志合并到同一个文件
      merge_logs: true,

      // 内存限制配置
      // 超过限制时自动重启应用
      max_memory_restart: '1G',
    }
  ]
}; 