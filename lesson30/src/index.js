    'use strict';

    import countTimer from './modules/countTimer';
    import toggleMenu from './modules/toggleMenu';
    import togglePopUp from './modules/togglePopUp';
    import tabs from './modules/tabs';
    import slider from './modules/slider';
    import calc from './modules/calc';
    import sendForm from './modules/sendForm';

    //timer
    countTimer('22 november 2020 02:26:00'); 
    //menu
    toggleMenu();
    //popup
    togglePopUp(); 
    //tabs
    tabs();
    //sldier
    slider();
    // calculator
    calc(100);
    //send-ajax-form
    sendForm();


    //"start": "webpack serve --open chrome",
    /*{
  "name": "glo3d",
  "version": "1.0.0",
  "scripts": {
    "watch": "webpack --watch",
    "start": "webpack serve --open chrome",
    "build": "webpack --mode=production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.12.3",
    "@babel/preset-env": "^7.12.1",
    "babel-loader": "^8.2.1",
    "path": "^0.12.7",
    "webpack": "^5.6.0",
    "webpack-cli": "^4.2.0",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {},
  "description": ""
}
*/

/*config
const path = require('path'); 

module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist'
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
          {
            test: /.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }

}*/