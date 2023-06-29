module.exports = {
  plugins: [
    {
      resolve: '@opensumi/gatsby-theme',
      options: {
        GATrackingId: `UA-148148901-11`,
      },
    },
  ],
  siteMetadata: {
    title: 'AuTool',
    description:
      '一款基于AI的工作流自动化框架 - AI-powered workflow automation platform',
    siteUrl: 'https://autool.site',
    logo: {
      img: 'https://raw.githubusercontent.com/danalite/autool/main/imgs/logo-small.png',
      link: 'https://autool.site',
    },
    logoUrl:
      'https://raw.githubusercontent.com/danalite/autool/main/imgs/logo-small.png',
    githubUrl: 'https://github.com/danalite/autool',
    docsUrl: 'https://github.com/danalite/autool-docs',
    navs: [
      {
        slug: 'docs/develop/introduction',
        title: {
          zh: '使用文档',
          en: 'Documents',
        },
      },
    ],
    docs: [
      {
        slug: 'develop/quick-start',
        title: {
          zh: '快速开始',
          en: 'Getting Started',
        },
        order: 3,
      },
      {
        slug: 'develop/sample',
        title: {
          zh: '应用案例',
          en: 'Example Scripts',
        },
        order: 4,
      },
      {
        slug: 'develop/scripts',
        title: {
          zh: 'API 文档',
          en: 'Developer Guide',
        },
        order: 5,
      },
    ],
    ecosystems: [
      {
        name: {
          zh: '插件市场',
          en: 'Extension Market',
        },
        url: '#',
      },
    ],
    showDingTalkQRCode: false,
    showWeChatQRCode: false,
    weChatQRCode:
      'https://img.alicdn.com/imgextra/i1/O1CN01jNQjmP1OXW4hj6p7s_!!6000000001715-2-tps-200-239.png',
    dingTalkQRCode:
      'https://img.alicdn.com/imgextra/i2/O1CN01Fcw6RC1T8qozkQBFG_!!6000000002338-2-tps-200-239.png',
    redirects: [],
    showGithubCorner: true, // 是否展示角落的 GitHub 图标
    showGithubStars: true,
    showLanguageSwitcher: true, // 用于定义是否展示语言切换
    showSearch: true,
  },
};
