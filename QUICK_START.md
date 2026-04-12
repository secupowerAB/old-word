# 快速开始指南

## 🚀 5分钟快速启动

### 步骤1: 获取DeepSeek API密钥

1. 访问：https://platform.deepseek.com/
2. 注册并登录
3. 创建API密钥
4. 复制密钥（格式类似：sk-xxxxxxxxxxxxxx）

### 步骤2: 配置API密钥

打开 `config.js` 文件，将第5行的 `your-api-key-here` 替换为你的实际API密钥：

```javascript
const DEEPSEEK_API_KEY = 'sk-你的实际密钥';
```

保存文件。

### 步骤3: 运行项目

**方式A - 使用Python（推荐）**
```bash
# 在项目目录下运行
python -m http.server 8000

# 然后在浏览器访问
http://localhost:8000
```

**方式B - 使用Node.js**
```bash
# 先安装http-server
npm install -g http-server

# 运行
http-server

# 访问
http://localhost:8080
```

**方式C - 直接打开**
- 双击 `index.html` 文件
- 在浏览器中打开

### 步骤4: 开始使用

1. 在输入框输入主题（例如："春江花月夜"）
2. 点击"挥毫泼墨"按钮
3. 等待2-5秒，欣赏AI生成的古诗
4. 点击"复制"按钮保存诗词

## ⚠️ 常见问题

**问：显示"请先配置DeepSeek API密钥"**
答：检查config.js文件，确保API密钥已正确填写。

**问：生成失败**
答：
- 检查网络连接
- 确认API密钥有效
- 查看浏览器控制台（F12）的错误信息

**问：页面空白**
答：使用HTTP服务器运行，不要直接打开HTML文件。

## 📚 更多信息

- 详细说明：README.md
- 软件文档：SOFTWARE_DOC.md
- 演示脚本：VIDEO_SCRIPT.md

## 💬 需要帮助？

参考 README.md 中的详细说明，或查看 SOFTWARE_DOC.md 了解所有功能。
