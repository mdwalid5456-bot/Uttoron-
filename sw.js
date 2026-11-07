const V='u1';
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(['./','index.html','manifest.json','icon.svg']))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||!e.request.url.startsWith(self.location.origin))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
