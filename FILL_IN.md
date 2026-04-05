# 待补充内容清单

填完后删掉对应条目，然后更新 index.html 中标注 `// 待填写` 的位置。

---

## 1. 头像图片（必填）

- 准备一张个人照片，命名为 `avatar.jpg`，放到 `assets/` 文件夹中
- 然后在 `index.html` 中找到以下注释，取消注释并删掉占位符 div：

```html
<!-- <img src="assets/avatar.jpg" alt="庄赖宏" class="avatar-img" /> -->
```

---

## 2. GitHub 主页链接

- 你的 GitHub 主页地址：`https://github.com/zhuanglaihong`
- 需要替换的位置（2 处）：
  - 导航栏简历下载链接：`href="resume.pdf"`（可替换为 GitHub 链接或实际简历文件）
  - 联系区域 GitHub 链接：`href="YOUR_GITHUB_URL"`

---

## 3. 项目 GitHub 链接

| 项目 | GitHub 仓库地址 |
|------|----------------|
| RAG 水库调度知识库问答系统 | https://github.com/zhuanglaihong/hydroclaw |
| 洪水预报神经网络模型 | https://gitcode.com/dlut-water/llm-backend |

在 `index.html` 中找到对应项目的 `// 待填写链接` 注释，替换 `href="#"` 即可。

---

## 4. 论文链接

| 论文 | 链接（arXiv / DOI / 期刊页面） |
|------|-------------------------------|
| HydroClaw v1.0（一作，审稿中） | 审稿中暂无，可待录用后补充 |
| A Python Framework...（四作） | https://www.sciencedirect.com/science/article/abs/pii/S1364815226000423 |

在 `index.html` 中找到注释 `<!-- <a href="YOUR_PAPER_LINK" ...` 取消注释并填入链接。

---

## 5. 个人简介补充（可选）

在"关于我"板块有一行占位符：

```
// [兴趣爱好：爱好阅读,对历史感兴趣;音乐方面，会口琴和吉他
个人风格:喜欢各种有意思的开源工具，将其应用于生活中，用技术解决实际问题
]
```

可以补充 1-2 句，例如：
- 兴趣爱好（打球、摄影、读书等）
- 个人风格（喜欢折腾开源工具、热爱用技术解决实际问题等）

---

## 6. 简历文件（可选）

导航栏右侧有「简历」按钮，当前指向 `resume.pdf`。
- 把你的简历 PDF 放到仓库根目录，命名为 `resume.pdf` 即可
- 或者改为指向 GitHub / 其他在线地址

---

## 完成后如何发布

```bash
git add .
git commit -m "add personal homepage"
git push origin main
```

推送后等约 1 分钟，访问 https://zhuanglaihong.github.io 即可看到效果。

> 如需在 GitHub 设置中开启 Pages：
> 仓库 → Settings → Pages → Source 选 `main` 分支 → Save
