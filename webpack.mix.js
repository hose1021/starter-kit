const mix = require('laravel-mix');

mix
    .js('resources/js/index.js', 'public/js')
    .postCss("resources/sass/tailwind.css", "public/css", [
        require('postcss-import'),
        require("tailwindcss"),
        require('autoprefixer'),
    ])
    .browserSync({
        server: './public/',
        files: ['./**/*.html'],
    });  

  
mix.disableNotifications();

if (mix.inProduction()) {
    mix.version();
}