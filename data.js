// ============================================
// 才哥自研学学习导航 - 网站数据文件
// 编辑此文件即可添加/修改网站，无需改动代码
// 格式：{ category, name, url, desc, icon, tags }
//   category: 分类名称（需与下方 categories 一致）
//   name: 网站名称
//   url: 网站地址
//   desc: 网站描述（一句话）
//   icon: emoji 图标（可选，留空则自动生成首字母头像）
//   tags: 标签数组，可选值："热门"、"新"、"推荐"
// ============================================

window.sitesData = [
  // 🔥 热门推荐
  { category: "热门推荐", icon: "🤖", name: "豆包", url: "https://www.doubao.com", desc: "字节跳动旗下AI助手，支持问答、写作、翻译、编程及图片视频生成", tags: ["热门"] },
  { category: "热门推荐", icon: "📺", name: "哔哩哔哩", url: "https://www.bilibili.com", desc: "国内领先的视频弹幕网站，涵盖番剧、游戏、科技、学习等海量内容", tags: ["热门"] },
  { category: "热门推荐", icon: "🔍", name: "百度", url: "https://www.baidu.com", desc: "全球最大的中文搜索引擎，查找信息的第一入口", tags: ["推荐"] },
  { category: "热门推荐", icon: "🛒", name: "淘宝", url: "https://www.taobao.com", desc: "亚洲最大的网购零售平台，商品种类丰富，价格实惠", tags: ["热门"] },
  { category: "热门推荐", icon: "💡", name: "知乎", url: "https://www.zhihu.com", desc: "中文互联网高质量问答社区，各行各业的人分享知识经验", tags: ["推荐"] },
  { category: "热门推荐", icon: "📱", name: "抖音", url: "https://www.douyin.com", desc: "记录美好生活的短视频平台，内容丰富，算法推荐精准", tags: ["热门"] },
  { category: "热门推荐", icon: "📰", name: "微博", url: "https://weibo.com", desc: "随时随地发现新鲜事，社交媒体平台，热点事件第一时间", tags: [] },
  { category: "热门推荐", icon: "💬", name: "微信", url: "https://weixin.qq.com", desc: "腾讯旗下即时通讯工具，支持聊天、朋友圈、公众号、小程序", tags: ["推荐"] },

  // 🤖 AI 工具
  { category: "AI工具", icon: "🤖", name: "ChatGPT", url: "https://chatgpt.com", desc: "OpenAI推出的通用AI助手，支持问答、写作、推理、编程与多模态创作", tags: ["热门"] },
  { category: "AI工具", icon: "🧠", name: "Claude", url: "https://claude.ai", desc: "Anthropic的AI助手，擅长长文分析、文档处理、编程与复杂任务协作", tags: ["热门"] },
  { category: "AI工具", icon: "🐋", name: "DeepSeek", url: "https://chat.deepseek.com", desc: "深度求索推出的AI助手，擅长深度推理、代码、创作与文件阅读", tags: ["热门"] },
  { category: "AI工具", icon: "🌙", name: "Kimi", url: "https://www.kimi.com", desc: "月之暗面推出的AI助手，面向长文本、知识工作、搜索与智能体任务", tags: ["热门"] },
  { category: "AI工具", icon: "🔮", name: "通义千问", url: "https://tongyi.aliyun.com", desc: "阿里官方AI助手，支持AI搜索、网页总结、PPT、写作与图片生成", tags: [] },
  { category: "AI工具", icon: "✍️", name: "文心一言", url: "https://yiyan.baidu.com", desc: "百度推出的知识增强型AI助手，提供搜索、创作、分析与多模态能力", tags: [] },
  { category: "AI工具", icon: "🎤", name: "讯飞星火", url: "https://xinghuo.xfyun.cn", desc: "科大讯飞AI助手，覆盖问答、写作、办公、学习、编程与语音场景", tags: [] },
  { category: "AI工具", icon: "✨", name: "Gemini", url: "https://gemini.google.com", desc: "Google的个人AI助理，可辅助写作、规划、头脑风暴与多模态理解", tags: [] },
  { category: "AI工具", icon: "🎨", name: "即梦AI", url: "https://jimeng.jianying.com", desc: "字节跳动旗下一站式AI创作平台，支持中文提示词生成图片和视频", tags: ["新"] },
  { category: "AI工具", icon: "🔎", name: "秘塔AI搜索", url: "https://metaso.cn", desc: "无广告AI搜索引擎，支持全网、学术与文库检索，提供引用溯源", tags: ["推荐"] },

  // 🔍 搜索引擎
  { category: "搜索引擎", icon: "🔍", name: "百度", url: "https://www.baidu.com", desc: "全球最大的中文搜索引擎，查找信息的第一入口", tags: ["推荐"] },
  { category: "搜索引擎", icon: "🌐", name: "Google", url: "https://www.google.com", desc: "全球最大的搜索引擎，搜索结果全面，支持多语言", tags: ["热门"] },
  { category: "搜索引擎", icon: "🅱️", name: "必应", url: "https://www.bing.com", desc: "微软旗下搜索引擎，集成AI搜索功能，图片搜索体验优秀", tags: [] },
  { category: "搜索引擎", icon: "🐕", name: "搜狗", url: "https://www.sogou.com", desc: "搜狗搜索，支持微信公众号和知乎内容搜索", tags: [] },
  { category: "搜索引擎", icon: "🦆", name: "DuckDuckGo", url: "https://duckduckgo.com", desc: "注重隐私的搜索引擎，不追踪用户，不存储个人数据", tags: ["新"] },
  { category: "搜索引擎", icon: "🔎", name: "秘塔AI搜索", url: "https://metaso.cn", desc: "无广告AI搜索引擎，支持深度研究、事实核验和引用溯源", tags: ["推荐"] },
  { category: "搜索引擎", icon: "📚", name: "知乎搜索", url: "https://www.zhihu.com/search", desc: "搜索知乎社区内的高质量问答和文章内容", tags: [] },
  { category: "搜索引擎", icon: "🎯", name: "360搜索", url: "https://www.so.com", desc: "360旗下搜索引擎，安全防护，搜索结果精准", tags: [] },

  // 📚 学习教育
  { category: "学习教育", icon: "🎓", name: "中国大学MOOC", url: "https://www.icourse163.org", desc: "高教社与网易联合推出的中文慕课平台，提供国内高校课程", tags: ["热门"] },
  { category: "学习教育", icon: "🏛️", name: "学堂在线", url: "https://www.xuetangx.com", desc: "清华大学发起的精品中文慕课平台，汇聚国内外高校课程", tags: ["推荐"] },
  { category: "学习教育", icon: "📖", name: "网易公开课", url: "https://open.163.com", desc: "老牌中文开放学习平台，收录国内外大学公开课、TED、纪录片", tags: [] },
  { category: "学习教育", icon: "📺", name: "B站学习区", url: "https://www.bilibili.com/v/knowledge", desc: "哔哩哔哩知识区，海量免费学习视频，从编程到外语应有尽有", tags: ["热门"] },
  { category: "学习教育", icon: "💻", name: "慕课网", url: "https://www.imooc.com", desc: "面向程序员的在线学习平台，强调项目实践与职业技能", tags: [] },
  { category: "学习教育", icon: "🌍", name: "Coursera", url: "https://www.coursera.org", desc: "全球知名在线学习平台，与大学和企业合作提供课程与证书", tags: [] },
  { category: "学习教育", icon: "🎓", name: "edX", url: "https://www.edx.org", desc: "哈佛和MIT发起的在线教育平台，许多课程支持免费旁听", tags: [] },
  { category: "学习教育", icon: "🧮", name: "可汗学院", url: "https://www.khanacademy.org", desc: "免费非营利学习平台，覆盖数学、科学、计算机等基础课程", tags: ["推荐"] },
  { category: "学习教育", icon: "📄", name: "百度文库", url: "https://wenku.baidu.com", desc: "在线文档分享平台，涵盖教学资料、考试题库、专业资料", tags: [] },
  { category: "学习教育", icon: "✏️", name: "知乎", url: "https://www.zhihu.com", desc: "高质量问答社区，各行各业的人分享知识经验和见解", tags: [] },

  // 🆓 免费学习（精选完全免费的学习资源）
  { category: "免费学习", icon: "🏛️", name: "国家高等教育智慧平台", url: "https://higher.smartedu.cn", desc: "教育部主导，清华北大等名校课程，7000+门大学课程免费学", tags: ["热门", "推荐"] },
  { category: "免费学习", icon: "🏫", name: "国家中小学智慧平台", url: "https://basic.smartedu.cn", desc: "教育部直属，小学到高中全学科同步课程，名校名师授课，2026新增AI助手", tags: ["推荐"] },
  { category: "免费学习", icon: "🎓", name: "国家终身教育平台", url: "https://le.ouchn.cn", desc: "国家开放大学，103万+资源，生活/兴趣/职场/技能/老年教育全覆盖", tags: [] },
  { category: "免费学习", icon: "📚", name: "国家哲学社科文献中心", url: "https://www.ncpssd.cn", desc: "2000+中文期刊，15000+外文期刊，1000万+论文免费下载", tags: ["推荐"] },
  { category: "免费学习", icon: "💻", name: "freeCodeCamp", url: "https://www.freecodecamp.org", desc: "全球知名非营利编程平台，全栈开发免费课程+项目实战+免费证书", tags: ["热门", "推荐"] },
  { category: "免费学习", icon: "🐦", name: "菜鸟教程", url: "https://www.runoob.com", desc: "中文编程入门最全，前后端/数据库/移动端全覆盖，零基础友好", tags: ["热门"] },
  { category: "免费学习", icon: "🌐", name: "W3School", url: "https://www.w3school.com.cn", desc: "前端开发入门经典，HTML/CSS/JS在线运行，完全免费", tags: ["推荐"] },
  { category: "免费学习", icon: "⌨️", name: "Codecademy", url: "https://www.codecademy.com", desc: "交互式编程学习，边学边敲代码，Python/JS/SQL入门课程免费", tags: [] },
  { category: "免费学习", icon: "🪟", name: "Microsoft Learn", url: "https://learn.microsoft.com", desc: "微软官方免费学习平台，Azure/云服务/开发技术，交互式模块", tags: ["推荐"] },
  { category: "免费学习", icon: "🔍", name: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage", desc: "谷歌官方数字营销/电商免费课程，结业证书被150+雇主认可", tags: [] },
  { category: "免费学习", icon: "🦉", name: "多邻国", url: "https://www.duolingo.cn", desc: "游戏化学语言，40+语种，每天15分钟，完全免费", tags: ["热门"] },
  { category: "免费学习", icon: "🇬🇧", name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish", desc: "英式英语学习，短视频+听力+词汇+语法，地道发音", tags: ["推荐"] },
  { category: "免费学习", icon: "🎯", name: "MIT OpenCourseWare", url: "https://ocw.mit.edu", desc: "麻省理工全部课程免费开放，含课件/作业/考试/视频", tags: ["推荐"] },
  { category: "免费学习", icon: "🏛️", name: "耶鲁大学公开课", url: "https://oyc.yale.edu", desc: "耶鲁大学人文社科经典课程，高质量视频+音频+讲义", tags: [] },
  { category: "免费学习", icon: "🔬", name: "DOAJ", url: "https://doaj.org", desc: "全球最具影响力开放获取期刊库，免费学术论文检索下载", tags: [] },
  { category: "免费学习", icon: "🧬", name: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov", desc: "美国国立卫生研究院，生物医学论文免费全文库", tags: [] },
  { category: "免费学习", icon: "🔬", name: "PubScholar公益学术", url: "https://pubscholar.cn", desc: "中科院出品，1.7亿篇资源，8000万篇免费全文，论文/专利/图书", tags: ["推荐"] },
  { category: "免费学习", icon: "📦", name: "互联网档案馆", url: "https://archive.org", desc: "海量古籍/图书/音视频/网页存档，免费访问人类知识宝库", tags: [] },
  { category: "免费学习", icon: "🎤", name: "TED", url: "https://www.ted.com", desc: "全球顶尖思想演讲，科技/教育/设计/心理，中文字幕", tags: ["热门"] },
  { category: "免费学习", icon: "✏️", name: "粉笔网", url: "https://www.fenbi.com", desc: "考研/考公/四六级免费题库，职业考试备考必备", tags: [] },

  // 💻 编程开发
  { category: "编程开发", icon: "🐙", name: "GitHub", url: "https://github.com", desc: "全球主流代码托管与协作平台，支持Git仓库、开源协作与项目管理", tags: ["热门"] },
  { category: "编程开发", icon: "📋", name: "Stack Overflow", url: "https://stackoverflow.com", desc: "全球知名程序员问答社区，搜索编程错误和技术方案", tags: ["热门"] },
  { category: "编程开发", icon: "📘", name: "MDN Web Docs", url: "https://developer.mozilla.org", desc: "Mozilla维护的开放Web技术文档，前端开发权威参考", tags: ["推荐"] },
  { category: "编程开发", icon: "✏️", name: "CodePen", url: "https://codepen.io", desc: "前端代码在线编辑与展示社区，即时运行HTML/CSS/JS", tags: [] },
  { category: "编程开发", icon: "☁️", name: "Replit", url: "https://replit.com", desc: "浏览器端云开发平台，支持多种编程语言在线运行和部署", tags: [] },
  { category: "编程开发", icon: "⛏️", name: "掘金", url: "https://juejin.cn", desc: "国内技术社区，涵盖前端、后端、移动端、AI等技术文章", tags: ["热门"] },
  { category: "编程开发", icon: "📝", name: "CSDN", url: "https://www.csdn.net", desc: "国内最大的IT技术社区，编程教程和问题解决方案丰富", tags: [] },
  { category: "编程开发", icon: "📓", name: "博客园", url: "https://www.cnblogs.com", desc: "面向开发者的技术博客社区，文章质量较高，氛围纯粹", tags: [] },
  { category: "编程开发", icon: "📦", name: "npm", url: "https://www.npmjs.com", desc: "Node.js包管理器，全球最大的开源软件注册表", tags: [] },
  { category: "编程开发", icon: "🐍", name: "PyPI", url: "https://pypi.org", desc: "Python包索引，查找和安装Python第三方库", tags: [] },

  // 🎬 影视娱乐
  { category: "影视娱乐", icon: "📺", name: "哔哩哔哩", url: "https://www.bilibili.com", desc: "国内领先的视频弹幕网站，番剧、电影、纪录片、UP主原创", tags: ["热门"] },
  { category: "影视娱乐", icon: "🎬", name: "爱奇艺", url: "https://www.iqiyi.com", desc: "国内主流视频平台，电视剧、电影、综艺、动漫内容丰富", tags: [] },
  { category: "影视娱乐", icon: "🎥", name: "腾讯视频", url: "https://v.qq.com", desc: "腾讯旗下视频平台，热播剧综、电影、动漫、体育赛事", tags: [] },
  { category: "影视娱乐", icon: "📹", name: "优酷", url: "https://www.youku.com", desc: "阿里巴巴旗下视频平台，剧集、电影、综艺、文化纪实", tags: [] },
  { category: "影视娱乐", icon: "🥭", name: "芒果TV", url: "https://www.mgtv.com", desc: "湖南卫视旗下视频平台，综艺内容强势，独播剧丰富", tags: [] },
  { category: "影视娱乐", icon: "🎵", name: "抖音", url: "https://www.douyin.com", desc: "短视频平台，内容丰富多样，算法推荐精准", tags: ["热门"] },
  { category: "影视娱乐", icon: "⚡", name: "快手", url: "https://www.kuaishou.com", desc: "短视频与直播平台，记录真实生活，社区氛围浓厚", tags: [] },
  { category: "影视娱乐", icon: "🍉", name: "西瓜视频", url: "https://www.ixigua.com", desc: "字节跳动旗下中视频平台，影视、知识、Vlog内容", tags: [] },

  // 🎵 音乐音频
  { category: "音乐音频", icon: "☁️", name: "网易云音乐", url: "https://music.163.com", desc: "国内最受欢迎的音乐平台之一，评论区文化独特，曲库丰富", tags: ["热门"] },
  { category: "音乐音频", icon: "🎵", name: "QQ音乐", url: "https://y.qq.com", desc: "腾讯旗下音乐平台，版权曲库最全，支持无损音质", tags: ["热门"] },
  { category: "音乐音频", icon: "🐶", name: "酷狗音乐", url: "https://www.kugou.com", desc: "老牌音乐播放器，曲库丰富，K歌功能强大", tags: [] },
  { category: "音乐音频", icon: "🎧", name: "酷我音乐", url: "https://www.kuwo.cn", desc: "综合音乐平台，无损音质，有声读物和直播内容丰富", tags: [] },
  { category: "音乐音频", icon: "📻", name: "咪咕音乐", url: "https://music.migu.cn", desc: "中国移动旗下音乐平台，周杰伦等歌手版权，免费无损", tags: ["推荐"] },
  { category: "音乐音频", icon: "🎶", name: "Spotify", url: "https://www.spotify.com", desc: "全球最大的流媒体音乐平台，推荐算法精准，播客丰富", tags: [] },
  { category: "音乐音频", icon: "🏔️", name: "喜马拉雅", url: "https://www.ximalaya.com", desc: "国内领先的音频分享平台，有声书、播客、课程内容丰富", tags: [] },
  { category: "音乐音频", icon: "🌌", name: "小宇宙", url: "https://www.xiaoyuzhoufm.com", desc: "专注播客的音频App，界面简洁，播客内容优质", tags: ["新"] },

  // 🖼️ 设计素材
  { category: "设计素材", icon: "🎨", name: "站酷", url: "https://www.zcool.com.cn", desc: "国内领先的设计师互动平台，作品展示、设计教程、素材", tags: ["热门"] },
  { category: "设计素材", icon: "🌸", name: "花瓣网", url: "https://huaban.com", desc: "图片素材收集与分享平台，设计灵感来源，画板收藏", tags: [] },
  { category: "设计素材", icon: "🖼️", name: "千图网", url: "https://www.58pic.com", desc: "设计素材下载平台，PPT、海报、UI、矢量图等模板", tags: [] },
  { category: "设计素材", icon: "📦", name: "包图网", url: "https://ibaotu.com", desc: "原创设计素材平台，视频模板、PPT模板、音效素材", tags: [] },
  { category: "设计素材", icon: "📷", name: "摄图网", url: "https://699pic.com", desc: "正版摄影图片、视频、设计素材平台，可商用", tags: [] },
  { category: "设计素材", icon: "🏔️", name: "Unsplash", url: "https://unsplash.com", desc: "全球知名免费高清图片库，所有图片可免费商用", tags: ["推荐"] },
  { category: "设计素材", icon: "🎥", name: "Pexels", url: "https://www.pexels.com", desc: "免费图片和视频素材库，高质量，可商用无需署名", tags: ["推荐"] },
  { category: "设计素材", icon: "🌈", name: "Pixabay", url: "https://pixabay.com", desc: "免费图片、视频、音乐、插画素材库，可商用", tags: [] },
  { category: "设计素材", icon: "🎯", name: "Figma", url: "https://www.figma.com", desc: "在线协作设计工具，UI/UX设计首选，实时协作", tags: ["热门"] },
  { category: "设计素材", icon: "⚡", name: "即时设计", url: "https://js.design", desc: "国产在线UI设计工具，兼容Figma，中文社区支持好", tags: ["新"] },

  // 📝 办公效率
  { category: "办公效率", icon: "📄", name: "腾讯文档", url: "https://docs.qq.com", desc: "腾讯旗下在线文档，支持多人实时协作，表格、幻灯片", tags: ["热门"] },
  { category: "办公效率", icon: "🐦", name: "飞书", url: "https://www.feishu.cn", desc: "字节跳动旗下企业协作平台，文档、会议、任务一体化", tags: ["推荐"] },
  { category: "办公效率", icon: "📌", name: "钉钉", url: "https://www.dingtalk.com", desc: "阿里巴巴旗下企业办公平台，考勤、审批、视频会议", tags: [] },
  { category: "办公效率", icon: "✏️", name: "石墨文档", url: "https://shimo.im", desc: "简洁的在线协作文档，支持文档、表格、思维导图", tags: [] },
  { category: "办公效率", icon: "📊", name: "WPS", url: "https://www.wps.cn", desc: "国产办公套件，文字、表格、演示、PDF，兼容Office", tags: ["推荐"] },
  { category: "办公效率", icon: "☁️", name: "百度网盘", url: "https://pan.baidu.com", desc: "国内主流云存储服务，文件存储、分享、备份、在线预览", tags: [] },
  { category: "办公效率", icon: "🚀", name: "阿里云盘", url: "https://www.aliyundrive.com", desc: "阿里云旗下网盘，下载不限速，空间大，体验流畅", tags: ["热门"] },
  { category: "办公效率", icon: "⚡", name: "夸克网盘", url: "https://pan.quark.cn", desc: "夸克浏览器旗下网盘，下载快，资源分享便捷", tags: ["新"] },
  { category: "办公效率", icon: "📝", name: "印象笔记", url: "https://www.yinxiang.com", desc: "老牌笔记应用，知识管理、网页剪藏、多端同步", tags: [] },
  { category: "办公效率", icon: "🧩", name: "Notion", url: "https://www.notion.so", desc: "全能笔记与协作工具，文档、数据库、看板、Wiki", tags: ["热门"] },

  // 🛒 购物消费
  { category: "购物消费", icon: "🛒", name: "淘宝", url: "https://www.taobao.com", desc: "亚洲最大网购零售平台，商品种类丰富，价格实惠", tags: ["热门"] },
  { category: "购物消费", icon: "📦", name: "京东", url: "https://www.jd.com", desc: "国内知名综合电商，自营物流快，正品保障，3C数码首选", tags: ["热门"] },
  { category: "购物消费", icon: "🍎", name: "拼多多", url: "https://www.pinduoduo.com", desc: "社交电商平台，价格低廉，拼团模式，百亿补贴", tags: [] },
  { category: "购物消费", icon: "🐱", name: "天猫", url: "https://www.tmall.com", desc: "淘宝旗下B2C平台，品牌旗舰店，品质保障", tags: [] },
  { category: "购物消费", icon: "🏬", name: "苏宁易购", url: "https://www.suning.com", desc: "综合网上购物商城，家电3C优势，线下门店支持", tags: [] },
  { category: "购物消费", icon: "💎", name: "唯品会", url: "https://www.vip.com", desc: "品牌特卖电商，折扣力度大，服饰美妆为主", tags: [] },
  { category: "购物消费", icon: "📚", name: "当当", url: "https://www.dangdang.com", desc: "老牌网上书店，图书品类齐全，价格优惠", tags: [] },
  { category: "购物消费", icon: "🌍", name: "亚马逊", url: "https://www.amazon.cn", desc: "全球最大电商平台，海外购、Kindle电子书", tags: [] },

  // 📰 新闻资讯
  { category: "新闻资讯", icon: "📰", name: "新浪新闻", url: "https://news.sina.com.cn", desc: "新浪旗下新闻门户，国内外大事、财经、体育、娱乐", tags: [] },
  { category: "新闻资讯", icon: "📱", name: "腾讯新闻", url: "https://news.qq.com", desc: "腾讯旗下新闻平台，实时热点、深度报道、视频新闻", tags: [] },
  { category: "新闻资讯", icon: "📝", name: "网易新闻", url: "https://news.163.com", desc: "网易旗下新闻门户，有态度的新闻，评论区活跃", tags: [] },
  { category: "新闻资讯", icon: "🔍", name: "搜狐新闻", url: "https://news.sohu.com", desc: "搜狐旗下新闻平台，综合资讯，自媒体内容丰富", tags: [] },
  { category: "新闻资讯", icon: "🔥", name: "凤凰网", url: "https://www.ifeng.com", desc: "凤凰卫视旗下新闻门户，国际视野，深度评论", tags: [] },
  { category: "新闻资讯", icon: "🌊", name: "澎湃新闻", url: "https://www.thepaper.cn", desc: "上海报业集团旗下新闻平台，专注时政与思想，深度报道", tags: ["推荐"] },
  { category: "新闻资讯", icon: "💡", name: "知乎热榜", url: "https://www.zhihu.com/hot", desc: "知乎热门话题，了解当下热议事件和多元观点", tags: ["热门"] },
  { category: "新闻资讯", icon: "🚀", name: "36氪", url: "https://36kr.com", desc: "关注创业和科技的商业媒体，创投资讯、行业分析", tags: [] },

  // 🛠️ 实用工具
  { category: "实用工具", icon: "🌐", name: "百度翻译", url: "https://fanyi.baidu.com", desc: "免费在线翻译，支持多语种互译，文档翻译，AI翻译", tags: ["推荐"] },
  { category: "实用工具", icon: "📖", name: "有道翻译", url: "https://fanyi.youdao.com", desc: "网易有道翻译，多语种互译，网页翻译，人工翻译", tags: [] },
  { category: "实用工具", icon: "🗺️", name: "高德地图", url: "https://www.amap.com", desc: "国内领先的地图导航服务，路线规划，实时路况，公交查询", tags: ["热门"] },
  { category: "实用工具", icon: "📍", name: "百度地图", url: "https://map.baidu.com", desc: "百度旗下地图服务，导航、周边搜索、街景、全景", tags: [] },
  { category: "实用工具", icon: "🌤️", name: "中国天气网", url: "https://www.weather.com.cn", desc: "权威天气预报，实时天气，空气质量，生活指数", tags: [] },
  { category: "实用工具", icon: "📦", name: "快递100", url: "https://www.kuaidi100.com", desc: "快递查询追踪，支持国内外主流快递，一键查件", tags: ["推荐"] },
  { category: "实用工具", icon: "🚄", name: "12306", url: "https://www.12306.cn", desc: "中国铁路官方购票网站，火车票查询、预订、改签、退票", tags: ["热门"] },
  { category: "实用工具", icon: "✈️", name: "携程", url: "https://www.ctrip.com", desc: "国内领先的在线旅游平台，机票、酒店、火车票、度假", tags: [] },
  { category: "实用工具", icon: "🍜", name: "美团", url: "https://www.meituan.com", desc: "本地生活服务平台，外卖、到店、酒店、电影、团购", tags: ["热门"] },
  { category: "实用工具", icon: "🍔", name: "饿了么", url: "https://www.ele.me", desc: "阿里旗下外卖平台，美食外卖、生鲜超市、医药配送", tags: [] },

  // 💾 软件下载
  { category: "软件下载", icon: "🥝", name: "果核剥壳", url: "https://www.ghpym.com", desc: "原创破解软件博客，分享绿色软件、去广告软件、实用工具", tags: ["热门"] },
  { category: "软件下载", icon: "📦", name: "果核软件", url: "https://www.ghxi.com", desc: "专注绿色软件分享，每日更新，软件安全可靠", tags: ["推荐"] },
  { category: "软件下载", icon: "🍎", name: "我爱mac", url: "https://www.52mac.com", desc: "Mac软件下载站，破解软件、免费软件、游戏、设计素材", tags: [] },
  { category: "软件下载", icon: "🎵", name: "乐软博客", url: "https://www.leshare.top", desc: "推荐各种优秀实用软件，网络资源的个人博客", tags: [] },
  { category: "软件下载", icon: "🔧", name: "423down", url: "https://www.423down.com", desc: "绿色软件下载站，专注分享实用软件和工具", tags: ["新"] },
  { category: "软件下载", icon: "📱", name: "APKPure", url: "https://apkpure.com", desc: "安卓APK下载平台，无需谷歌商店即可下载应用", tags: ["国外"] },
  { category: "软件下载", icon: "🪟", name: "NEXT, ITELLYOU", url: "https://next.itellyou.cn", desc: "微软官方系统镜像下载，Windows、Office原版镜像", tags: ["推荐"] },
  { category: "软件下载", icon: "🐧", name: "开源替代方案", url: "https://www.oschina.net", desc: "开源中国，查找开源软件和替代方案", tags: [] },

  // 📚 图书电子书
  { category: "图书电子书", icon: "🐼", name: "熊猫搜书", url: "https://xmsoushu.com", desc: "电子书搜索引擎，一键搜索多个电子书站资源", tags: ["热门"] },
  { category: "图书电子书", icon: "📖", name: "SoBooks", url: "https://sobooks.cc", desc: "优质电子书下载站，azw3、epub、mobi、PDF格式", tags: ["推荐"] },
  { category: "图书电子书", icon: "🏛️", name: "国家数字图书馆", url: "https://www.nlc.cn", desc: "国家图书馆，海量图书、期刊、论文、古籍资源", tags: [] },
  { category: "图书电子书", icon: "📚", name: "Z-Library", url: "https://z-lib.is", desc: "全球最大的电子图书馆，免费下载电子书和文章", tags: ["国外"] },
  { category: "图书电子书", icon: "📄", name: "PDF之家", url: "https://www.pdf之家.com", desc: "PDF电子书下载，计算机、经济、文学、科技类书籍", tags: [] },
  { category: "图书电子书", icon: "🔬", name: "SCI-Hub", url: "https://sci-hub.se", desc: "免费下载学术论文，打破付费墙", tags: ["国外"] },
  { category: "图书电子书", icon: "📖", name: "古登堡计划", url: "https://www.gutenberg.org", desc: "超过70000册免费电子书，公版图书下载", tags: ["国外"] },
  { category: "图书电子书", icon: "🐯", name: "苦瓜书盘", url: "https://kgbook.com", desc: "免费电子书分享，mobi、azw3、epub格式", tags: ["新"] },

  // 🎮 游戏资源
  { category: "游戏资源", icon: "🎮", name: "Steam", url: "https://store.steampowered.com", desc: "全球最大PC游戏平台，海量免费游戏+周末免费试玩+创意工坊", tags: ["热门", "推荐"] },
  { category: "游戏资源", icon: "🎁", name: "Epic Games", url: "https://store.epicgames.com", desc: "每周免费送AAA大作，领了永久拥有，GTA5/文明6都送过", tags: ["热门", "推荐"] },
  { category: "游戏资源", icon: "📦", name: "GOG", url: "https://www.gog.com", desc: "DRM-free游戏平台，无加密，经典老游戏免费，支持退款", tags: ["推荐"] },
  { category: "游戏资源", icon: "🎨", name: "itch.io", url: "https://itch.io", desc: "独立游戏天堂，数万款免费创意游戏，Game Jam作品聚集地", tags: ["推荐"] },
  { category: "游戏资源", icon: "🎮", name: "3DM游戏网", url: "https://www.3dmgame.com", desc: "国内知名游戏网站，单机游戏下载、攻略、汉化、MOD、论坛", tags: ["热门"] },
  { category: "游戏资源", icon: "📰", name: "游民星空", url: "https://www.gamersky.com", desc: "大型单机游戏门户，资讯、攻略、评测、下载一站式", tags: ["热门"] },
  { category: "游戏资源", icon: "⚔️", name: "游侠网", url: "https://www.ali213.net", desc: "老牌单机游戏门户，坚守单机阵地，攻略补丁修改器齐全", tags: ["推荐"] },
  { category: "游戏资源", icon: "💬", name: "NGA玩家社区", url: "https://bbs.nga.cn", desc: "国内最资深玩家社区，魔兽世界/原神/各类游戏深度讨论", tags: [] },
  { category: "游戏资源", icon: "📖", name: "游研社", url: "https://www.yystv.cn", desc: "泛游戏新媒体，游戏文化、行业分析、深度文章质量高", tags: [] },
  { category: "游戏资源", icon: "🐱", name: "萌新单机之家", url: "https://www.mengxinji.com", desc: "单机游戏下载站，绿色免安装，每日更新，新手友好", tags: ["推荐"] },
  { category: "游戏资源", icon: "🎯", name: "机地游戏", url: "https://www.jidi.com", desc: "单机游戏下载，游戏资讯、攻略、评测，资源丰富", tags: ["新"] },
  { category: "游戏资源", icon: "🕹️", name: "Switch520", url: "https://switch520.com", desc: "Switch/PC游戏下载，沙盒大作+模拟器+工具主题资源", tags: [] },
  { category: "游戏资源", icon: "⚡", name: "WeMod", url: "https://www.wemod.com/zh", desc: "3000+款PC游戏修改器，一键作弊，单机玩家神器", tags: ["推荐"] },
  { category: "游戏资源", icon: "🛠️", name: "FLiNG Trainer", url: "https://flingtrainer.com", desc: "单机游戏修改器大师，支持数千款游戏，更新及时", tags: [] },
  { category: "游戏资源", icon: "🧩", name: "Nexus Mods", url: "https://www.nexusmods.com", desc: "全球最大游戏MOD站，上古卷轴/辐射/赛博朋克MOD聚集地", tags: ["推荐"] },
  { category: "游戏资源", icon: "📦", name: "CurseForge", url: "https://www.curseforge.com", desc: "游戏模组插件平台，我的世界/魔兽/模拟人生MOD管理", tags: [] },
  { category: "游戏资源", icon: "🎮", name: "4399小游戏", url: "https://www.4399.com", desc: "国内最大小游戏平台，双人闯关/射击/换装，即点即玩", tags: ["热门"] },
  { category: "游戏资源", icon: "🎲", name: "7k7k小游戏", url: "https://www.7k7k.com", desc: "经典小游戏平台，休闲益智/动作/体育，童年回忆", tags: [] },
  { category: "游戏资源", icon: "🌐", name: "Poki", url: "https://poki.cn", desc: "2万+HTML5在线游戏，无需下载注册，电脑手机都能玩", tags: ["推荐"] },
  { category: "游戏资源", icon: "👾", name: "小霸王游戏机", url: "https://www.yikm.net", desc: "FC/SFC/街机/GBA/MD怀旧游戏在线玩，魂斗罗/超级玛丽", tags: ["热门", "推荐"] },
  { category: "游戏资源", icon: "📱", name: "Java游戏小站", url: "https://java.owoemu.com", desc: "重回2G时代，诺基亚/三星Java游戏在线运行，怀旧必备", tags: ["新"] },
  { category: "游戏资源", icon: "💎", name: "Humble Bundle", url: "https://www.humblebundle.com", desc: "游戏慈善捆绑包，几块钱买几十款游戏，部分收入捐慈善", tags: [] },
  { category: "游戏资源", icon: "🐛", name: "虫虫助手", url: "https://www.ccplay.com", desc: "破解游戏/mod游戏/变态版手游下载，安卓玩家福利", tags: [] },
  { category: "游戏资源", icon: "📦", name: "PlayZip", url: "https://playzip.com", desc: "PC游戏免费下载，全品类游戏免安装绿色版，每日更新热门大作", tags: ["热门", "推荐"] },
  { category: "游戏资源", icon: "🎯", name: "FitGirl Repacks", url: "https://fitgirl-repacks.site", desc: "全球最知名游戏高压Repack站，体积最小，本体+全DLC整合", tags: ["推荐", "国外"] },
  { category: "游戏资源", icon: "⚡", name: "DODI Repacks", url: "https://dodi-repacks.site", desc: "快速安装Repack站，压缩比适中，更新及时，热门大作首发", tags: ["国外"] },
  { category: "游戏资源", icon: "🚀", name: "SteamRIP", url: "https://steamrip.com", desc: "预安装Steam游戏下载，解压即玩无需安装，3A大作齐全", tags: ["国外"] },
  { category: "游戏资源", icon: "🎮", name: "ElAmigos", url: "https://elamigos.site", desc: "快速安装游戏Repack，海量老游戏和更新版，多语言支持", tags: ["国外"] },
  { category: "游戏资源", icon: "🐟", name: "咸鱼单机", url: "https://www.xianyu520.com", desc: "国内顶级单机游戏资源站，中文汉化，不限速下载，配套齐全", tags: ["推荐"] },
  { category: "游戏资源", icon: "🎲", name: "Byrut游戏站", url: "https://byrut.org", desc: "全站中文Repack压缩版，无弹窗，PC全品类热门大作与经典老游", tags: [] },
  { category: "游戏资源", icon: "📚", name: "3A游戏库", url: "https://www.3ayxk.com", desc: "网盘下载无广告，流程极简，PC单机热门与经典游戏合集", tags: [] },
  { category: "游戏资源", icon: "🎯", name: "gdgame游戏库", url: "https://www.gdgame.com", desc: "免登录无广告高速下载，绿色免安装PC游戏+安卓手游", tags: ["新"] },
  { category: "游戏资源", icon: "🔧", name: "Switch618", url: "https://switch618.com", desc: "Switch和PC游戏下载，金手指/模拟器/攻略，热门资源齐全", tags: [] },
  { category: "游戏资源", icon: "💬", name: "CS.RIN.ru", url: "https://cs.rin.ru", desc: "全球最权威游戏破解论坛，深度讨论，最新补丁和修复方案", tags: ["国外"] },

  // 🔍 网盘搜索
  { category: "网盘搜索", icon: "🐛", name: "虫部落快搜", url: "https://search.chongbuluo.com", desc: "聚合搜索工具，支持网盘、学术、电子书等多维度搜索", tags: ["热门"] },
  { category: "网盘搜索", icon: "🔍", name: "盘搜搜", url: "https://www.pansoso.com", desc: "百度网盘资源搜索引擎，快速查找网盘文件", tags: ["推荐"] },
  { category: "网盘搜索", icon: "☁️", name: "UP云搜", url: "https://www.upyunso.com", desc: "网盘资源搜索，支持百度网盘、阿里云盘、夸克", tags: [] },
  { category: "网盘搜索", icon: "🐟", name: "飞鱼盘搜", url: "https://www.feiyu100.cn", desc: "网盘搜索引擎，海量资源一键搜索", tags: [] },
  { category: "网盘搜索", icon: "🔎", name: "小不点搜索", url: "https://www.xiaobd.net", desc: "网盘资源搜索，支持多网盘同时检索", tags: ["新"] },
  { category: "网盘搜索", icon: "📦", name: "SOSO云盘", url: "https://www.sosoyunpan.com", desc: "云盘资源搜索，影视、软件、文档资源", tags: [] },
  { category: "网盘搜索", icon: "🐝", name: "来搜一下", url: "https://www.laiso.com", desc: "网盘资源聚合搜索，快速定位资源", tags: [] },
  { category: "网盘搜索", icon: "⚡", name: "小白盘", url: "https://www.xiaobaipan.com", desc: "百度网盘搜索，资源丰富，更新及时", tags: ["推荐"] },
];

// 分类配置（顺序、图标）
window.categoriesConfig = [
  { name: "全部", icon: "📋" },
  { name: "热门推荐", icon: "🔥" },
  { name: "AI工具", icon: "🤖" },
  { name: "搜索引擎", icon: "🔍" },
  { name: "学习教育", icon: "📚" },
  { name: "免费学习", icon: "🆓" },
  { name: "编程开发", icon: "💻" },
  { name: "影视娱乐", icon: "🎬" },
  { name: "音乐音频", icon: "🎵" },
  { name: "设计素材", icon: "🖼️" },
  { name: "办公效率", icon: "📝" },
  { name: "购物消费", icon: "🛒" },
  { name: "新闻资讯", icon: "📰" },
  { name: "软件下载", icon: "💾" },
  { name: "图书电子书", icon: "📖" },
  { name: "游戏资源", icon: "🎮" },
  { name: "网盘搜索", icon: "🔍" },
  { name: "实用工具", icon: "🛠️" },
  { name: "最近访问", icon: "🕐" },
  { name: "我的收藏", icon: "⭐" },
];
