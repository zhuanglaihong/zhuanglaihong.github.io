# assets 目录

存放主页用到的图片、二维码等静态资源。

| 子目录 | 用途 | 引用方式 (在 data.js 里) |
|--------|------|------------------------|
| `gallery/` | 旅行 / 摄影区块的图片 | `./assets/gallery/dalian-sea.jpg` |
| `covers/` | 读书封面、demo 封面 | `./assets/covers/sapiens.jpg` |
| `qr/` | 微信 / 公众号等二维码 | `./assets/qr/wechat.png` |
| `demos/` | 在线演示需要的静态图 | `./assets/demos/hydro-map.png` |

## 图片规范建议

- **gallery**: 长边 ≤ 1600px,JPG/WebP,压缩到 200KB 以内
- **covers**: 200×300 (书) 或 280×160 (demo),压缩到 50KB 以内
- **qr**: 600×600 PNG
- **demos**: 视需要,建议长边 ≤ 1200px

图片体积控制好,主页加载才快。可以用 [Squoosh](https://squoosh.app/) 在线压缩。
