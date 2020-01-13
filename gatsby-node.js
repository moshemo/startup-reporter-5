const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // BASE
        SRC: path.resolve(__dirname, 'src'),
        Static: path.resolve(__dirname, 'static'),

        // SRC
        Firebase: path.resolve(__dirname, 'src/firebase'),
        Pages: path.resolve(__dirname, 'src/pages'),

        // ASSETS
        Images: path.resolve(__dirname, 'src/assets/img'),

        // UI
        Components: path.resolve(__dirname, 'src/ui/components'),
        Defaults: path.resolve(__dirname, 'src/ui/defaults'),
        Elements: path.resolve(__dirname, 'src/ui/elements'),
        Layouts: path.resolve(__dirname, 'src/ui/layouts'),
        Modules: path.resolve(__dirname, 'src/ui/modules'),
        Vars: path.resolve(__dirname, 'src/ui/theme/variables'),
        Theme: path.resolve(__dirname, 'src/ui/theme'),
      },
    },
  })
}
