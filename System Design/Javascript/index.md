**Apply instant loading with the PRPL pattern**

* Push (or preload) the most important resources.
* Render the initial route as soon as possible.
* Pre-cache remaining assets.
* Lazy load other routes and non-critical assets.

**Reduce JavaScript payloads with code splitting**

Sending large JavaScript payloads impacts the speed of your site significantly. 
Instead of shipping all the JavaScript to your user as soon as the first page of your application is loaded, split your bundle into multiple pieces and only send what's necessary at the very beginning.

**Remove unused code**

**Minify and compress network payloads**


* Minification: process of removing whitespace and any code that is not necessary to create a smaller but perfectly valid code file
* Data compression: 
  Compression is the process of modifying data using a compression algorithm. Gzip is the most widely used compression format for server and client interactions. Brotli is a newer compression algorithm which can provide even better compression results than Gzip.

 
**ES modules**

  Use ES modules When you use ES modules, webpack becomes able to do tree-shaking. Tree-shaking is when a bundler traverses the whole dependency tree, checks what dependencies are used, and removes unused ones. So, if you use the ES module syntax, webpack can eliminate the unused code: --------Tree shaking--------- Tree shaking is a term commonly used in the JavaScript context for dead-code elimination