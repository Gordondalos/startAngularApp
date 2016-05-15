# Strict-reset.css

*Strict-reset.css* chooses a traditional *reset* approach over a lately popularized *normalize* approach. Created for these who want to have a maximum control over styling elements from scratch - hence no paddings and margins, every element with transparent backgrounds, the same font and text properties, UI elements with initial `display: block` and `width: 100%` etc. Leverages global `box-sizing: border-box`.

Use [Autoprefixer](https://github.com/postcss/autoprefixer) to add prefixes to such properties as `box-sizing` or `::placeholder`.

## Install

### Bower

- Terminal: `bower install strict-reset.css`
- SCSS: `@import 'path/to/bower_components/strict-reset/strict-reset';`

### Vanilla Sass

- Copy `_strict-reset.scss` into your project
- SCSS: `@import 'path/to/strict-reset';`

## License

Strict-reset.css is released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.