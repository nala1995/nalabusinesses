import { build } from 'esbuild';

build({
    entryPoints: ['./src/index.js' && './src/App.jsx'], /* entry archive */
    outdir: './dist', /* folder where the archives will be packaging */
    bundle: true, /* package the archives */
    minify: true, /* minify the archives */
    format: 'esm', /* format of the archives */
}).catch(() => process.exit(1));

 module.exports = {
    resolve: {
      extensions: ['.js', '.jsx', 'cjs', 'mjs'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      },
    }
};
