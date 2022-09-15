Docker環境テンプレート：HTML+Javascript
====================

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [環境](#環境)
- [フォルダ構成](#フォルダ構成)
- [使い方](#使い方)

<!-- /code_chunk_output -->

## 環境

| container | バージョン |  ポート  |
| --------- | ---------- | -------- |
| nginx     | latest     | 80 -> 80 |
| node      | slim       | なし     |

## フォルダ構成

```
+ .docker/              ・・・docker関連ファイル格納ディレクトリ
|   + nginx/            ・・・nginx設定
|
+ app/
|   + public/           ・・・Web公開ディレクトリ(ドキュメントルート)
|   + src/              ・・・プログラム格納ディレクトリ
|   + node_modules/     ・・・node module格納ディレクトリ(.gitignoreにてgit管理除外)
|
- docker-compose.yml
- README.md
```

webpackなどを使わない場合、`app/public/`にHTML, CSS, Javascriptを作成してください。
webpackなどを使う場合、`app/src/`にリソースを作成し`app/public/`にバンドル出力するようにしてください。


## 使い方

リポジトリをクローン後, 以下のコマンドを実行してdockerコンテナを起動してください。

```bash
# docker-compose.ymlファイルと同一フォルダ階層で実行
# コンテナが起動する
docker-compose up -d
```

* コンテナの中で作業する(node)

```bash
# docker-compose.ymlファイルと同一フォルダ階層で実行
# dockerコンテナが起動している状態で実行
docker-compose exec node bash

# コンテナ内でcomposerやlinuxコマンドが実行できる
ls
node -v

# コンテナから抜ける
exit
```

* コンテナの停止方法

```bash
# docker-compose.ymlファイルと同一フォルダ階層で実行
docker-compose down
```
