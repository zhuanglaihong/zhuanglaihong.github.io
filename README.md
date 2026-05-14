# 庄赖宏 · 个人主页

Scene Deck 范式的个人主页 — 第一屏「核心简历」 + 第二屏「个人空间」(太阳系平面 3D 星图 + 内联模块)。

**在线地址**:https://zhuanglaihong.github.io

---

## 项目结构

```
zhuanglaihong.github.io/
├── index.html        # 主页 (Scene Deck:核心简历 + 个人空间)
├── data.js           # ⭐ 所有"会变动的内容"都在这里
├── post.html         # 博客文章详情页 (?id=xxx)
├── classic.html      # 旧滚动布局备份(右上角"经典视图"按钮废弃后留作纪念)
├── resume.pdf        # 简历 PDF (Scene 1 底部"下载简历"按钮)
├── assets/
│   ├── gallery/      # 旅行 / 摄影图片
│   ├── covers/       # 书籍封面、demo 封面
│   ├── qr/           # 微信二维码等
│   ├── demos/        # 项目演示静态资源
│   └── README.md
└── README.md         # 本文档
```

---

## 维护流程总览

把 **「常用」** 和 **「偶尔」** 分清楚:

| 想做的事 | 改哪里 | 难度 |
|----------|--------|------|
| 加新读书 / 新博客 / 新资源 / 新爱好 / 新照片 | `data.js` | ★ |
| 改名字 / 角色介绍 / 头像字 | `index.html` (搜关键词) | ★ |
| 改经历 / 项目 / 论文 (简历内容) | `index.html` (Scene 1 tab 区) | ★★ |
| 加新项目演示 demo | `data.js` + `index.html`(注册函数) | ★★★ |
| 上传图片 / 微信二维码 | 放到 `assets/` + 改 `data.js` | ★ |

---

## 「常用」操作 - 改 `data.js`

`data.js` 是站点内容的唯一来源,改完刷新浏览器就生效。

文件开头有 `window.SITE_DATA = { ... }`,里面有 6 个字段:

```js
window.SITE_DATA = {
  hobbies:   [ ... ],   // 兴趣爱好
  reading:   [ ... ],   // 读过的书
  demos:     [ ... ],   // 项目演示脚本
  gallery:   [ ... ],   // 旅行摄影
  blog:      [ ... ],   // 博客文章
  resources: [ ... ],   // 我的资源
  contact:   { ... },   // 联系方式
};
```

要加 / 改 / 删一项,直接在对应数组里操作。每种类型的字段结构如下:

### 加新读书条目 (`reading`)

```js
{
  title: '人类简史',
  author: '尤瓦尔·赫拉利',
  finished: '2024-08',
  cover: '',                                          // 留空 = 显示"暂无封面"占位
  summary: '一句话感想。',
  rating: 5,                                          // 1-5 星
  link: 'https://book.douban.com/subject/25985021/',  // 留空就不显示外链
  tags: ['历史', '人类学'],
},
```

### 加新博客文章 (`blog`)

```js
{
  id: 'why-this-site',                  // 文章 URL slug,英文小写 + 短横线
  title: '为什么我做了这个主页',
  date: '2026-05-12',
  readingTime: 4,                        // 预估阅读分钟数
  tags: ['元', '建站'],
  summary: '一句话概要。',
  body: `
    <p>第一段。</p>
    <h2>小标题</h2>
    <p>正文。<strong>加粗</strong>、<em>强调</em>、<a href="链接">链接</a>。</p>
    <ul>
      <li>列表项</li>
    </ul>
  `,
},
```

> ⚠️ `id` 必须唯一,数组**最新文章放最前面**(按时间倒序)。

### 加新资源 (`resources`)

```js
{
  type: 'book',         // book / site / paper / file / course
  title: '资源标题',
  author: '作者或来源',
  desc: '一句话推荐理由。',
  url: 'https://...',   // 外链或本地文件 ./assets/resources/xxx.pdf
  tags: ['标签1', '标签2'],
},
```

### 加新爱好 (`hobbies`)

```js
{
  icon: '🎸',                  // emoji
  title: '吉他',
  desc: '一两句话描述。',
  tags: ['民谣'],
},
```

### 加新旅行照片 (`gallery`)

**两步**:
1. 把图片放到 `assets/gallery/` 目录,例:`assets/gallery/dalian-sea.jpg`
2. 在 `data.js` 的 `gallery` 数组加一项:

```js
{
  src: './assets/gallery/dalian-sea.jpg',
  caption: '海风把焦虑吹回了海里',
  location: '大连 · 星海湾',
  date: '2024-09',
},
```

**图片建议**:长边 ≤ 1600px,JPG/WebP,压缩到 200KB 以内(用 [Squoosh](https://squoosh.app/) 在线压)。

### 改联系方式 / 微信二维码 (`contact`)

```js
contact: {
  callout: '有想法?随时聊。',
  sub: '副标题',
  items: [
    { type: 'email',    label: '邮箱', value: 'xxx@xx.com', href: 'mailto:xxx@xx.com' },
    { type: 'github',   label: 'GitHub', value: '@xxx', href: 'https://github.com/xxx' },
    { type: 'wechat',   label: '微信', value: '扫码', qr: './assets/qr/wechat.png' },  // 加二维码图
    { type: 'location', label: '所在地', value: '大连 · 中国' },
    { type: 'resume',   label: '简历', value: '下载 PDF', href: 'resume.pdf' },
  ],
}
```

**微信二维码加图**:
1. 把二维码 PNG 放到 `assets/qr/wechat.png`(600×600 推荐)
2. `data.js` 里 wechat 那项的 `qr: ''` 改为 `qr: './assets/qr/wechat.png'`
3. 主页点联系我的"微信"会弹出二维码大图

---

## 「偶尔」操作 - 改 `index.html`

### 改头像字 / 名字 / 角色介绍

打开 `index.html`,搜以下关键词:

| 想改什么 | 搜索关键词 |
|---------|-----------|
| 头像里的"庄"字 | `class="s1-avatar"` |
| 名字"庄赖宏" | `class="s1-name"` |
| 角色介绍 | `class="s1-role"` |
| 开场动画上方文案 | `splash-tagline` |
| 网页标题 (浏览器标签) | `<title>` |

### 改 Scene 1 简历内容(经历 / 项目 / 论文 / 技能)

这部分是硬编码 HTML,搜以下锚点:

| Tab 内容 | 搜索关键词 |
|---------|-----------|
| 教育与实习 (timeline) | `data-pane="exp"` |
| 研究项目 | `data-pane="proj"` |
| 发表论文 | `data-pane="papers"` |
| 基本与技能 | `data-pane="skills"` |

每个 tab 内容区是一段独立 HTML,**复制粘贴整个 `<div class="tl-item">` 块**(经历/项目)或 `<div class="paper-item">` 块(论文)就能复制一项。

---

## 「特殊」操作 - 加新项目 demo

每个项目演示 (demo) 用 **预录脚本对话** 形式呈现,挂在 Scene 1 项目卡的「在线演示」按钮上。

### 加一个新 demo 的 3 步

**1. `data.js` 的 `demos` 数组加一项**:

```js
{
  id: 'floodnet',                          // 唯一 ID
  title: 'FloodNet · 洪水预报',
  desc: '一句话说明。',
  entry: 'floodnet',                        // 注册函数名 (跟 id 一致即可)
  script: [
    {
      user: '用户问的问题',
      thinking: ['步骤 1', '步骤 2', '步骤 3'],
      final: '最终回答,**支持 markdown 加粗**\n支持\n换行。',
    },
    { user: '...', thinking: [...], final: '...' },
  ],
},
```

**2. `index.html` 里注册渲染函数** — 找到 `registerDemo('hydroagent', ...)`,**复制一份**,把 ID 改成新 demo 的:

```js
registerDemo('floodnet', function mountFloodNet(container, demo) {
  // 复用 hydroagent 的 mount 函数体即可 — 它会自动读 demo.script 回放
  // (如果想要不一样的渲染,改这里)
});
```

> 如果用同样的"用户提问→思考→回答"形式,可以直接把 `mountHydroAgent` 函数体复制粘贴,改个名字就行。

**3. 在对应项目卡加按钮** — 找到对应项目的 `<div class="proj-links">`,加一行:

```html
<button type="button" class="proj-link video proj-demo-btn" data-demo="floodnet">
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
  在线演示
</button>
```

`data-demo` 的值要和 `data.js` 里 demo 的 `id` 一致。

---

## 改完怎么发布

### 本地预览(可选,先看看效果)

**双击 `index.html`** 在浏览器打开就行。所有功能都能跑(包括 data.js 加载、博客详情页、demo modal)。

### 推送到 GitHub Pages

在仓库目录里运行:

```bash
git add .
git commit -m "用一句话描述改了什么"
git push origin main
```

推送后 **约 1 分钟** GitHub Pages 会自动重新部署,访问 https://zhuanglaihong.github.io 看新版。

### 不会 git 命令行?

用 GitHub 网页版也行:
1. 浏览器打开 https://github.com/zhuanglaihong/zhuanglaihong.github.io
2. 点要改的文件 → 右上角 ✏ 编辑 → 改完 commit
3. 加新文件:仓库主页 → "Add file" → "Upload files" 拖图进去
4. 推送即生效

---

## 常见问题

**Q: 改完 data.js 没生效?**
A: 浏览器**强制刷新**:Ctrl+F5 (Win) / Cmd+Shift+R (Mac)。CDN 缓存可能让旧版 data.js 卡住。

**Q: data.js 改了但报错或主页空白?**
A: 多半是 JSON 格式错了(缺逗号、缺引号)。打开浏览器 F12 → Console 看红色错误。语法错误最常见的是"忘加逗号"或"中文引号"。

**Q: 博客文章正文怎么写?**
A: `body` 字段是 **HTML 字符串**,用反引号 `` ` `` 包起来支持多行。基本标签:`<p>` 段落,`<h2>` 标题,`<strong>` 加粗,`<em>` 倾斜,`<a href="">` 链接,`<ul><li>` 列表,`<pre><code>` 代码块,`<blockquote>` 引用。

**Q: 删掉某项怎么办?**
A: 直接在数组里删掉那一项(包括前后的逗号),刷新页面就消失。

**Q: 开场动画太频繁,关掉?**
A: 同一浏览器会话只播放一次(sessionStorage 防扰民)。要完全关闭,在 `index.html` 找到 `const FX = { ... SPLASH: true ... }`,改为 `SPLASH: false`。

**Q: 想看老版滚动布局?**
A: `classic.html` 是备份。直接访问 https://zhuanglaihong.github.io/classic.html 即可。
