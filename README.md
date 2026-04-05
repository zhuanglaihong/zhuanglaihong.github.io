# 庄赖宏 · 个人主页

基于 GitHub Pages 搭建的个人主页，设计风格参考 [Brittany Chiang](https://brittanychiang.com)。

**在线地址**：https://zhuanglaihong.github.io

---

## 项目结构

```
zhuanglaihong.github.io/
├── index.html        # 主页（所有内容和样式都在这一个文件里）
├── resume.pdf        # 简历，导航栏「简历」按钮指向此文件
├── assets/
│   └── avatar.jpg    # 头像（目前未使用，可按需启用）
└── README.md
```

---

## 如何修改内容

所有内容都在 `index.html` 中，用浏览器或任意文本编辑器（VS Code、记事本等）打开即可编辑。

### 修改基本信息（左侧栏）

搜索关键词 `id="sidebar"`，找到以下几处：

```html
<h1 class="sidebar-name">庄赖宏</h1>          <!-- 姓名 -->
<p class="sidebar-role">AI & 大模型应用开发者</p>  <!-- 职位 -->
<p class="sidebar-bio">...</p>                 <!-- 简短介绍 -->
```

### 修改关于我

搜索 `id="about"`，修改 `<div class="about-text">` 内的段落文字。

技能标签在下方 `<div class="skills-wrap">` 里，每个 `<span class="skill-tag">` 就是一个标签，增删即可。

### 修改经历

搜索 `id="experience"`，结构如下：

```html
<div class="tl-group">
  <div class="tl-group-label">工作经历</div>   <!-- 二级标题 -->
  <div class="timeline">
    <div class="tl-item">
      <div class="tl-period">时间</div>
      <div class="tl-body">
        <div class="tl-title">公司/学校名</div>  <!-- 三级标题 -->
        <div class="tl-sub">职位/专业</div>
        <p class="tl-desc">描述文字</p>
        <div class="tl-tags">
          <span class="tl-tag">标签</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

新增一段经历：复制一个 `<div class="tl-item">...</div>` 块粘贴在下方，修改内容即可。

### 修改项目

搜索 `id="projects"`，每个项目是一个 `<div class="proj-item">`：

```html
<div class="proj-item">
  <div class="proj-period">时间</div>
  <div class="proj-body">
    <div class="proj-title">
      <a href="项目链接" target="_blank">项目名称 ↗</a>
    </div>
    <p class="proj-desc">项目描述</p>
    <div class="proj-tags">
      <span class="proj-tag">技术标签</span>
    </div>
  </div>
</div>
```

没有链接时把 `<a href="...">` 换成普通文字即可。

### 修改论文

搜索 `id="papers"`，每篇论文是一个 `<div class="paper-item">`：

```html
<div class="paper-item">
  <div class="paper-year">年份 或 审稿中</div>
  <div class="paper-body">
    <div class="paper-title">论文标题</div>
    <p class="paper-desc">简短说明</p>
    <div class="paper-meta">
      <span class="paper-badge badge-teal">一作</span>
      <span class="paper-badge badge-teal">二区期刊</span>
      <span class="paper-badge badge-dim">审稿中</span>
      <!-- 有链接时加这行 -->
      <a href="论文链接" class="paper-badge badge-link" target="_blank">论文链接 ↗</a>
    </div>
  </div>
</div>
```

### 修改联系方式

搜索 `id="sidebar"` 下的 `sidebar-social`，修改各链接的 `href`。

---

## 修改后如何发布

每次修改完，在项目文件夹里执行：

```bash
git add .
git commit -m "描述一下改了什么"
git push origin main
```

推送后约 1 分钟，访问 https://zhuanglaihong.github.io 即可看到更新。
