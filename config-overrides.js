const {
  addDecoratorsLegacy,
  addPostcssPlugins,
  override,
  disableEsLint,
  fixBabelImports,
} = require('customize-cra');

module.exports = {
  webpack: override(
    addPostcssPlugins([
      require('postcss-preset-env')({
        stage: 0,
      }),
      require('autoprefixer')
    ]),
    addDecoratorsLegacy(),
    disableEsLint(),
    fixBabelImports('import', {
      libraryName:      'antd',
      libraryDirectory: 'lib',
      'style':          true,
    },
    {
      libraryName: 'antd-mobile',
    }
    )
  ),
};
