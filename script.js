// 全局变量
let currentPrompt = '';
let currentPoem = '';

// DOM元素
const promptInput = document.getElementById('prompt');
const generateBtn = document.getElementById('generateBtn');
const poemContent = document.getElementById('poemContent');
const poemActions = document.getElementById('poemActions');
const loadingOverlay = document.getElementById('loadingOverlay');
const copyBtn = document.getElementById('copyBtn');
const regenerateBtn = document.getElementById('regenerateBtn');
const toast = document.getElementById('toast');

// 快速提示按钮
const hintButtons = document.querySelectorAll('.hint-btn');
hintButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const hint = btn.getAttribute('data-hint');
        promptInput.value = hint;
        promptInput.focus();
    });
});

// 生成按钮点击事件
generateBtn.addEventListener('click', () => {
    const prompt = promptInput.value.trim();
    if (!prompt) {
        showToast('请输入诗词主题或一句话');
        promptInput.focus();
        return;
    }
    generatePoem(prompt);
});

// 回车键生成
promptInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateBtn.click();
    }
});

// 复制按钮
copyBtn.addEventListener('click', () => {
    if (currentPoem) {
        navigator.clipboard.writeText(currentPoem)
            .then(() => {
                showToast('诗词已复制到剪贴板');
            })
            .catch(() => {
                showToast('复制失败，请手动选择复制');
            });
    }
});

// 重新生成按钮
regenerateBtn.addEventListener('click', () => {
    if (currentPrompt) {
        generatePoem(currentPrompt);
    }
});

// 生成古诗函数
async function generatePoem(prompt) {
    currentPrompt = prompt;
    
    // 显示加载动画
    showLoading();
    
    // 隐藏操作按钮
    poemActions.style.display = 'none';
    
    try {
        // 检查API配置
        if (typeof DEEPSEEK_API_KEY === 'undefined' || !DEEPSEEK_API_KEY) {
            throw new Error('请先配置DeepSeek API密钥');
        }

        // 构建系统提示词
        const systemPrompt = `你是一位精通中国古典诗词的AI诗人。请根据用户提供的主题或一句话，创作一首优美的中国古诗。

要求：
1. 诗歌类型可以是五言绝句、七言绝句、五言律诗或七言律诗
2. 必须符合古诗的格律和韵律
3. 意境优美，富有诗意
4. 语言典雅，用词考究
5. 只返回诗词内容，不要添加任何解释或说明
6. 每句诗单独一行

示例格式：
春江花月夜
月落乌啼霜满天，
江枫渔火对愁眠。
姑苏城外寒山寺，
夜半钟声到客船。`;

        // 调用DeepSeek API
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: `请以"${prompt}"为主题创作一首古诗`
                    }
                ],
                temperature: 0.8,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `API请求失败: ${response.status}`);
        }

        const data = await response.json();
        
        // 提取生成的诗词
        if (data.choices && data.choices.length > 0) {
            const poem = data.choices[0].message.content.trim();
            currentPoem = poem;
            displayPoem(poem);
        } else {
            throw new Error('未能生成诗词，请重试');
        }

    } catch (error) {
        console.error('生成诗词时出错:', error);
        showToast(error.message || '生成失败，请检查网络连接和API配置');
        
        // 显示错误信息
        poemContent.innerHTML = `
            <div class="placeholder">
                <div class="placeholder-icon">❌</div>
                <p style="color: var(--cinnabar-red);">生成失败</p>
                <p class="placeholder-hint">${error.message}</p>
            </div>
        `;
    } finally {
        hideLoading();
    }
}

// 显示诗词
function displayPoem(poem) {
    // 清除占位符
    poemContent.classList.add('show');
    
    // 处理诗词格式
    const formattedPoem = formatPoem(poem);
    
    // 逐字显示效果
    poemContent.textContent = '';
    let index = 0;
    const interval = setInterval(() => {
        if (index < formattedPoem.length) {
            poemContent.textContent += formattedPoem[index];
            index++;
        } else {
            clearInterval(interval);
            // 显示操作按钮
            poemActions.style.display = 'flex';
        }
    }, 50);
}

// 格式化诗词
function formatPoem(poem) {
    // 移除多余的空行和空格
    let formatted = poem
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n');
    
    return formatted;
}

// 显示加载动画
function showLoading() {
    loadingOverlay.classList.add('active');
}

// 隐藏加载动画
function hideLoading() {
    loadingOverlay.classList.remove('active');
}

// 显示提示信息
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 页面加载时的欢迎动画
window.addEventListener('load', () => {
    // 可以添加一些欢迎动画或提示
    console.log('墨韵诗生 - AI古诗生成器已加载');
    console.log('请在config.js中配置DeepSeek API密钥');
});

// 错误处理
window.addEventListener('error', (e) => {
    console.error('页面错误:', e.message);
});

// 阻止表单默认提交行为
document.addEventListener('submit', (e) => {
    e.preventDefault();
});
