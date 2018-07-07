const path = require('path')
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader'
            },
            {
              loader: 'vue-markdown-loader/lib/markdown-compiler',
              options: {
                raw: true
              }
            }
          ]
        },
        // {
          // test: /\.js$/,
          // loader: 'babel-loader',
          // include: [resolve('src'), resolve('test'), resolve('node_modules/vue-awesome')]
        // }
      ]
    },
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/index/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // output filename is inferred to be `subpage.html`.
    handle: 'src/handle/main.js'
  }
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
