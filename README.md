# README

This is example how to build custom HTML element with [Preact](https://preactjs.com/).

## Requirements

- [Node JS](https://nodejs.org/en/)

## Development

1. Run `npm install`
2. Run `npm run dev`
3. Open link http://localhost:1234 in your browser
4. Edit files `app.js` or `index.html`

## Build

1. Run `npm run build` to build final files to `dist` directory 
2. For serving dist directory run `npm run serve` and then open link http://localhost:8080 in your browser

## Use custom HTML component in your HTML page

You can use new element anywhere in yout HTML `<x-greeting/>`. Don't forget add 
`dist/app.js` into your HTML page.

Example:

```html
<html>
<head>
    <title>Test Preact HTML custom element</title>
</head>
<body>
  <x-greeting></x-greeting>
  <x-greeting name="John Doe"></x-greeting>
  <x-greeting name="Jana Doe"></x-greeting>
  <x-greeting name="Michael Doe"></x-greeting>
  <script type="module" src="app.js"></script>
</body>
</html>
```
