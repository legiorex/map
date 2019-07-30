const {
    addDecoratorsLegacy,
    addPostcssPlugins,
    override,
    disableEsLint,
} = require("customize-cra");

module.exports = {
    webpack: override(

        addPostcssPlugins([
            require('postcss-preset-env')({
                stage: 0,
            }),
            require('autoprefixer')
        ]),
        addDecoratorsLegacy(),
        disableEsLint()
    ),
};
