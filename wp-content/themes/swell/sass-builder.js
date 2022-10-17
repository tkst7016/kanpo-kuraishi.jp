/* eslint no-console: 0 */
// console.log('start sass-builder.js ...');

const path = require('path');
const fs = require('fs');

// glob
const glob = require('glob');

// node-sass
const sass = require('node-sass');
const nodeSassGlobbing = require('node-sass-globbing');

// postcss
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mqpacker = require('css-mqpacker');

// consoleの色付け
const COLOR = {
	red: '\u001b[31m',
	green: '\u001b[32m',
	reset: '\x1b[0m',
};

// 環境変数・引数
const envTYPE = process.env.TYPE || '';
const arg = process.argv[2] || '';

// 書き出し処理
const writeCSS = (filePath, css) => {
	const dir = path.dirname(filePath);

	// ディレクトリがなければ作成
	if (!fs.existsSync(dir)) {
		console.log('mkdir ' + dir);
		fs.mkdirSync(dir, { recursive: true });
	}

	// css書き出し
	// console.log('Wrote CSS to ' + filePath);
	fs.writeFileSync(filePath, css);
};

function sassRender(srcPath, distPath) {
	return new Promise((resolve) => {
		// // renderSyncだと importer 使えない
		sass.render(
			{
				file: srcPath,
				outputStyle: 'compressed',
				importer: nodeSassGlobbing,
			},
			function (err, sassResult) {
				if (err) {
					console.error(COLOR.red + err);
				} else {
					const css = sassResult.css.toString();

					// postcss実行
					postcss([autoprefixer, mqpacker, cssnano])
						.process(css, { from: undefined })
						.then((postcssResult) => {
							writeCSS(distPath, postcssResult.css);
							// if (postcssResult.map) {fs.writeFile('dest/app.css.map', postcssResult.map.toString(), () => true);}

							// resolve
							resolve(COLOR.green + 'Completed.');
						});
				}
			}
		);
	});
}

(async () => {
	// パス
	let src = 'src/scss';
	let dist = 'build/css';
	let ignore = ['**/_*.scss'];
	let targets = null;

	if ('blocks' === envTYPE) {
		src = 'src/gutenberg/blocks';
		dist = 'build/blocks';
	} else if ('main' === envTYPE) {
		ignore = ['**/_*.scss', '**/modules/**', '**/plugins/**', '**/admin/**'];
	} else if ('print' === arg) {
		targets = [src + '/print.scss'];
	} else if ('' !== arg) {
		src += '/' + arg;
		dist += '/' + arg;
	}

	const files = targets || glob.sync(src + '/**/*.scss', { ignore });
	for (const filePath of files) {
		console.log(COLOR.green + 'Start sassRender: ' + COLOR.reset + filePath);

		const fileName = filePath.replace(src + '/', '');
		const srcPath = path.resolve(__dirname, src, fileName);
		const distPath = path.resolve(__dirname, dist, fileName).replace('.scss', '.css');

		/* eslint no-unused-vars:0 */
		const result = await sassRender(srcPath, distPath);
		// console.log(result);
	}
})();
