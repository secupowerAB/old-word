// DeepSeek API 配置文件示例
// 使用说明：
// 1. 将此文件重命名为 config.js
// 2. 将下面的 'your-api-key-here' 替换为你的实际 DeepSeek API 密钥
// 3. 保存文件

// 获取 DeepSeek API 密钥的步骤：
// 1. 访问 DeepSeek 官网: https://platform.deepseek.com/
// 2. 注册账号并登录
// 3. 进入 API 管理页面
// 4. 创建新的 API 密钥
// 5. 复制密钥并粘贴到下面

const DEEPSEEK_API_KEY = 'your-api-key-here';

// 注意事项：
// - 请勿将包含真实 API 密钥的 config.js 文件上传到公开的 GitHub 仓库
// - 建议将 config.js 添加到 .gitignore 文件中
// - API 密钥应当保密，不要分享给他人
// - 定期更换 API 密钥以确保安全

// 其他配置选项（可选）
const CONFIG = {
    // API 基础 URL
    apiBaseUrl: 'https://api.deepseek.com/v1',
    
    // 模型名称
    modelName: 'deepseek-chat',
    
    // 温度参数 (0-2, 越高越随机)
    temperature: 0.8,
    
    // 最大生成长度
    maxTokens: 500,
    
    // 超时时间（毫秒）
    timeout: 30000
};
