# My Static Site

このリポジトリは静的なウェブサイトの雛形です。

使い方:

- ローカルで確認する方法（簡単）:
  - Python 3 があれば、プロジェクトルートで次のコマンドを実行してサーバーを起動します。

    ```bash
    python3 -m http.server 8000
    ```

  - または、Node.js があれば `npx http-server` や `npx serve` で起動できます。

- 開発時は VS Code の Live Server 拡張を使うと便利です。

ファイル構成:

- `index.html` - メインページ
- `css/style.css` - スタイル
- `js/main.js` - 簡単なスクリプト
- `images/` - 画像を入れるフォルダ
