const path = require('path');
const {
  addDecoratorsLegacy,
  addPostcssPlugins,
  override,
  disableEsLint,
  fixBabelImports,
  addWebpackAlias,
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
    ),
    addWebpackAlias({
      ['Instruments']: path.resolve(__dirname, 'src/instruments'),
      ['Pages']:       path.resolve(__dirname, 'src/pages'),
      ['Bus']:         path.resolve(__dirname, 'src/bus'),
      ['Components']:  path.resolve(__dirname, 'src/components'),
    })
  ),
};
