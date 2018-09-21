const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images')

if (typeof require !== 'undefined') {
    require.extensions['.less'] = (file) => {}
}

module.exports = withOptimizedImages(withCSS(withSass(withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    cssModules: true
}),{
    cssModules: true
})))
