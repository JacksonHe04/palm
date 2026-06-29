// 统一管理所有唯一网址

export const URLs = {
  // 申请加入
  applicationForm: 'https://seu-palm.feishu.cn/share/base/form/shrcnAguN1pWEXRdKStw0KgzV2d',

  // 飞书文档
  palmWiki: 'https://seu-palm.feishu.cn/wiki/PgEFwrnPvi9pZwkfCmQcYnKWnbe',

  // PALM 实验室
  palmLab: 'http://8.149.133.61/',

  // GitHub
  github: {
    personal: 'https://github.com/JacksonHe04',
    repository: 'https://github.com/JacksonHe04/palm-lab',
  },

  // 东南大学
  seu: {
    main: 'https://www.seu.edu.cn/',
    cs: 'https://cs.seu.edu.cn/',
    commonLinks: 'https://seucseweb.github.io/',
  },

  // 联系我们
  contact: 'https://seu-palm.feishu.cn/wiki/PgEFwrnPvi9pZwkfCmQcYnKWnbe',

  } as const;

export const PALM_BASE_URL = URLs.palmLab;
