const path = require('path')

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-import',
    options: {
      libraryName: 'antd',
      style: true,
    },
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // BASE
        SRC: path.resolve(__dirname, 'src'),
        Static: path.resolve(__dirname, 'static'),

        // SRC
        Data: path.resolve(__dirname, 'src/data'),
        Firebase: path.resolve(__dirname, 'src/firebase'),
        Forms: path.resolve(__dirname, 'src/forms'),
        Layouts: path.resolve(__dirname, 'src/layouts'),
        Pages: path.resolve(__dirname, 'src/pages'),
        UI: path.resolve(__dirname, 'src/ui'),

        // ASSETS
        Images: path.resolve(__dirname, 'src/assets/img'),

        // UI
        Shared: path.resolve(__dirname, 'src/ui/shared'),
        Helpers: path.resolve(__dirname, 'src/ui/shared/helpers'),
        Themes: path.resolve(__dirname, 'src/ui/themes'),
      },
    },
  })
}
