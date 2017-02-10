
var path = require('path');
var SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
    entry: path.resolve(__dirname, 'entry.js'),
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    plugins: [
        new SpritesmithPlugin({
          src: {
            cwd: path.resolve(__dirname, 'src'),
            glob: '*.png' //图片类型,svg格式不支持
          },
          target: {
            image: path.resolve(__dirname, 'new/sprite.png'),
            css: path.resolve(__dirname, 'new/sprite.css')
          },
          apiOptions: {
            cssImageRef: 'sprite.png' //css中引用图片的路径
          },
          spritesmithOptions: {
            algorithm: 'top-down' //合并方向top-down 或left-right
          }
        })
    ]
};