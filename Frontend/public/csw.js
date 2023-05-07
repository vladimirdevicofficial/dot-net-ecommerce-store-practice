// Register the service worker
self.addEventListener('install', function(event) {
	// Wait until the cache is open and add all the files to the cache
	event.waitUntil(
		caches.open('my-cache-name').then(function(cache) {
			return cache.addAll([
				'/icons', // Add the index HTML to the cache
				'/robots.txt', // Add the main JS file
			]);
		})
	);
});

// The activate event is used to delete any old caches that may exist.
self.addEventListener('activate', function(event) {
	// Wait until all the caches are found and delete any caches that are not named 'my-cache-name'
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if(cacheName !== 'my-cache-name') {
						return caches.delete(cacheName); // Delete any old caches
					}
				})
			);
		})
	);
});

// The fetch event is used to intercept requests from the browser and serve them from the cache if the requested resource is available.
self.addEventListener('fetch', function(event) {
	// Check if the requested resource is in the cache
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) {
				return response; // Return the resource from the cache
			}
			return fetch(event.request); // Fetch the resource from the server
		})
	);
});

// Listen for the sync event
self.addEventListener('sync', function(event) {
	// Check if the event tag matches the background sync tag
	if(event.tag === 'background-sync') {
		// Perform background sync operations here
	}
});
