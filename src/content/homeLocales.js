export const LOCALE_STORAGE_KEY = "otx-locale";

export const localeOptions = [
  { code: "en", label: "English", nativeLabel: "English", shortLabel: "EN" },
  { code: "zh-CN", label: "Chinese", nativeLabel: "简体中文", shortLabel: "ZH" },
  { code: "ko", label: "Korean", nativeLabel: "한국어", shortLabel: "KO" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語", shortLabel: "JA" },
  { code: "fr", label: "French", nativeLabel: "Français", shortLabel: "FR" },
  { code: "es", label: "Spanish", nativeLabel: "Español", shortLabel: "ES" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português", shortLabel: "PT" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", shortLabel: "AR" },
];

export const homeCopies = {
  en: {
    metaTitle: "OrTradeX",
    ui: {
      goHome: "Go Home",
      primaryNav: "Primary navigation",
      selectLanguage: "Select language",
      languageOptions: "Language options",
      menu: "Menu",
      ios: "iOS",
      android: "Android",
      aiSlides: "AI slides",
      goToSlide: (value) => `Go to slide ${value}`,
      getStarted: "Get Started",
      launchApp: "Launch App",
      downloadApp: "Download App",
      launchOrTradeX: "Launch OrTradeX",
      termsOfUse: "Terms of Use",
      privacyPolicy: "Privacy Policy",
      copyright: "© 2026 OrTradeX. All rights reserved.",
      ortradexOnX: "OrTradeX on X",
      originsOnX: "Origins Network on X",
    },
    nav: {
      trade: "Trade",
      portfolio: "Portfolio",
      signals: "Signals",
      copyTrade: "Copy Trade",
      referral: "Referral",
      apiManagement: "API Management",
    },
    hero: {
      title: "A New Way to Trade",
      rotatingPhrases: [
        "AI-Powered Signals",
        "Structured Alpha",
        "Conviction-Based Trades",
        "Data-Driven Direction",
        "Signal-Based Strategies",
        "Market Intelligence",
      ],
      subtitle: "AI-powered. Copy-enabled. Non-custodial.",
      description:
        "Deploy automated trading bots, follow proven strategies, and keep full control over every execution.",
      stats: ["Total Trading Volume", "Users", "Open Interest", "TVL", "Symbols"],
    },
    ai: {
      slides: [
        { title: "Full Execution Control", subtitle: "You remain in control at every step." },
        { title: "AI Signal Engine", subtitle: "Real-time AI-generated trading signals." },
        { title: "Automated Strategy Deployment", subtitle: "Turn signals into automated execution." },
        { title: "Native Copy Trading", subtitle: "Follow proven strategies with one click." },
      ],
    },
    built: {
      title: "Built for Origins Ecosystem",
      subtitle: "Powered by the Origins Network",
      main: "OrTradeX is designed as a financial layer inside the Origins ecosystem.",
      listTitle: "Node operators provide infrastructure support, enabling:",
      listItems: [
        "Stable execution routing",
        "Network-level support",
        "Ecosystem-native liquidity",
        "Governance participation",
      ],
    },
    why: {
      title: "Why OrTradeX",
      subtitle: "Built on structure, not speculation.",
      cards: {
        signal: {
          frontTitle: "Signal-Native\nArchitecture",
          backTitle: "Signal-Native Architecture",
          backDescription:
            "OrTradeX is built around signals,\nnot just order books.\nEvery trade begins with structured alpha,\nnot manual guessing.",
        },
        stack: {
          frontTitle: "Integrated\nTrading Stack",
          backTitle: "Integrated Trading Stack",
          backDescription:
            "Signals, automation, execution,\nand copying exist in one unified system.\nNo external bots.\nNo fragmented tools.\nNo workflow friction.",
        },
        ecosystem: {
          frontTitle: "Ecosystem\n-Aligned\nInfrastructure",
          backTitle: "Ecosystem-Aligned Infrastructure",
          backDescription:
            "Designed within the Origins ecosystem,\nwith node-supported execution routing\nand network-native participation.\nBuilt as infrastructure,\nnot just an app.",
        },
        transparent: {
          frontTitle: "Transparent\nby Design",
          backTitle: "Transparent by Design",
          backDescription:
            "Clear risk parameters.\nVisible performance history.\nNon-custodial execution.\nConfidence comes from structure,\nnot marketing.",
        },
      },
    },
    trade: {
      title: "Trade Anywhere. Stay in Control.",
      subtitle: "OrTradeX brings signal-driven perpetual trading to your fingertips.",
      description: "Monitor AI signals, activate strategies, and manage positions in real time, wherever you are.",
      features: ["Real-Time Signal Access", "Instant Execution", "Strategy Monitoring", "Full Risk Control"],
    },
    partners: {
      title: "Partners",
      origins: "Origins",
    },
    cta: {
      title: "Start Trading Smarter.",
      subtitle: "Trade perpetual markets with AI-powered conviction.",
    },
  },
  "zh-CN": {
    metaTitle: "OrTradeX",
    ui: {
      goHome: "返回首页",
      primaryNav: "主导航",
      selectLanguage: "选择语言",
      languageOptions: "语言选项",
      menu: "菜单",
      ios: "iOS",
      android: "Android",
      aiSlides: "AI 幻灯片",
      goToSlide: (value) => `前往第 ${value} 张幻灯片`,
      getStarted: "开始使用",
      launchApp: "打开应用",
      downloadApp: "下载应用",
      launchOrTradeX: "打开 OrTradeX",
      termsOfUse: "使用条款",
      privacyPolicy: "隐私政策",
      copyright: "© 2026 OrTradeX。保留所有权利。",
      ortradexOnX: "OrTradeX 的 X 账号",
      originsOnX: "Origins Network 的 X 账号",
    },
    nav: {
      trade: "交易",
      portfolio: "资产",
      signals: "信号",
      copyTrade: "跟单",
      referral: "邀请",
      apiManagement: "API 管理",
    },
    hero: {
      title: "全新的交易方式",
      rotatingPhrases: ["AI 驱动信号", "结构化 Alpha", "高置信度交易", "数据驱动方向", "信号策略", "市场智能"],
      subtitle: "AI 驱动，可跟单，非托管。",
      description: "部署自动交易机器人，跟随经过验证的策略，并在每次执行中始终保持完全控制。",
      stats: ["总交易量", "用户数", "未平仓量", "TVL", "交易标的"],
    },
    ai: {
      slides: [
        { title: "完全执行控制", subtitle: "每一步都由你掌控。" },
        { title: "AI 信号引擎", subtitle: "实时生成 AI 交易信号。" },
        { title: "自动化策略部署", subtitle: "将信号转化为自动执行。" },
        { title: "原生跟单交易", subtitle: "一键跟随成熟策略。" },
      ],
    },
    built: {
      title: "为 Origins 生态而构建",
      subtitle: "由 Origins Network 提供支撑",
      main: "OrTradeX 被设计为 Origins 生态中的金融基础层。",
      listTitle: "节点运营者提供基础设施支持，实现：",
      listItems: ["稳定的执行路由", "网络级支持", "生态原生流动性", "治理参与"],
    },
    why: {
      title: "为什么选择 OrTradeX",
      subtitle: "以结构为基础，而非投机。",
      cards: {
        signal: {
          frontTitle: "信号原生\n架构",
          backTitle: "信号原生架构",
          backDescription:
            "OrTradeX 围绕信号构建，\n而不只是订单簿。\n每一笔交易都始于结构化 Alpha，\n而不是主观猜测。",
        },
        stack: {
          frontTitle: "一体化\n交易栈",
          backTitle: "一体化交易栈",
          backDescription:
            "信号、自动化、执行与跟单\n整合在同一套系统中。\n无需外部机器人。\n无需割裂工具。\n无需流程摩擦。",
        },
        ecosystem: {
          frontTitle: "生态协同\n基础设施",
          backTitle: "生态协同基础设施",
          backDescription:
            "系统构建于 Origins 生态之内，\n具备节点支持的执行路由\n与网络原生参与能力。\n它首先是基础设施，\n而不只是一个应用。",
        },
        transparent: {
          frontTitle: "天生透明\n可信",
          backTitle: "透明可信",
          backDescription:
            "风险参数清晰可见。\n历史表现透明可查。\n执行过程保持非托管。\n真正的信心来自结构，\n而不是营销。",
        },
      },
    },
    trade: {
      title: "随时交易，始终掌控。",
      subtitle: "OrTradeX 将信号驱动的永续交易带到你指尖。",
      description: "实时监控 AI 信号，启用策略，并随时随地管理仓位。",
      features: ["实时信号接入", "即时执行", "策略监控", "完整风控"],
    },
    partners: {
      title: "合作伙伴",
      origins: "Origins",
    },
    cta: {
      title: "更聪明地开始交易。",
      subtitle: "用 AI 驱动的判断力交易永续市场。",
    },
  },
  ko: {
    metaTitle: "OrTradeX",
    ui: {
      goHome: "홈으로",
      primaryNav: "주요 내비게이션",
      selectLanguage: "언어 선택",
      languageOptions: "언어 옵션",
      menu: "메뉴",
      ios: "iOS",
      android: "Android",
      aiSlides: "AI 슬라이드",
      goToSlide: (value) => `${value}번 슬라이드로 이동`,
      getStarted: "시작하기",
      launchApp: "앱 열기",
      downloadApp: "앱 다운로드",
      launchOrTradeX: "OrTradeX 열기",
      termsOfUse: "이용 약관",
      privacyPolicy: "개인정보 처리방침",
      copyright: "© 2026 OrTradeX. 모든 권리 보유.",
      ortradexOnX: "X의 OrTradeX",
      originsOnX: "X의 Origins Network",
    },
    nav: {
      trade: "거래",
      portfolio: "포트폴리오",
      signals: "시그널",
      copyTrade: "카피 트레이드",
      referral: "추천",
      apiManagement: "API 관리",
    },
    hero: {
      title: "거래의 새로운 방식",
      rotatingPhrases: ["AI 기반 시그널", "구조화된 알파", "확신 기반 트레이드", "데이터 기반 방향성", "시그널 기반 전략", "시장 인텔리전스"],
      subtitle: "AI 기반. 카피 가능. 비수탁형.",
      description: "자동 매매 봇을 배포하고, 검증된 전략을 따라가며, 모든 실행을 완전히 직접 통제하세요.",
      stats: ["총 거래량", "사용자 수", "미결제약정", "TVL", "종목 수"],
    },
    ai: {
      slides: [
        { title: "완전한 실행 통제", subtitle: "모든 단계에서 직접 통제권을 유지합니다." },
        { title: "AI 시그널 엔진", subtitle: "실시간 AI 생성 거래 시그널." },
        { title: "자동화 전략 배포", subtitle: "시그널을 자동 실행으로 전환합니다." },
        { title: "네이티브 카피 트레이드", subtitle: "검증된 전략을 한 번에 따라가세요." },
      ],
    },
    built: {
      title: "Origins 생태계를 위해 구축",
      subtitle: "Origins Network 기반",
      main: "OrTradeX는 Origins 생태계 안의 금융 레이어로 설계되었습니다.",
      listTitle: "노드 운영자는 다음을 가능하게 하는 인프라를 제공합니다:",
      listItems: ["안정적인 실행 라우팅", "네트워크 수준 지원", "생태계 네이티브 유동성", "거버넌스 참여"],
    },
    why: {
      title: "왜 OrTradeX인가",
      subtitle: "투기가 아니라 구조 위에 구축되었습니다.",
      cards: {
        signal: {
          frontTitle: "시그널 중심\n아키텍처",
          backTitle: "시그널 중심 아키텍처",
          backDescription:
            "OrTradeX는 단순한 오더북이 아니라\n시그널을 중심으로 설계되었습니다.\n모든 거래는 수동 추측이 아닌\n구조화된 알파에서 시작됩니다.",
        },
        stack: {
          frontTitle: "통합형\n트레이딩 스택",
          backTitle: "통합형 트레이딩 스택",
          backDescription:
            "시그널, 자동화, 실행,\n카피 기능이 하나의 시스템에 있습니다.\n외부 봇이 필요 없습니다.\n분절된 도구도 없습니다.\n워크플로우 마찰도 없습니다.",
        },
        ecosystem: {
          frontTitle: "생태계 정렬형\n인프라",
          backTitle: "생태계 정렬형 인프라",
          backDescription:
            "Origins 생태계 안에서 설계되어\n노드 지원 실행 라우팅과\n네트워크 네이티브 참여를 제공합니다.\n앱이 아니라 인프라로 구축되었습니다.",
        },
        transparent: {
          frontTitle: "설계부터\n투명하게",
          backTitle: "투명한 설계",
          backDescription:
            "명확한 리스크 파라미터.\n보이는 성과 이력.\n비수탁형 실행.\n신뢰는 마케팅이 아니라\n구조에서 나옵니다.",
        },
      },
    },
    trade: {
      title: "어디서나 거래하고, 통제는 유지하세요.",
      subtitle: "OrTradeX가 시그널 기반 무기한 거래를 손끝으로 가져옵니다.",
      description: "AI 시그널을 모니터링하고, 전략을 활성화하며, 어디서든 실시간으로 포지션을 관리하세요.",
      features: ["실시간 시그널 접근", "즉시 실행", "전략 모니터링", "전체 리스크 관리"],
    },
    partners: {
      title: "파트너",
      origins: "Origins",
    },
    cta: {
      title: "더 스마트하게 거래를 시작하세요.",
      subtitle: "AI 기반 인사이트로 무기한 시장을 거래하세요.",
    },
  },
  ja: {
    metaTitle: "OrTradeX",
    ui: {
      goHome: "ホームへ",
      primaryNav: "メインナビゲーション",
      selectLanguage: "言語を選択",
      languageOptions: "言語オプション",
      menu: "メニュー",
      ios: "iOS",
      android: "Android",
      aiSlides: "AI スライド",
      goToSlide: (value) => `${value}枚目のスライドへ`,
      getStarted: "始める",
      launchApp: "アプリを開く",
      downloadApp: "アプリをダウンロード",
      launchOrTradeX: "OrTradeX を開く",
      termsOfUse: "利用規約",
      privacyPolicy: "プライバシーポリシー",
      copyright: "© 2026 OrTradeX. 無断転載を禁じます。",
      ortradexOnX: "X の OrTradeX",
      originsOnX: "X の Origins Network",
    },
    nav: {
      trade: "取引",
      portfolio: "ポートフォリオ",
      signals: "シグナル",
      copyTrade: "コピートレード",
      referral: "紹介",
      apiManagement: "API 管理",
    },
    hero: {
      title: "新しい取引のかたち",
      rotatingPhrases: ["AI 駆動シグナル", "構造化アルファ", "高確信トレード", "データ主導の方向性", "シグナル戦略", "マーケットインテリジェンス"],
      subtitle: "AI 駆動。コピー対応。ノンカストディアル。",
      description: "自動売買ボットを展開し、実績ある戦略を追随し、すべての執行を自分でコントロールできます。",
      stats: ["総取引高", "ユーザー数", "建玉", "TVL", "銘柄数"],
    },
    ai: {
      slides: [
        { title: "完全な執行コントロール", subtitle: "すべてのステップで主導権を維持できます。" },
        { title: "AI シグナルエンジン", subtitle: "リアルタイムで生成される AI 取引シグナル。" },
        { title: "自動戦略デプロイ", subtitle: "シグナルを自動執行へ変換します。" },
        { title: "ネイティブコピートレード", subtitle: "実績ある戦略をワンクリックで追随。" },
      ],
    },
    built: {
      title: "Origins エコシステムのために構築",
      subtitle: "Origins Network に支えられています",
      main: "OrTradeX は Origins エコシステム内の金融レイヤーとして設計されています。",
      listTitle: "ノードオペレーターは次を可能にするインフラを提供します：",
      listItems: ["安定した執行ルーティング", "ネットワークレベルの支援", "エコシステムネイティブ流動性", "ガバナンス参加"],
    },
    why: {
      title: "OrTradeX を選ぶ理由",
      subtitle: "投機ではなく、構造の上に築かれています。",
      cards: {
        signal: {
          frontTitle: "シグナルネイティブ\nアーキテクチャ",
          backTitle: "シグナルネイティブアーキテクチャ",
          backDescription:
            "OrTradeX は単なる板情報ではなく\nシグナルを中心に構築されています。\nすべての取引は手動の勘ではなく\n構造化アルファから始まります。",
        },
        stack: {
          frontTitle: "統合型\nトレーディングスタック",
          backTitle: "統合型トレーディングスタック",
          backDescription:
            "シグナル、自動化、執行、\nコピー機能を一つのシステムに統合。\n外部ボットは不要。\n分断されたツールも不要。\n運用の摩擦もありません。",
        },
        ecosystem: {
          frontTitle: "エコシステム整合型\nインフラ",
          backTitle: "エコシステム整合型インフラ",
          backDescription:
            "Origins エコシステム内で設計され、\nノード支援の執行ルーティングと\nネットワークネイティブ参加を実現。\n単なるアプリではなく\nインフラとして構築されています。",
        },
        transparent: {
          frontTitle: "透明性を前提にした\n設計",
          backTitle: "透明性のある設計",
          backDescription:
            "明確なリスクパラメータ。\n可視化された実績履歴。\nノンカストディアルな執行。\n信頼はマーケティングではなく\n構造から生まれます。",
        },
      },
    },
    trade: {
      title: "どこでも取引。主導権はそのまま。",
      subtitle: "OrTradeX がシグナル駆動の無期限取引を手元にもたらします。",
      description: "AI シグナルを監視し、戦略を有効化し、どこにいてもポジションをリアルタイムで管理できます。",
      features: ["リアルタイムシグナル", "即時執行", "戦略モニタリング", "フルリスク管理"],
    },
    partners: {
      title: "パートナー",
      origins: "Origins",
    },
    cta: {
      title: "より賢く取引を始めましょう。",
      subtitle: "AI に支えられた判断力で無期限市場を取引。",
    },
  },
  fr: {
    metaTitle: "OrTradeX",
    ui: {
      goHome: "Accueil",
      primaryNav: "Navigation principale",
      selectLanguage: "Choisir la langue",
      languageOptions: "Options de langue",
      menu: "Menu",
      ios: "iOS",
      android: "Android",
      aiSlides: "Diapositives IA",
      goToSlide: (value) => `Aller à la diapositive ${value}`,
      getStarted: "Commencer",
      launchApp: "Ouvrir l'app",
      downloadApp: "Télécharger l'app",
      launchOrTradeX: "Ouvrir OrTradeX",
      termsOfUse: "Conditions d'utilisation",
      privacyPolicy: "Politique de confidentialité",
      copyright: "© 2026 OrTradeX. Tous droits réservés.",
      ortradexOnX: "OrTradeX sur X",
      originsOnX: "Origins Network sur X",
    },
    nav: {
      trade: "Trading",
      portfolio: "Portefeuille",
      signals: "Signaux",
      copyTrade: "Copy trading",
      referral: "Parrainage",
      apiManagement: "Gestion API",
    },
    hero: {
      title: "Une nouvelle façon de trader",
      rotatingPhrases: ["Signaux IA", "Alpha structuré", "Trades à conviction", "Direction pilotée par les données", "Stratégies sur signaux", "Intelligence de marché"],
      subtitle: "Propulsé par l'IA. Copy trading. Non dépositaire.",
      description: "Déployez des bots de trading automatisés, suivez des stratégies éprouvées et gardez un contrôle total sur chaque exécution.",
      stats: ["Volume total", "Utilisateurs", "Intérêt ouvert", "TVL", "Actifs"],
    },
    ai: {
      slides: [
        { title: "Contrôle total de l'exécution", subtitle: "Vous gardez la main à chaque étape." },
        { title: "Moteur de signaux IA", subtitle: "Signaux de trading IA générés en temps réel." },
        { title: "Déploiement automatisé des stratégies", subtitle: "Transformez les signaux en exécution automatisée." },
        { title: "Copy trading natif", subtitle: "Suivez des stratégies éprouvées en un clic." },
      ],
    },
    built: {
      title: "Conçu pour l'écosystème Origins",
      subtitle: "Propulsé par Origins Network",
      main: "OrTradeX est conçu comme une couche financière au sein de l'écosystème Origins.",
      listTitle: "Les opérateurs de nœuds apportent un support d'infrastructure permettant :",
      listItems: ["Un routage d'exécution stable", "Un support réseau", "Une liquidité native à l'écosystème", "La participation à la gouvernance"],
    },
    why: {
      title: "Pourquoi OrTradeX",
      subtitle: "Construit sur la structure, pas sur la spéculation.",
      cards: {
        signal: {
          frontTitle: "Architecture\ncentrée signaux",
          backTitle: "Architecture centrée signaux",
          backDescription:
            "OrTradeX est construit autour des signaux,\npas seulement des carnets d'ordres.\nChaque trade commence par un alpha structuré,\net non par une intuition manuelle.",
        },
        stack: {
          frontTitle: "Stack de trading\nintégré",
          backTitle: "Stack de trading intégré",
          backDescription:
            "Signaux, automatisation, exécution\net copie vivent dans un même système.\nPas de bots externes.\nPas d'outils fragmentés.\nPas de friction opérationnelle.",
        },
        ecosystem: {
          frontTitle: "Infrastructure alignée\nsur l'écosystème",
          backTitle: "Infrastructure alignée sur l'écosystème",
          backDescription:
            "Conçu dans l'écosystème Origins,\navec un routage d'exécution soutenu par les nœuds\net une participation native au réseau.\nPensé comme une infrastructure,\npas comme une simple app.",
        },
        transparent: {
          frontTitle: "Transparence\npar conception",
          backTitle: "Transparence par conception",
          backDescription:
            "Paramètres de risque clairs.\nHistorique de performance visible.\nExécution non dépositaire.\nLa confiance vient de la structure,\npas du marketing.",
        },
      },
    },
    trade: {
      title: "Tradez partout. Gardez le contrôle.",
      subtitle: "OrTradeX met le trading perpétuel guidé par les signaux au bout de vos doigts.",
      description: "Surveillez les signaux IA, activez des stratégies et gérez vos positions en temps réel, où que vous soyez.",
      features: ["Accès aux signaux en temps réel", "Exécution instantanée", "Suivi des stratégies", "Contrôle total du risque"],
    },
    partners: {
      title: "Partenaires",
      origins: "Origins",
    },
    cta: {
      title: "Commencez à trader plus intelligemment.",
      subtitle: "Tradez les marchés perpétuels avec une conviction portée par l'IA.",
    },
  },
  es: {
    metaTitle: "OrTradeX",
    ui: {
      goHome: "Inicio",
      primaryNav: "Navegación principal",
      selectLanguage: "Seleccionar idioma",
      languageOptions: "Opciones de idioma",
      menu: "Menú",
      ios: "iOS",
      android: "Android",
      aiSlides: "Diapositivas de IA",
      goToSlide: (value) => `Ir a la diapositiva ${value}`,
      getStarted: "Comenzar",
      launchApp: "Abrir app",
      downloadApp: "Descargar app",
      launchOrTradeX: "Abrir OrTradeX",
      termsOfUse: "Términos de uso",
      privacyPolicy: "Política de privacidad",
      copyright: "© 2026 OrTradeX. Todos los derechos reservados.",
      ortradexOnX: "OrTradeX en X",
      originsOnX: "Origins Network en X",
    },
    nav: {
      trade: "Trading",
      portfolio: "Portafolio",
      signals: "Señales",
      copyTrade: "Copy Trading",
      referral: "Referidos",
      apiManagement: "Gestión API",
    },
    hero: {
      title: "Una nueva forma de operar",
      rotatingPhrases: ["Señales con IA", "Alpha estructurado", "Operaciones con convicción", "Dirección basada en datos", "Estrategias por señales", "Inteligencia de mercado"],
      subtitle: "Con IA. Con copy trading. Sin custodia.",
      description: "Despliega bots de trading automatizados, sigue estrategias probadas y mantén el control total de cada ejecución.",
      stats: ["Volumen total", "Usuarios", "Interés abierto", "TVL", "Activos"],
    },
    ai: {
      slides: [
        { title: "Control total de ejecución", subtitle: "Mantienes el control en cada paso." },
        { title: "Motor de señales IA", subtitle: "Señales de trading generadas por IA en tiempo real." },
        { title: "Despliegue automatizado de estrategias", subtitle: "Convierte señales en ejecución automatizada." },
        { title: "Copy trading nativo", subtitle: "Sigue estrategias probadas con un clic." },
      ],
    },
    built: {
      title: "Creado para el ecosistema Origins",
      subtitle: "Impulsado por Origins Network",
      main: "OrTradeX está diseñado como una capa financiera dentro del ecosistema Origins.",
      listTitle: "Los operadores de nodos aportan soporte de infraestructura que permite:",
      listItems: ["Enrutamiento estable de ejecución", "Soporte a nivel de red", "Liquidez nativa del ecosistema", "Participación en gobernanza"],
    },
    why: {
      title: "Por qué OrTradeX",
      subtitle: "Construido sobre estructura, no sobre especulación.",
      cards: {
        signal: {
          frontTitle: "Arquitectura\nnativa de señales",
          backTitle: "Arquitectura nativa de señales",
          backDescription:
            "OrTradeX está construido alrededor de señales,\nno solo de libros de órdenes.\nCada operación comienza con alpha estructurado,\nno con suposiciones manuales.",
        },
        stack: {
          frontTitle: "Stack de trading\nintegrado",
          backTitle: "Stack de trading integrado",
          backDescription:
            "Señales, automatización, ejecución\ny copia conviven en un solo sistema.\nSin bots externos.\nSin herramientas fragmentadas.\nSin fricción operativa.",
        },
        ecosystem: {
          frontTitle: "Infraestructura\nalineada al ecosistema",
          backTitle: "Infraestructura alineada al ecosistema",
          backDescription:
            "Diseñado dentro del ecosistema Origins,\ncon ruteo de ejecución respaldado por nodos\ny participación nativa en la red.\nEstá construido como infraestructura,\nno solo como una app.",
        },
        transparent: {
          frontTitle: "Transparencia\ndesde el diseño",
          backTitle: "Transparencia desde el diseño",
          backDescription:
            "Parámetros de riesgo claros.\nHistorial de rendimiento visible.\nEjecución sin custodia.\nLa confianza nace de la estructura,\nno del marketing.",
        },
      },
    },
    trade: {
      title: "Opera desde cualquier lugar. Mantén el control.",
      subtitle: "OrTradeX lleva el trading perpetuo impulsado por señales a tus manos.",
      description: "Monitorea señales de IA, activa estrategias y gestiona posiciones en tiempo real, estés donde estés.",
      features: ["Acceso a señales en tiempo real", "Ejecución instantánea", "Monitoreo de estrategias", "Control total del riesgo"],
    },
    partners: {
      title: "Socios",
      origins: "Origins",
    },
    cta: {
      title: "Empieza a operar con más inteligencia.",
      subtitle: "Opera mercados perpetuos con convicción impulsada por IA.",
    },
  },
  pt: {
    metaTitle: "OrTradeX",
    ui: {
      goHome: "Início",
      primaryNav: "Navegação principal",
      selectLanguage: "Selecionar idioma",
      languageOptions: "Opções de idioma",
      menu: "Menu",
      ios: "iOS",
      android: "Android",
      aiSlides: "Slides de IA",
      goToSlide: (value) => `Ir para o slide ${value}`,
      getStarted: "Começar",
      launchApp: "Abrir app",
      downloadApp: "Baixar app",
      launchOrTradeX: "Abrir OrTradeX",
      termsOfUse: "Termos de uso",
      privacyPolicy: "Política de privacidade",
      copyright: "© 2026 OrTradeX. Todos os direitos reservados.",
      ortradexOnX: "OrTradeX no X",
      originsOnX: "Origins Network no X",
    },
    nav: {
      trade: "Trading",
      portfolio: "Portfólio",
      signals: "Sinais",
      copyTrade: "Copy Trading",
      referral: "Indicações",
      apiManagement: "Gestão de API",
    },
    hero: {
      title: "Uma nova forma de negociar",
      rotatingPhrases: ["Sinais com IA", "Alpha estruturado", "Trades de convicção", "Direção orientada por dados", "Estratégias por sinais", "Inteligência de mercado"],
      subtitle: "Com IA. Com copy trading. Sem custódia.",
      description: "Implante bots de trading automatizados, siga estratégias comprovadas e mantenha controle total sobre cada execução.",
      stats: ["Volume total", "Usuários", "Interesse em aberto", "TVL", "Ativos"],
    },
    ai: {
      slides: [
        { title: "Controle total da execução", subtitle: "Você mantém o controle em cada etapa." },
        { title: "Motor de sinais com IA", subtitle: "Sinais de trading gerados por IA em tempo real." },
        { title: "Implantação automatizada de estratégias", subtitle: "Transforme sinais em execução automatizada." },
        { title: "Copy trade nativo", subtitle: "Siga estratégias comprovadas com um clique." },
      ],
    },
    built: {
      title: "Feito para o ecossistema Origins",
      subtitle: "Impulsionado pela Origins Network",
      main: "OrTradeX foi desenhado como uma camada financeira dentro do ecossistema Origins.",
      listTitle: "Operadores de nós fornecem suporte de infraestrutura, permitindo:",
      listItems: ["Roteamento estável de execução", "Suporte em nível de rede", "Liquidez nativa do ecossistema", "Participação em governança"],
    },
    why: {
      title: "Por que OrTradeX",
      subtitle: "Construído sobre estrutura, não sobre especulação.",
      cards: {
        signal: {
          frontTitle: "Arquitetura\nnativa de sinais",
          backTitle: "Arquitetura nativa de sinais",
          backDescription:
            "O OrTradeX é construído em torno de sinais,\ne não apenas de livros de ordens.\nCada operação começa com alpha estruturado,\nnão com adivinhação manual.",
        },
        stack: {
          frontTitle: "Stack de trading\nintegrado",
          backTitle: "Stack de trading integrado",
          backDescription:
            "Sinais, automação, execução\ne cópia existem em um só sistema.\nSem bots externos.\nSem ferramentas fragmentadas.\nSem atrito operacional.",
        },
        ecosystem: {
          frontTitle: "Infraestrutura alinhada\nao ecossistema",
          backTitle: "Infraestrutura alinhada ao ecossistema",
          backDescription:
            "Projetado dentro do ecossistema Origins,\ncom roteamento de execução apoiado por nós\ne participação nativa da rede.\nFoi construído como infraestrutura,\nnão apenas como um app.",
        },
        transparent: {
          frontTitle: "Transparência\npor design",
          backTitle: "Transparência por design",
          backDescription:
            "Parâmetros de risco claros.\nHistórico de desempenho visível.\nExecução sem custódia.\nA confiança vem da estrutura,\nnão do marketing.",
        },
      },
    },
    trade: {
      title: "Negocie de qualquer lugar. Mantenha o controle.",
      subtitle: "OrTradeX leva o trading perpétuo orientado por sinais até você.",
      description: "Monitore sinais de IA, ative estratégias e gerencie posições em tempo real, onde quer que esteja.",
      features: ["Acesso a sinais em tempo real", "Execução instantânea", "Monitoramento de estratégias", "Controle total de risco"],
    },
    partners: {
      title: "Parceiros",
      origins: "Origins",
    },
    cta: {
      title: "Comece a negociar com mais inteligência.",
      subtitle: "Negocie mercados perpétuos com convicção impulsionada por IA.",
    },
  },
  ar: {
    metaTitle: "OrTradeX",
    ui: {
      goHome: "الصفحة الرئيسية",
      primaryNav: "التنقل الرئيسي",
      selectLanguage: "اختر اللغة",
      languageOptions: "خيارات اللغة",
      menu: "القائمة",
      ios: "iOS",
      android: "Android",
      aiSlides: "شرائح الذكاء الاصطناعي",
      goToSlide: (value) => `الانتقال إلى الشريحة ${value}`,
      getStarted: "ابدأ الآن",
      launchApp: "افتح التطبيق",
      downloadApp: "حمّل التطبيق",
      launchOrTradeX: "افتح OrTradeX",
      termsOfUse: "شروط الاستخدام",
      privacyPolicy: "سياسة الخصوصية",
      copyright: "© 2026 OrTradeX. جميع الحقوق محفوظة.",
      ortradexOnX: "OrTradeX على X",
      originsOnX: "Origins Network على X",
    },
    nav: {
      trade: "التداول",
      portfolio: "المحفظة",
      signals: "الإشارات",
      copyTrade: "نسخ التداول",
      referral: "الإحالات",
      apiManagement: "إدارة API",
    },
    hero: {
      title: "طريقة جديدة للتداول",
      rotatingPhrases: ["إشارات مدعومة بالذكاء الاصطناعي", "ألفا منظّم", "صفقات عالية القناعة", "اتجاه قائم على البيانات", "استراتيجيات معتمدة على الإشارات", "ذكاء السوق"],
      subtitle: "مدعوم بالذكاء الاصطناعي. يدعم النسخ. دون وصاية.",
      description: "شغّل روبوتات تداول آلية، واتبع استراتيجيات مجرّبة، واحتفظ بالتحكم الكامل في كل تنفيذ.",
      stats: ["إجمالي حجم التداول", "المستخدمون", "الفائدة المفتوحة", "TVL", "الأصول"],
    },
    ai: {
      slides: [
        { title: "تحكم كامل في التنفيذ", subtitle: "تبقى أنت المتحكم في كل خطوة." },
        { title: "محرك إشارات بالذكاء الاصطناعي", subtitle: "إشارات تداول يولّدها الذكاء الاصطناعي في الوقت الفعلي." },
        { title: "نشر آلي للاستراتيجيات", subtitle: "حوّل الإشارات إلى تنفيذ آلي." },
        { title: "نسخ تداول أصلي", subtitle: "اتبع الاستراتيجيات المثبتة بنقرة واحدة." },
      ],
    },
    built: {
      title: "مبني لمنظومة Origins",
      subtitle: "بدعم من Origins Network",
      main: "تم تصميم OrTradeX كطبقة مالية داخل منظومة Origins.",
      listTitle: "يوفر مشغلو العقد دعماً للبنية التحتية يتيح:",
      listItems: ["توجيه تنفيذ مستقر", "دعماً على مستوى الشبكة", "سيولة أصلية للمنظومة", "المشاركة في الحوكمة"],
    },
    why: {
      title: "لماذا OrTradeX",
      subtitle: "مبني على الهيكل لا على المضاربة.",
      cards: {
        signal: {
          frontTitle: "بنية أصلية\nللإشارات",
          backTitle: "بنية أصلية للإشارات",
          backDescription:
            "تم بناء OrTradeX حول الإشارات،\nوليس فقط حول دفاتر الأوامر.\nكل صفقة تبدأ من ألفا منظّم،\nلا من تخمين شخصي.",
        },
        stack: {
          frontTitle: "منظومة تداول\nمتكاملة",
          backTitle: "منظومة تداول متكاملة",
          backDescription:
            "الإشارات والأتمتة والتنفيذ\nونسخ التداول ضمن نظام واحد.\nلا حاجة إلى روبوتات خارجية.\nلا أدوات مجزأة.\nلا احتكاك في سير العمل.",
        },
        ecosystem: {
          frontTitle: "بنية تحتية\nمنسجمة مع المنظومة",
          backTitle: "بنية تحتية منسجمة مع المنظومة",
          backDescription:
            "صُمم داخل منظومة Origins،\nمع توجيه تنفيذ مدعوم بالعقد\nومشاركة أصلية على مستوى الشبكة.\nإنه بنية تحتية،\nوليس مجرد تطبيق.",
        },
        transparent: {
          frontTitle: "شفافية\nمنذ التصميم",
          backTitle: "شفافية منذ التصميم",
          backDescription:
            "معايير مخاطر واضحة.\nسجل أداء ظاهر.\nتنفيذ غير وصائي.\nالثقة تأتي من الهيكل،\nلا من التسويق.",
        },
      },
    },
    trade: {
      title: "تداول من أي مكان. وابقَ متحكماً.",
      subtitle: "يجلب OrTradeX التداول الدائم المعتمد على الإشارات إلى أطراف أصابعك.",
      description: "راقب إشارات الذكاء الاصطناعي، فعّل الاستراتيجيات، وأدر مراكزك في الوقت الفعلي أينما كنت.",
      features: ["وصول فوري إلى الإشارات", "تنفيذ لحظي", "مراقبة الاستراتيجيات", "تحكم كامل بالمخاطر"],
    },
    partners: {
      title: "الشركاء",
      origins: "Origins",
    },
    cta: {
      title: "ابدأ التداول بذكاء أكبر.",
      subtitle: "تداول الأسواق الدائمة بقناعة مدعومة بالذكاء الاصطناعي.",
    },
  },
};

export function normalizeLocale(localeCode) {
  if (!localeCode) return localeOptions[0];
  const normalizedCode = String(localeCode).toLowerCase();
  const exactMatch = localeOptions.find((item) => item.code.toLowerCase() === normalizedCode);
  if (exactMatch) return exactMatch;
  const languageCode = normalizedCode.split("-")[0];
  return localeOptions.find((item) => item.code.toLowerCase().split("-")[0] === languageCode) ?? localeOptions[0];
}

export function getInitialLocale() {
  const storedLocale = typeof window !== "undefined" ? window.localStorage.getItem(LOCALE_STORAGE_KEY) : null;
  const browserLocale =
    typeof navigator !== "undefined" ? navigator.languages?.find(Boolean) || navigator.language || null : null;
  return normalizeLocale(storedLocale || browserLocale);
}

export function applyLocaleToDocument(locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale.code;
  document.documentElement.dir = locale.code === "ar" ? "rtl" : "ltr";
}
