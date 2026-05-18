# 个人作品展示博客

纯 HTML + CSS + JavaScript 实现的个人作品集网站，无需框架和构建工具，直接浏览器打开即可使用。

## 项目结构

```
myblog/
├── index.html            # 首页：个人介绍 + 精选作品
├── projects.html         # 作品列表：全部项目网格展示
├── project-detail.html   # 作品详情模板（复制此文件创建新详情页）
├── about.html            # 关于我：技能、经历、联系方式
├── css/
│   └── style.css         # 全局样式（变量、组件、响应式）
├── js/
│   └── main.js           # 交互逻辑（导航高亮、移动菜单、动画）
├── images/               # 放置本地图片资源（当前为空）
└── README.md             # 本文件
```

## 本地预览

**方法一（最简单）：直接双击**

在 Finder 中双击 `index.html`，即可用默认浏览器打开。

> 注意：直接用 `file://` 协议打开时，部分浏览器可能限制某些功能（如 fetch 请求）。对于本项目的静态展示功能，不受影响。

**方法二（推荐）：启动本地服务器**

如已安装 Python（macOS 自带）：

```bash
cd myblog
python3 -m http.server 8080
```

然后在浏览器访问：http://localhost:8080

如已安装 Node.js：

```bash
cd myblog
npx serve .
```

## 定制指南

### 修改个人信息

- **姓名 / 简介**：编辑 `index.html` 和 `about.html` 中的 Hero 区域
- **头像**：将图片放入 `images/` 文件夹，替换 `src` 中的 placehold.co 链接
- **联系方式**：修改 `about.html` 底部的 Contact 区域

### 添加新作品

1. 在 `projects.html` 中复制一个 `<article class="project-card">` 块，修改内容
2. 复制 `project-detail.html` 为新文件（如 `project-mywork.html`），填入具体内容
3. 将卡片的 `<a href="project-detail.html">` 改为指向新文件

### 修改配色

打开 `css/style.css`，修改 `:root` 中的 CSS 变量：

```css
:root {
  --accent: #4477EE;       /* 主色调（当前为蓝色） */
  --accent-hover: #3363DD; /* 悬停色 */
  --accent-light: #EEF2FF; /* 浅背景色 */
}
```

### 替换占位图

项目中的图片使用 [placehold.co](https://placehold.co) 占位服务。  
将真实图片放入 `images/` 后，替换对应 `<img>` 的 `src` 属性即可，例如：

```html
<!-- 替换前 -->
<img src="https://placehold.co/600x375/EEF2FF/4477EE?text=项目封面" />

<!-- 替换后 -->
<img src="images/my-project-cover.png" />
```

## 设计规范

| 属性 | 值 |
|------|----|
| 主色 | `#4477EE`（蓝色） |
| 背景 | `#F7F8FA` |
| 卡片背景 | `#FFFFFF` |
| 主文字 | `#1A1A1E` |
| 辅助文字 | `#6B7080` |
| 字体 | 系统字体栈（SF Pro / Segoe UI / PingFang SC） |
| 移动断点 | 640px（导航折叠）/ 480px（单列布局） |
