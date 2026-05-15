# assets 目录

存放主页用到的所有静态资源(图片、MP3、PDF、二维码 等)。

## 6 个子目录,放哪种文件

| 子目录 | 放什么 | 对应 data.js 字段 | 引用方式 |
|--------|--------|------------------|---------|
| `gallery/` | 旅行 / 摄影照片 | `gallery[].src` | `./assets/gallery/xxx.jpg` |
| `covers/` | 书籍封面 / 音乐专辑封面 | `reading[].cover` `music[].cover` | `./assets/covers/xxx.jpg` |
| `music/` | MP3 音频 | `music[].src` | `./assets/music/xxx.mp3` |
| `resources/` | 资源类 PDF / 文档 | `resources[].url`(type='file') | `./assets/resources/xxx.pdf` |
| `demos/` | 项目演示用静态图 | demo 内部 | `./assets/demos/xxx.png` |
| `qr/` | 微信 / 公众号二维码 | `contact.items[wechat].qr` | `./assets/qr/wechat.png` |

## 文件大小规范

| 文件类型 | 建议长边 | 建议体积 | 工具 |
|----------|---------|---------|------|
| **照片**(gallery) | ≤ 1600px | ≤ 200 KB | [Squoosh](https://squoosh.app/) |
| **封面**(covers) | 600×900(书) / 280×160(demo) | ≤ 50 KB | 同上 |
| **二维码**(qr) | 600×600 | ≤ 80 KB | 同上 |
| **MP3**(music) | — | ≤ 4 MB / 首(推荐 128 kbps) | ffmpeg / Audacity |
| **PDF**(resources) | — | ≤ 5 MB | 在线 PDF 压缩 |
| **演示图**(demos) | ≤ 1200px | ≤ 150 KB | 同照片 |

## GitHub 仓库容量限制

- **单文件** > 100 MB 会被 Git 直接拒绝
- 单仓库**推荐 < 5 GB**
- 大量 MP3/视频累积容易超 — 超过 50 首 MP3 建议改用图床/OSS,主页里引外链就行

## 加新文件的工作流

1. 文件压缩到合适大小
2. 起个**英文小写 + 连字符**的文件名(避免中文 / 空格,例 `dalian-sea-2024.jpg`,不是 `大连海.jpg`)
3. 拖到对应子目录
4. 打开根目录的 `data.js`,在对应数组里加一项,`src`/`cover`/`url` 字段填相对路径
5. 保存,刷新浏览器(强刷 Ctrl+F5 清缓存)
6. 没问题就 `git add . && git commit && git push`
