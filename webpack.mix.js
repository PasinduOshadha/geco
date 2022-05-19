let mix = require('laravel-mix');


mix.sass('src/scss/app.scss', 'public/dist/css/')
    .js('src/js/app.js', 'public/dist/js/')
    .minify(['public/dist/css/app.css', 'public/dist/js/app.js'])

