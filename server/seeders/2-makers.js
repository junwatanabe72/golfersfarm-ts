"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "makers",
      [
        { name: "その他", createdAt: new Date(), updatedAt: new Date() },
        { name: "Original", createdAt: new Date(), updatedAt: new Date() },
        { name: "A DESIGN GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "A.F.D.", createdAt: new Date(), updatedAt: new Date() },
        { name: "A.japa", createdAt: new Date(), updatedAt: new Date() },
        { name: "ABROAD", createdAt: new Date(), updatedAt: new Date() },
        { name: "ADLLER JAPAN", createdAt: new Date(), updatedAt: new Date() },
        { name: "ANALYZE", createdAt: new Date(), updatedAt: new Date() },
        { name: "ARESO", createdAt: new Date(), updatedAt: new Date() },
        { name: "AXIS GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "BALDO", createdAt: new Date(), updatedAt: new Date() },
        { name: "BENOCK", createdAt: new Date(), updatedAt: new Date() },
        { name: "BIRTH", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "BRAIN STORM GOLF",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "BUDDY", createdAt: new Date(), updatedAt: new Date() },
        { name: "CEDARS GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "CRAZY", createdAt: new Date(), updatedAt: new Date() },
        { name: "Cgs Orion", createdAt: new Date(), updatedAt: new Date() },
        { name: "Cure PUTTERS", createdAt: new Date(), updatedAt: new Date() },
        { name: "DAIICHI GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "DYNA GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "Design Tuning", createdAt: new Date(), updatedAt: new Date() },
        { name: "DiaBang Japan", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "EMILLID BAHAMA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "ENA GOLF", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ENDO GOLF LABO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "EVANGELIST", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "EVNROLL PUTTERS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Edel", createdAt: new Date(), updatedAt: new Date() },
        { name: "FORE’BES", createdAt: new Date(), updatedAt: new Date() },
        { name: "FREIHEIT", createdAt: new Date(), updatedAt: new Date() },
        { name: "Fuso Dream", createdAt: new Date(), updatedAt: new Date() },
        { name: "GRAVITY", createdAt: new Date(), updatedAt: new Date() },
        { name: "GTD", createdAt: new Date(), updatedAt: new Date() },
        { name: "GUERIN DESIGN", createdAt: new Date(), updatedAt: new Date() },
        { name: "Geotech", createdAt: new Date(), updatedAt: new Date() },
        { name: "Grandista", createdAt: new Date(), updatedAt: new Date() },
        { name: "HAL SPORTS", createdAt: new Date(), updatedAt: new Date() },
        { name: "Haraken", createdAt: new Date(), updatedAt: new Date() },
        { name: "Jean-Baptiste", createdAt: new Date(), updatedAt: new Date() },
        { name: "Jean-Carlo", createdAt: new Date(), updatedAt: new Date() },
        { name: "KNS GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "KRANK GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "KRONOS GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "MADNESS X", createdAt: new Date(), updatedAt: new Date() },
        { name: "MUTANT GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "MUTSUMI HONMA", createdAt: new Date(), updatedAt: new Date() },
        { name: "Max Soul", createdAt: new Date(), updatedAt: new Date() },
        { name: "NEXGEN", createdAt: new Date(), updatedAt: new Date() },
        { name: "NUD", createdAt: new Date(), updatedAt: new Date() },
        { name: "PORTWIKK", createdAt: new Date(), updatedAt: new Date() },
        { name: "PROFOUND GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "PROTEC GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "PXG", createdAt: new Date(), updatedAt: new Date() },
        { name: "Piretti", createdAt: new Date(), updatedAt: new Date() },
        { name: "Progress", createdAt: new Date(), updatedAt: new Date() },
        { name: "RAZZLE DAZZLE", createdAt: new Date(), updatedAt: new Date() },
        { name: "RENEGAR GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "RIFE", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "RJ ベティナルディ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "RODDIO", createdAt: new Date(), updatedAt: new Date() },
        { name: "Reve", createdAt: new Date(), updatedAt: new Date() },
        { name: "Roots Golf", createdAt: new Date(), updatedAt: new Date() },
        { name: "S-YARD", createdAt: new Date(), updatedAt: new Date() },
        { name: "SCRATCH GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "SIK GOLF", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "SOLID CONTACTS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "T.P.MILLS", createdAt: new Date(), updatedAt: new Date() },
        { name: "TOP GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "TOULON DESIGN", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "TRADITIONAL SPORTS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "TRPX", createdAt: new Date(), updatedAt: new Date() },
        { name: "TRU2 GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "Tru-Roll", createdAt: new Date(), updatedAt: new Date() },
        { name: "TxT", createdAt: new Date(), updatedAt: new Date() },
        { name: "US.Athletes", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "VERTICAL GROOVE GOLF",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "WAOWW", createdAt: new Date(), updatedAt: new Date() },
        { name: "YES!GOLF", createdAt: new Date(), updatedAt: new Date() },
        { name: "ZONE", createdAt: new Date(), updatedAt: new Date() },
        { name: "armsgain", createdAt: new Date(), updatedAt: new Date() },
        { name: "golden ratio", createdAt: new Date(), updatedAt: new Date() },
        { name: "grindworks", createdAt: new Date(), updatedAt: new Date() },
        { name: "j BEAM", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "merchants of golf",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "muziik", createdAt: new Date(), updatedAt: new Date() },
        { name: "saqra", createdAt: new Date(), updatedAt: new Date() },
        { name: "アキラ", createdAt: new Date(), updatedAt: new Date() },
        { name: "アクシスワン", createdAt: new Date(), updatedAt: new Date() },
        { name: "アストロ", createdAt: new Date(), updatedAt: new Date() },
        { name: "アダムス", createdAt: new Date(), updatedAt: new Date() },
        { name: "アドバイザー", createdAt: new Date(), updatedAt: new Date() },
        { name: "イオン", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "イーブンゴルフ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "ウィリアムズ", createdAt: new Date(), updatedAt: new Date() },
        { name: "ウィルソン", createdAt: new Date(), updatedAt: new Date() },
        { name: "ウインバード", createdAt: new Date(), updatedAt: new Date() },
        { name: "エポン", createdAt: new Date(), updatedAt: new Date() },
        { name: "オダパター", createdAt: new Date(), updatedAt: new Date() },
        { name: "オデッセイ", createdAt: new Date(), updatedAt: new Date() },
        { name: "オリマー", createdAt: new Date(), updatedAt: new Date() },
        { name: "カタナゴルフ", createdAt: new Date(), updatedAt: new Date() },
        { name: "カムイ", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "カムイワークス",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "キャスコ", createdAt: new Date(), updatedAt: new Date() },
        { name: "キャロウェイ", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "キョウエイゴルフ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "クリーブランド",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "クルーズ", createdAt: new Date(), updatedAt: new Date() },
        { name: "グランプリ", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "グローブライド",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ケビン・バーンズ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "ゲリンライフ", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ゲージデザイン",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "コブラ", createdAt: new Date(), updatedAt: new Date() },
        { name: "コンセプト", createdAt: new Date(), updatedAt: new Date() },
        { name: "ゴリラ", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ゴルフプランナー",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ゴルフプレミアム",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "サソーグラインド",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "シーモア", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ジャスティック",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ジョイメニィー",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ジョージ スピリッツ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "スコッティ・キャメロン",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "スネークアイズ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "スポルディング",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "スリーラック", createdAt: new Date(), updatedAt: new Date() },
        { name: "ゾディア", createdAt: new Date(), updatedAt: new Date() },
        { name: "タイトリスト", createdAt: new Date(), updatedAt: new Date() },
        { name: "ダンロップ", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "チーム ヨシムラ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "ツアーエッジ", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ツアーブラスト",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "ツルヤ", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ティアドロップ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "テーラーメイド",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "ナイキ", createdAt: new Date(), updatedAt: new Date() },
        { name: "ニコテラ", createdAt: new Date(), updatedAt: new Date() },
        { name: "ニッケント", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ネバーコンプロマイズ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "パワービルト", createdAt: new Date(), updatedAt: new Date() },
        { name: "ヒロマツモト", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ピジョンゴルフ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "ピン", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ファウンダース",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "フォーティーン",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "ブリヂストン", createdAt: new Date(), updatedAt: new Date() },
        { name: "プロギア", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ヘクサスジャパン",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "ベンホーガン", createdAt: new Date(), updatedAt: new Date() },
        { name: "ホンマゴルフ", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ボビーグレース",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "マグレガー", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "マジェスティゴルフ（旧マルマン）",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "マスダ", createdAt: new Date(), updatedAt: new Date() },
        { name: "ミウラ", createdAt: new Date(), updatedAt: new Date() },
        { name: "ミステリー", createdAt: new Date(), updatedAt: new Date() },
        { name: "ミズノ", createdAt: new Date(), updatedAt: new Date() },
        { name: "ミライ", createdAt: new Date(), updatedAt: new Date() },
        { name: "ヤマダパター", createdAt: new Date(), updatedAt: new Date() },
        { name: "ヤマハ", createdAt: new Date(), updatedAt: new Date() },
        { name: "ヨネックス", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "リョーマゴルフ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "リンクス", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ロイヤルコレクション",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "ロマロ", createdAt: new Date(), updatedAt: new Date() },
        { name: "ワークス", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "ワークス（ツアーチャンプ）",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "日幸物産", createdAt: new Date(), updatedAt: new Date() },
        { name: "東邦ゴルフ", createdAt: new Date(), updatedAt: new Date() },
        { name: "藤本技工", createdAt: new Date(), updatedAt: new Date() },
        { name: "ＡＳＡＨＩ", createdAt: new Date(), updatedAt: new Date() },
        { name: "ＧＭＡ", createdAt: new Date(), updatedAt: new Date() },
        { name: "ＫＺＧ", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("makers", null, {});
  },
};
