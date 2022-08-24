- Prefer vector formats: vector images are resolution and scale independent, which makes them a perfect fit for the multi-device and high-resolution world.
- Minify and compress SVG assets: XML markup produced by most drawing applications often contains unnecessary metadata which can be removed; Ensure that your servers are configured to apply GZIP compression for SVG assets.

- Prefer WebP over older raster formats: WebP images will usually be far smaller than older images.

- Pick best raster image format: determine your functional requirements and select the one that suits each particular asset.

- Experiment with optimal quality settings for raster formats: don't be afraid to dial down the "quality" settings, the results are often very good and byte savings are significant.

- Remove unnecessary image metadata: many raster images contain unnecessary metadata about the asset: geo information, camera information, and so on. Use appropriate tools to strip this data.

- Serve scaled images: resize images and ensure that the "display" size is as close as possible to the "natural" size of the image. Pay close attention to large images in particular, as they account for largest overhead when resized!

- Automate, automate, automate: invest into automated tools and infrastructure that will ensure that all of your image assets are always optimized.

- Replace animated GIFs with video for faster page loads

- Serve responsive images: Serving desktop-sized images to mobile devices can use 2–4x more data than needed. Instead of a "one-size-fits-all" approach to images, serve different image sizes to different devices large.jpg.
  '<img src="flower-large.jpg" srcset="flower-small.jpg 480w, flower-large.jpg 1080w" sizes="50vw">'

- Image content delivery networks (CDNs) are excellent at optimizing images.
  - 40–80% savings in image file size than build script
  - an image URL indicates not only which image to load, but also parameters like size, format, and quality.
  - Example, the image CDN might serve JPEG XR to an Edge browser, WebP to a Chrome browser, and JPEG to a very old browser.
- Lazy-loading images and video reduces initial page load time, initial page weight, and system resource usage, all of which have positive impacts on performance
  <img src="image.png" loading="lazy" alt="…" width="200" height="200">
