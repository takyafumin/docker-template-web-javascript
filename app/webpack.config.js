const path = require('path');

module.exports = {
    // モードの設定
    mode: 'development',

    // エントリーポイントの設定(作業ディレクトリからの相対パス)
    entry: path.join(__dirname, 'src', 'index.js'),

    // ファイルの出力設定
    output: {
        // 出力するファイル名
        filename: "main.js",

        //  出力先のパス
        path: path.join(__dirname, 'public/dist')
    }
};