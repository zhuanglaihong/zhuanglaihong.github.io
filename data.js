/**
 * 站点内容数据
 * ============
 * 这是主页所有"会变动的内容"的唯一来源。要新增 / 修改 / 删除
 * 任何一项内容,只需要改这个文件,然后刷新页面即可,无需碰 HTML。
 *
 * 字段速查:
 *   hobbies  —— 兴趣爱好卡片
 *   reading  —— 读过的书
 *   demos    —— 在线演示(模态框打开)
 *   gallery  —— 旅行 / 摄影图片
 *   blog     —— 博客文章(列表 + 正文)
 *   contact  —— 联系方式
 *
 * 提示:
 *   - 数组的顺序就是页面上的显示顺序
 *   - 删除一项 → 这一项不再渲染
 *   - 图片放在 ./assets/<对应子目录>/ 下,src 用相对路径,例如
 *     "./assets/gallery/dalian-sea.jpg"
 *   - 图片暂时没有可以留空字符串 "",会显示占位渐变块
 */
window.SITE_DATA = {

  /* ============================ 兴趣爱好 ============================ */
  hobbies: [
    {
      icon: '📖',
      title: '阅读与历史',
      desc: '尤其偏爱近代史与思想史。读书是构建认知坐标系的方式 —— 让现在发生的事有处可放。',
      tags: ['历史', '哲学', '非虚构'],
    },
    {
      icon: '🎸',
      title: '吉他 & 口琴',
      desc: '不算技艺精湛,但很享受过程。睡前花十分钟弹一段,把白天没说出口的话讲给空气听。',
      tags: ['民谣', '布鲁斯'],
    },
    {
      icon: '⌨️',
      title: '开源与折腾',
      desc: '喜欢把生活里的小麻烦写成脚本。装机 / 调环境 / 试新工具,都是放松而非负担。',
      tags: ['Linux', 'CLI', '自动化'],
    },
    {
      icon: '🏊',
      title: '游泳与跑步',
      desc: '在水里思考,在路上倾听。运动是给大脑做的碎片整理,跑完往往能想通一些事。',
      tags: ['长距离', '清晨'],
    },
  ],

  /* ============================ 读书见闻 ============================ */
  reading: [
    {
      title: '人类简史',
      author: '尤瓦尔·赫拉利',
      finished: '2024-08',
      cover: '',
      summary: '把人类放回猿类与基因的尺度上重新讲一遍,你会发现"理所当然"几乎都站不住。',
      rating: 5,
      link: 'https://book.douban.com/subject/25985021/',
      tags: ['历史', '人类学'],
    },
    {
      title: '深度学习',
      author: 'Ian Goodfellow',
      finished: '2024-12',
      cover: '',
      summary: '不是入门书,是回头查的参考书。每过一段时间翻一次,对同一章会有不同感受。',
      rating: 4,
      link: '',
      tags: ['ML', '工具书'],
    },
    {
      title: '思考,快与慢',
      author: '丹尼尔·卡尼曼',
      finished: '2025-03',
      cover: '',
      summary: '系统一 vs 系统二的二分法粗糙但好用。读完会更愿意承认"我可能只是直觉,不是判断"。',
      rating: 4,
      link: 'https://book.douban.com/subject/10785583/',
      tags: ['认知科学', '心理学'],
    },
  ],

  /* ============================ 我的资源 ============================ */
  /* 类型说明:
     - book   书 (PDF / 实体书 / 电子书)
     - site   网站 / 在线工具
     - paper  论文 / 报告
     - file   下载文件 (各类资料)
     - course 公开课 / 视频教程 */
  resources: [
    {
      type: 'book',
      title: '深度学习 (花书)',
      author: 'Ian Goodfellow',
      desc: 'ML 教科书。理论部分非常扎实,适合系统化回顾。',
      url: 'https://www.deeplearningbook.org/',
      tags: ['深度学习', '教科书'],
    },
    {
      type: 'site',
      title: 'Papers with Code',
      author: 'Meta AI',
      desc: '论文 + 实现代码一站式检索,跟最新 SOTA 模型最方便。',
      url: 'https://paperswithcode.com/',
      tags: ['论文', '代码', 'ML'],
    },
    {
      type: 'site',
      title: 'Hugging Face',
      author: 'HF 社区',
      desc: '预训练模型仓库,Transformers / Datasets / Spaces 全栈生态。',
      url: 'https://huggingface.co/',
      tags: ['LLM', '模型库'],
    },
    {
      type: 'course',
      title: 'Andrej Karpathy · Neural Networks: Zero to Hero',
      author: 'Andrej Karpathy',
      desc: '从零手撸 Transformer 系列,把"为什么 + 怎么做"讲到极致。',
      url: 'https://karpathy.ai/zero-to-hero.html',
      tags: ['LLM', '视频教程'],
    },
    {
      type: 'paper',
      title: 'Attention Is All You Need',
      author: 'Vaswani et al., 2017',
      desc: 'Transformer 原始论文。每隔一段时间回读一次,体会都不同。',
      url: 'https://arxiv.org/abs/1706.03762',
      tags: ['Transformer', '必读'],
    },
    {
      type: 'file',
      title: '示例:我整理的水文 LLM 调研笔记 (PDF)',
      author: '',
      desc: '把 LLM 在水文领域的应用做了一份分类整理。占位:稍后上传到 assets/resources/。',
      url: '#TODO-upload-pdf',
      tags: ['笔记', '水文', 'LLM'],
    },
  ],

  /* ============================ 项目 demo (附属于"研究项目"卡) ============================ *
   * 每个 demo 对应一个 Scene 1 项目卡里的"在线演示"按钮。
   * 加新 demo:
   *   1. 在这里 push 一项 { id, title, desc, entry, script }
   *   2. 在 index.html 顶部用 registerDemo(id, mountFn) 注册渲染函数
   *   3. 在对应项目卡的演示按钮加 data-demo="xxx"
   */
  demos: [
    {
      id: 'hydroagent',
      title: 'HydroAgent · 水文智能助手',
      desc: '基于 LLM + 工具链的水文领域 Agent。本页是预录脚本回放,不接受任意输入。',
      entry: 'hydroagent',
      script: [
        {
          user: '辽宁碧流河流域未来 48 小时会有暴雨,帮我评估一下风险',
          thinking: [
            '识别地理实体: 辽宁 / 碧流河流域',
            '调用气象 API 获取未来 48h 降雨预报',
            '调用 DEM 数据库查询流域地形坡度',
            '匹配历史相似降雨事件下的水位响应',
            '综合给出风险等级与可执行建议',
          ],
          final: '风险等级: **中-高**。未来 48 小时累计降雨预计 65-90mm,主要集中在 21:00 - 次日 03:00。\n\n碧流河中下游平均坡度 8°,汇流时间约 6 小时,预计水位将在 24h 后上涨 1.2-1.8m,**接近橙色预警阈值**。\n\n建议: \n1. 下游低洼区(石河水库下游 12km 内)提前转移人员\n2. 调度水库腾出 5-10% 库容应对入库\n3. 部署无人机于 06:00 起对堤防关键节点巡查',
        },
        {
          user: '为什么不直接用气象局发布的预警?',
          thinking: [
            '分析问题意图: 用户在质疑独立预警的必要性',
            '对比通用气象预警与流域定制预警的差异维度',
            '组织解释: 时空粒度 / 流域响应 / 工程联动',
          ],
          final: '气象预警是"区域降雨"层级的,流域风险还要叠加: \n\n1. **地形响应**: 同样 80mm 降雨,平原与山区流域的水位响应差 3-5 倍\n2. **历史样本**: 本地 30 年 12 次类似事件中,2 次造成漫堤,可对照\n3. **联动调度**: 预警结论可直接对接水库、堤防、防汛指挥,而非"提醒公众注意"\n\n所以 HydroAgent 不是替代气象局,而是在气象数据上**叠加一层"对本流域意味着什么"的解读**。',
        },
        {
          user: '如果我要在自己的流域用,需要什么数据?',
          thinking: [
            '梳理 HydroAgent 的最小可用数据集',
            '区分 "必需" vs "可选" 数据源',
            '给出对接成本估计',
          ],
          final: '**必需** (3 项):\n- DEM 高程数据 (推荐 30m 分辨率)\n- 流域边界 shp 文件\n- 任一气象预报接口 (国家气象局 / 第三方均可)\n\n**可选,加了显著提升** (4 项):\n- 历史水位序列 (≥10 年)\n- 河道断面测量\n- 水库 / 闸坝调度记录\n- 实时雨量站数据\n\n对接成本: 必需数据通常 1-2 天可凑齐,公开数据居多。可选数据视当地数据开放程度,1-4 周不等。',
        },
      ],
    },
  ],

  /* ============================ 旅行 · 摄影 ============================ */
  gallery: [
    // 没有真实图片时,留空数组也会正常显示"暂未上传"的提示
    // 加图片示例:
    // {
    //   src: './assets/gallery/dalian-sea.jpg',
    //   caption: '海风把所有焦虑都吹回了海里',
    //   location: '大连 · 星海湾',
    //   date: '2024-09',
    // },
  ],

  /* ============================ 博客 / 技术随笔 ============================ */
  blog: [
    {
      id: 'why-this-site',
      title: '为什么我要做这个主页',
      date: '2026-05-12',
      readingTime: 4,
      tags: ['元', '建站', '思考'],
      summary: '一份简历可以告诉你我做过什么,但不能告诉你我是谁。这篇说说,我希望访客离开主页时带走什么。',
      body: `
        <p>这个主页最初是一份简历。深色背景、青绿色高亮、左侧栏 + 右内容 —— 是 Brittany Chiang 那套被仿过几千遍的模板。它工整、克制、专业,但它不是<strong>我</strong>。</p>

        <p>专业是我的一部分,但不是全部。我会写 RAG,也会弹一段不太熟练的口琴;读 Transformer,也读《人类简史》;调通 LLM 调用链,也喜欢清晨跑步时听见城市还没醒的声音。如果一个访客花了三分钟看完简历,只知道我在做 LLM 应用 —— 那他认识的是我的<em>职能</em>,不是我。</p>

        <h2>这个主页想做什么</h2>

        <p>我希望它能呈现三层:</p>

        <ol>
          <li><strong>能力</strong> —— 项目、论文、经历。给招聘者 / 合作者一个快速判断的入口。</li>
          <li><strong>趣味</strong> —— 读书、爱好、旅行。给同频的人一个"我们可以聊点什么"的钩子。</li>
          <li><strong>沉淀</strong> —— 博客、demo、思考。给我自己一个"过去半年我在想什么"的镜子。</li>
        </ol>

        <p>第三层最重要,也最容易被自己懒掉。所以我给它做了独立详情页、做了可玩的 demo 模态框、做了 JSON 驱动的内容架构 —— 把发布的摩擦力降到接近零。剩下的就是,有没有继续写下去的耐心。</p>

        <h2>技术上的固执</h2>

        <p>整个站点是<strong>纯 HTML/CSS/JS 单文件 + 一份 data.js</strong>。没有 React,没有构建工具,没有 Node 依赖。GitHub Pages 直接托管,双击 index.html 就能在本地预览。</p>

        <p>这不是因为我不会现代前端框架,而是因为:一个个人主页,如果每次更新都要打开 IDE、跑 dev server、构建、部署 —— 那它注定会逐渐荒废。摩擦力是创作的敌人。我宁可手写 HTML,也要保证三个月后回来,能五分钟内更新一篇博客。</p>

        <h2>关于这条路</h2>

        <p>如果你刚好也在折腾自己的主页,我的建议是: <strong>先想清楚你希望访客带走什么</strong>,再选技术。模板很多,炫技很容易,但能让人"哦,这个人挺有意思"的主页,需要一点真东西。</p>

        <p>真东西也可以很简单。一段诚实的自我介绍,一两个具体的项目故事,一份还在读的书单。比一个花里胡哨但空洞的"作品集"管用。</p>
      `,
    },
  ],

  /* ============================ 联系我 ============================ */
  contact: {
    callout: '有想法?随时聊。',
    sub: '科研合作 / 项目咨询 / 单纯交个朋友,都欢迎。',
    items: [
      { type: 'email',   label: '邮箱',   value: 'zlh994182204@163.com', href: 'mailto:zlh994182204@163.com' },
      { type: 'github',  label: 'GitHub', value: '@zhuanglaihong',       href: 'https://github.com/zhuanglaihong' },
      { type: 'wechat',  label: '微信',   value: '扫码加好友',            href: '', qr: '' /* 例:'./assets/qr/wechat.png' */ },
      { type: 'location',label: '所在地', value: '大连 · 中国',           href: '' },
      { type: 'resume',  label: '简历',   value: '下载 PDF',              href: 'resume.pdf' },
    ],
    footer: '由我自己亲手 + Claude 共同维护。最后更新: 2026-05',
  },
};
