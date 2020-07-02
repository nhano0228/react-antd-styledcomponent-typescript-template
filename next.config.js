const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withLess = require('@zeit/next-less')
module.exports = withImages(withCSS(withFonts(withLess({
    lessLoaderOptions: {
       javascriptEnabled: true
    }
  }))))