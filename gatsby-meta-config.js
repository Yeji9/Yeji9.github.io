module.exports = {
  title: `감자개발자 강잼민`,
  description: `잼민이의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://yeji9.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `이예지`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
        github: `https://github.com/Yeji9`, //`https://github.com/Yeji9`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `poiuy5330@naver.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.11 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
          },
          {
              date: '2021.09 ~',
              activity: '졸업 프로젝트 캡스톤 RunMates',
              links: {
                  post: '/gatsby-starter-zoomkoding-introduction',
                  github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
                  demo: 'https://www.zoomkoding.com',
              },
          },
      {
              date: '2021.3 ~',
              activity: 'SW 어드바이저',
              links: {
                  post: '/gatsby-starter-zoomkoding-introduction',
                  github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
                  demo: 'https://www.zoomkoding.com',
              },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '캡스톤 - RunMates',
        description:
          '2021.09 ~ ing 디지털미디어학과 캡스톤 중',
        techStack: ['java', 'Firebase', 'Android Studio'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
            github: 'https://github.com/18GwangTtaeng',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
