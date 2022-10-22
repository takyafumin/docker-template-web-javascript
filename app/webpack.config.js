const path = require("path");

module.exports = {
	// モードの設定
	mode: "development",

	// watchオプション
	watchOptions: {
		ignored: /node_modules/,
		aggregateTimeout: 200,
		poll: 500,
	},

	// エントリーポイントの設定(作業ディレクトリからの相対パス)
	entry: {
		main: path.join(__dirname, "src", "index.js"),
		sub: path.join(__dirname, "src", "sub.js"),
	},

	// ファイルの出力設定
	output: {
		//  出力先のパス
		path: path.join(__dirname, "public/dist"),

		// 出力するファイル名
		filename: "[name].js",
	},
};
