//Install Service Worker 

self.addEventListener('install', (event) => {
    console.log('Service Worker is installed')
})

const staticAssets = ['/index.html', '/app.js', '/style.css', '/fallback.html']
const staticCache = ""
const DynamicCache = ""
const dynamicCacheName = ""

// Install Service Worker 2

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.open('staticCaches').then(function (cache) {
            return cache.addAll
                (staticAssets)
        })
    )
})

// Fetch event
self.addEventListener('fetch', (event) => {
    
    // Kontroller svar på request
    event.respondWith(
        // Undersøger efter om fil match i cache
        caches.match(event.request).then((cachesRes => {
            // Returner match fra cache  - ellers hentes fil på serveren
            return cachesRes || fetch(event.request).then(fetchRes => {
                // Tilføjer nye sider til cachen
                return caches.open(DynamicCache).then(cache => {
                    // Anvender put til at tilføje nye sider til chache
                    // Bemærk metoden clone
                    cache.put(event.request.url, fetchRes.clone())
                    // Returner fetch request
                    return fetchRes;
                })
            })
        }).catch(() => {
            // Hvis der kommer fejl vise fallback siden
            if(event.request.url.indexOf('.html') > -1) {
                return caches.match('/fallback.html')
            }
        })
    )
)
})

// Funktion til styring af antal filer i en given cache
const limitCacheSize = (cacheName, numberOfAllowedFiles) => {
    // Åbn den bestemt cache
    caches.open(cacheName).then(cache => {
        //Henter array af cache keys
        cache.key().then(keys => {
            // Hvis antal af filer overstiger det tilladte antal 
            if (keys.length > numberOfAllowedFiles) {
            // Slet første index (ældste fil) og kør funkionen igen indtil antal filer er opnået
            cache.delete(keys[0]).then(limitCacheSize(cacheName, numberOfAllowedFiles))
        }
    })
})


// Kalder limit cache funktionen
limitCacheSize(dynamicCacheName, 20)
    


