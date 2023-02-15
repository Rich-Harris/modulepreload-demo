# modulepreload-demo

If you import a module `a.js` that imports another module `b.js`, `a` can't evaluate until both modules have been fetched (and so on if `b.js` imports `c.js`). Assume it takes 100ms to load one module: the time it takes to start your app is _at minimum_ 100ms multiplied by the height of your dependency graph.

In Chromium, if you know the module graph ahead of time then this problem is solved with `modulepreload`, which allows the modules to be fetched simultaneously (without eagerly evaluating them, which will often cause bugs in real apps.) It is not supported in Safari or Firefox. This demo adds artifical latency to demonstrate the problem — in Chrome the 'loaded' message will appear after 1 second, but in Firefox and Safari it will take 3.
