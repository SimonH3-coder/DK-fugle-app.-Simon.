//Install Service Worker 

self.addEventListener('install', (event) => {
    console.log('Service Worker is installed')
})

// Install Service Worker 2

self.addEventListener('activate', (event) => {
    console.log('Service Worker has been activated');
})

// Fetch event
self.addEventListener('fetch', (event) => {
    console.log('Fetch event', event);

})
    
    
