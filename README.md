## golfersfarm

---

ゴルファーのプロフィール登録ツールです。  
このアプリはゴルファーの名刺として使えます。  
レスポンシブル対応なので、スマホ画面でも問題ありません。  
現在、production 版として、本アプリの next.js 化を行っています。  
2020 年内にリリース予定です。

<img width="1433" alt="スクリーンショット 2020-12-03 16 46 28" src="https://user-images.githubusercontent.com/50585862/100980654-eba1b580-3588-11eb-956e-f387b9ff458b.png">

## アプリの概要

- 名称： golfersfarm
- site: https://golfersfarm.netlify.app/
- 経緯: typescript にてアプリケーションを開発した実績を作る。フロントエンドとバックエンドが分離したモダンな開発を体験する。
- 設計:
  - フロント側：redux にて状態を管理。バックエンドとの通信には、redux-saga,axios を使用。
  - バックエンド側: express にて API を作成。jwt を活用し、secure な開発を心がけた。
  - 全体: docker-compose を使用し、client,server,db コンテナを稼働させ開発を行った。

## 使用した技術

フロントエンド

- react
- react-router
- connected-react-router
- react-modal
- react-toastify
- redux,react-redux
- redux-saga
- axios
- formik
- yup
- typescript
- eslint+prettier
- styled-components
- netlify
- ansible

バックエンド

- express
- bcrypt
- passport
- passport-jwt
- passport-local
- sequelize
- multer
- sharp
- mysql2
- typescript
- heroku
- ansible

## 設計

- 全体構成  
  ![image](https://user-images.githubusercontent.com/50585862/101005400-2f55e880-35a4-11eb-88e5-0bc9b158e29d.png)
- 認証  
  ![image](https://user-images.githubusercontent.com/50585862/101005647-41378b80-35a4-11eb-845b-3ecc1bf57f43.png)  
  jwtToken にて認証。ブラウザの localStorage にて Token を管理。

  1.  クライアントのログインページにて、サーバー側にログインリクエスト。
  2.  リクエストが、認証されれば、server から jwtToken が送られる。
  3.  送られてきた jwtToken をブラウザの localStorage に保存。
  4.  以降、API リクエストごとに認証。
  5.  リダイレクトした場合、localStorage に jwtToken があれば、自動的にログインされる。

- フロントエンド(ページ構成)  
  /  
  => トップページ  
  <img width="1433" alt="スクリーンショット 2020-12-03 16 46 28" src="https://user-images.githubusercontent.com/50585862/100980654-eba1b580-3588-11eb-956e-f387b9ff458b.png">
  /users  
  => ユーザー一覧ページ
  <img width="1429" alt="スクリーンショット 2020-12-03 16 50 17" src="https://user-images.githubusercontent.com/50585862/100980871-42a78a80-3589-11eb-96c2-72d53a10f9db.png">
  /users/:id  
   => ユーザー詳細ページ
  <img width="1427" alt="スクリーンショット 2020-12-03 16 50 33" src="https://user-images.githubusercontent.com/50585862/100980883-476c3e80-3589-11eb-8d91-5c89a134fda9.png">
  <img width="1413" alt="スクリーンショット 2020-12-03 16 50 41" src="https://user-images.githubusercontent.com/50585862/100980899-4fc47980-3589-11eb-9a45-82c5d495dab4.png">
  /users/:id/edit  
  => ユーザー編集ページ
  <img width="1420" alt="スクリーンショット 2020-12-03 16 54 06" src="https://user-images.githubusercontent.com/50585862/100980921-594de180-3589-11eb-9459-34f364cc07b8.png">
  /auth/login  
   => ユーザーログインページ  
  /auth/signup  
   => ユーザーログインページ  
  /auth/logout  
   => ユーザーログアウトページ  
  /privacy  
   => 個人情報の取り扱い  
  /tos  
   => 利用規約  
  /about  
  => アプリについての説明  
  /contact  
   => メールでの問合せフォーム

- バックエンド(エンドポイント)
  ![image](https://user-images.githubusercontent.com/50585862/101005689-44cb1280-35a4-11eb-9d7d-305d2e68c381.png)  
   以下、全てのエンドポイントです。  
   get: /users  
   =>ユーザー一覧取得。  
  patch: /users/:id/edit  
   =>ユーザーデータ更新  
   post,get: /auth/login  
   =>ユーザーログイン  
  post: /auth/signup  
   =>ユーザー新規作成  
  get,patch: /users/:id/ball  
   =>ユーザー使用ボールの取得、更新。  
   get: /users/:id/clubs  
   =>ユーザー使用クラブの取得。  
   post: /users/:id/clubs/replace  
  =>ユーザー使用クラブの作成、更新、削除  
   get: /users/:id/videos  
   =>ユーザー youtube 動画の URL 取得。  
  post: /users/:id/videos/replace  
   =>ユーザー youtube 動画の URL の作成、更新、削除。  
   get: /users/:id/results  
   =>ユーザー競技結果の取得。  
  post: /users/:id/results/replace  
  =>ユーザー競技結果の作成、更新、削除。  
  get: /makers  
   =>メーカー一覧取得。  
  get: /shafts  
   =>ゴルフクラブのシャフト一覧取得。  
  get: /types  
  =>ゴルフクラブの番手一覧取得。  
  post: /contact  
  =>問合せ内容をメールで送信。
