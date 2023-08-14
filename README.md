# Nextjs error handling bug

## Output

```
next build

- info Creating an optimized production build
- info Compiled successfully
- info Linting and checking validity of types
- info Collecting page data
[    ] - info Generating static pages (0/4)TypeError: someVariable.doesNotExist is not a function
    at SomeComponent (/home/simon/.cache/repos/nextjs-error-bug/.next/server/app/page.js:336:18)
    at S (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:6058:13)
    at eb (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:6173:21)
    at Object.toJSON (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:5977:20)
    at stringify (<anonymous>)
    at pb (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:6384:9)
    at mb (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:6283:29)
    at Timeout._onTimeout (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:6108:16)
    at listOnTimeout (node:internal/timers:573:17)
    at process.processTimers (node:internal/timers:514:7)

Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
TypeError: someVariable.doesNotExist is not a function
    at SomeComponent (/home/simon/.cache/repos/nextjs-error-bug/.next/server/app/page.js:336:18)
    at S (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:6058:13)
    at eb (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:6173:21)
    at Object.toJSON (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:5977:20)
    at stringify (<anonymous>)
    at pb (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:6384:9)
    at mb (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:6283:29)
    at Timeout._onTimeout (/home/simon/.cache/repos/nextjs-error-bug/.next/server/chunks/523.js:6108:16)
    at listOnTimeout (node:internal/timers:573:17)
    at process.processTimers (node:internal/timers:514:7)
- info Generating static pages (4/4)

> Export encountered errors on following paths:
        /page: /
```
