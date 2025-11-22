// 配置
window.Config = {

  // 站点名
  SiteName: 'AUNyaの小窝 服务器状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur3107094-1e45d5a46802c7d5613c893d',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 导航栏菜单
  Navi: [
    {
      text: 'AUNyaの小窝',
      url: 'https://tbmiao.dpdns.org/'
    },
    {
      text: '关于',
      url: 'https://tbmiao.dpdns.org/about/'
    }
  ]
};
