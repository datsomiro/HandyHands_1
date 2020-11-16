const mix = require('laravel-mix');
require('dotenv').config(); 

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    processCssUrls: false
});


if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'source-map'
    })
    .sourceMaps()
}

mix
    // .js('resources/js/app.js', 'public/js')
    .sass('resources/scss/app.scss', 'public/css')
    .react('resources/js/app/index.jsx', 'public/js/app.js')
    .react('resources/js/components/index.jsx', 'public/userposts.js')
    .browserSync({
        host: 'localhost',
        port: 3000,
        proxy: {
            target: process.env.APP_URL
        }
    });

// add versioning (creates mix.manifest.json)
mix.version();