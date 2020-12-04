# Liquid Loader

Webpack loader to process [Liquid](http://github.com/shopify/liquid) using [liquidjs](https://liquidjs.com/index.html).

## Install

```
npm install --save-dev liquidjs-loader
```

## Usage

```js
// webpack.config.js 
module.exports = {
    ...
    module: {
        rules: [{
          test: /\.liquid$/i,
          use: [
            'html-loader',
            {
              loader: 'liquidjs-loader',
              options: {
                  //All liquidjs options are valid here
                data: {
                  // your data goes here
                }
              }
            }
          ]
        }]
    }
};
```



## Examples

**webpack.config.js**
```js 
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.liquid$/i,
        use: [
          'html-loader',
          {
            loader: 'liquidjs-loader',
            options: {
              extname: '.liquid',
              data: {
                name: 'Test'
              }
            }
          }
        ]
      }
    ],
  }
};
```

**src/index.liquid**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack testing</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"></head>
  <body>
  <h2>{{name | capitalize}}</h2>
  </body>
</html>
```

## Dependencies
- https://github.com/webpack-contrib/html-loader
- https://github.com/harttle/liquidjs

## License

liquidjs-loader is released under the [MIT license](http://www.opensource.org/licenses/MIT).