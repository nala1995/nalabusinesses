import { build } from 'esbuild';

build({
    entryPoints: ['./src/index.js' && './src/App.jsx'], 
    outdir: './dist', 
    bundle: true, 
    minify: true, 
    format: 'esm', 
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
