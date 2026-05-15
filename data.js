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
      // 可选:0-3 个延伸入口(无则不显示)
      related: [
        { label: '推荐入门:人类简史', url: 'https://book.douban.com/subject/25985021/' },
      ],
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
      title: '乡土中国',
      author: '费孝通',
      status: 'finished',
      finished: '2024-06',
      cover: '',
      summary: '一本薄书，说透了中国农村的底层逻辑。"差序格局"这个词，让我第一次有了解释"为什么中国人这样做事"的词汇工具。读完之后看很多社会现象，都能找到它的影子。',
      rating: 5,
      link: './assets/books/《乡土中国》费孝通.pdf',
      tags: ['社会学', '中国研究', '非虚构'],
    },
    {
      title: '明朝那些事儿',
      author: '当年明月',
      status: 'finished',
      finished: '2023-11',
      cover: '',
      summary: '用讲故事的方式把明史讲活了。朱元璋从乞丐到皇帝的叙述，让我意识到历史不是年表，是一个个具体的人在具体处境下做出的具体选择。历史书可以这么写，是当年明月教会我的。',
      rating: 5,
      link: '',
      tags: ['历史', '通俗历史', '明朝'],
    },
    {
      title: '资本论',
      author: '马克思',
      status: 'finished',
      finished: '2024-03',
      cover: '',
      summary: '读完才发现它更多是方法论而非政治宣言。用劳动价值论拆解商品关系的那一章，思维密度极高。它教会我用"生产关系"这个视角去看职场和社会，很多事突然说得通了。',
      rating: 4,
      link: '',
      tags: ['政治经济学', '经典', '哲学'],
    },
    {
      title: '无限恐怖',
      author: '流浪的蛤蟆',
      status: 'finished',
      finished: '2022-08',
      cover: '',
      summary: '国内最早系统构建"位面穿越"世界观的长篇，类型文学的标杆。推进剧情时那种"这个世界有规则，规则可以被破解"的快感，让人一口气读完。主角的成长是靠推演，不靠天赋，这点让人信服。',
      rating: 4,
      link: '',
      tags: ['网络小说', '科幻', '穿越'],
    },
    {
      title: '黑色纪元',
      author: '黑天魔神',
      status: 'finished',
      finished: '2023-02',
      cover: '',
      summary: '末世题材里逻辑最严密的几部之一。主角不靠天赋堆叠，靠推演和取舍。这种叙事让读者不是在看爽文，而是真的在思考困境中"如果是我，我会怎么选"。末世文能写到这个水准，少见。',
      rating: 4,
      link: '',
      tags: ['网络小说', '末世', '科幻'],
    },
  ],

  /* ============================ 私人电台 (音乐) ============================ *
   * 把 MP3 放到 ./assets/music/ 目录,src 用相对路径。
   * 浏览器会用原生 audio 控件播放,不需要任何额外 JS。
   * cover 留空会显示一个音符占位。
   */
  music: [
    { title: 'Faded', artist: 'Alan Walker', src: './assets/music/Alan Walker - Faded.mp3', duration: '', cover: '', note: '' },
    { title: 'Hotel California', artist: 'Eagles', src: './assets/music/Eagles - Hotel California.mp3', duration: '', cover: '', note: '', lrc: './assets/music/Eagles - Hotel California.lrc' },
    { title: '泡沫', artist: 'G.E.M.邓紫棋', src: './assets/music/G.E.M.邓紫棋 - 泡沫.mp3', duration: '', cover: '', note: '', lrc: './assets/music/G.E.M.邓紫棋 - 泡沫.lrc' },
    { title: 'Going Home (回家)', artist: 'Kenny G', src: './assets/music/Kenny G - Going Home (回家)(萨克斯版纯音乐).mp3', duration: '', cover: '', note: '' },
    { title: 'Moonlight Sonata', artist: 'Ludwig van Beethoven', src: './assets/music/Ludwig van Beethoven - Moonlight.mp3', duration: '', cover: '', note: '', lrc: './assets/music/Ludwig van Beethoven - Moonlight.lrc' },
    { title: 'Sugar', artist: 'Maroon 5', src: './assets/music/Maroon 5 - Sugar (Live).mp3', duration: '', cover: '', note: '' },
    { title: 'Take Me To Your Heart', artist: 'Michael Learns to Rock', src: './assets/music/Michael Learns to Rock - Take Me To Your Heart.mp3', duration: '', cover: '', note: '' },
    { title: '梦中的婚礼', artist: 'Richard Clayderman', src: './assets/music/Richard Clayderman - 梦中的婚礼 (钢琴曲).mp3', duration: '', cover: '', note: '', lrc: './assets/music/Richard Clayderman - 梦中的婚礼 (钢琴曲).lrc' },
    { title: 'Señorita', artist: 'Shawn Mendes & Camila Cabello', src: './assets/music/Shawn Mendes、Camila Cabello - Señorita.mp3', duration: '', cover: '', note: '' },
    { title: 'The Sound Of Silence', artist: 'Simon & Garfunkel', src: './assets/music/Simon & Garfunkel - The Sound Of Silence (寂静之声).mp3', duration: '', cover: '', note: '' },
    { title: 'Love Story', artist: 'Taylor Swift', src: './assets/music/Taylor Swift - Love Story (2015 1989世界巡回演唱会悉尼站).mp3', duration: '', cover: '', note: '' },
    { title: 'Victory', artist: 'Two Steps From Hell', src: './assets/music/Two Steps From Hell - Victory.mp3', duration: '', cover: '', note: '', lrc: './assets/music/Two Steps From Hell - Victory.lrc' },
    { title: '二泉映月', artist: '阿炳', src: './assets/music/阿炳 - 二泉映月.mp3', duration: '', cover: '', note: '' },
    { title: '日不落', artist: '蔡依林', src: './assets/music/蔡依林 - 日不落.mp3', duration: '', cover: '', note: '', lrc: './assets/music/蔡依林 - 日不落.lrc' },
    { title: '奇妙能力歌', artist: '陈粒', src: './assets/music/陈粒 - 奇妙能力歌.mp3', duration: '', cover: '', note: '' },
    { title: '爱情转移', artist: '陈奕迅', src: './assets/music/陈奕迅 - 爱情转移.mp3', duration: '', cover: '', note: '', lrc: './assets/music/陈奕迅 - 爱情转移.lrc' },
    { title: '浮夸', artist: '陈奕迅', src: './assets/music/陈奕迅 - 浮夸.mp3', duration: '', cover: '', note: '', lrc: './assets/music/陈奕迅 - 浮夸.lrc' },
    { title: '孤勇者', artist: '陈奕迅', src: './assets/music/陈奕迅 - 孤勇者.mp3', duration: '', cover: '', note: '' },
    { title: '好久不见', artist: '陈奕迅', src: './assets/music/陈奕迅 - 好久不见.mp3', duration: '', cover: '', note: '', lrc: './assets/music/陈奕迅 - 好久不见.lrc' },
    { title: '十年', artist: '陈奕迅', src: './assets/music/陈奕迅 - 十年.mp3', duration: '', cover: '', note: '', lrc: './assets/music/陈奕迅 - 十年.lrc' },
    { title: '卡农', artist: '纯音乐', src: './assets/music/纯音乐 - 卡农.mp3', duration: '', cover: '', note: '', lrc: './assets/music/纯音乐 - 卡农.lrc' },
    { title: '2002年的第一场雪', artist: '刀郎', src: './assets/music/刀郎 - 2002年的第一场雪.mp3', duration: '', cover: '', note: '' },
    { title: '盗将行', artist: '花粥、马雨阳', src: './assets/music/花粥、马雨阳 - 盗将行.mp3', duration: '', cover: '', note: '' },
    { title: '烟火里的尘埃', artist: '华晨宇', src: './assets/music/华晨宇 - 烟火里的尘埃 (2014北京火星演唱会).mp3', duration: '', cover: '', note: '' },
    { title: '贝加尔湖畔', artist: '李健', src: './assets/music/李健 - 贝加尔湖畔.mp3', duration: '', cover: '', note: '' },
    { title: '不将就', artist: '李荣浩', src: './assets/music/李荣浩 - 不将就.mp3', duration: '', cover: '', note: '', lrc: './assets/music/李荣浩 - 不将就.lrc' },
    { title: '李白', artist: '李荣浩', src: './assets/music/李荣浩 - 李白.mp3', duration: '', cover: '', note: '', lrc: './assets/music/李荣浩 - 李白.lrc' },
    { title: '模特', artist: '李荣浩', src: './assets/music/李荣浩 - 模特.mp3', duration: '', cover: '', note: '', lrc: './assets/music/李荣浩 - 模特.lrc' },
    { title: '嗯', artist: '李荣浩', src: './assets/music/李荣浩 - 嗯.mp3', duration: '', cover: '', note: '', lrc: './assets/music/李荣浩 - 嗯.lrc' },
    { title: '喜剧之王', artist: '李荣浩', src: './assets/music/李荣浩 - 喜剧之王.mp3', duration: '', cover: '', note: '', lrc: './assets/music/李荣浩 - 喜剧之王.lrc' },
    { title: '曹操', artist: '林俊杰', src: './assets/music/林俊杰 - 曹操(1).mp3', duration: '', cover: '', note: '' },
    { title: '记得', artist: '林俊杰', src: './assets/music/林俊杰 - 记得.mp3', duration: '', cover: '', note: '' },
    { title: '江南', artist: '林俊杰', src: './assets/music/林俊杰 - 江南(1).mp3', duration: '', cover: '', note: '' },
    { title: '可惜没如果', artist: '林俊杰', src: './assets/music/林俊杰 - 可惜没如果.mp3', duration: '', cover: '', note: '', lrc: './assets/music/林俊杰 - 可惜没如果.lrc' },
    { title: '修炼爱情', artist: '林俊杰', src: './assets/music/林俊杰 - 修炼爱情.mp3', duration: '', cover: '', note: '', lrc: './assets/music/林俊杰 - 修炼爱情.lrc' },
    { title: '你是我的眼', artist: '林宥嘉', src: './assets/music/林宥嘉 - 你是我的眼 (2010第17届东方风云榜颁奖盛典现场).mp3', duration: '', cover: '', note: '', lrc: './assets/music/林宥嘉 - 你是我的眼 (2010第17届东方风云榜颁奖盛典现场).lrc' },
    { title: '单身情歌', artist: '林志炫', src: './assets/music/林志炫 - 单身情歌 (CCTV音乐频道).mp3', duration: '', cover: '', note: '' },
    { title: '入海', artist: '毛不易', src: './assets/music/毛不易 - 入海.mp3', duration: '', cover: '', note: '' },
    { title: '慢慢喜欢你', artist: '莫文蔚', src: './assets/music/莫文蔚 - 慢慢喜欢你.mp3', duration: '', cover: '', note: '' },
    { title: '快乐崇拜', artist: '潘玮柏、张韶涵', src: './assets/music/潘玮柏、张韶涵 - 快乐崇拜.mp3', duration: '', cover: '', note: '', lrc: './assets/music/潘玮柏、张韶涵 - 快乐崇拜.lrc' },
    { title: '生如夏花', artist: '朴树', src: './assets/music/朴树 - 生如夏花.mp3', duration: '', cover: '', note: '', lrc: './assets/music/朴树 - 生如夏花.lrc' },
    { title: '遇见', artist: '孙燕姿', src: './assets/music/孙燕姿 - 遇见.mp3', duration: '', cover: '', note: '', lrc: './assets/music/孙燕姿 - 遇见.lrc' },
    { title: '夜空中最亮的星', artist: '逃跑计划', src: './assets/music/逃跑计划 - 夜空中最亮的星.mp3', duration: '', cover: '', note: '', lrc: './assets/music/逃跑计划 - 夜空中最亮的星.lrc' },
    { title: '春天里', artist: '汪峰', src: './assets/music/汪峰 - 春天里.mp3', duration: '', cover: '', note: '' },
    { title: '丑八怪', artist: '薛之谦', src: './assets/music/薛之谦 - 丑八怪.mp3', duration: '', cover: '', note: '', lrc: './assets/music/薛之谦 - 丑八怪.lrc' },
    { title: '刚刚好', artist: '薛之谦', src: './assets/music/薛之谦 - 刚刚好.mp3', duration: '', cover: '', note: '', lrc: './assets/music/薛之谦 - 刚刚好.lrc' },
    { title: '认真的雪', artist: '薛之谦', src: './assets/music/薛之谦 - 认真的雪.mp3', duration: '', cover: '', note: '', lrc: './assets/music/薛之谦 - 认真的雪.lrc' },
    { title: '哑巴', artist: '薛之谦', src: './assets/music/薛之谦 - 哑巴.mp3', duration: '', cover: '', note: '', lrc: './assets/music/薛之谦 - 哑巴.lrc' },
    { title: '演员', artist: '薛之谦', src: './assets/music/薛之谦 - 演员.mp3', duration: '', cover: '', note: '', lrc: './assets/music/薛之谦 - 演员.lrc' },
    { title: '明天过后', artist: '张杰', src: './assets/music/张杰 - 明天过后.mp3', duration: '', cover: '', note: '' },
    { title: '逆战', artist: '张杰', src: './assets/music/张杰 - 逆战.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张杰 - 逆战.lrc' },
    { title: '三生三世', artist: '张杰', src: './assets/music/张杰 - 三生三世.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张杰 - 三生三世.lrc' },
    { title: '星辰', artist: '张杰', src: './assets/music/张杰 - 星辰.mp3', duration: '', cover: '', note: '' },
    { title: '夜空中最亮的星', artist: '张杰', src: './assets/music/张杰 - 夜空中最亮的星.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张杰 - 夜空中最亮的星.lrc' },
    { title: 'Dream It Possible', artist: '张靓颖', src: './assets/music/张靓颖 - Dream It Possible.mp3', duration: '', cover: '', note: '' },
    { title: 'GO', artist: '张韶涵', src: './assets/music/张韶涵 - GO.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - GO.lrc' },
    { title: 'Honesty', artist: '张韶涵', src: './assets/music/张韶涵 - Honesty.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - Honesty.lrc' },
    { title: "If I'm The One For You", artist: '张韶涵', src: "./assets/music/张韶涵 - If I'm The One For You.mp3", duration: '', cover: '', note: '', lrc: "./assets/music/张韶涵 - If I'm The One For You.lrc" },
    { title: 'That Girl', artist: '张韶涵', src: './assets/music/张韶涵 - That Girl.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - That Girl.lrc' },
    { title: '阿刁 (Live)', artist: '张韶涵', src: './assets/music/张韶涵 - 阿刁 (Live).mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 阿刁 (Live).lrc' },
    { title: '把你信仰', artist: '张韶涵', src: './assets/music/张韶涵 - 把你信仰.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 把你信仰.lrc' },
    { title: '不害怕', artist: '张韶涵', src: './assets/music/张韶涵 - 不害怕.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 不害怕.lrc' },
    { title: '不后悔', artist: '张韶涵', src: './assets/music/张韶涵 - 不后悔.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 不后悔.lrc' },
    { title: '不想懂得', artist: '张韶涵', src: './assets/music/张韶涵 - 不想懂得.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 不想懂得.lrc' },
    { title: '第一页', artist: '张韶涵', src: './assets/music/张韶涵 - 第一页.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 第一页.lrc' },
    { title: '还记得吗 (青春摇滚版)', artist: '张韶涵', src: './assets/music/张韶涵 - 还记得吗 (青春摇滚版).mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 还记得吗 (青春摇滚版).lrc' },
    { title: '还记得吗 (深情弦乐版)', artist: '张韶涵', src: './assets/music/张韶涵 - 还记得吗 (深情弦乐版).mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 还记得吗 (深情弦乐版).lrc' },
    { title: '红红的太阳', artist: '张韶涵', src: './assets/music/张韶涵 - 红红的太阳.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 红红的太阳.lrc' },
    { title: '讲不听', artist: '张韶涵', src: './assets/music/张韶涵 - 讲不听.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 讲不听.lrc' },
    { title: '来过我生命的你 (Live)', artist: '张韶涵', src: './assets/music/张韶涵 - 来过我生命的你 (Live).mp3', duration: '', cover: '', note: '' },
    { title: '淋雨一直走', artist: '张韶涵', src: './assets/music/张韶涵 - 淋雨一直走.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 淋雨一直走.lrc' },
    { title: '漫步云端 (Live)', artist: '张韶涵', src: './assets/music/张韶涵 - 漫步云端 (Live).mp3', duration: '', cover: '', note: '' },
    { title: '没离开过', artist: '张韶涵', src: './assets/music/张韶涵 - 没离开过.mp3', duration: '', cover: '', note: '' },
    { title: '欧若拉', artist: '张韶涵', src: './assets/music/张韶涵 - 欧若拉.mp3', duration: '', cover: '', note: '' },
    { title: '亲爱的那不是爱情', artist: '张韶涵', src: './assets/music/张韶涵 - 亲爱的那不是爱情.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 亲爱的那不是爱情.lrc' },
    { title: '全面沦陷', artist: '张韶涵', src: './assets/music/张韶涵 - 全面沦陷.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 全面沦陷.lrc' },
    { title: '全世界失眠 (Live)', artist: '张韶涵', src: './assets/music/张韶涵 - 全世界失眠 (Live).mp3', duration: '', cover: '', note: '' },
    { title: '谁的乌托邦', artist: '张韶涵', src: './assets/music/张韶涵 - 谁的乌托邦.mp3', duration: '', cover: '', note: '' },
    { title: '是否爱过我 (Live)', artist: '张韶涵', src: './assets/music/张韶涵 - 是否爱过我 (Live).mp3', duration: '', cover: '', note: '' },
    { title: '是我', artist: '张韶涵', src: './assets/music/张韶涵 - 是我.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 是我.lrc' },
    { title: '瞬间移动', artist: '张韶涵', src: './assets/music/张韶涵 - 瞬间移动.mp3', duration: '', cover: '', note: '' },
    { title: '王子病', artist: '张韶涵', src: './assets/music/张韶涵 - 王子病.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 王子病.lrc' },
    { title: '忘了', artist: '张韶涵', src: './assets/music/张韶涵 - 忘了.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 忘了.lrc' },
    { title: '我没改变', artist: '张韶涵', src: './assets/music/张韶涵 - 我没改变.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 我没改变.lrc' },
    { title: '相拥各自不完整', artist: '张韶涵', src: './assets/music/张韶涵 - 相拥各自不完整.mp3', duration: '', cover: '', note: '' },
    { title: '兄弟姐妹', artist: '张韶涵', src: './assets/music/张韶涵 - 兄弟姐妹.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 兄弟姐妹.lrc' },
    { title: '遗失的美好', artist: '张韶涵', src: './assets/music/张韶涵 - 遗失的美好.mp3', duration: '', cover: '', note: '' },
    { title: '隐形的翅膀', artist: '张韶涵', src: './assets/music/张韶涵 - 隐形的翅膀.mp3', duration: '', cover: '', note: '' },
    { title: '有形的翅膀', artist: '张韶涵', src: './assets/music/张韶涵 - 有形的翅膀.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 有形的翅膀.lrc' },
    { title: '再见之前', artist: '张韶涵', src: './assets/music/张韶涵 - 再见之前.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 再见之前.lrc' },
    { title: '在人间 (Live)', artist: '张韶涵', src: './assets/music/张韶涵 - 在人间 (Live).mp3', duration: '', cover: '', note: '' },
    { title: '终于', artist: '张韶涵', src: './assets/music/张韶涵 - 终于.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 终于.lrc' },
    { title: '追梦赤子心 (Live)', artist: '张韶涵', src: './assets/music/张韶涵 - 追梦赤子心 (Live).mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 追梦赤子心 (Live).lrc' },
    { title: '最近好吗', artist: '张韶涵', src: './assets/music/张韶涵 - 最近好吗.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵 - 最近好吗.lrc' },
    { title: '黎明前的黑暗 (Live)', artist: '张韶涵、王晰', src: './assets/music/张韶涵、王晰 - 黎明前的黑暗 (Live).mp3', duration: '', cover: '', note: '', lrc: './assets/music/张韶涵、王晰 - 黎明前的黑暗 (Live).lrc' },
    { title: '吻别', artist: '张学友', src: './assets/music/张学友 - 吻别.mp3', duration: '', cover: '', note: '', lrc: './assets/music/张学友 - 吻别.lrc' },
    { title: '成都 (Live)', artist: '赵雷', src: './assets/music/赵雷 - 成都 (Live).mp3', duration: '', cover: '', note: '' },
    { title: '稻香', artist: '周杰伦', src: './assets/music/周杰伦 - 稻香.mp3', duration: '', cover: '', note: '', lrc: './assets/music/周杰伦 - 稻香.lrc' },
    { title: '东风破', artist: '周杰伦', src: './assets/music/周杰伦 - 东风破.mp3', duration: '', cover: '', note: '', lrc: './assets/music/周杰伦 - 东风破.lrc' },
    { title: '七里香', artist: '周杰伦', src: './assets/music/周杰伦 - 七里香.mp3', duration: '', cover: '', note: '', lrc: './assets/music/周杰伦 - 七里香.lrc' },
    { title: '青花瓷', artist: '周杰伦', src: './assets/music/周杰伦 - 青花瓷.mp3', duration: '', cover: '', note: '', lrc: './assets/music/周杰伦 - 青花瓷.lrc' },
    { title: '晴天', artist: '周杰伦', src: './assets/music/周杰伦 - 晴天.mp3', duration: '', cover: '', note: '', lrc: './assets/music/周杰伦 - 晴天.lrc' },
    { title: '大鱼', artist: '周深', src: './assets/music/周深 - 大鱼.mp3', duration: '', cover: '', note: '', lrc: './assets/music/周深 - 大鱼.lrc' },
    { title: '一万个舍不得', artist: '庄心妍', src: './assets/music/庄心妍 - 一万个舍不得 (DJ阿远 Remix).mp3', duration: '', cover: '', note: '' },
    { title: '故乡的原风景', artist: '宗次郎', src: './assets/music/宗次郎 - 故郷の原風景 (故乡的原风景).mp3', duration: '', cover: '', note: '' },
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
      type: 'app',
      title: 'Obsidian',
      author: '本地知识库 / 笔记 App',
      desc: '我的私人记录主战场。双向链接 + 本地 Markdown,数据完全自有。',
      url: 'https://obsidian.md/',
      tags: ['笔记', 'PKM'],
    },
    {
      type: 'tool',
      title: 'Claude Code',
      author: 'Anthropic 终端 AI 编程工具',
      desc: '现在写这个主页的就是它。能持续对话 + 改代码 + 跑命令,工作流深度集成。',
      url: 'https://claude.com/claude-code',
      tags: ['AI', '编程', 'CLI'],
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

  /* ============================ 旅行 · 摄影 ============================ *
   * 加 album 字段会按相册分组(同名 album 聚一起);无 album 字段 = 时间线模式
   * 图片放到 ./assets/gallery/ 目录,src 用相对路径
   * 图片比例不限 — 用 CSS columns 瀑布流自适应高度
   */
  gallery: [
    // 没有真实图片时,留空数组也会正常显示"暂未上传"的提示
    //
    // 时间线模式示例(无 album):
    // {
    //   src: './assets/gallery/dalian-sea.jpg',
    //   caption: '海风把所有焦虑都吹回了海里',
    //   location: '大连 · 星海湾',
    //   date: '2024-09',
    // },
    //
    // 相册分组示例(加 album):
    // {
    //   src: './assets/gallery/2024-graduation-01.jpg',
    //   caption: '答辩通过的那个下午',
    //   location: '大连理工 · 主楼',
    //   date: '2024-06',
    //   album: '2024 毕业季 · 大连',
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
    footer: '',
  },
};
