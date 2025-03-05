# 双语婚礼邀请函模板 | Bilingual Wedding Invitation Template

一个优雅的中英双语婚礼邀请函网页模板，支持高度自定义，响应式设计。

An elegant bilingual (Chinese/English) wedding invitation webpage template with high customization and responsive design.

## ✨ 功能特点 | Features

- 🌐 中英双语支持 | Bilingual support (Chinese/English)
- 📱 响应式设计，完美适配移动端和PC端 | Responsive design for both mobile and desktop
- 🎨 优雅的动画效果 | Elegant animation effects
- 🎵 背景音乐 | Background music
- 🗺️ 地图导航支持 | Map navigation support
- 📅 婚礼流程时间线 | Wedding schedule timeline
- 👗 着装要求指南 | Dress code guide
- 💬 WhatsApp联系按钮 | WhatsApp contact buttons
- ⬇️ 邀请函下载功能 | Invitation download feature

## 🚀 快速开始 | Quick Start

1. 克隆此仓库 | Clone this repository
```bash
git clone https://github.com/yenyoong99/wedding_invitation.git
```

2. 在浏览器中打开 `index.html` 预览 | Open `index.html` in browser for preview

## 📝 自定义指南 | Customization Guide

### 1. 基本信息修改 | Basic Information
编辑 `index.html` 文件，修改以下部分：
- 新人姓名 (GROOM & BRIDE)
- 婚礼日期时间
- 婚礼地点
- 联系方式

### 2. 图片替换 | Image Replacement
将您的照片放在以下目录，并确保文件名匹配：
```
/uploads/
  ├── cover.jpg       # 封面图片 | Cover photo
  ├── couple.jpg      # 新人合照 | Couple photo
```

### 3. 背景音乐 | Background Music
1. 将音乐文件放在 `/music` 目录
2. 在 `index.html` 中修改音乐路径：
```html
<audio id="bgMusic" src="music/your-music.mp3" loop></audio>
```

### 4. 地图配置 | Map Configuration
修改地图链接：
```html
<a href="您的地图链接" target="_blank">
```
支持：
- Google Maps
- Waze
- 高德地图
- 百度地图

### 5. 样式定制 | Style Customization
编辑 `styles.css` 文件：
```css
:root {
  --primary-color: #您的主题色;
  --secondary-color: #您的次要颜色;
  --font-family: '您的字体', serif;
}
```

### 6. 时间线设置 | Timeline Settings
在 `index.html` 中修改婚礼流程时间线：
```html
<div class="timeline-item">
    <span class="time">具体时间</span>
    <span class="event">具体事件</span>
</div>
```

### 7. 邀请卡下载 | Invitation Card Download
1. 将邀请卡文件放在 `/uploads` 目录
2. 在 `script.js` 中修改邀请卡下载链接：
```js
function downloadInvitation() {
    window.open('./uploads/wedding_card.pdf', '_blank');
}
```

## 📂 项目结构 | Project Structure
```
wedding-invitation/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 脚本文件
├── images/            # 图片目录
├── music/             # 音乐目录
└── icons/             # 图标目录
```

## 🔧 高级自定义 | Advanced Customization

### 添加新功能 | Add New Features
1. 在 `script.js` 中添加新的函数
2. 在 `index.html` 中添加对应的HTML元素
3. 在 `styles.css` 中添加相应的样式

### 动画效果 | Animation Effects
修改 `styles.css` 中的动画设置：
```css
.animation-class {
    animation: your-animation-name 1s ease-in-out;
}
```

## 📱 兼容性 | Compatibility
- Chrome (推荐 | Recommended)
- Firefox
- Safari
- Edge

## 📄 许可证 | License
MIT License

## 🤝 贡献 | Contributing
欢迎提交 Issue 和 Pull Request

## 🙏 致谢 | Acknowledgments
- Font Awesome for icons
- Google Fonts for typography
