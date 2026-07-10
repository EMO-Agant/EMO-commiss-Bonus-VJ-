self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {}); // ບໍ່ cache ຫຍັງ — ພຽງແຕ່ໃຫ້ browser ຮັບຮູ້ວ່າມີ Service Worker
