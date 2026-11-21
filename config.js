/* 訪日研修ポータル 設定ファイル。index.html と board.html の両方が読み込む。ここだけ書き換えればよい */
/* ═══════════════════ 設定(ここだけ書き換える) ═══════════════════ */
var CFG = {
  /* Apps Script のウェブアプリURL(設置後に貼る)。空のままだと見本データで動く */
  gas: "https://script.google.com/macros/s/AKfycbwEeIJw8t72kXh8-Eh_AGm85SWxiYzrCicraQ7hi1BrrUyWwmpIAJELqaqxjOIC7rZv/exec",

  /* 同じフォルダの別ページ(質問ボード単独ページ / ポータル本体) */
  boardPage: "board.html",
  portalPage: "index.html",

  /* 参加者の名簿。後で差し替える。空にすると自由入力欄になる */
  names: [
    "KHAN MOINUDDIN AL MAHMUD SOHEL","MD. MIZANUR RAHMAN","MONZURUL ALAM","MD KHAYSHED ALAM","JESHAN AHMED",
    "ATIF HASAN RAHMAN","MD ABDUL MANNAN","MD SAKHAWAT HOSSAIN","MD ARIF ULLAH KHAN","MD. RAJON MIA",
    "Miwa Kaito","Uesugi Momoko","Toyama Kin","Other"
  ],

  /* 24日の資料(スライド等)のURL */
  obuseSlides:{en:"https://docs.google.com/presentation/d/1ZnXrf1KO5XMRUMTZRoce19uxrI9MAKy8sdDW4RrqcmA/edit?slide=id.h587e4430d5bec3b2_1_96", ja:"https://docs.google.com/presentation/d/1ZnXrf1KO5XMRUMTZRoce19uxrI9MAKy8sdDW4RrqcmA/edit?slide=id.slide_j1"},
  day24: "https://toh-kin.github.io/20261124-obuse-ict/#s1",

  /* 円の面積のスライド(言語別に1枚目へ飛ぶ) */
  circle: {
    en: "https://docs.google.com/presentation/d/1oks_zy3i8dXtItXLIAc2Tc8rErO_gljUMnonFV7w0L0/edit?slide=id.en_s01",
    bn: "https://docs.google.com/presentation/d/1oks_zy3i8dXtItXLIAc2Tc8rErO_gljUMnonFV7w0L0/edit?slide=id.bn_s01",
    ja: "https://docs.google.com/presentation/d/1oks_zy3i8dXtItXLIAc2Tc8rErO_gljUMnonFV7w0L0/edit?slide=id.p1"
  },

  /* 振り返りシート(共通・個人情報を除いたもの) */
  reflection: "https://docs.google.com/spreadsheets/d/1QHbO5BpaHjD7HAERV3UiG2ROxOuZuUKRY6iFgqV20rQ/edit?gid=1451772646",

  /* 理科 3年:学習指導要領の抜粋・ワークシート */
  sciGuideline: "https://docs.google.com/document/d/1f3wEvh6Y87noM2-KVtum-boM_KpPwJqPhleLQsHvalE/edit",
  sciWorksheet: "https://drive.google.com/file/d/1K14uw3odzPt24ykRtW03LD6tycr2cxZv/view"
};
