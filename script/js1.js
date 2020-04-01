'use script';

const pokemon_list_moto =[{NO:1,name:'フシギダネ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'ウイ',last_two:'アエ'},
{NO:2,name:'フシギソウ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'ウイ',last_two:'オウ'},
{NO:3,name:'フシギバナ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'ウイ',last_two:'アア'},
{NO:4,name:'ヒトカゲ',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'イオ',last_two:'アエ'},
{NO:5,name:'リザード',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'イア',last_two:'ーオ'},
{NO:6,name:'リザードン',type1:'ほのお',type2:'ひこう',sedai:1,otosuu:5,first_two:'イア',last_two:'オン'},
{NO:7,name:'ゼニガメ',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'エイ',last_two:'アエ'},
{NO:8,name:'カメール',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'アエ',last_two:'ーウ'},
{NO:9,name:'カメックス',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'アエ',last_two:'ウウ'},
{NO:10,name:'キャタピー',type1:'むし',type2:'',sedai:1,otosuu:4,first_two:'アア',last_two:'イー'},
{NO:11,name:'トランセル',type1:'むし',type2:'',sedai:1,otosuu:5,first_two:'オア',last_two:'エウ'},
{NO:12,name:'バタフリー',type1:'むし',type2:'ひこう',sedai:1,otosuu:5,first_two:'アア',last_two:'イー'},
{NO:13,name:'ビードル',type1:'むし',type2:'どく',sedai:1,otosuu:4,first_two:'イー',last_two:'オウ'},
{NO:14,name:'コクーン',type1:'むし',type2:'どく',sedai:1,otosuu:4,first_two:'オウ',last_two:'ーン'},
{NO:15,name:'スピアー',type1:'むし',type2:'どく',sedai:1,otosuu:4,first_two:'ウイ',last_two:'アー'},
{NO:16,name:'ポッポ',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:3,first_two:'オッ',last_two:'ッオ'},
{NO:17,name:'ピジョン',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:3,first_two:'イオ',last_two:'オン'},
{NO:18,name:'ピジョット',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:4,first_two:'イオ',last_two:'ッオ'},
{NO:19,name:'コラッタ',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'オア',last_two:'ッア'},
{NO:20,name:'ラッタ',type1:'ノーマル',type2:'',sedai:1,otosuu:3,first_two:'アッ',last_two:'ッア'},
{NO:21,name:'オニスズメ',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:5,first_two:'オイ',last_two:'ウエ'},
{NO:22,name:'オニドリル',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:5,first_two:'オイ',last_two:'イウ'},
{NO:23,name:'アーボ',type1:'どく',type2:'',sedai:1,otosuu:3,first_two:'アー',last_two:'ーオ'},
{NO:24,name:'アーボック',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'アー',last_two:'ッウ'},
{NO:25,name:'ピカチュウ',type1:'でんき',type2:'',sedai:1,otosuu:4,first_two:'イア',last_two:'ウウ'},
{NO:26,name:'ライチュウ',type1:'でんき',type2:'',sedai:1,otosuu:4,first_two:'アイ',last_two:'ウウ'},
{NO:27,name:'サンド',type1:'じめん',type2:'',sedai:1,otosuu:3,first_two:'アン',last_two:'ンオ'},
{NO:28,name:'サンドパン',type1:'じめん',type2:'',sedai:1,otosuu:5,first_two:'アン',last_two:'アン'},
{NO:29,name:'ニドラン♀',type1:'どく',type2:'',sedai:1,otosuu:6,first_two:'イオ',last_two:'エウ'},
{NO:30,name:'ニドリーナ',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'イオ',last_two:'ーア'},
{NO:31,name:'ニドクイン',type1:'どく',type2:'じめん',sedai:1,otosuu:5,first_two:'イオ',last_two:'イン'},
{NO:32,name:'ニドラン♂',type1:'どく',type2:'',sedai:1,otosuu:6,first_two:'イオ',last_two:'オウ'},
{NO:33,name:'ニドリーノ',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'イオ',last_two:'ーオ'},
{NO:34,name:'ニドキング',type1:'どく',type2:'じめん',sedai:1,otosuu:5,first_two:'イオ',last_two:'ンウ'},
{NO:35,name:'ピッピ',type1:'フェアリー',type2:'',sedai:1,otosuu:3,first_two:'イッ',last_two:'ッイ'},
{NO:36,name:'ピクシー',type1:'フェアリー',type2:'',sedai:1,otosuu:4,first_two:'イウ',last_two:'イー'},
{NO:37,name:'ロコン',type1:'ほのお',type2:'',sedai:1,otosuu:3,first_two:'オオ',last_two:'オン'},
{NO:38,name:'キュウコン',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'ウウ',last_two:'オン'},
{NO:39,name:'プリン',type1:'ノーマル',type2:'フェアリー',sedai:1,otosuu:3,first_two:'ウイ',last_two:'イン'},
{NO:40,name:'プクリン',type1:'ノーマル',type2:'フェアリー',sedai:1,otosuu:4,first_two:'ウウ',last_two:'イン'},
{NO:41,name:'ズバット',type1:'どく',type2:'ひこう',sedai:1,otosuu:4,first_two:'ウア',last_two:'ッオ'},
{NO:42,name:'ゴルバット',type1:'どく',type2:'ひこう',sedai:1,otosuu:5,first_two:'オウ',last_two:'ッオ'},
{NO:43,name:'ナゾノクサ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'アオ',last_two:'ウア'},
{NO:44,name:'クサイハナ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'ウア',last_two:'アア'},
{NO:45,name:'ラフレシア',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'アウ',last_two:'イア'},
{NO:46,name:'パラス',type1:'むし',type2:'くさ',sedai:1,otosuu:3,first_two:'アア',last_two:'アウ'},
{NO:47,name:'パラセクト',type1:'むし',type2:'くさ',sedai:1,otosuu:5,first_two:'アア',last_two:'ウオ'},
{NO:48,name:'コンパン',type1:'むし',type2:'どく',sedai:1,otosuu:4,first_two:'オン',last_two:'アン'},
{NO:49,name:'モルフォン',type1:'むし',type2:'どく',sedai:1,otosuu:4,first_two:'オウ',last_two:'オン'},
{NO:50,name:'ディグダ',type1:'じめん',type2:'',sedai:1,otosuu:3,first_two:'イウ',last_two:'ウア'},
{NO:51,name:'ダグトリオ',type1:'じめん',type2:'',sedai:1,otosuu:5,first_two:'アウ',last_two:'イオ'},
{NO:52,name:'ニャース',type1:'ノーマル',type2:'',sedai:1,otosuu:3,first_two:'アー',last_two:'ーウ'},
{NO:53,name:'ペルシアン',type1:'ノーマル',type2:'',sedai:1,otosuu:5,first_two:'エウ',last_two:'アン'},
{NO:54,name:'コダック',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'オア',last_two:'ッウ'},
{NO:55,name:'ゴルダック',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'オウ',last_two:'ッウ'},
{NO:56,name:'マンキー',type1:'かくとう',type2:'',sedai:1,otosuu:4,first_two:'アン',last_two:'イー'},
{NO:57,name:'オコリザル',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'オオ',last_two:'アウ'},
{NO:58,name:'ガーディ',type1:'ほのお',type2:'',sedai:1,otosuu:3,first_two:'アー',last_two:'ーイ'},
{NO:59,name:'ウインディ',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'ウイ',last_two:'ンイ'},
{NO:60,name:'ニョロモ',type1:'みず',type2:'',sedai:1,otosuu:3,first_two:'オオ',last_two:'オオ'},
{NO:61,name:'ニョロゾ',type1:'みず',type2:'',sedai:1,otosuu:3,first_two:'オオ',last_two:'オオ'},
{NO:62,name:'ニョロボン',type1:'みず',type2:'かくとう',sedai:1,otosuu:4,first_two:'オオ',last_two:'オン'},
{NO:63,name:'ケーシィ',type1:'エスパー',type2:'',sedai:1,otosuu:3,first_two:'エー',last_two:'ーイ'},
{NO:64,name:'ユンゲラー',type1:'エスパー',type2:'',sedai:1,otosuu:5,first_two:'ウン',last_two:'アー'},
{NO:65,name:'フーディン',type1:'エスパー',type2:'',sedai:1,otosuu:4,first_two:'ウー',last_two:'イン'},
{NO:66,name:'ワンリキー',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'アン',last_two:'イー'},
{NO:67,name:'ゴーリキー',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'オー',last_two:'イー'},
{NO:68,name:'カイリキー',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'アイ',last_two:'イー'},
{NO:69,name:'マダツボミ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'アア',last_two:'オイ'},
{NO:70,name:'ウツドン',type1:'くさ',type2:'どく',sedai:1,otosuu:4,first_two:'ウウ',last_two:'オン'},
{NO:71,name:'ウツボット',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'ウウ',last_two:'ッオ'},
{NO:72,name:'メノクラゲ',type1:'みず',type2:'どく',sedai:1,otosuu:5,first_two:'エオ',last_two:'アエ'},
{NO:73,name:'ドククラゲ',type1:'みず',type2:'どく',sedai:1,otosuu:5,first_two:'オウ',last_two:'アエ'},
{NO:74,name:'イシツブテ',type1:'いわ',type2:'じめん',sedai:1,otosuu:5,first_two:'イイ',last_two:'ウエ'},
{NO:75,name:'ゴローン',type1:'いわ',type2:'じめん',sedai:1,otosuu:4,first_two:'オオ',last_two:'ーン'},
{NO:76,name:'ゴローニャ',type1:'いわ',type2:'じめん',sedai:1,otosuu:4,first_two:'オオ',last_two:'ーア'},
{NO:77,name:'ポニータ',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'オイ',last_two:'ーア'},
{NO:78,name:'ギャロップ',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'アオ',last_two:'ッウ'},
{NO:79,name:'ヤドン',type1:'みず',type2:'エスパー',sedai:1,otosuu:3,first_two:'アオ',last_two:'オン'},
{NO:80,name:'ヤドラン',type1:'みず',type2:'エスパー',sedai:1,otosuu:4,first_two:'アオ',last_two:'アン'},
{NO:81,name:'コイル',type1:'でんき',type2:'はがね',sedai:1,otosuu:3,first_two:'オイ',last_two:'イウ'},
{NO:82,name:'レアコイル',type1:'でんき',type2:'はがね',sedai:1,otosuu:5,first_two:'エア',last_two:'イウ'},
{NO:83,name:'カモネギ',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:4,first_two:'アオ',last_two:'エイ'},
{NO:84,name:'ドードー',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:4,first_two:'オー',last_two:'オー'},
{NO:85,name:'ドードリオ',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:5,first_two:'オー',last_two:'イオ'},
{NO:86,name:'パウワウ',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'アウ',last_two:'アウ'},
{NO:87,name:'ジュゴン',type1:'みず',type2:'こおり',sedai:1,otosuu:3,first_two:'ウオ',last_two:'オン'},
{NO:88,name:'ベトベター',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'エオ',last_two:'アー'},
{NO:89,name:'ベトベトン',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'エオ',last_two:'オン'},
{NO:90,name:'シェルダー',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'エウ',last_two:'アー'},
{NO:91,name:'パルシェン',type1:'みず',type2:'こおり',sedai:1,otosuu:4,first_two:'アウ',last_two:'エン'},
{NO:92,name:'ゴース',type1:'ゴースト',type2:'どく',sedai:1,otosuu:3,first_two:'オー',last_two:'ーウ'},
{NO:93,name:'ゴースト',type1:'ゴースト',type2:'どく',sedai:1,otosuu:4,first_two:'オー',last_two:'ウオ'},
{NO:94,name:'ゲンガー',type1:'ゴースト',type2:'どく',sedai:1,otosuu:4,first_two:'エン',last_two:'アー'},
{NO:95,name:'イワーク',type1:'いわ',type2:'じめん',sedai:1,otosuu:4,first_two:'イア',last_two:'ーウ'},
{NO:96,name:'スリープ',type1:'エスパー',type2:'',sedai:1,otosuu:4,first_two:'ウイ',last_two:'ーウ'},
{NO:97,name:'スリーパー',type1:'エスパー',type2:'',sedai:1,otosuu:5,first_two:'ウイ',last_two:'アー'},
{NO:98,name:'クラブ',type1:'みず',type2:'',sedai:1,otosuu:3,first_two:'ウア',last_two:'アウ'},
{NO:99,name:'キングラー',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'イン',last_two:'アー'},
{NO:100,name:'ビリリダマ',type1:'でんき',type2:'',sedai:1,otosuu:5,first_two:'イイ',last_two:'アア'},
{NO:101,name:'マルマイン',type1:'でんき',type2:'',sedai:1,otosuu:5,first_two:'アウ',last_two:'イン'},
{NO:102,name:'タマタマ',type1:'くさ',type2:'エスパー',sedai:1,otosuu:4,first_two:'アア',last_two:'アア'},
{NO:103,name:'ナッシー',type1:'くさ',type2:'エスパー',sedai:1,otosuu:4,first_two:'アッ',last_two:'イー'},
{NO:104,name:'カラカラ',type1:'じめん',type2:'',sedai:1,otosuu:4,first_two:'アア',last_two:'アア'},
{NO:105,name:'ガラガラ',type1:'じめん',type2:'',sedai:1,otosuu:4,first_two:'アア',last_two:'アア'},
{NO:106,name:'サワムラー',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'アア',last_two:'アー'},
{NO:107,name:'エビワラー',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'エイ',last_two:'アー'},
{NO:108,name:'ベロリンガ',type1:'ノーマル',type2:'',sedai:1,otosuu:5,first_two:'エオ',last_two:'ンア'},
{NO:109,name:'ドガース',type1:'どく',type2:'',sedai:1,otosuu:4,first_two:'オア',last_two:'ーウ'},
{NO:110,name:'マタドガス',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'アア',last_two:'アウ'},
{NO:111,name:'サイホーン',type1:'じめん',type2:'いわ',sedai:1,otosuu:5,first_two:'アイ',last_two:'ーン'},
{NO:112,name:'サイドン',type1:'じめん',type2:'いわ',sedai:1,otosuu:4,first_two:'アイ',last_two:'オン'},
{NO:113,name:'ラッキー',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'アッ',last_two:'イー'},
{NO:114,name:'モンジャラ',type1:'くさ',type2:'',sedai:1,otosuu:4,first_two:'オン',last_two:'アア'},
{NO:115,name:'ガルーラ',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'アウ',last_two:'ーア'},
{NO:116,name:'タッツー',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'アッ',last_two:'ウー'},
{NO:117,name:'シードラ',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'イー',last_two:'オア'},
{NO:118,name:'トサキント',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'オア',last_two:'ンオ'},
{NO:119,name:'アズマオウ',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'アウ',last_two:'オウ'},
{NO:120,name:'ヒトデマン',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'イオ',last_two:'アン'},
{NO:121,name:'スターミー',type1:'みず',type2:'エスパー',sedai:1,otosuu:5,first_two:'ウア',last_two:'イー'},
{NO:122,name:'バリヤード',type1:'エスパー',type2:'フェアリー',sedai:1,otosuu:5,first_two:'アイ',last_two:'ーオ'},
{NO:123,name:'ストライク',type1:'むし',type2:'ひこう',sedai:1,otosuu:5,first_two:'ウオ',last_two:'イウ'},
{NO:124,name:'ルージュラ',type1:'こおり',type2:'エスパー',sedai:1,otosuu:4,first_two:'ウー',last_two:'ウア'},
{NO:125,name:'エレブー',type1:'でんき',type2:'',sedai:1,otosuu:4,first_two:'エエ',last_two:'ウー'},
{NO:126,name:'ブーバー',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'ウー',last_two:'アー'},
{NO:127,name:'カイロス',type1:'むし',type2:'',sedai:1,otosuu:4,first_two:'アイ',last_two:'オウ'},
{NO:128,name:'ケンタロス',type1:'ノーマル',type2:'',sedai:1,otosuu:5,first_two:'エン',last_two:'オウ'},
{NO:129,name:'コイキング',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'オイ',last_two:'ンウ'},
{NO:130,name:'ギャラドス',type1:'みず',type2:'ひこう',sedai:1,otosuu:4,first_two:'アア',last_two:'オウ'},
{NO:131,name:'ラプラス',type1:'みず',type2:'こおり',sedai:1,otosuu:4,first_two:'アウ',last_two:'アウ'},
{NO:132,name:'メタモン',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'エア',last_two:'オン'},
{NO:133,name:'イーブイ',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'イー',last_two:'ウイ'},
{NO:134,name:'シャワーズ',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'アア',last_two:'ーウ'},
{NO:135,name:'サンダース',type1:'でんき',type2:'',sedai:1,otosuu:5,first_two:'アン',last_two:'ーウ'},
{NO:136,name:'ブースター',type1:'ほのお',type2:'',sedai:1,otosuu:5,first_two:'ウー',last_two:'アー'},
{NO:137,name:'ポリゴン',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'オイ',last_two:'オン'},
{NO:138,name:'オムナイト',type1:'いわ',type2:'みず',sedai:1,otosuu:5,first_two:'オウ',last_two:'イオ'},
{NO:139,name:'オムスター',type1:'いわ',type2:'みず',sedai:1,otosuu:5,first_two:'オウ',last_two:'アー'},
{NO:140,name:'カブト',type1:'いわ',type2:'みず',sedai:1,otosuu:3,first_two:'アウ',last_two:'ウオ'},
{NO:141,name:'カブトプス',type1:'いわ',type2:'みず',sedai:1,otosuu:5,first_two:'アウ',last_two:'ウウ'},
{NO:142,name:'プテラ',type1:'いわ',type2:'ひこう',sedai:1,otosuu:3,first_two:'ウエ',last_two:'エア'},
{NO:143,name:'カビゴン',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'アイ',last_two:'オン'},
{NO:144,name:'フリーザー',type1:'こおり',type2:'ひこう',sedai:1,otosuu:5,first_two:'ウイ',last_two:'アー'},
{NO:145,name:'サンダー',type1:'でんき',type2:'ひこう',sedai:1,otosuu:4,first_two:'アン',last_two:'アー'},
{NO:146,name:'ファイヤー',type1:'ほのお',type2:'ひこう',sedai:1,otosuu:4,first_two:'アイ',last_two:'アー'},
{NO:147,name:'ミニリュウ',type1:'ドラゴン',type2:'',sedai:1,otosuu:4,first_two:'イイ',last_two:'ウウ'},
{NO:148,name:'ハクリュー',type1:'ドラゴン',type2:'',sedai:1,otosuu:4,first_two:'アウ',last_two:'ウー'},
{NO:149,name:'カイリュー',type1:'ドラゴン',type2:'ひこう',sedai:1,otosuu:4,first_two:'アイ',last_two:'ウー'},
{NO:150,name:'ミュウツー',type1:'エスパー',type2:'',sedai:1,otosuu:4,first_two:'ウウ',last_two:'ウー'},
{NO:151,name:'ミュウ',type1:'エスパー',type2:'',sedai:1,otosuu:2,first_two:'ウウ',last_two:'ウウ'},
{NO:152,name:'チコリータ',type1:'くさ',type2:'',sedai:2,otosuu:5,first_two:'イオ',last_two:'ーア'},
{NO:153,name:'ベイリーフ',type1:'くさ',type2:'',sedai:2,otosuu:5,first_two:'エイ',last_two:'ーウ'},
{NO:154,name:'メガニウム',type1:'くさ',type2:'',sedai:2,otosuu:5,first_two:'エア',last_two:'ウウ'},
{NO:155,name:'ヒノアラシ',type1:'ほのお',type2:'',sedai:2,otosuu:5,first_two:'イオ',last_two:'アイ'},
{NO:156,name:'マグマラシ',type1:'ほのお',type2:'',sedai:2,otosuu:5,first_two:'アウ',last_two:'アイ'},
{NO:157,name:'バクフーン',type1:'ほのお',type2:'',sedai:2,otosuu:5,first_two:'アウ',last_two:'ーン'},
{NO:158,name:'ワニノコ',type1:'みず',type2:'',sedai:2,otosuu:4,first_two:'アイ',last_two:'オオ'},
{NO:159,name:'アリゲイツ',type1:'みず',type2:'',sedai:2,otosuu:5,first_two:'アイ',last_two:'イウ'},
{NO:160,name:'オーダイル',type1:'みず',type2:'',sedai:2,otosuu:5,first_two:'オー',last_two:'イウ'},
{NO:161,name:'オタチ',type1:'ノーマル',type2:'',sedai:2,otosuu:3,first_two:'オア',last_two:'アイ'},
{NO:162,name:'オオタチ',type1:'ノーマル',type2:'',sedai:2,otosuu:4,first_two:'オオ',last_two:'アイ'},
{NO:163,name:'ホーホー',type1:'ノーマル',type2:'ひこう',sedai:2,otosuu:4,first_two:'オー',last_two:'オー'},
{NO:164,name:'ヨルノズク',type1:'ノーマル',type2:'ひこう',sedai:2,otosuu:5,first_two:'オウ',last_two:'ウウ'},
{NO:165,name:'レディバ',type1:'むし',type2:'ひこう',sedai:2,otosuu:3,first_two:'エイ',last_two:'イア'},
{NO:166,name:'レディアン',type1:'むし',type2:'ひこう',sedai:2,otosuu:4,first_two:'エイ',last_two:'アン'},
{NO:167,name:'イトマル',type1:'むし',type2:'どく',sedai:2,otosuu:4,first_two:'イオ',last_two:'アウ'},
{NO:168,name:'アリアドス',type1:'むし',type2:'どく',sedai:2,otosuu:5,first_two:'アイ',last_two:'オウ'},
{NO:169,name:'クロバット',type1:'どく',type2:'ひこう',sedai:2,otosuu:5,first_two:'ウオ',last_two:'ッオ'},
{NO:170,name:'チョンチー',type1:'みず',type2:'でんき',sedai:2,otosuu:4,first_two:'オン',last_two:'イー'},
{NO:171,name:'ランターン',type1:'みず',type2:'でんき',sedai:2,otosuu:5,first_two:'アン',last_two:'ーン'},
{NO:172,name:'ピチュー',type1:'でんき',type2:'',sedai:2,otosuu:3,first_two:'イウ',last_two:'ウー'},
{NO:173,name:'ピィ',type1:'フェアリー',type2:'',sedai:2,otosuu:1,first_two:'イ',last_two:'イ'},
{NO:174,name:'ププリン',type1:'ノーマル',type2:'フェアリー',sedai:2,otosuu:4,first_two:'ウウ',last_two:'イン'},
{NO:175,name:'トゲピー',type1:'フェアリー',type2:'',sedai:2,otosuu:4,first_two:'オエ',last_two:'イー'},
{NO:176,name:'トゲチック',type1:'フェアリー',type2:'ひこう',sedai:2,otosuu:5,first_two:'オエ',last_two:'ッウ'},
{NO:177,name:'ネイティ',type1:'エスパー',type2:'ひこう',sedai:2,otosuu:3,first_two:'エイ',last_two:'イイ'},
{NO:178,name:'ネイティオ',type1:'エスパー',type2:'ひこう',sedai:2,otosuu:4,first_two:'エイ',last_two:'イオ'},
{NO:179,name:'メリープ',type1:'でんき',type2:'',sedai:2,otosuu:4,first_two:'エイ',last_two:'ーウ'},
{NO:180,name:'モココ',type1:'でんき',type2:'',sedai:2,otosuu:3,first_two:'オオ',last_two:'オオ'},
{NO:181,name:'デンリュウ',type1:'でんき',type2:'',sedai:2,otosuu:4,first_two:'エン',last_two:'ウウ'},
{NO:182,name:'キレイハナ',type1:'くさ',type2:'',sedai:2,otosuu:5,first_two:'イエ',last_two:'アア'},
{NO:183,name:'マリル',type1:'みず',type2:'フェアリー',sedai:2,otosuu:3,first_two:'アイ',last_two:'イウ'},
{NO:184,name:'マリルリ',type1:'みず',type2:'フェアリー',sedai:2,otosuu:4,first_two:'アイ',last_two:'ウイ'},
{NO:185,name:'ウソッキー',type1:'いわ',type2:'',sedai:2,otosuu:5,first_two:'ウオ',last_two:'イー'},
{NO:186,name:'ニョロトノ',type1:'みず',type2:'',sedai:2,otosuu:4,first_two:'オオ',last_two:'オオ'},
{NO:187,name:'ハネッコ',type1:'くさ',type2:'ひこう',sedai:2,otosuu:4,first_two:'アエ',last_two:'ッオ'},
{NO:188,name:'ポポッコ',type1:'くさ',type2:'ひこう',sedai:2,otosuu:4,first_two:'オオ',last_two:'ッオ'},
{NO:189,name:'ワタッコ',type1:'くさ',type2:'ひこう',sedai:2,otosuu:4,first_two:'アア',last_two:'ッオ'},
{NO:190,name:'エイパム',type1:'ノーマル',type2:'',sedai:2,otosuu:4,first_two:'エイ',last_two:'アウ'},
{NO:191,name:'ヒマナッツ',type1:'くさ',type2:'',sedai:2,otosuu:5,first_two:'イア',last_two:'ッウ'},
{NO:192,name:'キマワリ',type1:'くさ',type2:'',sedai:2,otosuu:4,first_two:'イア',last_two:'アイ'},
{NO:193,name:'ヤンヤンマ',type1:'むし',type2:'ひこう',sedai:2,otosuu:5,first_two:'アン',last_two:'ンア'},
{NO:194,name:'ウパー',type1:'みず',type2:'じめん',sedai:2,otosuu:3,first_two:'ウア',last_two:'アー'},
{NO:195,name:'ヌオー',type1:'みず',type2:'じめん',sedai:2,otosuu:3,first_two:'ウオ',last_two:'オー'},
{NO:196,name:'エーフィ',type1:'エスパー',type2:'',sedai:2,otosuu:3,first_two:'エー',last_two:'ーイ'},
{NO:197,name:'ブラッキー',type1:'あく',type2:'',sedai:2,otosuu:5,first_two:'ウア',last_two:'イー'},
{NO:198,name:'ヤミカラス',type1:'あく',type2:'ひこう',sedai:2,otosuu:5,first_two:'アイ',last_two:'アウ'},
{NO:199,name:'ヤドキング',type1:'みず',type2:'エスパー',sedai:2,otosuu:5,first_two:'アオ',last_two:'ンウ'},
{NO:200,name:'ムウマ',type1:'ゴースト',type2:'',sedai:2,otosuu:3,first_two:'ウウ',last_two:'ウア'},
{NO:201,name:'アンノーン',type1:'エスパー',type2:'',sedai:2,otosuu:5,first_two:'アン',last_two:'ーン'},
{NO:202,name:'ソーナンス',type1:'エスパー',type2:'',sedai:2,otosuu:5,first_two:'オー',last_two:'ンウ'},
{NO:203,name:'キリンリキ',type1:'ノーマル',type2:'エスパー',sedai:2,otosuu:5,first_two:'イイ',last_two:'イイ'},
{NO:204,name:'クヌギダマ',type1:'むし',type2:'',sedai:2,otosuu:5,first_two:'ウウ',last_two:'アア'},
{NO:205,name:'フォレトス',type1:'むし',type2:'はがね',sedai:2,otosuu:4,first_two:'オエ',last_two:'オウ'},
{NO:206,name:'ノコッチ',type1:'ノーマル',type2:'',sedai:2,otosuu:4,first_two:'オオ',last_two:'ッイ'},
{NO:207,name:'グライガー',type1:'じめん',type2:'ひこう',sedai:2,otosuu:5,first_two:'ウア',last_two:'アー'},
{NO:208,name:'ハガネール',type1:'はがね',type2:'じめん',sedai:2,otosuu:5,first_two:'アア',last_two:'ーウ'},
{NO:209,name:'ブルー',type1:'フェアリー',type2:'',sedai:2,otosuu:3,first_two:'ウウ',last_two:'ウー'},
{NO:210,name:'グランブル',type1:'フェアリー',type2:'',sedai:2,otosuu:5,first_two:'ウア',last_two:'ウウ'},
{NO:211,name:'ハリーセン',type1:'みず',type2:'どく',sedai:2,otosuu:5,first_two:'アイ',last_two:'エン'},
{NO:212,name:'ハッサム',type1:'むし',type2:'はがね',sedai:2,otosuu:4,first_two:'アッ',last_two:'アウ'},
{NO:213,name:'ツボツボ',type1:'むし',type2:'いわ',sedai:2,otosuu:4,first_two:'ウオ',last_two:'ウオ'},
{NO:214,name:'ヘラクロス',type1:'むし',type2:'かくとう',sedai:2,otosuu:5,first_two:'エア',last_two:'オウ'},
{NO:215,name:'ニューラ',type1:'あく',type2:'こおり',sedai:2,otosuu:3,first_two:'ウー',last_two:'ーア'},
{NO:216,name:'ヒメグマ',type1:'ノーマル',type2:'',sedai:2,otosuu:4,first_two:'イエ',last_two:'ウア'},
{NO:217,name:'リングマ',type1:'ノーマル',type2:'',sedai:2,otosuu:4,first_two:'イン',last_two:'ウア'},
{NO:218,name:'マグマッグ',type1:'ほのお',type2:'',sedai:2,otosuu:5,first_two:'アウ',last_two:'ッウ'},
{NO:219,name:'マグカルゴ',type1:'ほのお',type2:'いわ',sedai:2,otosuu:5,first_two:'アウ',last_two:'ウオ'},
{NO:220,name:'ウリムー',type1:'こおり',type2:'じめん',sedai:2,otosuu:4,first_two:'ウイ',last_two:'ウー'},
{NO:221,name:'イノムー',type1:'こおり',type2:'じめん',sedai:2,otosuu:4,first_two:'イオ',last_two:'ウー'},
{NO:222,name:'サニーゴ',type1:'みず',type2:'いわ',sedai:2,otosuu:4,first_two:'アイ',last_two:'ーオ'},
{NO:223,name:'テッポウオ',type1:'みず',type2:'',sedai:2,otosuu:5,first_two:'エッ',last_two:'ウオ'},
{NO:224,name:'オクタン',type1:'みず',type2:'',sedai:2,otosuu:4,first_two:'オウ',last_two:'アン'},
{NO:225,name:'デリバード',type1:'こおり',type2:'ひこう',sedai:2,otosuu:5,first_two:'エイ',last_two:'ーオ'},
{NO:226,name:'マンタイン',type1:'みず',type2:'ひこう',sedai:2,otosuu:5,first_two:'アン',last_two:'イン'},
{NO:227,name:'エアームド',type1:'はがね',type2:'ひこう',sedai:2,otosuu:5,first_two:'エア',last_two:'ウオ'},
{NO:228,name:'デルビル',type1:'あく',type2:'ほのお',sedai:2,otosuu:4,first_two:'エウ',last_two:'イウ'},
{NO:229,name:'ヘルガー',type1:'あく',type2:'ほのお',sedai:2,otosuu:4,first_two:'エウ',last_two:'アー'},
{NO:230,name:'キングドラ',type1:'みず',type2:'ドラゴン',sedai:2,otosuu:5,first_two:'イン',last_two:'オア'},
{NO:231,name:'ゴマゾウ',type1:'じめん',type2:'',sedai:2,otosuu:4,first_two:'オア',last_two:'オウ'},
{NO:232,name:'ドンファン',type1:'じめん',type2:'',sedai:2,otosuu:4,first_two:'オン',last_two:'アン'},
{NO:233,name:'ポリゴン2',type1:'ノーマル',type2:'',sedai:2,otosuu:6,first_two:'オイ',last_two:'ウー'},
{NO:234,name:'オドシシ',type1:'ノーマル',type2:'',sedai:2,otosuu:4,first_two:'オオ',last_two:'イイ'},
{NO:235,name:'ドーブル',type1:'ノーマル',type2:'',sedai:2,otosuu:4,first_two:'オー',last_two:'ウウ'},
{NO:236,name:'バルキー',type1:'かくとう',type2:'',sedai:2,otosuu:4,first_two:'アウ',last_two:'イー'},
{NO:237,name:'カポエラー',type1:'かくとう',type2:'',sedai:2,otosuu:5,first_two:'アオ',last_two:'アー'},
{NO:238,name:'ムチュール',type1:'こおり',type2:'エスパー',sedai:2,otosuu:4,first_two:'ウウ',last_two:'ーウ'},
{NO:239,name:'エレキッド',type1:'でんき',type2:'',sedai:2,otosuu:5,first_two:'エエ',last_two:'ッオ'},
{NO:240,name:'ブビィ',type1:'ほのお',type2:'',sedai:2,otosuu:2,first_two:'ウイ',last_two:'ウイ'},
{NO:241,name:'ミルタンク',type1:'ノーマル',type2:'',sedai:2,otosuu:5,first_two:'イウ',last_two:'ンウ'},
{NO:242,name:'ハピナス',type1:'ノーマル',type2:'',sedai:2,otosuu:4,first_two:'アイ',last_two:'アウ'},
{NO:243,name:'ライコウ',type1:'でんき',type2:'',sedai:2,otosuu:4,first_two:'アイ',last_two:'オウ'},
{NO:244,name:'エンテイ',type1:'ほのお',type2:'',sedai:2,otosuu:4,first_two:'エン',last_two:'エイ'},
{NO:245,name:'スイクン',type1:'みず',type2:'',sedai:2,otosuu:4,first_two:'ウイ',last_two:'ウン'},
{NO:246,name:'ヨーギラス',type1:'いわ',type2:'じめん',sedai:2,otosuu:5,first_two:'オー',last_two:'アウ'},
{NO:247,name:'サナギラス',type1:'いわ',type2:'じめん',sedai:2,otosuu:5,first_two:'アア',last_two:'アウ'},
{NO:248,name:'バンギラス',type1:'いわ',type2:'あく',sedai:2,otosuu:5,first_two:'アン',last_two:'アウ'},
{NO:249,name:'ルギア',type1:'エスパー',type2:'ひこう',sedai:2,otosuu:3,first_two:'ウイ',last_two:'イア'},
{NO:250,name:'ホウオウ',type1:'ほのお',type2:'ひこう',sedai:2,otosuu:4,first_two:'オウ',last_two:'オウ'},
{NO:251,name:'セレビィ',type1:'エスパー',type2:'くさ',sedai:2,otosuu:3,first_two:'エエ',last_two:'エイ'},
{NO:252,name:'キモリ',type1:'くさ',type2:'',sedai:3,otosuu:3,first_two:'イオ',last_two:'オイ'},
{NO:253,name:'ジュプトル',type1:'くさ',type2:'',sedai:3,otosuu:4,first_two:'ウウ',last_two:'オウ'},
{NO:254,name:'ジュカイン',type1:'くさ',type2:'',sedai:3,otosuu:4,first_two:'ウア',last_two:'イン'},
{NO:255,name:'アチャモ',type1:'ほのお',type2:'',sedai:3,otosuu:3,first_two:'アア',last_two:'アオ'},
{NO:256,name:'ワカシャモ',type1:'ほのお',type2:'かくとう',sedai:3,otosuu:4,first_two:'アア',last_two:'アオ'},
{NO:257,name:'バシャーモ',type1:'ほのお',type2:'かくとう',sedai:3,otosuu:4,first_two:'アア',last_two:'ーオ'},
{NO:258,name:'ミズゴロウ',type1:'みず',type2:'',sedai:3,otosuu:5,first_two:'イウ',last_two:'オウ'},
{NO:259,name:'ヌマクロー',type1:'みず',type2:'じめん',sedai:3,otosuu:5,first_two:'ウア',last_two:'オー'},
{NO:260,name:'ラグラージ',type1:'みず',type2:'じめん',sedai:3,otosuu:5,first_two:'アウ',last_two:'ーイ'},
{NO:261,name:'ポチエナ',type1:'あく',type2:'',sedai:3,otosuu:4,first_two:'オイ',last_two:'エア'},
{NO:262,name:'グラエナ',type1:'あく',type2:'',sedai:3,otosuu:4,first_two:'ウア',last_two:'エア'},
{NO:263,name:'ジグザグマ',type1:'ノーマル',type2:'',sedai:3,otosuu:5,first_two:'イウ',last_two:'ウア'},
{NO:264,name:'マッスグマ',type1:'ノーマル',type2:'',sedai:3,otosuu:5,first_two:'アッ',last_two:'ウア'},
{NO:265,name:'ケムッソ',type1:'むし',type2:'',sedai:3,otosuu:4,first_two:'エウ',last_two:'ッオ'},
{NO:266,name:'カラサリス',type1:'むし',type2:'',sedai:3,otosuu:5,first_two:'アア',last_two:'イウ'},
{NO:267,name:'アゲハント',type1:'むし',type2:'ひこう',sedai:3,otosuu:5,first_two:'アエ',last_two:'ンオ'},
{NO:268,name:'マユルド',type1:'むし',type2:'',sedai:3,otosuu:4,first_two:'アウ',last_two:'ウオ'},
{NO:269,name:'ドクケイル',type1:'むし',type2:'どく',sedai:3,otosuu:5,first_two:'オウ',last_two:'イウ'},
{NO:270,name:'ハスボー',type1:'みず',type2:'くさ',sedai:3,otosuu:4,first_two:'アウ',last_two:'オー'},
{NO:271,name:'ハスブレロ',type1:'みず',type2:'くさ',sedai:3,otosuu:5,first_two:'アウ',last_two:'エオ'},
{NO:272,name:'ルンパッパ',type1:'みず',type2:'くさ',sedai:3,otosuu:5,first_two:'ウン',last_two:'ッア'},
{NO:273,name:'タネボー',type1:'くさ',type2:'',sedai:3,otosuu:4,first_two:'アエ',last_two:'オー'},
{NO:274,name:'コノハナ',type1:'くさ',type2:'あく',sedai:3,otosuu:4,first_two:'オオ',last_two:'アア'},
{NO:275,name:'ダーテング',type1:'くさ',type2:'あく',sedai:3,otosuu:5,first_two:'アー',last_two:'ンウ'},
{NO:276,name:'スバメ',type1:'ノーマル',type2:'ひこう',sedai:3,otosuu:3,first_two:'ウア',last_two:'アエ'},
{NO:277,name:'オオスバメ',type1:'ノーマル',type2:'ひこう',sedai:3,otosuu:5,first_two:'オオ',last_two:'アエ'},
{NO:278,name:'キャモメ',type1:'みず',type2:'ひこう',sedai:3,otosuu:3,first_two:'アオ',last_two:'オエ'},
{NO:279,name:'ペリッパー',type1:'みず',type2:'ひこう',sedai:3,otosuu:5,first_two:'エイ',last_two:'アー'},
{NO:280,name:'ラルトス',type1:'エスパー',type2:'フェアリー',sedai:3,otosuu:4,first_two:'アウ',last_two:'オウ'},
{NO:281,name:'キルリア',type1:'エスパー',type2:'フェアリー',sedai:3,otosuu:4,first_two:'イウ',last_two:'イア'},
{NO:282,name:'サーナイト',type1:'エスパー',type2:'フェアリー',sedai:3,otosuu:5,first_two:'アー',last_two:'イオ'},
{NO:283,name:'アメタマ',type1:'むし',type2:'みず',sedai:3,otosuu:4,first_two:'アエ',last_two:'アア'},
{NO:284,name:'アメモース',type1:'むし',type2:'ひこう',sedai:3,otosuu:5,first_two:'アエ',last_two:'ーウ'},
{NO:285,name:'キノココ',type1:'くさ',type2:'',sedai:3,otosuu:4,first_two:'イオ',last_two:'オオ'},
{NO:286,name:'キノガッサ',type1:'くさ',type2:'かくとう',sedai:3,otosuu:5,first_two:'イオ',last_two:'ッア'},
{NO:287,name:'ナマケロ',type1:'ノーマル',type2:'',sedai:3,otosuu:4,first_two:'アア',last_two:'エオ'},
{NO:288,name:'ヤルキモノ',type1:'ノーマル',type2:'',sedai:3,otosuu:5,first_two:'アウ',last_two:'オオ'},
{NO:289,name:'ケッキング',type1:'ノーマル',type2:'',sedai:3,otosuu:5,first_two:'エッ',last_two:'ンウ'},
{NO:290,name:'ツチニン',type1:'むし',type2:'じめん',sedai:3,otosuu:4,first_two:'ウイ',last_two:'イン'},
{NO:291,name:'テッカニン',type1:'むし',type2:'ひこう',sedai:3,otosuu:5,first_two:'エッ',last_two:'イン'},
{NO:292,name:'ヌケニン',type1:'むし',type2:'ゴースト',sedai:3,otosuu:4,first_two:'ウエ',last_two:'イン'},
{NO:293,name:'ゴニョニョ',type1:'ノーマル',type2:'',sedai:3,otosuu:3,first_two:'オオ',last_two:'オオ'},
{NO:294,name:'ドゴーム',type1:'ノーマル',type2:'',sedai:3,otosuu:4,first_two:'オオ',last_two:'ーウ'},
{NO:295,name:'バクオング',type1:'ノーマル',type2:'',sedai:3,otosuu:5,first_two:'アウ',last_two:'ンウ'},
{NO:296,name:'マクノシタ',type1:'かくとう',type2:'',sedai:3,otosuu:5,first_two:'アウ',last_two:'イア'},
{NO:297,name:'ハリテヤマ',type1:'かくとう',type2:'',sedai:3,otosuu:5,first_two:'アイ',last_two:'アア'},
{NO:298,name:'ルリリ',type1:'ノーマル',type2:'フェアリー',sedai:3,otosuu:3,first_two:'ウイ',last_two:'イイ'},
{NO:299,name:'ノズパス',type1:'いわ',type2:'',sedai:3,otosuu:4,first_two:'オウ',last_two:'アウ'},
{NO:300,name:'エネコ',type1:'ノーマル',type2:'',sedai:3,otosuu:3,first_two:'エエ',last_two:'エオ'},
{NO:301,name:'エネコロロ',type1:'ノーマル',type2:'',sedai:3,otosuu:5,first_two:'エエ',last_two:'オオ'},
{NO:302,name:'ヤミラミ',type1:'あく',type2:'ゴースト',sedai:3,otosuu:4,first_two:'アイ',last_two:'アイ'},
{NO:303,name:'クチート',type1:'はがね',type2:'フェアリー',sedai:3,otosuu:4,first_two:'ウイ',last_two:'ーオ'},
{NO:304,name:'ココドラ',type1:'はがね',type2:'いわ',sedai:3,otosuu:4,first_two:'オオ',last_two:'オア'},
{NO:305,name:'コドラ',type1:'はがね',type2:'いわ',sedai:3,otosuu:3,first_two:'オオ',last_two:'オア'},
{NO:306,name:'ボスゴドラ',type1:'はがね',type2:'いわ',sedai:3,otosuu:5,first_two:'オウ',last_two:'オア'},
{NO:307,name:'アサナン',type1:'かくとう',type2:'エスパー',sedai:3,otosuu:4,first_two:'アア',last_two:'アン'},
{NO:308,name:'チャーレム',type1:'かくとう',type2:'エスパー',sedai:3,otosuu:4,first_two:'アー',last_two:'エウ'},
{NO:309,name:'ラクライ',type1:'でんき',type2:'',sedai:3,otosuu:4,first_two:'アウ',last_two:'アイ'},
{NO:310,name:'ライボルト',type1:'でんき',type2:'',sedai:3,otosuu:5,first_two:'アイ',last_two:'ウオ'},
{NO:311,name:'プラスル',type1:'でんき',type2:'',sedai:3,otosuu:4,first_two:'ウア',last_two:'ウウ'},
{NO:312,name:'マイナン',type1:'でんき',type2:'',sedai:3,otosuu:4,first_two:'アイ',last_two:'アン'},
{NO:313,name:'バルビート',type1:'むし',type2:'',sedai:3,otosuu:5,first_two:'アウ',last_two:'ーオ'},
{NO:314,name:'イルミーゼ',type1:'むし',type2:'',sedai:3,otosuu:5,first_two:'イウ',last_two:'ーエ'},
{NO:315,name:'ロゼリア',type1:'くさ',type2:'どく',sedai:3,otosuu:4,first_two:'オエ',last_two:'イア'},
{NO:316,name:'ゴクリン',type1:'どく',type2:'',sedai:3,otosuu:4,first_two:'オウ',last_two:'イン'},
{NO:317,name:'マルノーム',type1:'どく',type2:'',sedai:3,otosuu:5,first_two:'アウ',last_two:'ーウ'},
{NO:318,name:'キバニア',type1:'みず',type2:'あく',sedai:3,otosuu:4,first_two:'イア',last_two:'イア'},
{NO:319,name:'サメハダー',type1:'みず',type2:'あく',sedai:3,otosuu:5,first_two:'アエ',last_two:'アー'},
{NO:320,name:'ホエルコ',type1:'みず',type2:'',sedai:3,otosuu:4,first_two:'オエ',last_two:'ウオ'},
{NO:321,name:'ホエルオー',type1:'みず',type2:'',sedai:3,otosuu:5,first_two:'オエ',last_two:'オー'},
{NO:322,name:'ドンメル',type1:'ほのお',type2:'じめん',sedai:3,otosuu:4,first_two:'オン',last_two:'エウ'},
{NO:323,name:'バクーダ',type1:'ほのお',type2:'じめん',sedai:3,otosuu:4,first_two:'アウ',last_two:'ーア'},
{NO:324,name:'コータス',type1:'ほのお',type2:'',sedai:3,otosuu:4,first_two:'オー',last_two:'アウ'},
{NO:325,name:'バネブー',type1:'エスパー',type2:'',sedai:3,otosuu:4,first_two:'アエ',last_two:'ウー'},
{NO:326,name:'ブーピッグ',type1:'エスパー',type2:'',sedai:3,otosuu:5,first_two:'ウー',last_two:'ッウ'},
{NO:327,name:'パッチール',type1:'ノーマル',type2:'',sedai:3,otosuu:5,first_two:'アッ',last_two:'ーウ'},
{NO:328,name:'ナックラー',type1:'じめん',type2:'',sedai:3,otosuu:5,first_two:'アッ',last_two:'アー'},
{NO:329,name:'ビブラーバ',type1:'じめん',type2:'ドラゴン',sedai:3,otosuu:5,first_two:'イウ',last_two:'ーア'},
{NO:330,name:'フライゴン',type1:'じめん',type2:'ドラゴン',sedai:3,otosuu:5,first_two:'ウア',last_two:'オン'},
{NO:331,name:'サボネア',type1:'くさ',type2:'',sedai:3,otosuu:4,first_two:'アオ',last_two:'エア'},
{NO:332,name:'ノクタス',type1:'くさ',type2:'あく',sedai:3,otosuu:4,first_two:'オウ',last_two:'アウ'},
{NO:333,name:'チルット',type1:'ノーマル',type2:'ひこう',sedai:3,otosuu:4,first_two:'イウ',last_two:'ッオ'},
{NO:334,name:'チルタリス',type1:'ドラゴン',type2:'ひこう',sedai:3,otosuu:5,first_two:'イウ',last_two:'イウ'},
{NO:335,name:'ザングース',type1:'ノーマル',type2:'',sedai:3,otosuu:5,first_two:'アン',last_two:'ーウ'},
{NO:336,name:'ハブネーク',type1:'どく',type2:'',sedai:3,otosuu:5,first_two:'アウ',last_two:'ーウ'},
{NO:337,name:'ルナトーン',type1:'いわ',type2:'エスパー',sedai:3,otosuu:5,first_two:'ウア',last_two:'ーン'},
{NO:338,name:'ソルロック',type1:'いわ',type2:'エスパー',sedai:3,otosuu:5,first_two:'オウ',last_two:'ッウ'},
{NO:339,name:'ドジョッチ',type1:'みず',type2:'じめん',sedai:3,otosuu:4,first_two:'オオ',last_two:'ッイ'},
{NO:340,name:'ナマズン',type1:'みず',type2:'じめん',sedai:3,otosuu:4,first_two:'アア',last_two:'ウン'},
{NO:341,name:'ヘイガニ',type1:'みず',type2:'',sedai:3,otosuu:4,first_two:'エイ',last_two:'アイ'},
{NO:342,name:'シザリガー',type1:'みず',type2:'あく',sedai:3,otosuu:5,first_two:'イア',last_two:'アー'},
{NO:343,name:'ヤジロン',type1:'じめん',type2:'エスパー',sedai:3,otosuu:4,first_two:'アイ',last_two:'オン'},
{NO:344,name:'ネンドール',type1:'じめん',type2:'エスパー',sedai:3,otosuu:5,first_two:'エン',last_two:'ーウ'},
{NO:345,name:'リリーラ',type1:'いわ',type2:'くさ',sedai:3,otosuu:4,first_two:'イイ',last_two:'ーア'},
{NO:346,name:'ユレイドル',type1:'いわ',type2:'くさ',sedai:3,otosuu:5,first_two:'ウエ',last_two:'オウ'},
{NO:347,name:'アノプス',type1:'いわ',type2:'むし',sedai:3,otosuu:4,first_two:'アオ',last_two:'ウウ'},
{NO:348,name:'アーマルド',type1:'いわ',type2:'むし',sedai:3,otosuu:5,first_two:'アー',last_two:'ウオ'},
{NO:349,name:'ヒンバス',type1:'みず',type2:'',sedai:3,otosuu:4,first_two:'イン',last_two:'アウ'},
{NO:350,name:'ミロカロス',type1:'みず',type2:'',sedai:3,otosuu:5,first_two:'イオ',last_two:'オウ'},
{NO:351,name:'ポワルン',type1:'ノーマル',type2:'',sedai:3,otosuu:4,first_two:'オア',last_two:'ウン'},
{NO:352,name:'カクレオン',type1:'ノーマル',type2:'',sedai:3,otosuu:5,first_two:'アウ',last_two:'オン'},
{NO:353,name:'カゲボウズ',type1:'ゴースト',type2:'',sedai:3,otosuu:5,first_two:'アエ',last_two:'ウウ'},
{NO:354,name:'ジュペッタ',type1:'ゴースト',type2:'',sedai:3,otosuu:4,first_two:'ウエ',last_two:'ッア'},
{NO:355,name:'ヨマワル',type1:'ゴースト',type2:'',sedai:3,otosuu:4,first_two:'オア',last_two:'アウ'},
{NO:356,name:'サマヨール',type1:'ゴースト',type2:'',sedai:3,otosuu:5,first_two:'アア',last_two:'ーウ'},
{NO:357,name:'トロピウス',type1:'くさ',type2:'ひこう',sedai:3,otosuu:5,first_two:'オオ',last_two:'ウウ'},
{NO:358,name:'チリーン',type1:'エスパー',type2:'',sedai:3,otosuu:4,first_two:'イイ',last_two:'ーン'},
{NO:359,name:'アブソル',type1:'あく',type2:'',sedai:3,otosuu:4,first_two:'アウ',last_two:'オウ'},
{NO:360,name:'ソーナノ',type1:'エスパー',type2:'',sedai:3,otosuu:4,first_two:'オー',last_two:'アオ'},
{NO:361,name:'ユキワラシ',type1:'こおり',type2:'',sedai:3,otosuu:5,first_two:'ウイ',last_two:'アイ'},
{NO:362,name:'オニゴーリ',type1:'こおり',type2:'',sedai:3,otosuu:5,first_two:'オイ',last_two:'ーイ'},
{NO:363,name:'タマザラシ',type1:'こおり',type2:'みず',sedai:3,otosuu:5,first_two:'アア',last_two:'アイ'},
{NO:364,name:'トドグラー',type1:'こおり',type2:'みず',sedai:3,otosuu:5,first_two:'オオ',last_two:'アー'},
{NO:365,name:'トドゼルガ',type1:'こおり',type2:'みず',sedai:3,otosuu:5,first_two:'オオ',last_two:'ウア'},
{NO:366,name:'パールル',type1:'みず',type2:'',sedai:3,otosuu:4,first_two:'アー',last_two:'ウウ'},
{NO:367,name:'ハンテール',type1:'みず',type2:'',sedai:3,otosuu:5,first_two:'アン',last_two:'ーウ'},
{NO:368,name:'サクラビス',type1:'みず',type2:'',sedai:3,otosuu:5,first_two:'アウ',last_two:'イウ'},
{NO:369,name:'ジーランス',type1:'みず',type2:'いわ',sedai:3,otosuu:5,first_two:'イー',last_two:'ンウ'},
{NO:370,name:'ラブカス',type1:'みず',type2:'',sedai:3,otosuu:4,first_two:'アウ',last_two:'アウ'},
{NO:371,name:'タツベイ',type1:'ドラゴン',type2:'',sedai:3,otosuu:4,first_two:'アウ',last_two:'エイ'},
{NO:372,name:'コモルー',type1:'ドラゴン',type2:'',sedai:3,otosuu:4,first_two:'オオ',last_two:'ウー'},
{NO:373,name:'ボーマンダ',type1:'ドラゴン',type2:'ひこう',sedai:3,otosuu:5,first_two:'オー',last_two:'ンア'},
{NO:374,name:'ダンバル',type1:'はがね',type2:'エスパー',sedai:3,otosuu:4,first_two:'アン',last_two:'アウ'},
{NO:375,name:'メタング',type1:'はがね',type2:'エスパー',sedai:3,otosuu:4,first_two:'エア',last_two:'ンウ'},
{NO:376,name:'メタグロス',type1:'はがね',type2:'エスパー',sedai:3,otosuu:5,first_two:'エア',last_two:'オウ'},
{NO:377,name:'レジロック',type1:'いわ',type2:'',sedai:3,otosuu:5,first_two:'エイ',last_two:'ッウ'},
{NO:378,name:'レジアイス',type1:'こおり',type2:'',sedai:3,otosuu:5,first_two:'エイ',last_two:'イウ'},
{NO:379,name:'レジスチル',type1:'はがね',type2:'',sedai:3,otosuu:5,first_two:'エイ',last_two:'イウ'},
{NO:380,name:'ラティアス',type1:'ドラゴン',type2:'エスパー',sedai:3,otosuu:4,first_two:'アイ',last_two:'アウ'},
{NO:381,name:'ラティオス',type1:'ドラゴン',type2:'エスパー',sedai:3,otosuu:4,first_two:'アイ',last_two:'オウ'},
{NO:382,name:'カイオーガ',type1:'みず',type2:'',sedai:3,otosuu:5,first_two:'アイ',last_two:'ーア'},
{NO:383,name:'グラードン',type1:'じめん',type2:'',sedai:3,otosuu:5,first_two:'ウア',last_two:'オン'},
{NO:384,name:'レックウザ',type1:'ドラゴン',type2:'ひこう',sedai:3,otosuu:5,first_two:'エッ',last_two:'ウア'},
{NO:385,name:'ジラーチ',type1:'はがね',type2:'エスパー',sedai:3,otosuu:4,first_two:'イア',last_two:'ーイ'},
{NO:386,name:'デオキシス',type1:'エスパー',type2:'',sedai:3,otosuu:5,first_two:'エオ',last_two:'イウ'},
{NO:387,name:'ナエトル',type1:'くさ',type2:'',sedai:4,otosuu:4,first_two:'アエ',last_two:'オウ'},
{NO:388,name:'ハヤシガメ',type1:'くさ',type2:'',sedai:4,otosuu:5,first_two:'アア',last_two:'アエ'},
{NO:389,name:'ドダイトス',type1:'くさ',type2:'じめん',sedai:4,otosuu:5,first_two:'オア',last_two:'オウ'},
{NO:390,name:'ヒコザル',type1:'ほのお',type2:'',sedai:4,otosuu:4,first_two:'イオ',last_two:'アウ'},
{NO:391,name:'モウカザル',type1:'ほのお',type2:'かくとう',sedai:4,otosuu:5,first_two:'オウ',last_two:'アウ'},
{NO:392,name:'ゴウカザル',type1:'ほのお',type2:'かくとう',sedai:4,otosuu:5,first_two:'オウ',last_two:'アウ'},
{NO:393,name:'ポッチャマ',type1:'みず',type2:'',sedai:4,otosuu:4,first_two:'オッ',last_two:'アア'},
{NO:394,name:'ポッタイシ',type1:'みず',type2:'',sedai:4,otosuu:5,first_two:'オッ',last_two:'イイ'},
{NO:395,name:'エンペルト',type1:'みず',type2:'はがね',sedai:4,otosuu:5,first_two:'エン',last_two:'ウオ'},
{NO:396,name:'ムックル',type1:'ノーマル',type2:'ひこう',sedai:4,otosuu:4,first_two:'ウッ',last_two:'ウウ'},
{NO:397,name:'ムクバード',type1:'ノーマル',type2:'ひこう',sedai:4,otosuu:5,first_two:'ウウ',last_two:'ーオ'},
{NO:398,name:'ムクホーク',type1:'ノーマル',type2:'ひこう',sedai:4,otosuu:5,first_two:'ウウ',last_two:'ーウ'},
{NO:399,name:'ビッパ',type1:'ノーマル',type2:'',sedai:4,otosuu:3,first_two:'イッ',last_two:'ッア'},
{NO:400,name:'ビーダル',type1:'ノーマル',type2:'みず',sedai:4,otosuu:4,first_two:'イー',last_two:'アウ'},
{NO:401,name:'コロボーシ',type1:'むし',type2:'',sedai:4,otosuu:5,first_two:'オオ',last_two:'ーイ'},
{NO:402,name:'コロトック',type1:'むし',type2:'',sedai:4,otosuu:5,first_two:'オオ',last_two:'ッウ'},
{NO:403,name:'コリンク',type1:'でんき',type2:'',sedai:4,otosuu:4,first_two:'オイ',last_two:'ンウ'},
{NO:404,name:'ルクシオ',type1:'でんき',type2:'',sedai:4,otosuu:4,first_two:'ウウ',last_two:'イオ'},
{NO:405,name:'レントラー',type1:'でんき',type2:'',sedai:4,otosuu:5,first_two:'エン',last_two:'アー'},
{NO:406,name:'スボミー',type1:'くさ',type2:'どく',sedai:4,otosuu:4,first_two:'ウオ',last_two:'イー'},
{NO:407,name:'ロズレイド',type1:'くさ',type2:'どく',sedai:4,otosuu:5,first_two:'オウ',last_two:'イオ'},
{NO:408,name:'ズガイドス',type1:'いわ',type2:'',sedai:4,otosuu:5,first_two:'ウア',last_two:'オウ'},
{NO:409,name:'ラムパルド',type1:'いわ',type2:'',sedai:4,otosuu:5,first_two:'アウ',last_two:'ウオ'},
{NO:410,name:'タテトプス',type1:'いわ',type2:'はがね',sedai:4,otosuu:5,first_two:'アエ',last_two:'ウウ'},
{NO:411,name:'トリデプス',type1:'いわ',type2:'はがね',sedai:4,otosuu:5,first_two:'オイ',last_two:'ウウ'},
{NO:412,name:'ミノムッチ',type1:'むし',type2:'',sedai:4,otosuu:5,first_two:'イオ',last_two:'ッイ'},
{NO:413,name:'ミノマダム',type1:'むし',type2:'くさ',sedai:4,otosuu:5,first_two:'イオ',last_two:'アウ'},
{NO:414,name:'ガーメイル',type1:'むし',type2:'ひこう',sedai:4,otosuu:5,first_two:'アー',last_two:'イウ'},
{NO:415,name:'ミツハニー',type1:'むし',type2:'ひこう',sedai:4,otosuu:5,first_two:'イウ',last_two:'イー'},
{NO:416,name:'ビークイン',type1:'むし',type2:'ひこう',sedai:4,otosuu:5,first_two:'イー',last_two:'イン'},
{NO:417,name:'パチリス',type1:'でんき',type2:'',sedai:4,otosuu:4,first_two:'アイ',last_two:'イウ'},
{NO:418,name:'ブイゼル',type1:'みず',type2:'',sedai:4,otosuu:4,first_two:'ウイ',last_two:'エウ'},
{NO:419,name:'フローゼル',type1:'みず',type2:'',sedai:4,otosuu:5,first_two:'ウオ',last_two:'エウ'},
{NO:420,name:'チェリンボ',type1:'くさ',type2:'',sedai:4,otosuu:4,first_two:'エイ',last_two:'ンオ'},
{NO:421,name:'チェリム',type1:'くさ',type2:'',sedai:4,otosuu:3,first_two:'エイ',last_two:'イウ'},
{NO:422,name:'カラナクシ',type1:'みず',type2:'',sedai:4,otosuu:5,first_two:'アア',last_two:'ウイ'},
{NO:423,name:'トリトドン',type1:'みず',type2:'じめん',sedai:4,otosuu:5,first_two:'オイ',last_two:'オン'},
{NO:424,name:'エテボース',type1:'ノーマル',type2:'',sedai:4,otosuu:5,first_two:'エエ',last_two:'ーウ'},
{NO:425,name:'フワンテ',type1:'ゴースト',type2:'ひこう',sedai:4,otosuu:4,first_two:'ウア',last_two:'ンエ'},
{NO:426,name:'フワライド',type1:'ゴースト',type2:'ひこう',sedai:4,otosuu:5,first_two:'ウア',last_two:'イオ'},
{NO:427,name:'ミミロル',type1:'ノーマル',type2:'',sedai:4,otosuu:4,first_two:'イイ',last_two:'オウ'},
{NO:428,name:'ミミロップ',type1:'ノーマル',type2:'',sedai:4,otosuu:5,first_two:'イイ',last_two:'ッウ'},
{NO:429,name:'ムウマージ',type1:'ゴースト',type2:'',sedai:4,otosuu:5,first_two:'ウウ',last_two:'ーイ'},
{NO:430,name:'ドンカラス',type1:'あく',type2:'ひこう',sedai:4,otosuu:5,first_two:'オン',last_two:'アウ'},
{NO:431,name:'ニャルマー',type1:'ノーマル',type2:'',sedai:4,otosuu:4,first_two:'アウ',last_two:'アー'},
{NO:432,name:'ブニャット',type1:'ノーマル',type2:'',sedai:4,otosuu:4,first_two:'ウア',last_two:'ッオ'},
{NO:433,name:'リーシャン',type1:'エスパー',type2:'',sedai:4,otosuu:4,first_two:'イー',last_two:'アン'},
{NO:434,name:'スカンプー',type1:'どく',type2:'あく',sedai:4,otosuu:5,first_two:'ウア',last_two:'ウー'},
{NO:435,name:'スカタンク',type1:'どく',type2:'あく',sedai:4,otosuu:5,first_two:'ウア',last_two:'ンウ'},
{NO:436,name:'ドーミラー',type1:'はがね',type2:'エスパー',sedai:4,otosuu:5,first_two:'オー',last_two:'アー'},
{NO:437,name:'ドータクン',type1:'はがね',type2:'エスパー',sedai:4,otosuu:5,first_two:'オー',last_two:'ウン'},
{NO:438,name:'ウソハチ',type1:'いわ',type2:'',sedai:4,otosuu:4,first_two:'ウオ',last_two:'アイ'},
{NO:439,name:'マネネ',type1:'エスパー',type2:'フェアリー',sedai:4,otosuu:3,first_two:'アエ',last_two:'エエ'},
{NO:440,name:'ピンプク',type1:'ノーマル',type2:'',sedai:4,otosuu:4,first_two:'イン',last_two:'ウウ'},
{NO:441,name:'ペラップ',type1:'ノーマル',type2:'ひこう',sedai:4,otosuu:4,first_two:'エア',last_two:'ッウ'},
{NO:442,name:'ミカルゲ',type1:'ゴースト',type2:'あく',sedai:4,otosuu:4,first_two:'イア',last_two:'ウエ'},
{NO:443,name:'フカマル',type1:'ドラゴン',type2:'じめん',sedai:4,otosuu:4,first_two:'ウア',last_two:'アウ'},
{NO:444,name:'ガバイト',type1:'ドラゴン',type2:'じめん',sedai:4,otosuu:4,first_two:'アア',last_two:'イオ'},
{NO:445,name:'ガブリアス',type1:'ドラゴン',type2:'じめん',sedai:4,otosuu:5,first_two:'アウ',last_two:'アウ'},
{NO:446,name:'ゴンベ',type1:'ノーマル',type2:'',sedai:4,otosuu:3,first_two:'オン',last_two:'ンエ'},
{NO:447,name:'リオル',type1:'かくとう',type2:'',sedai:4,otosuu:3,first_two:'イオ',last_two:'オウ'},
{NO:448,name:'ルカリオ',type1:'かくとう',type2:'はがね',sedai:4,otosuu:4,first_two:'ウア',last_two:'イオ'},
{NO:449,name:'ヒポポタス',type1:'じめん',type2:'',sedai:4,otosuu:5,first_two:'イオ',last_two:'アウ'},
{NO:450,name:'カバルドン',type1:'じめん',type2:'',sedai:4,otosuu:5,first_two:'アア',last_two:'オン'},
{NO:451,name:'スコルピ',type1:'どく',type2:'むし',sedai:4,otosuu:4,first_two:'ウオ',last_two:'ウイ'},
{NO:452,name:'ドラピオン',type1:'どく',type2:'あく',sedai:4,otosuu:5,first_two:'オア',last_two:'オン'},
{NO:453,name:'グレッグル',type1:'どく',type2:'かくとう',sedai:4,otosuu:5,first_two:'ウエ',last_two:'ウウ'},
{NO:454,name:'ドクロッグ',type1:'どく',type2:'かくとう',sedai:4,otosuu:5,first_two:'オウ',last_two:'ッウ'},
{NO:455,name:'マスキッパ',type1:'くさ',type2:'',sedai:4,otosuu:5,first_two:'アウ',last_two:'ッア'},
{NO:456,name:'ケイコウオ',type1:'みず',type2:'',sedai:4,otosuu:5,first_two:'エイ',last_two:'ウオ'},
{NO:457,name:'ネオラント',type1:'みず',type2:'',sedai:4,otosuu:5,first_two:'エオ',last_two:'ンオ'},
{NO:458,name:'タマンタ',type1:'みず',type2:'ひこう',sedai:4,otosuu:4,first_two:'アア',last_two:'ンア'},
{NO:459,name:'ユキカブリ',type1:'くさ',type2:'こおり',sedai:4,otosuu:5,first_two:'ウイ',last_two:'ウイ'},
{NO:460,name:'ユキノオー',type1:'くさ',type2:'こおり',sedai:4,otosuu:5,first_two:'ウイ',last_two:'オー'},
{NO:461,name:'マニューラ',type1:'あく',type2:'こおり',sedai:4,otosuu:4,first_two:'アウ',last_two:'ーア'},
{NO:462,name:'ジバコイル',type1:'でんき',type2:'はがね',sedai:4,otosuu:5,first_two:'イア',last_two:'イウ'},
{NO:463,name:'ベロベルト',type1:'ノーマル',type2:'',sedai:4,otosuu:5,first_two:'エオ',last_two:'ウオ'},
{NO:464,name:'ドサイドン',type1:'じめん',type2:'いわ',sedai:4,otosuu:5,first_two:'オア',last_two:'オン'},
{NO:465,name:'モジャンボ',type1:'くさ',type2:'',sedai:4,otosuu:4,first_two:'オア',last_two:'ンオ'},
{NO:466,name:'エレキブル',type1:'でんき',type2:'',sedai:4,otosuu:5,first_two:'エエ',last_two:'ウウ'},
{NO:467,name:'ブーバーン',type1:'ほのお',type2:'',sedai:4,otosuu:5,first_two:'ウー',last_two:'ーン'},
{NO:468,name:'トゲキッス',type1:'フェアリー',type2:'ひこう',sedai:4,otosuu:5,first_two:'オエ',last_two:'ッウ'},
{NO:469,name:'メガヤンマ',type1:'むし',type2:'ひこう',sedai:4,otosuu:5,first_two:'エア',last_two:'ンア'},
{NO:470,name:'リーフィア',type1:'くさ',type2:'',sedai:4,otosuu:4,first_two:'イー',last_two:'イア'},
{NO:471,name:'グレイシア',type1:'こおり',type2:'',sedai:4,otosuu:5,first_two:'ウエ',last_two:'イア'},
{NO:472,name:'グライオン',type1:'じめん',type2:'ひこう',sedai:4,otosuu:5,first_two:'ウア',last_two:'オン'},
{NO:473,name:'マンムー',type1:'こおり',type2:'じめん',sedai:4,otosuu:4,first_two:'アン',last_two:'ウー'},
{NO:474,name:'ポリゴンZ',type1:'ノーマル',type2:'',sedai:4,otosuu:7,first_two:'オイ',last_two:'ッオ'},
{NO:475,name:'エルレイド',type1:'エスパー',type2:'かくとう',sedai:4,otosuu:5,first_two:'エウ',last_two:'イオ'},
{NO:476,name:'ダイノーズ',type1:'いわ',type2:'はがね',sedai:4,otosuu:5,first_two:'アイ',last_two:'ーウ'},
{NO:477,name:'ヨノワール',type1:'ゴースト',type2:'',sedai:4,otosuu:5,first_two:'オオ',last_two:'ーウ'},
{NO:478,name:'ユキメノコ',type1:'こおり',type2:'ゴースト',sedai:4,otosuu:5,first_two:'ウイ',last_two:'オオ'},
{NO:479,name:'ロトム',type1:'でんき',type2:'ゴースト',sedai:4,otosuu:3,first_two:'オオ',last_two:'オウ'},
{NO:480,name:'ユクシー',type1:'エスパー',type2:'',sedai:4,otosuu:4,first_two:'ウウ',last_two:'イー'},
{NO:481,name:'エムリット',type1:'エスパー',type2:'',sedai:4,otosuu:5,first_two:'エウ',last_two:'ッオ'},
{NO:482,name:'アグノム',type1:'エスパー',type2:'',sedai:4,otosuu:4,first_two:'アウ',last_two:'オウ'},
{NO:483,name:'ディアルガ',type1:'はがね',type2:'ドラゴン',sedai:4,otosuu:4,first_two:'イア',last_two:'ウア'},
{NO:484,name:'パルキア',type1:'みず',type2:'ドラゴン',sedai:4,otosuu:4,first_two:'アウ',last_two:'イア'},
{NO:485,name:'ヒードラン',type1:'ほのお',type2:'はがね',sedai:4,otosuu:5,first_two:'イー',last_two:'アン'},
{NO:486,name:'レジギガス',type1:'ノーマル',type2:'',sedai:4,otosuu:5,first_two:'エイ',last_two:'アウ'},
{NO:487,name:'ギラティナ',type1:'ゴースト',type2:'ドラゴン',sedai:4,otosuu:4,first_two:'イア',last_two:'イア'},
{NO:488,name:'クレセリア',type1:'エスパー',type2:'',sedai:4,otosuu:5,first_two:'ウエ',last_two:'イア'},
{NO:489,name:'フィオネ',type1:'みず',type2:'',sedai:4,otosuu:3,first_two:'イオ',last_two:'オエ'},
{NO:490,name:'マナフィ',type1:'みず',type2:'',sedai:4,otosuu:3,first_two:'アア',last_two:'アイ'},
{NO:491,name:'ダークライ',type1:'あく',type2:'',sedai:4,otosuu:5,first_two:'アー',last_two:'アイ'},
{NO:492,name:'シェイミ',type1:'くさ',type2:'',sedai:4,otosuu:3,first_two:'エイ',last_two:'イイ'},
{NO:493,name:'アルセウス',type1:'ノーマル',type2:'',sedai:4,otosuu:5,first_two:'アウ',last_two:'ウウ'},
{NO:494,name:'ビクティニ',type1:'エスパー',type2:'ほのお',sedai:5,otosuu:4,first_two:'イウ',last_two:'イイ'},
{NO:495,name:'ツタージャ',type1:'くさ',type2:'',sedai:5,otosuu:4,first_two:'ウア',last_two:'ーア'},
{NO:496,name:'ジャノビー',type1:'くさ',type2:'',sedai:5,otosuu:4,first_two:'アオ',last_two:'イー'},
{NO:497,name:'ジャローダ',type1:'くさ',type2:'',sedai:5,otosuu:4,first_two:'アオ',last_two:'ーア'},
{NO:498,name:'ポカブ',type1:'ほのお',type2:'',sedai:5,otosuu:3,first_two:'オア',last_two:'アウ'},
{NO:499,name:'チャオブー',type1:'ほのお',type2:'かくとう',sedai:5,otosuu:4,first_two:'アオ',last_two:'ウー'},
{NO:500,name:'エンブオー',type1:'ほのお',type2:'かくとう',sedai:5,otosuu:5,first_two:'エン',last_two:'オー'},
{NO:501,name:'ミジュマル',type1:'みず',type2:'',sedai:5,otosuu:4,first_two:'イウ',last_two:'アウ'},
{NO:502,name:'フタチマル',type1:'みず',type2:'',sedai:5,otosuu:5,first_two:'ウア',last_two:'アウ'},
{NO:503,name:'ダイケンキ',type1:'みず',type2:'',sedai:5,otosuu:5,first_two:'アイ',last_two:'ンイ'},
{NO:504,name:'ミネズミ',type1:'ノーマル',type2:'',sedai:5,otosuu:4,first_two:'イエ',last_two:'ウイ'},
{NO:505,name:'ミルホッグ',type1:'ノーマル',type2:'',sedai:5,otosuu:5,first_two:'イウ',last_two:'ッウ'},
{NO:506,name:'ヨーテリー',type1:'ノーマル',type2:'',sedai:5,otosuu:5,first_two:'オー',last_two:'イー'},
{NO:507,name:'ハーデリア',type1:'ノーマル',type2:'',sedai:5,otosuu:5,first_two:'アー',last_two:'イア'},
{NO:508,name:'ムーランド',type1:'ノーマル',type2:'',sedai:5,otosuu:5,first_two:'ウー',last_two:'ンオ'},
{NO:509,name:'チョロネコ',type1:'あく',type2:'',sedai:5,otosuu:4,first_two:'オオ',last_two:'エオ'},
{NO:510,name:'レパルダス',type1:'あく',type2:'',sedai:5,otosuu:5,first_two:'エア',last_two:'アウ'},
{NO:511,name:'ヤナップ',type1:'くさ',type2:'',sedai:5,otosuu:4,first_two:'アア',last_two:'ッウ'},
{NO:512,name:'ヤナッキー',type1:'くさ',type2:'',sedai:5,otosuu:5,first_two:'アア',last_two:'イー'},
{NO:513,name:'バオップ',type1:'ほのお',type2:'',sedai:5,otosuu:4,first_two:'アオ',last_two:'ッウ'},
{NO:514,name:'バオッキー',type1:'ほのお',type2:'',sedai:5,otosuu:5,first_two:'アオ',last_two:'イー'},
{NO:515,name:'ヒヤップ',type1:'みず',type2:'',sedai:5,otosuu:4,first_two:'イア',last_two:'ッウ'},
{NO:516,name:'ヒヤッキー',type1:'みず',type2:'',sedai:5,otosuu:5,first_two:'イア',last_two:'イー'},
{NO:517,name:'ムンナ',type1:'エスパー',type2:'',sedai:5,otosuu:3,first_two:'ウン',last_two:'ンア'},
{NO:518,name:'ムシャーナ',type1:'エスパー',type2:'',sedai:5,otosuu:4,first_two:'ウア',last_two:'ーア'},
{NO:519,name:'マメパト',type1:'ノーマル',type2:'ひこう',sedai:5,otosuu:4,first_two:'アエ',last_two:'アオ'},
{NO:520,name:'ハトーボー',type1:'ノーマル',type2:'ひこう',sedai:5,otosuu:5,first_two:'アオ',last_two:'オー'},
{NO:521,name:'ケンホロウ',type1:'ノーマル',type2:'ひこう',sedai:5,otosuu:5,first_two:'エン',last_two:'オウ'},
{NO:522,name:'シママ',type1:'でんき',type2:'',sedai:5,otosuu:3,first_two:'イア',last_two:'アア'},
{NO:523,name:'ゼブライカ',type1:'でんき',type2:'',sedai:5,otosuu:5,first_two:'エウ',last_two:'イア'},
{NO:524,name:'ダンゴロ',type1:'いわ',type2:'',sedai:5,otosuu:4,first_two:'アン',last_two:'オオ'},
{NO:525,name:'ガントル',type1:'いわ',type2:'',sedai:5,otosuu:4,first_two:'アン',last_two:'オウ'},
{NO:526,name:'ギガイアス',type1:'いわ',type2:'',sedai:5,otosuu:5,first_two:'イア',last_two:'アウ'},
{NO:527,name:'コロモリ',type1:'エスパー',type2:'ひこう',sedai:5,otosuu:4,first_two:'オオ',last_two:'オイ'},
{NO:528,name:'ココロモリ',type1:'エスパー',type2:'ひこう',sedai:5,otosuu:5,first_two:'オオ',last_two:'オイ'},
{NO:529,name:'モグリュー',type1:'じめん',type2:'',sedai:5,otosuu:4,first_two:'オウ',last_two:'ウー'},
{NO:530,name:'ドリュウズ',type1:'じめん',type2:'はがね',sedai:5,otosuu:4,first_two:'オウ',last_two:'ウウ'},
{NO:531,name:'タブンネ',type1:'ノーマル',type2:'',sedai:5,otosuu:4,first_two:'アウ',last_two:'ンエ'},
{NO:532,name:'ドッコラー',type1:'かくとう',type2:'',sedai:5,otosuu:5,first_two:'オッ',last_two:'アー'},
{NO:533,name:'ドテッコツ',type1:'かくとう',type2:'',sedai:5,otosuu:5,first_two:'オエ',last_two:'オウ'},
{NO:534,name:'ローブシン',type1:'かくとう',type2:'',sedai:5,otosuu:5,first_two:'オー',last_two:'イン'},
{NO:535,name:'オタマロ',type1:'みず',type2:'',sedai:5,otosuu:4,first_two:'オア',last_two:'アオ'},
{NO:536,name:'ガマガル',type1:'みず',type2:'じめん',sedai:5,otosuu:4,first_two:'アア',last_two:'アウ'},
{NO:537,name:'ガマゲロゲ',type1:'みず',type2:'じめん',sedai:5,otosuu:5,first_two:'アア',last_two:'オエ'},
{NO:538,name:'ナゲキ',type1:'かくとう',type2:'',sedai:5,otosuu:3,first_two:'アエ',last_two:'エイ'},
{NO:539,name:'ダゲキ',type1:'かくとう',type2:'',sedai:5,otosuu:3,first_two:'アエ',last_two:'エイ'},
{NO:540,name:'クルミル',type1:'むし',type2:'くさ',sedai:5,otosuu:4,first_two:'ウウ',last_two:'イウ'},
{NO:541,name:'クルマユ',type1:'むし',type2:'くさ',sedai:5,otosuu:4,first_two:'ウウ',last_two:'アウ'},
{NO:542,name:'ハハコモリ',type1:'むし',type2:'くさ',sedai:5,otosuu:5,first_two:'アア',last_two:'オイ'},
{NO:543,name:'フシデ',type1:'むし',type2:'どく',sedai:5,otosuu:3,first_two:'ウイ',last_two:'イエ'},
{NO:544,name:'ホイーガ',type1:'むし',type2:'どく',sedai:5,otosuu:4,first_two:'オイ',last_two:'ーア'},
{NO:545,name:'ペンドラー',type1:'むし',type2:'どく',sedai:5,otosuu:5,first_two:'エン',last_two:'アー'},
{NO:546,name:'モンメン',type1:'くさ',type2:'フェアリー',sedai:5,otosuu:4,first_two:'オン',last_two:'エン'},
{NO:547,name:'エルフーン',type1:'くさ',type2:'フェアリー',sedai:5,otosuu:5,first_two:'エウ',last_two:'ーン'},
{NO:548,name:'チュリネ',type1:'くさ',type2:'',sedai:5,otosuu:3,first_two:'ウイ',last_two:'イエ'},
{NO:549,name:'ドレディア',type1:'くさ',type2:'',sedai:5,otosuu:4,first_two:'オエ',last_two:'イア'},
{NO:550,name:'バスラオ',type1:'みず',type2:'',sedai:5,otosuu:4,first_two:'アウ',last_two:'アオ'},
{NO:551,name:'メグロコ',type1:'じめん',type2:'あく',sedai:5,otosuu:4,first_two:'エウ',last_two:'オオ'},
{NO:552,name:'ワルビル',type1:'じめん',type2:'あく',sedai:5,otosuu:4,first_two:'アウ',last_two:'イウ'},
{NO:553,name:'ワルビアル',type1:'じめん',type2:'あく',sedai:5,otosuu:5,first_two:'アウ',last_two:'アウ'},
{NO:554,name:'ダルマッカ',type1:'ほのお',type2:'',sedai:5,otosuu:5,first_two:'アウ',last_two:'ッア'},
{NO:555,name:'ヒヒダルマ',type1:'ほのお',type2:'',sedai:5,otosuu:5,first_two:'イイ',last_two:'ウア'},
{NO:556,name:'マラカッチ',type1:'くさ',type2:'',sedai:5,otosuu:5,first_two:'アア',last_two:'ッイ'},
{NO:557,name:'イシズマイ',type1:'むし',type2:'いわ',sedai:5,otosuu:5,first_two:'イイ',last_two:'アイ'},
{NO:558,name:'イワパレス',type1:'むし',type2:'いわ',sedai:5,otosuu:5,first_two:'イア',last_two:'エウ'},
{NO:559,name:'ズルッグ',type1:'あく',type2:'かくとう',sedai:5,otosuu:4,first_two:'ウウ',last_two:'ッウ'},
{NO:560,name:'ズルズキン',type1:'あく',type2:'かくとう',sedai:5,otosuu:5,first_two:'ウウ',last_two:'イン'},
{NO:561,name:'シンボラー',type1:'エスパー',type2:'ひこう',sedai:5,otosuu:5,first_two:'イン',last_two:'アー'},
{NO:562,name:'デスマス',type1:'ゴースト',type2:'',sedai:5,otosuu:4,first_two:'エウ',last_two:'アウ'},
{NO:563,name:'デスカーン',type1:'ゴースト',type2:'',sedai:5,otosuu:5,first_two:'エウ',last_two:'ーン'},
{NO:564,name:'プロトーガ',type1:'みず',type2:'いわ',sedai:5,otosuu:5,first_two:'ウオ',last_two:'ーア'},
{NO:565,name:'アバゴーラ',type1:'みず',type2:'いわ',sedai:5,otosuu:5,first_two:'アア',last_two:'ーア'},
{NO:566,name:'アーケン',type1:'いわ',type2:'ひこう',sedai:5,otosuu:4,first_two:'アー',last_two:'エン'},
{NO:567,name:'アーケオス',type1:'いわ',type2:'ひこう',sedai:5,otosuu:5,first_two:'アー',last_two:'オウ'},
{NO:568,name:'ヤブクロン',type1:'どく',type2:'',sedai:5,otosuu:5,first_two:'アウ',last_two:'オン'},
{NO:569,name:'ダストダス',type1:'どく',type2:'',sedai:5,otosuu:5,first_two:'アウ',last_two:'アウ'},
{NO:570,name:'ゾロア',type1:'あく',type2:'',sedai:5,otosuu:3,first_two:'オオ',last_two:'オア'},
{NO:571,name:'ゾロアーク',type1:'あく',type2:'',sedai:5,otosuu:5,first_two:'オオ',last_two:'ーウ'},
{NO:572,name:'チラーミィ',type1:'ノーマル',type2:'',sedai:5,otosuu:4,first_two:'イア',last_two:'ーイ'},
{NO:573,name:'チラチーノ',type1:'ノーマル',type2:'',sedai:5,otosuu:5,first_two:'イア',last_two:'ーオ'},
{NO:574,name:'ゴチム',type1:'エスパー',type2:'',sedai:5,otosuu:3,first_two:'オイ',last_two:'イウ'},
{NO:575,name:'ゴチミル',type1:'エスパー',type2:'',sedai:5,otosuu:4,first_two:'オイ',last_two:'イウ'},
{NO:576,name:'ゴチルゼル',type1:'エスパー',type2:'',sedai:5,otosuu:5,first_two:'オイ',last_two:'エウ'},
{NO:577,name:'ユニラン',type1:'エスパー',type2:'',sedai:5,otosuu:4,first_two:'ウイ',last_two:'アン'},
{NO:578,name:'ダブラン',type1:'エスパー',type2:'',sedai:5,otosuu:4,first_two:'アウ',last_two:'アン'},
{NO:579,name:'ランクルス',type1:'エスパー',type2:'',sedai:5,otosuu:5,first_two:'アン',last_two:'ウウ'},
{NO:580,name:'コアルヒー',type1:'みず',type2:'ひこう',sedai:5,otosuu:5,first_two:'オア',last_two:'イー'},
{NO:581,name:'スワンナ',type1:'みず',type2:'ひこう',sedai:5,otosuu:4,first_two:'ウア',last_two:'ンア'},
{NO:582,name:'バニプッチ',type1:'こおり',type2:'',sedai:5,otosuu:5,first_two:'アイ',last_two:'ッイ'},
{NO:583,name:'バニリッチ',type1:'こおり',type2:'',sedai:5,otosuu:5,first_two:'アイ',last_two:'ッイ'},
{NO:584,name:'バイバニラ',type1:'こおり',type2:'',sedai:5,otosuu:5,first_two:'アイ',last_two:'イア'},
{NO:585,name:'シキジカ',type1:'ノーマル',type2:'くさ',sedai:5,otosuu:4,first_two:'イイ',last_two:'イア'},
{NO:586,name:'メブキジカ',type1:'ノーマル',type2:'くさ',sedai:5,otosuu:5,first_two:'エウ',last_two:'イア'},
{NO:587,name:'エモンガ',type1:'でんき',type2:'ひこう',sedai:5,otosuu:4,first_two:'エオ',last_two:'ンア'},
{NO:588,name:'カブルモ',type1:'むし',type2:'',sedai:5,otosuu:4,first_two:'アウ',last_two:'ウオ'},
{NO:589,name:'シュバルゴ',type1:'むし',type2:'はがね',sedai:5,otosuu:4,first_two:'ウア',last_two:'ウオ'},
{NO:590,name:'タマゲタケ',type1:'くさ',type2:'どく',sedai:5,otosuu:5,first_two:'アア',last_two:'アエ'},
{NO:591,name:'モロバレル',type1:'くさ',type2:'どく',sedai:5,otosuu:5,first_two:'オオ',last_two:'エウ'},
{NO:592,name:'プルリル',type1:'みず',type2:'ゴースト',sedai:5,otosuu:4,first_two:'ウウ',last_two:'イウ'},
{NO:593,name:'ブルンゲル',type1:'みず',type2:'ゴースト',sedai:5,otosuu:5,first_two:'ウウ',last_two:'エウ'},
{NO:594,name:'ママンボウ',type1:'みず',type2:'',sedai:5,otosuu:5,first_two:'アア',last_two:'オウ'},
{NO:595,name:'バチュル',type1:'むし',type2:'でんき',sedai:5,otosuu:3,first_two:'アウ',last_two:'ウウ'},
{NO:596,name:'デンチュラ',type1:'むし',type2:'でんき',sedai:5,otosuu:4,first_two:'エン',last_two:'ウア'},
{NO:597,name:'テッシード',type1:'くさ',type2:'はがね',sedai:5,otosuu:5,first_two:'エッ',last_two:'ーオ'},
{NO:598,name:'ナットレイ',type1:'くさ',type2:'はがね',sedai:5,otosuu:5,first_two:'アッ',last_two:'エイ'},
{NO:599,name:'ギアル',type1:'はがね',type2:'',sedai:5,otosuu:3,first_two:'イア',last_two:'アウ'},
{NO:600,name:'ギギアル',type1:'はがね',type2:'',sedai:5,otosuu:4,first_two:'イイ',last_two:'アウ'},
{NO:601,name:'ギギギアル',type1:'はがね',type2:'',sedai:5,otosuu:5,first_two:'イイ',last_two:'アウ'},
{NO:602,name:'シビシラス',type1:'でんき',type2:'',sedai:5,otosuu:5,first_two:'イイ',last_two:'アウ'},
{NO:603,name:'シビビール',type1:'でんき',type2:'',sedai:5,otosuu:5,first_two:'イイ',last_two:'ーウ'},
{NO:604,name:'シビルドン',type1:'でんき',type2:'',sedai:5,otosuu:5,first_two:'イイ',last_two:'オン'},
{NO:605,name:'リグレー',type1:'エスパー',type2:'',sedai:5,otosuu:4,first_two:'イウ',last_two:'エー'},
{NO:606,name:'オーベム',type1:'エスパー',type2:'',sedai:5,otosuu:4,first_two:'オー',last_two:'エウ'},
{NO:607,name:'ヒトモシ',type1:'ゴースト',type2:'ほのお',sedai:5,otosuu:4,first_two:'イオ',last_two:'オイ'},
{NO:608,name:'ランプラー',type1:'ゴースト',type2:'ほのお',sedai:5,otosuu:5,first_two:'アン',last_two:'アー'},
{NO:609,name:'シャンデラ',type1:'ゴースト',type2:'ほのお',sedai:5,otosuu:4,first_two:'アン',last_two:'エア'},
{NO:610,name:'キバゴ',type1:'ドラゴン',type2:'',sedai:5,otosuu:3,first_two:'イア',last_two:'アオ'},
{NO:611,name:'オノンド',type1:'ドラゴン',type2:'',sedai:5,otosuu:4,first_two:'オオ',last_two:'ンオ'},
{NO:612,name:'オノノクス',type1:'ドラゴン',type2:'',sedai:5,otosuu:5,first_two:'オオ',last_two:'ウウ'},
{NO:613,name:'クマシュン',type1:'こおり',type2:'',sedai:5,otosuu:4,first_two:'ウア',last_two:'ウン'},
{NO:614,name:'ツンベアー',type1:'こおり',type2:'',sedai:5,otosuu:5,first_two:'ウン',last_two:'アー'},
{NO:615,name:'フリージオ',type1:'こおり',type2:'',sedai:5,otosuu:5,first_two:'ウイ',last_two:'イオ'},
{NO:616,name:'チョボマキ',type1:'むし',type2:'',sedai:5,otosuu:4,first_two:'オオ',last_two:'アイ'},
{NO:617,name:'アギルダー',type1:'むし',type2:'',sedai:5,otosuu:5,first_two:'アイ',last_two:'アー'},
{NO:618,name:'マッギョ',type1:'でんき',type2:'じめん',sedai:5,otosuu:3,first_two:'アッ',last_two:'ッオ'},
{NO:619,name:'コジョフー',type1:'かくとう',type2:'',sedai:5,otosuu:4,first_two:'オオ',last_two:'ウー'},
{NO:620,name:'コジョンド',type1:'かくとう',type2:'',sedai:5,otosuu:4,first_two:'オオ',last_two:'ンオ'},
{NO:621,name:'クリムガン',type1:'ドラゴン',type2:'',sedai:5,otosuu:5,first_two:'ウイ',last_two:'アン'},
{NO:622,name:'ゴビット',type1:'じめん',type2:'ゴースト',sedai:5,otosuu:4,first_two:'オイ',last_two:'ッオ'},
{NO:623,name:'ゴルーグ',type1:'じめん',type2:'ゴースト',sedai:5,otosuu:4,first_two:'オウ',last_two:'ーウ'},
{NO:624,name:'コマタナ',type1:'あく',type2:'はがね',sedai:5,otosuu:4,first_two:'オア',last_two:'アア'},
{NO:625,name:'キリキザン',type1:'あく',type2:'はがね',sedai:5,otosuu:5,first_two:'イイ',last_two:'アン'},
{NO:626,name:'バッフロン',type1:'ノーマル',type2:'',sedai:5,otosuu:5,first_two:'アッ',last_two:'オン'},
{NO:627,name:'ワシボン',type1:'ノーマル',type2:'ひこう',sedai:5,otosuu:4,first_two:'アイ',last_two:'オン'},
{NO:628,name:'ウォーグル',type1:'ノーマル',type2:'ひこう',sedai:5,otosuu:4,first_two:'オー',last_two:'ウウ'},
{NO:629,name:'バルチャイ',type1:'あく',type2:'ひこう',sedai:5,otosuu:4,first_two:'アウ',last_two:'アイ'},
{NO:630,name:'バルジーナ',type1:'あく',type2:'ひこう',sedai:5,otosuu:5,first_two:'アウ',last_two:'ーア'},
{NO:631,name:'クイタラン',type1:'ほのお',type2:'',sedai:5,otosuu:5,first_two:'ウイ',last_two:'アン'},
{NO:632,name:'アイアント',type1:'むし',type2:'はがね',sedai:5,otosuu:5,first_two:'アイ',last_two:'ンオ'},
{NO:633,name:'モノズ',type1:'あく',type2:'ドラゴン',sedai:5,otosuu:3,first_two:'オオ',last_two:'オウ'},
{NO:634,name:'ジヘッド',type1:'あく',type2:'ドラゴン',sedai:5,otosuu:4,first_two:'イエ',last_two:'ッオ'},
{NO:635,name:'サザンドラ',type1:'あく',type2:'ドラゴン',sedai:5,otosuu:5,first_two:'アア',last_two:'オア'},
{NO:636,name:'メラルバ',type1:'むし',type2:'ほのお',sedai:5,otosuu:4,first_two:'エア',last_two:'ウア'},
{NO:637,name:'ウルガモス',type1:'むし',type2:'ほのお',sedai:5,otosuu:5,first_two:'ウウ',last_two:'オウ'},
{NO:638,name:'コバルオン',type1:'はがね',type2:'かくとう',sedai:5,otosuu:5,first_two:'オア',last_two:'オン'},
{NO:639,name:'テラキオン',type1:'いわ',type2:'かくとう',sedai:5,otosuu:5,first_two:'エア',last_two:'オン'},
{NO:640,name:'ビリジオン',type1:'くさ',type2:'かくとう',sedai:5,otosuu:5,first_two:'イイ',last_two:'オン'},
{NO:641,name:'トルネロス',type1:'ひこう',type2:'',sedai:5,otosuu:5,first_two:'オウ',last_two:'オウ'},
{NO:642,name:'ボルトロス',type1:'でんき',type2:'ひこう',sedai:5,otosuu:5,first_two:'オウ',last_two:'オウ'},
{NO:643,name:'レシラム',type1:'ドラゴン',type2:'ほのお',sedai:5,otosuu:4,first_two:'エイ',last_two:'アウ'},
{NO:644,name:'ゼクロム',type1:'ドラゴン',type2:'でんき',sedai:5,otosuu:4,first_two:'エウ',last_two:'オウ'},
{NO:645,name:'ランドロス',type1:'じめん',type2:'ひこう',sedai:5,otosuu:5,first_two:'アン',last_two:'オウ'},
{NO:646,name:'キュレム',type1:'ドラゴン',type2:'こおり',sedai:5,otosuu:3,first_two:'ウエ',last_two:'エウ'},
{NO:647,name:'ケルディオ',type1:'みず',type2:'かくとう',sedai:5,otosuu:4,first_two:'エウ',last_two:'イオ'},
{NO:648,name:'メロエッタ',type1:'ノーマル',type2:'エスパー',sedai:5,otosuu:5,first_two:'エオ',last_two:'ッア'},
{NO:649,name:'ゲノセクト',type1:'むし',type2:'はがね',sedai:5,otosuu:5,first_two:'エオ',last_two:'ウオ'},
{NO:650,name:'ハリマロン',type1:'くさ',type2:'',sedai:6,otosuu:5,first_two:'アイ',last_two:'オン'},
{NO:651,name:'ハリボーグ',type1:'くさ',type2:'',sedai:6,otosuu:5,first_two:'アイ',last_two:'ーウ'},
{NO:652,name:'ブリガロン',type1:'くさ',type2:'かくとう',sedai:6,otosuu:5,first_two:'ウイ',last_two:'オン'},
{NO:653,name:'フォッコ',type1:'ほのお',type2:'',sedai:6,otosuu:3,first_two:'オッ',last_two:'ッオ'},
{NO:654,name:'テールナー',type1:'ほのお',type2:'',sedai:6,otosuu:5,first_two:'エー',last_two:'アー'},
{NO:655,name:'マフォクシー',type1:'ほのお',type2:'エスパー',sedai:6,otosuu:5,first_two:'アオ',last_two:'イー'},
{NO:656,name:'ケロマツ',type1:'みず',type2:'',sedai:6,otosuu:4,first_two:'エオ',last_two:'アウ'},
{NO:657,name:'ゲコガシラ',type1:'みず',type2:'',sedai:6,otosuu:5,first_two:'エオ',last_two:'イア'},
{NO:658,name:'ゲッコウガ',type1:'みず',type2:'あく',sedai:6,otosuu:5,first_two:'エッ',last_two:'ウア'},
{NO:659,name:'ホルビー',type1:'ノーマル',type2:'',sedai:6,otosuu:4,first_two:'オウ',last_two:'イー'},
{NO:660,name:'ホルード',type1:'ノーマル',type2:'じめん',sedai:6,otosuu:4,first_two:'オウ',last_two:'ーオ'},
{NO:661,name:'ヤヤコマ',type1:'ノーマル',type2:'ひこう',sedai:6,otosuu:4,first_two:'アア',last_two:'オア'},
{NO:662,name:'ヒノヤコマ',type1:'ほのお',type2:'ひこう',sedai:6,otosuu:5,first_two:'イオ',last_two:'オア'},
{NO:663,name:'ファイアロー',type1:'ほのお',type2:'ひこう',sedai:6,otosuu:5,first_two:'アイ',last_two:'オー'},
{NO:664,name:'コフキムシ',type1:'むし',type2:'',sedai:6,otosuu:5,first_two:'オウ',last_two:'ウイ'},
{NO:665,name:'コフーライ',type1:'むし',type2:'',sedai:6,otosuu:5,first_two:'オウ',last_two:'アイ'},
{NO:666,name:'ビビヨン',type1:'むし',type2:'ひこう',sedai:6,otosuu:4,first_two:'イイ',last_two:'オン'},
{NO:667,name:'シシコ',type1:'ほのお',type2:'ノーマル',sedai:6,otosuu:3,first_two:'イイ',last_two:'イオ'},
{NO:668,name:'カエンジシ',type1:'ほのお',type2:'ノーマル',sedai:6,otosuu:5,first_two:'アエ',last_two:'イイ'},
{NO:669,name:'フラベベ',type1:'フェアリー',type2:'',sedai:6,otosuu:4,first_two:'ウア',last_two:'エエ'},
{NO:670,name:'フラエッテ',type1:'フェアリー',type2:'',sedai:6,otosuu:5,first_two:'ウア',last_two:'ッエ'},
{NO:671,name:'フラージェス',type1:'フェアリー',type2:'',sedai:6,otosuu:5,first_two:'ウア',last_two:'エウ'},
{NO:672,name:'メェークル',type1:'くさ',type2:'',sedai:6,otosuu:4,first_two:'エー',last_two:'ウウ'},
{NO:673,name:'ゴーゴート',type1:'くさ',type2:'',sedai:6,otosuu:5,first_two:'オー',last_two:'ーオ'},
{NO:674,name:'ヤンチャム',type1:'かくとう',type2:'',sedai:6,otosuu:4,first_two:'アン',last_two:'アウ'},
{NO:675,name:'ゴロンダ',type1:'かくとう',type2:'あく',sedai:6,otosuu:4,first_two:'オオ',last_two:'ンア'},
{NO:676,name:'トリミアン',type1:'ノーマル',type2:'',sedai:6,otosuu:5,first_two:'オイ',last_two:'アン'},
{NO:677,name:'ニャスパー',type1:'エスパー',type2:'',sedai:6,otosuu:4,first_two:'アウ',last_two:'アー'},
{NO:678,name:'ニャオニクス',type1:'エスパー',type2:'',sedai:6,otosuu:5,first_two:'アオ',last_two:'ウウ'},
{NO:679,name:'ヒトツキ',type1:'はがね',type2:'ゴースト',sedai:6,otosuu:4,first_two:'イオ',last_two:'ウイ'},
{NO:680,name:'ニダンギル',type1:'はがね',type2:'ゴースト',sedai:6,otosuu:5,first_two:'イア',last_two:'イウ'},
{NO:681,name:'ギルガルド',type1:'はがね',type2:'ゴースト',sedai:6,otosuu:5,first_two:'イウ',last_two:'ウオ'},
{NO:682,name:'シュシュプ',type1:'フェアリー',type2:'',sedai:6,otosuu:3,first_two:'ウウ',last_two:'ウウ'},
{NO:683,name:'フレフワン',type1:'フェアリー',type2:'',sedai:6,otosuu:5,first_two:'ウエ',last_two:'アン'},
{NO:684,name:'ペロッパフ',type1:'フェアリー',type2:'',sedai:6,otosuu:5,first_two:'エオ',last_two:'アウ'},
{NO:685,name:'ペロリーム',type1:'フェアリー',type2:'',sedai:6,otosuu:5,first_two:'エオ',last_two:'ーウ'},
{NO:686,name:'マーイーカ',type1:'あく',type2:'エスパー',sedai:6,otosuu:5,first_two:'アー',last_two:'ーア'},
{NO:687,name:'カラマネロ',type1:'あく',type2:'エスパー',sedai:6,otosuu:5,first_two:'アア',last_two:'エオ'},
{NO:688,name:'カメテテ',type1:'いわ',type2:'みず',sedai:6,otosuu:4,first_two:'アエ',last_two:'エエ'},
{NO:689,name:'ガメノデス',type1:'いわ',type2:'みず',sedai:6,otosuu:5,first_two:'アエ',last_two:'エウ'},
{NO:690,name:'クズモー',type1:'どく',type2:'みず',sedai:6,otosuu:4,first_two:'ウウ',last_two:'オー'},
{NO:691,name:'ドラミドロ',type1:'どく',type2:'ドラゴン',sedai:6,otosuu:5,first_two:'オア',last_two:'オオ'},
{NO:692,name:'ウデッポウ',type1:'みず',type2:'',sedai:6,otosuu:5,first_two:'ウエ',last_two:'オウ'},
{NO:693,name:'ブロスター',type1:'みず',type2:'',sedai:6,otosuu:5,first_two:'ウオ',last_two:'アー'},
{NO:694,name:'エリキテル',type1:'でんき',type2:'ノーマル',sedai:6,otosuu:5,first_two:'エイ',last_two:'エウ'},
{NO:695,name:'エレザード',type1:'でんき',type2:'ノーマル',sedai:6,otosuu:5,first_two:'エエ',last_two:'ーオ'},
{NO:696,name:'チゴラス',type1:'いわ',type2:'ドラゴン',sedai:6,otosuu:4,first_two:'イオ',last_two:'アウ'},
{NO:697,name:'ガチゴラス',type1:'いわ',type2:'ドラゴン',sedai:6,otosuu:5,first_two:'アイ',last_two:'アウ'},
{NO:698,name:'アマルス',type1:'いわ',type2:'こおり',sedai:6,otosuu:4,first_two:'アア',last_two:'ウウ'},
{NO:699,name:'アマルルガ',type1:'いわ',type2:'こおり',sedai:6,otosuu:5,first_two:'アア',last_two:'ウア'},
{NO:700,name:'ニンフィア',type1:'フェアリー',type2:'',sedai:6,otosuu:4,first_two:'イン',last_two:'イア'},
{NO:701,name:'ルチャブル',type1:'かくとう',type2:'ひこう',sedai:6,otosuu:4,first_two:'ウア',last_two:'ウウ'},
{NO:702,name:'デデンネ',type1:'でんき',type2:'フェアリー',sedai:6,otosuu:4,first_two:'エエ',last_two:'ンエ'},
{NO:703,name:'メレシー',type1:'いわ',type2:'フェアリー',sedai:6,otosuu:4,first_two:'エエ',last_two:'イー'},
{NO:704,name:'ヌメラ',type1:'ドラゴン',type2:'',sedai:6,otosuu:3,first_two:'ウエ',last_two:'エア'},
{NO:705,name:'ヌメイル',type1:'ドラゴン',type2:'',sedai:6,otosuu:4,first_two:'ウエ',last_two:'イウ'},
{NO:706,name:'ヌメルゴン',type1:'ドラゴン',type2:'',sedai:6,otosuu:5,first_two:'ウエ',last_two:'オン'},
{NO:707,name:'クレッフィ',type1:'はがね',type2:'フェアリー',sedai:6,otosuu:4,first_two:'ウエ',last_two:'ッイ'},
{NO:708,name:'ボクレー',type1:'ゴースト',type2:'くさ',sedai:6,otosuu:4,first_two:'オウ',last_two:'エー'},
{NO:709,name:'オーロット',type1:'ゴースト',type2:'くさ',sedai:6,otosuu:5,first_two:'オー',last_two:'ッオ'},
{NO:710,name:'バケッチャ',type1:'ゴースト',type2:'くさ',sedai:6,otosuu:4,first_two:'アエ',last_two:'ッア'},
{NO:711,name:'パンプジン',type1:'ゴースト',type2:'くさ',sedai:6,otosuu:5,first_two:'アン',last_two:'イン'},
{NO:712,name:'カチコール',type1:'こおり',type2:'',sedai:6,otosuu:5,first_two:'アイ',last_two:'ーウ'},
{NO:713,name:'クレベース',type1:'こおり',type2:'',sedai:6,otosuu:5,first_two:'ウエ',last_two:'ーウ'},
{NO:714,name:'オンバット',type1:'ひこう',type2:'ドラゴン',sedai:6,otosuu:5,first_two:'オン',last_two:'ッオ'},
{NO:715,name:'オンバーン',type1:'ひこう',type2:'ドラゴン',sedai:6,otosuu:5,first_two:'オン',last_two:'ーン'},
{NO:716,name:'ゼルネアス',type1:'フェアリー',type2:'',sedai:6,otosuu:5,first_two:'エウ',last_two:'アウ'},
{NO:717,name:'イベルタル',type1:'あく',type2:'ひこう',sedai:6,otosuu:5,first_two:'イエ',last_two:'アウ'},
{NO:718,name:'ジガルデ',type1:'ドラゴン',type2:'じめん',sedai:6,otosuu:4,first_two:'イア',last_two:'ウエ'},
{NO:719,name:'ディアンシー',type1:'いわ',type2:'フェアリー',sedai:6,otosuu:5,first_two:'イア',last_two:'イー'},
{NO:720,name:'フーパ',type1:'エスパー',type2:'ゴースト',sedai:6,otosuu:3,first_two:'ウー',last_two:'ーア'},
{NO:721,name:'ボルケニオン',type1:'ほのお',type2:'みず',sedai:6,otosuu:6,first_two:'オウ',last_two:'オン'},
{NO:722,name:'モクロー',type1:'くさ',type2:'ひこう',sedai:7,otosuu:4,first_two:'オウ',last_two:'オー'},
{NO:723,name:'フクスロー',type1:'くさ',type2:'ひこう',sedai:7,otosuu:5,first_two:'ウウ',last_two:'オー'},
{NO:724,name:'ジュナイパー',type1:'くさ',type2:'ゴースト',sedai:7,otosuu:5,first_two:'ウア',last_two:'アー'},
{NO:725,name:'ニャビー',type1:'ほのお',type2:'',sedai:7,otosuu:3,first_two:'アイ',last_two:'イー'},
{NO:726,name:'ニャヒート',type1:'ほのお',type2:'',sedai:7,otosuu:4,first_two:'アイ',last_two:'ーオ'},
{NO:727,name:'ガオガエン',type1:'ほのお',type2:'あく',sedai:7,otosuu:5,first_two:'アオ',last_two:'エン'},
{NO:728,name:'アシマリ',type1:'みず',type2:'',sedai:7,otosuu:4,first_two:'アイ',last_two:'アイ'},
{NO:729,name:'オシャマリ',type1:'みず',type2:'',sedai:7,otosuu:4,first_two:'オア',last_two:'アイ'},
{NO:730,name:'アシレーヌ',type1:'みず',type2:'フェアリー',sedai:7,otosuu:5,first_two:'アイ',last_two:'ーウ'},
{NO:731,name:'ツツケラ',type1:'ノーマル',type2:'ひこう',sedai:7,otosuu:4,first_two:'ウウ',last_two:'エア'},
{NO:732,name:'ケララッパ',type1:'ノーマル',type2:'ひこう',sedai:7,otosuu:5,first_two:'エア',last_two:'ッア'},
{NO:733,name:'ドデカバシ',type1:'ノーマル',type2:'ひこう',sedai:7,otosuu:5,first_two:'オエ',last_two:'アイ'},
{NO:734,name:'ヤングース',type1:'ノーマル',type2:'',sedai:7,otosuu:5,first_two:'アン',last_two:'ーウ'},
{NO:735,name:'デカグース',type1:'ノーマル',type2:'',sedai:7,otosuu:5,first_two:'エア',last_two:'ーウ'},
{NO:736,name:'アゴジムシ',type1:'むし',type2:'',sedai:7,otosuu:5,first_two:'アオ',last_two:'ウイ'},
{NO:737,name:'デンヂムシ',type1:'むし',type2:'でんき',sedai:7,otosuu:5,first_two:'エン',last_two:'ウイ'},
{NO:738,name:'クワガノン',type1:'むし',type2:'でんき',sedai:7,otosuu:5,first_two:'ウア',last_two:'オン'},
{NO:739,name:'マケンカニ',type1:'かくとう',type2:'',sedai:7,otosuu:5,first_two:'アエ',last_two:'アイ'},
{NO:740,name:'ケケンカニ',type1:'かくとう',type2:'こおり',sedai:7,otosuu:5,first_two:'エエ',last_two:'アイ'},
{NO:741,name:'オドリドリ',type1:'ほのお',type2:'ひこう',sedai:7,otosuu:5,first_two:'オオ',last_two:'オイ'},
{NO:742,name:'アブリー',type1:'むし',type2:'フェアリー',sedai:7,otosuu:4,first_two:'アウ',last_two:'イー'},
{NO:743,name:'アブリボン',type1:'むし',type2:'フェアリー',sedai:7,otosuu:5,first_two:'アウ',last_two:'オン'},
{NO:744,name:'イワンコ',type1:'いわ',type2:'',sedai:7,otosuu:4,first_two:'イア',last_two:'ンオ'},
{NO:745,name:'ルガルガン',type1:'いわ',type2:'',sedai:7,otosuu:5,first_two:'ウア',last_two:'アン'},
{NO:746,name:'ヨワシ',type1:'みず',type2:'',sedai:7,otosuu:3,first_two:'オア',last_two:'アイ'},
{NO:747,name:'ヒドイデ',type1:'どく',type2:'みず',sedai:7,otosuu:4,first_two:'イオ',last_two:'イエ'},
{NO:748,name:'ドヒドイデ',type1:'どく',type2:'みず',sedai:7,otosuu:5,first_two:'オイ',last_two:'イエ'},
{NO:749,name:'ドロバンコ',type1:'じめん',type2:'',sedai:7,otosuu:5,first_two:'オオ',last_two:'ンオ'},
{NO:750,name:'バンバドロ',type1:'じめん',type2:'',sedai:7,otosuu:5,first_two:'アン',last_two:'オオ'},
{NO:751,name:'シズクモ',type1:'みず',type2:'むし',sedai:7,otosuu:4,first_two:'イウ',last_two:'ウオ'},
{NO:752,name:'オニシズクモ',type1:'みず',type2:'むし',sedai:7,otosuu:6,first_two:'オイ',last_two:'ウオ'},
{NO:753,name:'カリキリ',type1:'くさ',type2:'',sedai:7,otosuu:4,first_two:'アイ',last_two:'イイ'},
{NO:754,name:'ラランテス',type1:'くさ',type2:'',sedai:7,otosuu:5,first_two:'アア',last_two:'エウ'},
{NO:755,name:'ネマシュ',type1:'くさ',type2:'フェアリー',sedai:7,otosuu:3,first_two:'エア',last_two:'アウ'},
{NO:756,name:'マシェード',type1:'くさ',type2:'フェアリー',sedai:7,otosuu:4,first_two:'アエ',last_two:'ーオ'},
{NO:757,name:'ヤトウモリ',type1:'どく',type2:'ほのお',sedai:7,otosuu:5,first_two:'アオ',last_two:'オイ'},
{NO:758,name:'エンニュート',type1:'どく',type2:'ほのお',sedai:7,otosuu:5,first_two:'エン',last_two:'ーオ'},
{NO:759,name:'ヌイコグマ',type1:'ノーマル',type2:'かくとう',sedai:7,otosuu:5,first_two:'ウイ',last_two:'ウア'},
{NO:760,name:'キテルグマ',type1:'ノーマル',type2:'かくとう',sedai:7,otosuu:5,first_two:'イエ',last_two:'ウア'},
{NO:761,name:'アマカジ',type1:'くさ',type2:'',sedai:7,otosuu:4,first_two:'アア',last_two:'アイ'},
{NO:762,name:'アママイコ',type1:'くさ',type2:'',sedai:7,otosuu:5,first_two:'アア',last_two:'イオ'},
{NO:763,name:'アマージョ',type1:'くさ',type2:'',sedai:7,otosuu:4,first_two:'アア',last_two:'ーオ'},
{NO:764,name:'キュワワー',type1:'フェアリー',type2:'',sedai:7,otosuu:4,first_two:'ウア',last_two:'アー'},
{NO:765,name:'ヤレユータン',type1:'ノーマル',type2:'エスパー',sedai:7,otosuu:6,first_two:'アエ',last_two:'アン'},
{NO:766,name:'ナゲツケサル',type1:'かくとう',type2:'',sedai:7,otosuu:6,first_two:'アエ',last_two:'アウ'},
{NO:767,name:'コソクムシ',type1:'むし',type2:'みず',sedai:7,otosuu:5,first_two:'オオ',last_two:'ウイ'},
{NO:768,name:'グソクムシャ',type1:'むし',type2:'みず',sedai:7,otosuu:5,first_two:'ウオ',last_two:'ウア'},
{NO:769,name:'スナバァ',type1:'ゴースト',type2:'じめん',sedai:7,otosuu:3,first_two:'ウア',last_two:'アア'},
{NO:770,name:'シロデスナ',type1:'ゴースト',type2:'じめん',sedai:7,otosuu:5,first_two:'イオ',last_two:'ウア'},
{NO:771,name:'ナマコブシ',type1:'みず',type2:'',sedai:7,otosuu:5,first_two:'アア',last_two:'ウイ'},
{NO:772,name:'タイプ:ヌル',type1:'ノーマル',type2:'',sedai:7,otosuu:6,first_two:'アイ',last_two:'ウウ'},
{NO:773,name:'シルヴァディ',type1:'ノーマル',type2:'',sedai:7,otosuu:4,first_two:'イウ',last_two:'アイ'},
{NO:774,name:'メテノ',type1:'いわ',type2:'ひこう',sedai:7,otosuu:3,first_two:'エエ',last_two:'エオ'},
{NO:775,name:'ネッコアラ',type1:'ノーマル',type2:'',sedai:7,otosuu:5,first_two:'エッ',last_two:'アア'},
{NO:776,name:'バクガメス',type1:'ほのお',type2:'ドラゴン',sedai:7,otosuu:5,first_two:'アウ',last_two:'エウ'},
{NO:777,name:'トゲデマル',type1:'でんき',type2:'はがね',sedai:7,otosuu:5,first_two:'オエ',last_two:'アウ'},
{NO:778,name:'ミミッキュ',type1:'ゴースト',type2:'フェアリー',sedai:7,otosuu:4,first_two:'イイ',last_two:'ッウ'},
{NO:779,name:'ハギギシリ',type1:'みず',type2:'エスパー',sedai:7,otosuu:5,first_two:'アイ',last_two:'イイ'},
{NO:780,name:'ジジーロン',type1:'ノーマル',type2:'ドラゴン',sedai:7,otosuu:5,first_two:'イイ',last_two:'オン'},
{NO:781,name:'ダダリン',type1:'ゴースト',type2:'くさ',sedai:7,otosuu:4,first_two:'アア',last_two:'イン'},
{NO:782,name:'ジャラコ',type1:'ドラゴン',type2:'',sedai:7,otosuu:3,first_two:'アア',last_two:'アオ'},
{NO:783,name:'ジャランゴ',type1:'ドラゴン',type2:'かくとう',sedai:7,otosuu:4,first_two:'アア',last_two:'ンオ'},
{NO:784,name:'ジャラランガ',type1:'ドラゴン',type2:'かくとう',sedai:7,otosuu:5,first_two:'アア',last_two:'ンア'},
{NO:785,name:'カプ・コケコ',type1:'でんき',type2:'フェアリー',sedai:7,otosuu:5,first_two:'アウ',last_two:'エオ'},
{NO:786,name:'カプ・テテフ',type1:'エスパー',type2:'フェアリー',sedai:7,otosuu:5,first_two:'アウ',last_two:'エウ'},
{NO:787,name:'カプ・ブルル',type1:'くさ',type2:'フェアリー',sedai:7,otosuu:5,first_two:'アウ',last_two:'ウウ'},
{NO:788,name:'カプ・レヒレ',type1:'みず',type2:'フェアリー',sedai:7,otosuu:5,first_two:'アウ',last_two:'イエ'},
{NO:789,name:'コスモッグ',type1:'エスパー',type2:'',sedai:7,otosuu:5,first_two:'オウ',last_two:'ッウ'},
{NO:790,name:'コスモウム',type1:'エスパー',type2:'',sedai:7,otosuu:5,first_two:'オウ',last_two:'ウウ'},
{NO:791,name:'ソルガレオ',type1:'エスパー',type2:'はがね',sedai:7,otosuu:5,first_two:'オウ',last_two:'エオ'},
{NO:792,name:'ルナアーラ',type1:'エスパー',type2:'ゴースト',sedai:7,otosuu:5,first_two:'ウア',last_two:'ーア'},
{NO:793,name:'ウツロイド',type1:'いわ',type2:'どく',sedai:7,otosuu:5,first_two:'ウウ',last_two:'イオ'},
{NO:794,name:'マッシブーン',type1:'むし',type2:'かくとう',sedai:7,otosuu:6,first_two:'アッ',last_two:'ーン'},
{NO:795,name:'フェローチェ',type1:'むし',type2:'かくとう',sedai:7,otosuu:4,first_two:'エオ',last_two:'ーエ'},
{NO:796,name:'デンジュモク',type1:'でんき',type2:'',sedai:7,otosuu:5,first_two:'エン',last_two:'オウ'},
{NO:797,name:'テッカグヤ',type1:'はがね',type2:'ひこう',sedai:7,otosuu:5,first_two:'エッ',last_two:'ウア'},
{NO:798,name:'カミツルギ',type1:'くさ',type2:'はがね',sedai:7,otosuu:5,first_two:'アイ',last_two:'ウイ'},
{NO:799,name:'アクジキング',type1:'あく',type2:'ドラゴン',sedai:7,otosuu:6,first_two:'アウ',last_two:'ンウ'},
{NO:800,name:'ネクロズマ',type1:'エスパー',type2:'',sedai:7,otosuu:5,first_two:'エウ',last_two:'ウア'},
{NO:801,name:'マギアナ',type1:'はがね',type2:'フェアリー',sedai:7,otosuu:4,first_two:'アイ',last_two:'アア'},
{NO:802,name:'マーシャドー',type1:'かくとう',type2:'ゴースト',sedai:7,otosuu:5,first_two:'アー',last_two:'オー'},
{NO:803,name:'ベベノム',type1:'どく',type2:'',sedai:7,otosuu:4,first_two:'エエ',last_two:'オウ'},
{NO:804,name:'アーゴヨン',type1:'どく',type2:'ドラゴン',sedai:7,otosuu:5,first_two:'アー',last_two:'オン'},
{NO:805,name:'ツンデツンデ',type1:'いわ',type2:'はがね',sedai:7,otosuu:6,first_two:'ウン',last_two:'ンエ'},
{NO:806,name:'ズガドーン',type1:'ほのお',type2:'ゴースト',sedai:7,otosuu:5,first_two:'ウア',last_two:'ーン'},
{NO:807,name:'ゼラオラ',type1:'でんき',type2:'',sedai:7,otosuu:4,first_two:'エア',last_two:'オア'},
{NO:808,name:'メルタン',type1:'はがね',type2:'',sedai:7,otosuu:4,first_two:'エウ',last_two:'アン'},
{NO:809,name:'メルメタル',type1:'はがね',type2:'',sedai:7,otosuu:5,first_two:'エウ',last_two:'アウ'},
{NO:810,name:'サルノリ',type1:'くさ',type2:'',sedai:8,otosuu:4,first_two:'アウ',last_two:'オイ'},
{NO:811,name:'バチンキー',type1:'くさ',type2:'',sedai:8,otosuu:5,first_two:'アイ',last_two:'イー'},
{NO:812,name:'ゴリランダー',type1:'くさ',type2:'',sedai:8,otosuu:6,first_two:'オイ',last_two:'アー'},
{NO:813,name:'ヒバニー',type1:'ほのお',type2:'',sedai:8,otosuu:4,first_two:'イア',last_two:'イー'},
{NO:814,name:'ラビフット',type1:'ほのお',type2:'',sedai:8,otosuu:5,first_two:'アイ',last_two:'ッオ'},
{NO:815,name:'エースバーン',type1:'ほのお',type2:'',sedai:8,otosuu:6,first_two:'エー',last_two:'ーン'},
{NO:816,name:'メッソン',type1:'みず',type2:'',sedai:8,otosuu:4,first_two:'エッ',last_two:'オン'},
{NO:817,name:'ジメレオン',type1:'みず',type2:'',sedai:8,otosuu:5,first_two:'イエ',last_two:'オン'},
{NO:818,name:'インテレオン',type1:'みず',type2:'',sedai:8,otosuu:6,first_two:'イン',last_two:'オン'},
{NO:819,name:'ホシガリス',type1:'ノーマル',type2:'',sedai:8,otosuu:5,first_two:'オイ',last_two:'イウ'},
{NO:820,name:'ヨクバリス',type1:'ノーマル',type2:'',sedai:8,otosuu:5,first_two:'オウ',last_two:'イウ'},
{NO:821,name:'ココガラ',type1:'ひこう',type2:'',sedai:8,otosuu:4,first_two:'オオ',last_two:'アア'},
{NO:822,name:'アオガラス',type1:'ひこう',type2:'',sedai:8,otosuu:5,first_two:'アオ',last_two:'アウ'},
{NO:823,name:'アーマーガア',type1:'ひこう',type2:'はがね',sedai:8,otosuu:6,first_two:'アー',last_two:'アア'},
{NO:824,name:'サッチムシ',type1:'むし',type2:'',sedai:8,otosuu:5,first_two:'アッ',last_two:'ウイ'},
{NO:825,name:'レドームシ',type1:'むし',type2:'エスパー',sedai:8,otosuu:5,first_two:'エオ',last_two:'ウイ'},
{NO:826,name:'イオルブ',type1:'むし',type2:'エスパー',sedai:8,otosuu:4,first_two:'イオ',last_two:'ウウ'},
{NO:827,name:'クスネ',type1:'あく',type2:'',sedai:8,otosuu:3,first_two:'ウウ',last_two:'ウエ'},
{NO:828,name:'フォクスライ',type1:'あく',type2:'',sedai:8,otosuu:5,first_two:'オウ',last_two:'アイ'},
{NO:829,name:'ヒメンカ',type1:'くさ',type2:'',sedai:8,otosuu:4,first_two:'イエ',last_two:'ンア'},
{NO:830,name:'ワタシラガ',type1:'くさ',type2:'',sedai:8,otosuu:5,first_two:'アア',last_two:'アア'},
{NO:831,name:'ウールー',type1:'ノーマル',type2:'',sedai:8,otosuu:4,first_two:'ウー',last_two:'ウー'},
{NO:832,name:'バイウールー',type1:'ノーマル',type2:'',sedai:8,otosuu:6,first_two:'アイ',last_two:'ウー'},
{NO:833,name:'カムカメ',type1:'みず',type2:'',sedai:8,otosuu:4,first_two:'アウ',last_two:'アエ'},
{NO:834,name:'カジリガメ',type1:'みず',type2:'いわ',sedai:8,otosuu:5,first_two:'アイ',last_two:'アエ'},
{NO:835,name:'ワンパチ',type1:'でんき',type2:'',sedai:8,otosuu:4,first_two:'アン',last_two:'アイ'},
{NO:836,name:'パルスワン',type1:'でんき',type2:'',sedai:8,otosuu:5,first_two:'アウ',last_two:'アン'},
{NO:837,name:'タンドン',type1:'いわ',type2:'',sedai:8,otosuu:4,first_two:'アン',last_two:'オン'},
{NO:838,name:'トロッゴン',type1:'いわ',type2:'ほのお',sedai:8,otosuu:5,first_two:'オオ',last_two:'オン'},
{NO:839,name:'セキタンザン',type1:'いわ',type2:'ほのお',sedai:8,otosuu:6,first_two:'エイ',last_two:'アン'},
{NO:840,name:'カジッチュ',type1:'くさ',type2:'ドラゴン',sedai:8,otosuu:4,first_two:'アイ',last_two:'ッウ'},
{NO:841,name:'アップリュー',type1:'くさ',type2:'ドラゴン',sedai:8,otosuu:5,first_two:'アッ',last_two:'ウー'},
{NO:842,name:'タルップル',type1:'くさ',type2:'ドラゴン',sedai:8,otosuu:5,first_two:'アウ',last_two:'ウウ'},
{NO:843,name:'スナヘビ',type1:'じめん',type2:'',sedai:8,otosuu:4,first_two:'ウア',last_two:'エイ'},
{NO:844,name:'サダイジャ',type1:'じめん',type2:'',sedai:8,otosuu:4,first_two:'アア',last_two:'イア'},
{NO:845,name:'ウッウ',type1:'ひこう',type2:'みず',sedai:8,otosuu:3,first_two:'ウッ',last_two:'ッウ'},
{NO:846,name:'サシカマス',type1:'みず',type2:'',sedai:8,otosuu:5,first_two:'アイ',last_two:'アウ'},
{NO:847,name:'カマスジョー',type1:'みず',type2:'',sedai:8,otosuu:5,first_two:'アア',last_two:'オー'},
{NO:848,name:'エレズン',type1:'でんき',type2:'どく',sedai:8,otosuu:4,first_two:'エエ',last_two:'ウン'},
{NO:849,name:'ストリンダー',type1:'でんき',type2:'どく',sedai:8,otosuu:6,first_two:'ウオ',last_two:'アー'},
{NO:850,name:'ヤクデ',type1:'ほのお',type2:'むし',sedai:8,otosuu:3,first_two:'アウ',last_two:'ウエ'},
{NO:851,name:'マルヤクデ',type1:'ほのお',type2:'むし',sedai:8,otosuu:5,first_two:'アウ',last_two:'ウエ'},
{NO:852,name:'タタッコ',type1:'かくとう',type2:'',sedai:8,otosuu:4,first_two:'アア',last_two:'ッオ'},
{NO:853,name:'オトスパス',type1:'かくとう',type2:'',sedai:8,otosuu:5,first_two:'オオ',last_two:'アウ'},
{NO:854,name:'ヤバチャ',type1:'ゴースト',type2:'',sedai:8,otosuu:3,first_two:'アア',last_two:'アア'},
{NO:855,name:'ポットデス',type1:'ゴースト',type2:'',sedai:8,otosuu:5,first_two:'オッ',last_two:'エウ'},
{NO:856,name:'ミブリム',type1:'エスパー',type2:'',sedai:8,otosuu:4,first_two:'イウ',last_two:'イウ'},
{NO:857,name:'テブリム',type1:'エスパー',type2:'',sedai:8,otosuu:4,first_two:'エウ',last_two:'イウ'},
{NO:858,name:'ブリムオン',type1:'エスパー',type2:'フェアリー',sedai:8,otosuu:5,first_two:'ウイ',last_two:'オン'},
{NO:859,name:'ベロバー',type1:'あく',type2:'フェアリー',sedai:8,otosuu:4,first_two:'エオ',last_two:'アー'},
{NO:860,name:'ギモー',type1:'あく',type2:'フェアリー',sedai:8,otosuu:3,first_two:'イオ',last_two:'オー'},
{NO:861,name:'オーロンゲ',type1:'あく',type2:'フェアリー',sedai:8,otosuu:5,first_two:'オー',last_two:'ンエ'},
{NO:862,name:'タチフサグマ',type1:'あく',type2:'ノーマル',sedai:8,otosuu:6,first_two:'アイ',last_two:'ウア'},
{NO:863,name:'ニャイキング',type1:'はがね',type2:'',sedai:8,otosuu:5,first_two:'アイ',last_two:'ンウ'},
{NO:864,name:'サニゴーン',type1:'ゴースト',type2:'',sedai:8,otosuu:5,first_two:'アイ',last_two:'ーン'},
{NO:865,name:'ネギガナイト',type1:'かくとう',type2:'',sedai:8,otosuu:6,first_two:'エイ',last_two:'イオ'},
{NO:866,name:'バリコオル',type1:'こおり',type2:'エスパー',sedai:8,otosuu:5,first_two:'アイ',last_two:'オウ'},
{NO:867,name:'デスバーン',type1:'じめん',type2:'ゴースト',sedai:8,otosuu:5,first_two:'エウ',last_two:'ーン'},
{NO:868,name:'マホミル',type1:'フェアリー',type2:'',sedai:8,otosuu:4,first_two:'アオ',last_two:'イウ'},
{NO:869,name:'マホイップ',type1:'フェアリー',type2:'',sedai:8,otosuu:5,first_two:'アオ',last_two:'ッウ'},
{NO:870,name:'タイレーツ',type1:'かくとう',type2:'',sedai:8,otosuu:5,first_two:'アイ',last_two:'ーウ'},
{NO:871,name:'バチンウニ',type1:'でんき',type2:'',sedai:8,otosuu:5,first_two:'アイ',last_two:'ウイ'},
{NO:872,name:'ユキハミ',type1:'こおり',type2:'むし',sedai:8,otosuu:4,first_two:'ウイ',last_two:'アイ'},
{NO:873,name:'モスノウ',type1:'こおり',type2:'むし',sedai:8,otosuu:4,first_two:'オウ',last_two:'オウ'},
{NO:874,name:'イシヘンジン',type1:'いわ',type2:'',sedai:8,otosuu:6,first_two:'イイ',last_two:'イン'},
{NO:875,name:'コオリッポ',type1:'こおり',type2:'',sedai:8,otosuu:5,first_two:'オオ',last_two:'ッオ'},
{NO:876,name:'イエッサン',type1:'エスパー',type2:'ノーマル',sedai:8,otosuu:5,first_two:'イエ',last_two:'アン'},
{NO:877,name:'モルペコ',type1:'でんき',type2:'あく',sedai:8,otosuu:4,first_two:'オウ',last_two:'エオ'},
{NO:878,name:'ゾウドウ',type1:'はがね',type2:'',sedai:8,otosuu:4,first_two:'オウ',last_two:'オウ'},
{NO:879,name:'ダイオウドウ',type1:'はがね',type2:'',sedai:8,otosuu:6,first_two:'アイ',last_two:'オウ'},
{NO:880,name:'パッチラゴン',type1:'でんき',type2:'ドラゴン',sedai:8,otosuu:6,first_two:'アッ',last_two:'オン'},
{NO:881,name:'パッチルドン',type1:'でんき',type2:'こおり',sedai:8,otosuu:6,first_two:'アッ',last_two:'オン'},
{NO:882,name:'ウオノラゴン',type1:'みず',type2:'ドラゴン',sedai:8,otosuu:6,first_two:'ウオ',last_two:'オン'},
{NO:883,name:'ウオチルドン',type1:'みず',type2:'こおり',sedai:8,otosuu:6,first_two:'ウオ',last_two:'オン'},
{NO:884,name:'ジュラルドン',type1:'はがね',type2:'ドラゴン',sedai:8,otosuu:5,first_two:'ウア',last_two:'オン'},
{NO:885,name:'ドラメシヤ',type1:'ドラゴン',type2:'ゴースト',sedai:8,otosuu:5,first_two:'オア',last_two:'イア'},
{NO:886,name:'ドロンチ',type1:'ドラゴン',type2:'ゴースト',sedai:8,otosuu:4,first_two:'オオ',last_two:'ンイ'},
{NO:887,name:'ドラパルト',type1:'ドラゴン',type2:'ゴースト',sedai:8,otosuu:5,first_two:'オア',last_two:'ウオ'},
{NO:888,name:'ザシアン',type1:'フェアリー',type2:'',sedai:8,otosuu:4,first_two:'アイ',last_two:'アン'},
{NO:889,name:'ザマゼンタ',type1:'かくとう',type2:'',sedai:8,otosuu:5,first_two:'アア',last_two:'ンア'},
{NO:890,name:'ムゲンダイナ',type1:'どく',type2:'ドラゴン',sedai:8,otosuu:6,first_two:'ウエ',last_two:'イア'}]
//ポケモン言えるかなの歌詞を関数に
const ierukana_list_moto =[{NO:1,name:'ピカチュウ',type1:'でんき',type2:'',sedai:1,otosuu:4,first_two:'イア',last_two:'ウウ'},
{NO:2,name:'カイリュー',type1:'ドラゴン',type2:'ひこう',sedai:1,otosuu:4,first_two:'アイ',last_two:'ウー'},
{NO:3,name:'ヤドラン',type1:'みず',type2:'エスパー',sedai:1,otosuu:4,first_two:'アオ',last_two:'アン'},
{NO:4,name:'ピジョン',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:3,first_two:'イオ',last_two:'オン'},
{NO:5,name:'コダック',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'オア',last_two:'ッウ'},
{NO:6,name:'コラッタ',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'オア',last_two:'ッア'},
{NO:7,name:'ズバット',type1:'どく',type2:'ひこう',sedai:1,otosuu:4,first_two:'ウア',last_two:'ッオ'},
{NO:8,name:'ギャロップ',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'アオ',last_two:'ッウ'},
{NO:9,name:'サンダース',type1:'でんき',type2:'',sedai:1,otosuu:5,first_two:'アン',last_two:'ーウ'},
{NO:10,name:'メノクラゲ',type1:'みず',type2:'どく',sedai:1,otosuu:5,first_two:'エオ',last_two:'アエ'},
{NO:11,name:'パウワウ',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'アウ',last_two:'アウ'},
{NO:12,name:'カラカラ',type1:'じめん',type2:'',sedai:1,otosuu:4,first_two:'アア',last_two:'アア'},
{NO:13,name:'タマタマ',type1:'くさ',type2:'エスパー',sedai:1,otosuu:4,first_two:'アア',last_two:'アア'},
{NO:14,name:'ガラガラ',type1:'じめん',type2:'',sedai:1,otosuu:4,first_two:'アア',last_two:'アア'},
{NO:15,name:'フシギダネ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'ウイ',last_two:'アエ'},
{NO:16,name:'アーボ',type1:'どく',type2:'',sedai:1,otosuu:3,first_two:'アー',last_two:'ーオ'},
{NO:17,name:'イーブイ',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'イー',last_two:'ウイ'},
{NO:18,name:'ウツドン',type1:'くさ',type2:'どく',sedai:1,otosuu:4,first_two:'ウウ',last_two:'オン'},
{NO:19,name:'エレブー',type1:'でんき',type2:'',sedai:1,otosuu:4,first_two:'エエ',last_two:'ウー'},
{NO:20,name:'カビゴン',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'アイ',last_two:'オン'},
{NO:21,name:'カブト',type1:'いわ',type2:'みず',sedai:1,otosuu:3,first_two:'アウ',last_two:'ウオ'},
{NO:22,name:'サイドン',type1:'じめん',type2:'いわ',sedai:1,otosuu:4,first_two:'アイ',last_two:'オン'},
{NO:23,name:'ジュゴン',type1:'みず',type2:'こおり',sedai:1,otosuu:3,first_two:'ウオ',last_two:'オン'},
{NO:24,name:'ポリゴン',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'オイ',last_two:'オン'},
{NO:25,name:'ディグダ',type1:'じめん',type2:'',sedai:1,otosuu:3,first_two:'イウ',last_two:'ウア'},
{NO:26,name:'ドードリオ',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:5,first_two:'オー',last_two:'イオ'},
{NO:27,name:'ゲンガー',type1:'ゴースト',type2:'どく',sedai:1,otosuu:4,first_two:'エン',last_two:'アー'},
{NO:28,name:'ドガース',type1:'どく',type2:'',sedai:1,otosuu:4,first_two:'オア',last_two:'ーウ'},
{NO:29,name:'ルージュラ',type1:'こおり',type2:'エスパー',sedai:1,otosuu:4,first_two:'ウー',last_two:'ウア'},
{NO:30,name:'ニャース',type1:'ノーマル',type2:'',sedai:1,otosuu:3,first_two:'アー',last_two:'ーウ'},
{NO:31,name:'シャワーズ',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'アア',last_two:'ーウ'},
{NO:32,name:'クサイハナ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'ウア',last_two:'アア'},
{NO:33,name:'コクーン',type1:'むし',type2:'どく',sedai:1,otosuu:4,first_two:'オウ',last_two:'ーン'},
{NO:34,name:'ゴースト',type1:'ゴースト',type2:'どく',sedai:1,otosuu:4,first_two:'オー',last_two:'ウオ'},
{NO:35,name:'イワーク',type1:'いわ',type2:'じめん',sedai:1,otosuu:4,first_two:'イア',last_two:'ーウ'},
{NO:36,name:'ヒトカゲ',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'イオ',last_two:'アエ'},
{NO:37,name:'ラッキー',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'アッ',last_two:'イー'},
{NO:38,name:'ラッタ',type1:'ノーマル',type2:'',sedai:1,otosuu:3,first_two:'アッ',last_two:'ッア'},
{NO:39,name:'オニドリル',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:5,first_two:'オイ',last_two:'イウ'},
{NO:40,name:'コイル',type1:'でんき',type2:'はがね',sedai:1,otosuu:3,first_two:'オイ',last_two:'イウ'},
{NO:41,name:'レアコイル',type1:'でんき',type2:'はがね',sedai:1,otosuu:5,first_two:'エア',last_two:'イウ'},
{NO:42,name:'プクリン',type1:'ノーマル',type2:'フェアリー',sedai:1,otosuu:4,first_two:'ウウ',last_two:'イン'},
{NO:43,name:'ゼニガメ',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'エイ',last_two:'アエ'},
{NO:44,name:'ニョロゾ',type1:'みず',type2:'',sedai:1,otosuu:3,first_two:'オオ',last_two:'オオ'},
{NO:45,name:'トサキント',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'オア',last_two:'ンオ'},
{NO:46,name:'ファイヤー',type1:'ほのお',type2:'ひこう',sedai:1,otosuu:4,first_two:'アイ',last_two:'アー'},
{NO:47,name:'ブースター',type1:'ほのお',type2:'',sedai:1,otosuu:5,first_two:'ウー',last_two:'アー'},
{NO:48,name:'フーディン',type1:'エスパー',type2:'',sedai:1,otosuu:4,first_two:'ウー',last_two:'イン'},
{NO:49,name:'ブーバー',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'ウー',last_two:'アー'},
{NO:50,name:'ストライク',type1:'むし',type2:'ひこう',sedai:1,otosuu:5,first_two:'ウオ',last_two:'イウ'},
{NO:51,name:'キャタピー',type1:'むし',type2:'',sedai:1,otosuu:4,first_two:'アア',last_two:'イー'},
{NO:52,name:'ピクシー',type1:'フェアリー',type2:'',sedai:1,otosuu:4,first_two:'イウ',last_two:'イー'},
{NO:53,name:'シードラ',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'イー',last_two:'オア'},
{NO:54,name:'ライチュウ',type1:'でんき',type2:'',sedai:1,otosuu:4,first_two:'アイ',last_two:'ウウ'},
{NO:55,name:'ヒトデマン',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'イオ',last_two:'アン'},
{NO:56,name:'クラブ',type1:'みず',type2:'',sedai:1,otosuu:3,first_two:'ウア',last_two:'アウ'},
{NO:57,name:'ニドクイン',type1:'どく',type2:'じめん',sedai:1,otosuu:5,first_two:'イオ',last_two:'イン'},
{NO:58,name:'サンドパン',type1:'じめん',type2:'',sedai:1,otosuu:5,first_two:'アン',last_two:'アン'},
{NO:59,name:'アズマオウ',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'アウ',last_two:'オウ'},
{NO:60,name:'トランセル',type1:'むし',type2:'',sedai:1,otosuu:5,first_two:'オア',last_two:'エウ'},
{NO:61,name:'ドードー',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:4,first_two:'オー',last_two:'オー'},
{NO:62,name:'タッツー',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'アッ',last_two:'ウー'},
{NO:63,name:'ガーディ',type1:'ほのお',type2:'',sedai:1,otosuu:3,first_two:'アー',last_two:'ーイ'},
{NO:64,name:'マンキー',type1:'かくとう',type2:'',sedai:1,otosuu:4,first_two:'アン',last_two:'イー'},
{NO:65,name:'ドククラゲ',type1:'みず',type2:'どく',sedai:1,otosuu:5,first_two:'オウ',last_two:'アエ'},
{NO:66,name:'オニスズメ',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:5,first_two:'オイ',last_two:'ウエ'},
{NO:67,name:'サンド',type1:'じめん',type2:'',sedai:1,otosuu:3,first_two:'アン',last_two:'ンオ'},
{NO:68,name:'パラセクト',type1:'むし',type2:'くさ',sedai:1,otosuu:5,first_two:'アア',last_two:'ウオ'},
{NO:69,name:'スリープ',type1:'エスパー',type2:'',sedai:1,otosuu:4,first_two:'ウイ',last_two:'ーウ'},
{NO:70,name:'ビードル',type1:'むし',type2:'どく',sedai:1,otosuu:4,first_two:'イー',last_two:'オウ'},
{NO:71,name:'カイロス',type1:'むし',type2:'',sedai:1,otosuu:4,first_two:'アイ',last_two:'オウ'},
{NO:72,name:'ピジョット',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:4,first_two:'イオ',last_two:'ッオ'},
{NO:73,name:'コイキング',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'オイ',last_two:'ンウ'},
{NO:74,name:'サイホーン',type1:'じめん',type2:'いわ',sedai:1,otosuu:5,first_two:'アイ',last_two:'ーン'},
{NO:75,name:'マタドガス',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'アア',last_two:'アウ'},
{NO:76,name:'フシギソウ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'ウイ',last_two:'オウ'},
{NO:77,name:'カメックス',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'アエ',last_two:'ウウ'},
{NO:78,name:'シェルダー',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'エウ',last_two:'アー'},
{NO:79,name:'サンダー',type1:'でんき',type2:'ひこう',sedai:1,otosuu:4,first_two:'アン',last_two:'アー'},
{NO:80,name:'リザード',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'イア',last_two:'ーオ'},
{NO:81,name:'ナッシー',type1:'くさ',type2:'エスパー',sedai:1,otosuu:4,first_two:'アッ',last_two:'イー'},
{NO:82,name:'ベトベトン',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'エオ',last_two:'オン'},
{NO:83,name:'ポッポ',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:3,first_two:'オッ',last_two:'ッオ'},
{NO:84,name:'ウツボット',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'ウウ',last_two:'ッオ'},
{NO:85,name:'プリン',type1:'ノーマル',type2:'フェアリー',sedai:1,otosuu:3,first_two:'ウイ',last_two:'イン'},
{NO:86,name:'ケーシィ',type1:'エスパー',type2:'',sedai:1,otosuu:3,first_two:'エー',last_two:'ーイ'},
{NO:87,name:'ベトベター',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'エオ',last_two:'アー'},
{NO:88,name:'ガルーラ',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'アウ',last_two:'ーア'},
{NO:89,name:'ギャラドス',type1:'みず',type2:'ひこう',sedai:1,otosuu:4,first_two:'アア',last_two:'オウ'},
{NO:90,name:'ゴローニャ',type1:'いわ',type2:'じめん',sedai:1,otosuu:4,first_two:'オオ',last_two:'ーア'},
{NO:91,name:'ピッピ',type1:'フェアリー',type2:'',sedai:1,otosuu:3,first_two:'イッ',last_two:'ッイ'},
{NO:92,name:'イシツブテ',type1:'いわ',type2:'じめん',sedai:1,otosuu:5,first_two:'イイ',last_two:'ウエ'},
{NO:93,name:'ゴルダック',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'オウ',last_two:'ッウ'},
{NO:94,name:'オムナイト',type1:'いわ',type2:'みず',sedai:1,otosuu:5,first_two:'オウ',last_two:'イオ'},
{NO:95,name:'ゴルバット',type1:'どく',type2:'ひこう',sedai:1,otosuu:5,first_two:'オウ',last_two:'ッオ'},
{NO:96,name:'アーボック',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'アー',last_two:'ッウ'},
{NO:97,name:'ニドラン♀',type1:'どく',type2:'',sedai:1,otosuu:6,first_two:'イオ',last_two:'エウ'},
{NO:98,name:'ニドラン♂',type1:'どく',type2:'',sedai:1,otosuu:6,first_two:'イオ',last_two:'オウ'},
{NO:99,name:'ナゾノクサ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'アオ',last_two:'ウア'},
{NO:100,name:'ニョロボン',type1:'みず',type2:'かくとう',sedai:1,otosuu:4,first_two:'オオ',last_two:'オン'},
{NO:101,name:'カモネギ',type1:'ノーマル',type2:'ひこう',sedai:1,otosuu:4,first_two:'アオ',last_two:'エイ'},
{NO:102,name:'ラプラス',type1:'みず',type2:'こおり',sedai:1,otosuu:4,first_two:'アウ',last_two:'アウ'},
{NO:103,name:'ラフレシア',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'アウ',last_two:'イア'},
{NO:104,name:'カブトプス',type1:'いわ',type2:'みず',sedai:1,otosuu:5,first_two:'アウ',last_two:'ウウ'},
{NO:105,name:'ニドリーナ',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'イオ',last_two:'ーア'},
{NO:106,name:'バリヤード',type1:'エスパー',type2:'フェアリー',sedai:1,otosuu:5,first_two:'アイ',last_two:'ーオ'},
{NO:107,name:'マルマイン',type1:'でんき',type2:'',sedai:1,otosuu:5,first_two:'アウ',last_two:'イン'},
{NO:108,name:'フシギバナ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'ウイ',last_two:'アア'},
{NO:109,name:'パラス',type1:'むし',type2:'くさ',sedai:1,otosuu:3,first_two:'アア',last_two:'アウ'},
{NO:110,name:'リザードン',type1:'ほのお',type2:'ひこう',sedai:1,otosuu:5,first_two:'イア',last_two:'オン'},
{NO:111,name:'コンパン',type1:'むし',type2:'どく',sedai:1,otosuu:4,first_two:'オン',last_two:'アン'},
{NO:112,name:'ヤドン',type1:'みず',type2:'エスパー',sedai:1,otosuu:3,first_two:'アオ',last_two:'オン'},
{NO:113,name:'メタモン',type1:'ノーマル',type2:'',sedai:1,otosuu:4,first_two:'エア',last_two:'オン'},
{NO:114,name:'ゴース',type1:'ゴースト',type2:'どく',sedai:1,otosuu:3,first_two:'オー',last_two:'ーウ'},
{NO:115,name:'ビリリダマ',type1:'でんき',type2:'',sedai:1,otosuu:5,first_two:'イイ',last_two:'アア'},
{NO:116,name:'ユンゲラー',type1:'エスパー',type2:'',sedai:1,otosuu:5,first_two:'ウン',last_two:'アー'},
{NO:117,name:'キングラー',type1:'みず',type2:'',sedai:1,otosuu:5,first_two:'イン',last_two:'アー'},
{NO:118,name:'サワムラー',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'アア',last_two:'アー'},
{NO:119,name:'エビワラー',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'エイ',last_two:'アー'},
{NO:120,name:'カイリキー',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'アイ',last_two:'イー'},
{NO:121,name:'スリーパー',type1:'エスパー',type2:'',sedai:1,otosuu:5,first_two:'ウイ',last_two:'アー'},
{NO:122,name:'ゴーリキー',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'オー',last_two:'イー'},
{NO:123,name:'スターミー',type1:'みず',type2:'エスパー',sedai:1,otosuu:5,first_two:'ウア',last_two:'イー'},
{NO:124,name:'マダツボミ',type1:'くさ',type2:'どく',sedai:1,otosuu:5,first_two:'アア',last_two:'オイ'},
{NO:125,name:'プテラ',type1:'いわ',type2:'ひこう',sedai:1,otosuu:3,first_two:'ウエ',last_two:'エア'},
{NO:126,name:'ニドリーノ',type1:'どく',type2:'',sedai:1,otosuu:5,first_two:'イオ',last_two:'ーオ'},
{NO:127,name:'ペルシアン',type1:'ノーマル',type2:'',sedai:1,otosuu:5,first_two:'エウ',last_two:'アン'},
{NO:128,name:'ハクリュー',type1:'ドラゴン',type2:'',sedai:1,otosuu:4,first_two:'アウ',last_two:'ウー'},
{NO:129,name:'ミュウツー',type1:'エスパー',type2:'',sedai:1,otosuu:4,first_two:'ウウ',last_two:'ウー'},
{NO:130,name:'キュウコン',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'ウウ',last_two:'オン'},
{NO:131,name:'スピアー',type1:'むし',type2:'どく',sedai:1,otosuu:4,first_two:'ウイ',last_two:'アー'},
{NO:132,name:'ベロリンガ',type1:'ノーマル',type2:'',sedai:1,otosuu:5,first_two:'エオ',last_two:'ンア'},
{NO:133,name:'バタフリー',type1:'むし',type2:'ひこう',sedai:1,otosuu:5,first_two:'アア',last_two:'イー'},
{NO:134,name:'ダグトリオ',type1:'じめん',type2:'',sedai:1,otosuu:5,first_two:'アウ',last_two:'イオ'},
{NO:135,name:'ニドキング',type1:'どく',type2:'じめん',sedai:1,otosuu:5,first_two:'イオ',last_two:'ンウ'},
{NO:136,name:'オムスター',type1:'いわ',type2:'みず',sedai:1,otosuu:5,first_two:'オウ',last_two:'アー'},
{NO:137,name:'パルシェン',type1:'みず',type2:'こおり',sedai:1,otosuu:4,first_two:'アウ',last_two:'エン'},
{NO:138,name:'ニョロモ',type1:'みず',type2:'',sedai:1,otosuu:3,first_two:'オオ',last_two:'オオ'},
{NO:139,name:'ゴローン',type1:'いわ',type2:'じめん',sedai:1,otosuu:4,first_two:'オオ',last_two:'ーン'},
{NO:140,name:'ロコン',type1:'ほのお',type2:'',sedai:1,otosuu:3,first_two:'オオ',last_two:'オン'},
{NO:141,name:'ケンタロス',type1:'ノーマル',type2:'',sedai:1,otosuu:5,first_two:'エン',last_two:'オウ'},
{NO:142,name:'ポニータ',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'オイ',last_two:'ーア'},
{NO:143,name:'モンジャラ',type1:'くさ',type2:'',sedai:1,otosuu:4,first_two:'オン',last_two:'アア'},
{NO:144,name:'ミニリュウ',type1:'ドラゴン',type2:'',sedai:1,otosuu:4,first_two:'イイ',last_two:'ウウ'},
{NO:145,name:'ワンリキー',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'アン',last_two:'イー'},
{NO:146,name:'モルフォン',type1:'むし',type2:'どく',sedai:1,otosuu:4,first_two:'オウ',last_two:'オン'},
{NO:147,name:'カメール',type1:'みず',type2:'',sedai:1,otosuu:4,first_two:'アエ',last_two:'ーウ'},
{NO:148,name:'ウインディ',type1:'ほのお',type2:'',sedai:1,otosuu:4,first_two:'ウイ',last_two:'ンイ'},
{NO:149,name:'フリーザー',type1:'こおり',type2:'ひこう',sedai:1,otosuu:5,first_two:'ウイ',last_two:'アー'},
{NO:150,name:'オコリザル',type1:'かくとう',type2:'',sedai:1,otosuu:5,first_two:'オオ',last_two:'アウ'}
]

//この関数は使っていない
function random_select(i){
  num = Math.floor(Math.random()*pokemon_list.length);
  return num;
}

function sedai_yusen_random(i,select_sedai,pokemon_list){
  let num =1
  if(select_sedai==9){
      num = Math.floor(Math.random()*pokemon_list.length);}else{
  if(Math.random() > 0.3){
    num = Math.floor(Math.random()*pokemon_list.length*(sedai_ransu[select_sedai]-sedai_ransu[select_sedai-1])+sedai_ransu[select_sedai-1]*pokemon_list.length)
  }else{num =Math.floor(Math.random()*pokemon_list.length)
  }
}
  return num
}

function otosuu_itchi(i,sedai,pokemon_list){
  num = sedai_yusen_random(i,sedai,pokemon_list);
  while(ierukana_list_moto[i].otosuu !==pokemon_list[num].otosuu){
  num = sedai_yusen_random(i,sedai,pokemon_list);
}
return num
}


function first_itchi(i,sedai,pokemon_list){
  num = sedai_yusen_random(i,sedai,pokemon_list);
  while((ierukana_list_moto[i].otosuu !==pokemon_list[num].otosuu)||(ierukana_list_moto[i].first_two!==pokemon_list[num].first_two)){
  num = sedai_yusen_random(i,sedai,pokemon_list);
}
return num
}

function last_itchi(i,sedai,pokemon_list){
  num = sedai_yusen_random(i,sedai,pokemon_list);
  while((ierukana_list_moto[i].otosuu !==pokemon_list[num].otosuu)||(ierukana_list_moto[i].last_two!==pokemon_list[num].last_two)){
  num = sedai_yusen_random(i,sedai,pokemon_list);
}
return num
}
function hantei(ierukana_no,pklist_no,utaiyasusa){
  var tf = Boolean(true);

  if(utaiyasusa=="random"){
    tf= true
  }else if(utaiyasusa=="otosuuitchi"){
    tf=(ierukana_list_moto[ierukana_no].otosuu ==pokemon_list_moto[pklist_no].otosuu)
  }else if(utaiyasusa=="firstitchi"){
    tf = ((ierukana_list_moto[ierukana_no].otosuu ==pokemon_list_moto[pklist_no].otosuu)&&(ierukana_list_moto[ierukana_no].first_two==pokemon_list_moto[pklist_no].first_two))
    
  }else if(utaiyasusa=="lastitchi"){
    tf =((ierukana_list_moto[ierukana_no].otosuu ==pokemon_list_moto[pklist_no].otosuu)&&(ierukana_list_moto[ierukana_no].last_two==pokemon_list_moto[pklist_no].last_two))
  }else{tf = true}
  return tf
}

function push_fav_pokemon(pk_no,utaiyasusa){
  i= 1000
  j =0
  if(pk_no >0){
    i= Math.floor(Math.random()*ierukana_list_moto.length);
    while(!(hantei(i,pk_no-1,utaiyasusa))&&j<5000){
    i= Math.floor(Math.random()*ierukana_list_moto.length);
    j = j+1
  }
}
return i
}

function translate_name_no(pkname){
  let number =0;
  for(i in pokemon_list_moto){
    if(pokemon_list_moto[i].name==pkname){
    number = pokemon_list_moto[i].NO
  }
  }
return number
}
//世代ごとランダムを求める
const sedai_ransu =[0,151/890,251/890,386/890,493/890,649/890,721/890,809/890,1]
const select_list ={random:function(i,sedai,pokemon_list)
  {return sedai_yusen_random(i,sedai,pokemon_list);
},
otosuuitchi:function(i,sedai,pokemon_list){return otosuu_itchi(i,sedai,pokemon_list);},
  firstitchi:function(i,sedai,pokemon_list){return first_itchi(i,sedai,pokemon_list);},
  lastitchi:function(i,sedai,pokemon_list){return last_itchi(i,sedai,pokemon_list);}}
//モードを決めるための関数

document.getElementById('form').onsubmit = function(){
  event.preventDefault();

  let ierukana_list = ierukana_list_moto.slice(0, ierukana_list_moto.length);
  let pokemon_list = pokemon_list_moto.slice(0, pokemon_list_moto.length);
  console.log(pokemon_list)
  const sedai = document.getElementById('form').sedai.value;
  const utaiyasusa_settei = document.getElementById('form').utaiyasusa.value;
  const fav_pokemon =[document.getElementById('form').pokemonname1.value,
  document.getElementById('form').pokemonname2.value,
  document.getElementById('form').pokemonname3.value,
  document.getElementById('form').pokemonname4.value,
  document.getElementById('form').pokemonname5.value
];
  console.log(sedai);
  console.log(utaiyasusa_settei);
  console.log(fav_pokemon);
  //ポケモンの名前を番号に変換
  fav_pokemon_num = [translate_name_no(fav_pokemon[0]),
  translate_name_no(fav_pokemon[1]),
  translate_name_no(fav_pokemon[2]),
  translate_name_no(fav_pokemon[3]),
  translate_name_no(fav_pokemon[4])
];
console.log(fav_pokemon_num)
//好きなポケモンを曲に入れる作業
let fav_pk_point=[];
for(l in fav_pokemon_num){
j = push_fav_pokemon(fav_pokemon_num[l],utaiyasusa_settei)
k=0
while (fav_pk_point.indexOf(j)>=0){
j = push_fav_pokemon(fav_pokemon_num[l],utaiyasusa_settei)
k=k+1
if(k=100){j =Math.floor(Math.random()*ierukana_list.length)}
}
if(j<930){
  console.log(fav_pokemon_num);
  console.log(fav_pokemon_num[l]);
  console.log(typeof fav_pokemon_num[l]);
  ierukana_list[j] = pokemon_list[fav_pokemon_num[l]-1];
  fav_pk_point.push(j);
}
}
console.log(fav_pk_point);
console.log(typeof fav_pk_point[0])

  for(i in ierukana_list){
    
  //好きなポケモンリストで選んだ番号を除外
  if(!(fav_pk_point.indexOf(Number(i))>=0)){
  //ここにkを選ぶための処理
  k =select_list[utaiyasusa_settei](i,sedai,pokemon_list);
  ierukana_list[i] = pokemon_list[k];

  //使ったポケモンを抜く処理
  pokemon_list.splice(k,1);
}  
}
  
  let kashi = ""
  //言えるかなリストの表示
  console.log(ierukana_list)
  console.log(pokemon_list)
  
  
  for(var k =0;k<14;k++){
    if(fav_pk_point.indexOf(k)>=0){
    kashi = kashi + "<b>"+ierukana_list[k].name +"</b>"+"、"}
    else{
    kashi = kashi+ierukana_list[k].name +"、"}
    ;
  }
  
  if(fav_pk_point.indexOf(14)>=0){
  kashi = kashi + "<b>"+ierukana_list[14].name +"</b><br><br>"}
  else{
  kashi =kashi+ierukana_list[14].name+"<br><br>"}
  
  for(var k =15;k<31;k++){  
    if(fav_pk_point.indexOf(k)>=0){
    kashi = kashi + "<b>"+ierukana_list[k].name +"</b>"+"、"}
    else{
    kashi = kashi+ierukana_list[k].name +"、"}
  }
  
  if(fav_pk_point.indexOf(31)>=0){
  kashi = kashi + "<b>"+ierukana_list[31].name +"</b><br><br>"}
  else{
  kashi =kashi+ierukana_list[31].name+"<br><br>"}
  
  kashi =kashi+"ラ・ラ・ラいえるかな？<br>き・み・はいえるかな？<br>ラ・ラ・ラいえるかな？<br>ポケモンのなまえーー<br><br>";
  
  for(var k =32;k<49;k++){
    if(fav_pk_point.indexOf(k)>=0){
    kashi = kashi + "<b>"+ierukana_list[k].name +"</b>"+"、"}
    else{
    kashi = kashi+ierukana_list[k].name +"、"}
  }
  
  if(fav_pk_point.indexOf(49)>=0){
  kashi = kashi + "<b>"+ierukana_list[49].name +"</b><br><br>"}
  else{
  kashi =kashi+ierukana_list[49].name+"<br><br>"}
  
  for(var k =50;k<64;k++){
    if(fav_pk_point.indexOf(k)>=0){
    kashi = kashi + "<b>"+ierukana_list[k].name +"</b>"+"、"}
    else{
    kashi = kashi+ierukana_list[k].name +"、"}
  }
  
  if(fav_pk_point.indexOf(64)>=0){
  kashi = kashi + "<b>"+ierukana_list[64].name +"</b><br><br>"}
  else{
  kashi =kashi+ierukana_list[64].name+"<br><br>"}
  
  
  kashi =kashi+"ラ・ラ・ラいえるかな？<br>き・み・はいえるかな？<br>ラ・ラ・ラいえるかな？<br>ポケモンのなまえーー<br><br>イエーイ！、";

  for(var k =65;k<72;k++){
    if(fav_pk_point.indexOf(k)>=0){
    kashi = kashi + "<b>"+ierukana_list[k].name +"</b>"+"、"}
    else{
    kashi = kashi+ierukana_list[k].name +"、"}
  }
  
  if(fav_pk_point.indexOf(72)>=0){
  kashi = kashi + "<b>"+ierukana_list[72].name +"！</b><br><br>"}
  else{
  kashi =kashi+ierukana_list[72].name+"！<br><br>"}
  
  for(var k =73;k<81;k++){
    if(fav_pk_point.indexOf(k)>=0){
    kashi = kashi + "<b>"+ierukana_list[k].name +"</b>"+"、"}
    else{
    kashi = kashi+ierukana_list[k].name +"、"}
  }

  if(fav_pk_point.indexOf(81)>=0){
  kashi = kashi + "<b>"+ierukana_list[81].name +"！</b><br><br>"}
  else{
  kashi =kashi+ierukana_list[81].name+"！<br><br>"}
  
  for(var k =82;k<91;k++){
    if(fav_pk_point.indexOf(k)>=0){
    kashi = kashi + "<b>"+ierukana_list[k].name +"</b>"+"、"}
    else{
    kashi = kashi+ierukana_list[k].name +"、"}
  }
  
  if(fav_pk_point.indexOf(91)>=0){
  kashi = kashi + "<b>"+ierukana_list[91].name +"！</b><br><br>"}
  else{
  kashi =kashi+ierukana_list[91].name+"！<br><br>"}

  
  for(var k =92;k<98;k++){
    if(fav_pk_point.indexOf(k)>=0){
    kashi = kashi + "<b>"+ierukana_list[k].name +"</b>"+"、"}
    else{
    kashi = kashi+ierukana_list[k].name +"、"}
  }
  if(fav_pk_point.indexOf(98)>=0){
  kashi = kashi + "<b>"+ierukana_list[98].name +"！</b><br><br>"}
  else{
  kashi =kashi+ierukana_list[98].name+"！<br><br>"}
  
  kashi =kashi+"ラ・ラ・ラいえるかな？<br>き・み・はいえるかな？<br>ラ・ラ・ラいえるかな？<br>ポケモンのなまえーー<br><br>(泣きながら)、";

  for(var k =99;k<114;k++){
    if(fav_pk_point.indexOf(k)>=0){
    kashi = kashi + "<b>"+ierukana_list[k].name +"</b>"+"、"}
    else{
    kashi = kashi+ierukana_list[k].name +"、"}
  }
  
  if(fav_pk_point.indexOf(114)>=0){
  kashi = kashi + "<b>"+ierukana_list[114].name +"</b>"}
  else{
  kashi = kashi+ierukana_list[114].name}
  
  kashi =kashi+"！<br><br>～間奏～<br><br>ワン、ツー、スリー、アヒア、ウィーゴー<br><br>"
  
  for(var k =115;k<131;k++){
    if(fav_pk_point.indexOf(k)>=0){
    kashi = kashi + "<b>"+ierukana_list[k].name +"</b>"+"、"}
    else{
    kashi = kashi+ierukana_list[k].name +"、"}
  }
  
  if(fav_pk_point.indexOf(131)>=0){
  kashi = kashi + "<b>"+ierukana_list[131].name +"</b>"+"<br><br>"}
  else{
  kashi =kashi+ierukana_list[131].name+"<br><br>"}
  
  
  for(var k =132;k<149;k++){
    if(fav_pk_point.indexOf(k)>=0){
    kashi = kashi + "<b>"+ierukana_list[k].name +"</b>"+"、"}
    else{
    kashi = kashi+ierukana_list[k].name +"、"}
  }
  
  if(fav_pk_point.indexOf(149)>=0){
  kashi = kashi + "<br><b>"+ierukana_list[149].name +"</b>"+"<br><br>"}
  else{
  kashi ="<br>"+kashi+ierukana_list[149].name+"<br><br>"}

  
  kashi =kashi+"ラ・ラ・ラいえたかな？<br>き・み・はいえたかな？<br>ラ・ラ・ラいえたかな？<br>ポケモンのなまえーー<br>....<br>"
  
  console.log(kashi)
  console.log(pokemon_list_moto)
  $('.output').html(kashi)
  //いえるかなリストをhtml上に表示する
}

