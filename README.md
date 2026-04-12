# 墨韵诗生 - AI古诗生成器

![项目封面](https://img.shields.io/badge/项目类型-AI诗词生成-red)
![技术栈](https://img.shields.io/badge/技术-HTML%2FCSS%2FJS-blue)
![API](https://img.shields.io/badge/API-DeepSeek-green)

## 📖 项目简介

墨韵诗生是一个基于AI技术的中国古诗词生成器，融合传统水墨画美学与现代Web技术。用户只需输入一句话或主题，即可生成优美的古典诗词。

### ✨ 主要特点

- 🎨 **传统美学设计** - 采用水墨画风格、竹简元素、印章装饰
- 🤖 **AI智能生成** - 使用DeepSeek API生成符合格律的古诗词
- 🖼️ **优雅动画效果** - 流畅的页面动画和诗词展示效果
- 📱 **响应式设计** - 完美适配PC、平板和手机
- 🎯 **简洁易用** - 一键生成，操作简单直观

## 🎯 参赛信息

- **活动名称**: 2026沈阳市中小学生信息素养提升实践活动（评选类）
- **参赛项目**: 计算思维项目 - 创新开发（高中组）
- **作者**: 张天佑
- **学校**: 沈阳市第二十八中学
- **班级**: 高一八班

## 🚀 快速开始

### 1. 获取DeepSeek API密钥

1. 访问 [DeepSeek平台](https://platform.deepseek.com/)
2. 注册账号并登录
3. 进入API管理页面
4. 创建新的API密钥
5. 复制密钥备用

### 2. 配置项目

```bash
# 1. 克隆或下载项目
git clone https://github.com/your-username/poetry-generator.git
cd poetry-generator

# 2. 复制配置文件
cp config-example.js config.js

# 3. 编辑config.js，填入你的API密钥
# 将 'your-api-key-here' 替换为实际的密钥
```

### 3. 运行项目

有多种方式可以运行项目：

**方式1：使用Python HTTP服务器**
```bash
# Python 3
python -m http.server 8000

# 访问 http://localhost:8000
```

**方式2：使用Node.js HTTP服务器**
```bash
# 安装http-server
npm install -g http-server

# 启动服务器
http-server

# 访问 http://localhost:8080
```

**方式3：直接打开HTML文件**
- 直接在浏览器中打开 `index.html` 文件
- 注意：某些浏览器可能因CORS限制无法正常调用API

## 📁 项目结构

```
poetry-generator/
├── index.html          # 主HTML文件
├── style.css           # 样式文件
├── script.js           # JavaScript逻辑
├── config.js           # API配置文件（需自行创建）
├── config-example.js   # 配置文件示例
├── README.md           # 项目说明文档
└── .gitignore          # Git忽略文件
```

## 🛠️ 技术栈

### 前端技术
- **HTML5** - 语义化标签，提升可访问性
- **CSS3** - 使用Flexbox布局，自定义动画
- **原生JavaScript** - 无框架依赖，轻量高效

### 设计元素
- **字体**:
  - Noto Serif SC - 正文字体
  - Ma Shan Zheng - 标题和诗词字体
  - ZCOOL XiaoWei - 辅助字体
- **配色方案**:
  - 墨黑色 (#1a1a1a)
  - 宣纸色 (#f5f1e8)
  - 朱砂红 (#c8383c)
  - 竹青色 (#4a6741)
  - 金色点缀 (#c9a961)

### API服务
- **DeepSeek AI** - 提供强大的语言模型
  - 模型: deepseek-chat
  - 功能: 生成符合格律的古典诗词

## 💡 使用指南

### 基本使用

1. **输入主题**: 在输入框中输入诗词主题或一句话
2. **快速选择**: 点击预设的主题按钮快速填入
3. **生成诗词**: 点击"挥毫泼墨"按钮生成诗词
4. **查看结果**: 诗词将逐字显示在画卷中
5. **复制分享**: 点击"复制"按钮复制诗词
6. **重新生成**: 点击"重新生成"按钮换一首诗词

### 示例主题

- 春日江南烟雨
- 明月思乡
- 山水之间
- 秋风落叶
- 冬雪梅花
- 离别之情
- 登高望远

## 🎨 设计理念

### 视觉设计

项目采用中国传统水墨画美学，通过以下元素营造诗意氛围：

1. **水墨晕染效果** - 背景使用渐变和模糊营造墨迹扩散感
2. **竹简卷轴** - 诗词展示区模拟古代竹简样式
3. **印章装饰** - 页眉和页脚使用朱砂印章元素
4. **毛笔动画** - 加载时展示毛笔书写效果
5. **古典字体** - 使用书法风格字体呈现诗词

### 交互设计

1. **流畅动画** - 所有元素都有淡入淡出动画
2. **渐进显示** - 诗词逐字显示，营造书写感
3. **即时反馈** - 按钮悬停、点击都有视觉反馈
4. **友好提示** - 操作提示清晰，错误信息友好

## 🔧 配置说明

### API配置

在 `config.js` 中可配置以下选项：

```javascript
const DEEPSEEK_API_KEY = 'your-api-key-here';

const CONFIG = {
    apiBaseUrl: 'https://api.deepseek.com/v1',
    modelName: 'deepseek-chat',
    temperature: 0.8,      // 创意程度 (0-2)
    maxTokens: 500,        // 最大生成长度
    timeout: 30000         // 请求超时时间
};
```

### 温度参数说明

- **0.3-0.5**: 生成更规范、严谨的诗词
- **0.6-0.8**: 平衡创意和规范（推荐）
- **0.9-1.2**: 更有创意，但可能偏离传统格律

## 📱 浏览器兼容性

项目支持所有现代浏览器：

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE 不支持

## 🔐 安全注意事项

1. **API密钥保护**
   - 不要将 `config.js` 提交到公开仓库
   - 已将 `config.js` 添加到 `.gitignore`
   - 定期更换API密钥

2. **CORS设置**
   - DeepSeek API支持跨域请求
   - 本地开发建议使用HTTP服务器

3. **请求频率**
   - 注意API调用频率限制
   - 避免短时间内大量请求

## 📊 项目亮点

### 技术亮点

1. **原生JavaScript实现** - 无需任何框架，代码清晰易懂
2. **模块化设计** - 功能分离，易于维护和扩展
3. **优雅降级** - API调用失败时友好提示
4. **性能优化** - CSS动画，GPU加速

### 创新点

1. **传统文化与AI结合** - 现代技术演绎古典诗词
2. **独特视觉设计** - 避免通用AI界面，打造中国风格
3. **优秀用户体验** - 简洁操作，即时反馈
4. **教育意义** - 帮助学生学习和欣赏古诗词

## 🎓 学习价值

通过这个项目，可以学到：

1. **前端基础**
   - HTML5语义化标签
   - CSS3高级特性（渐变、动画、Flexbox）
   - JavaScript DOM操作和事件处理

2. **API集成**
   - Fetch API使用
   - 异步编程（async/await）
   - 错误处理

3. **UI/UX设计**
   - 响应式设计
   - 动画效果设计
   - 用户体验优化

4. **文化传承**
   - 中国传统美学
   - 古典诗词鉴赏

## 🚧 未来计划

- [ ] 添加诗词类型选择（绝句、律诗、词等）
- [ ] 支持自定义格律要求
- [ ] 添加诗词解析和注释功能
- [ ] 实现诗词收藏和历史记录
- [ ] 支持诗词分享到社交平台
- [ ] 添加诗词朗读功能
- [ ] 多主题切换（春夏秋冬）

## 🤝 贡献指南

欢迎提出建议和改进：

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 开源协议

本项目采用 MIT 协议开源。

## 👨‍💻 作者信息

- **姓名**: 张天佑
- **学校**: 沈阳市第二十八中学
- **班级**: 高一八班
- **联系**: [GitHub个人主页]

## 🙏 致谢

- **DeepSeek** - 提供强大的AI语言模型
- **Google Fonts** - 提供优质中文字体
- **沈阳市教育局** - 组织信息素养提升实践活动

## 📞 反馈与支持

如有问题或建议，欢迎：

- 提交 [GitHub Issue](https://github.com/your-username/poetry-generator/issues)
- 发送邮件至作者邮箱
- 在项目页面留言

---

**墨韵诗生，让AI为你写诗。** 🎋

*Created with ❤️ by 张天佑*
