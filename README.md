# Nextjs content type bug

```sh
git clone git@github.com:SimonSiefke/nextjs-content-type-bug.git &&
cd nextjs-content-type-bug &&
npm ci &&
npm run build &&
node proxy.js
```

Go to http://localhost:4321 and navigate between the urls. Notice that the urls `b?_rsc=41sah` return `text/html` instead of `text/x-component` and no error message is displayed.
