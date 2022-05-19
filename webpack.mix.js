let mix = require('laravel-mix');

mix.setPublicPath('public/dist/')
    .setResourceRoot('/public/dist')
    .sass('src/scss/app.scss', 'css/')
    .js('src/js/app.js', 'js/')
    .copyDirectory('src/img', 'public/img')


