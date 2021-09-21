**Http Caching**

Browser request -> Browser Cache (if fullfilled retuned as ) -> Server

HTTP requests that the browser makes are first routed to the browser cache to check whether there is a valid cached response that can be used to fulfill the request.
If there's a match, the response is read from the cache, which eliminates both the network latency and the data costs that the transfer incurs.

1. Cache-Control. how long, the browser should cache the individual response.
2. Etag : When the browser finds an expired cached response , small token check with server same token if matches then no server call
3. Last-Modified. same purpose as ETag Uses a time-based strategy to determine if a resource has changed.

**Caching of versioned Urls**
 (such /script-v1.js", "/styles-v1.css" and "/cats-v1.jpg"1)

One can add Cache-Control: max-age=31536000

The file are cached with versione attached to them, so in future if file content got changes, then versione got also changes, and browser download the new file.

**Server revalidation for unversioned URLs** (such html)

once we add Cache-Control

no-cache. This instructs the browser that it must revalidate with the server every time before using a cached version of the URL.

Browser cache first check with server with E-tag, if it matches then file file is served from browser cache else new file is loaded from server.

no-store. This instructs the browser and other intermediate caches (like CDNs) to never store any version of the file.


**Cache API**

The Cache API is a system for storing and retrieving network requests and their corresponding responses. 

These might be regular requests and responses created in the course of running your application, or they could be created solely for the purpose of storing data for later use.

The Cache API was created to enable service workers to cache network requests so that they can provide fast responses, regardless of network speed or availablity. However, the API can also be used as a general storage mechanism.

Include paginating data fetches from the database



**Workbox**

Workbox is a high-level service worker toolkit built on top of the Service Worker and Cache Storage APIs. It provides a production-ready set of libraries for adding offline support to web apps. The toolkit is structured into two collections: tools that help manage code that runs inside of your service worker, and tools that integrate with your build process.




At a high-level, a browser follows the caching order below when it requests a resource:

Service worker cache: The service worker checks if the resource is in its cache and decides whether to return the resource itself based on its programmed caching strategies. Note that this does not happen automatically. You need to create a fetch event handler in your service worker and intercept network requests so that the requests are served from the service worker's cache rather than the network.

HTTP cache (also known as the browser cache): If the resource is found in the HTTP Cache and has not yet expired, the browser automatically uses the resource from the HTTP cache.

Server-side: If nothing is found in the service worker cache or the HTTP cache, the browser goes to the network to request the resource. If the resource isn't cached in a CDN, the request must go all the way back to the origin server.