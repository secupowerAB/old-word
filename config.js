// DeepSeek API 配置文件
// 重要提示：请将下面的 'your-api-key-here' 替换为你的实际 DeepSeek API 密钥

const DEEPSEEK_API_KEY = 'your-api-key-here';

// 如果你还没有API密钥，请按照以下步骤获取：
// 1. 访问 https://platform.deepseek.com/
// 2. 注册账号并登录
// 3. 进入 API 管理页面
// 4. 创建新的 API 密钥
// 5. 复制密钥并替换上面的 'your-api-key-here'

// 警告：请不要将包含真实API密钥的config.js文件上传到公开的GitHub仓库！

// 可选配置（高级用户）
const CONFIG = {
    // API 基础 URL
    apiBaseUrl: 'https://api.deepseek.com/v1',
    
    // 模型名称
    modelName: 'deepseek-chat',
    
    // 温度参数 (0-2)
    // 0.3-0.5: 生成更规范、严谨的诗词
    // 0.6-0.8: 平衡创意和规范（推荐）
    // 0.9-1.2: 更有创意，但可能偏离传统格律
    temperature: 0.8,
    
    // 最大生成长度（tokens）
    maxTokens: 500,
    
    // 请求超时时间（毫秒）
    timeout: 30000
};

// 检查配置
if (DEEPSEEK_API_KEY === 'your-api-key-here') {
    console.warn('⚠️ 警告：请先配置DeepSeek API密钥！');
    console.warn('📖 请参考README.md了解如何获取和配置API密钥');
}
