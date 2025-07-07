self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('foreplay-cache').then(cache => {
      return cache.addAll(['index.html', 'manifest.json', 'service-worker.js', 'icon.png', 'img/ciuman.jpg', 'img/pijat.jpg', 'img/bisik.jpg', 'img/tangan.jpg', 'img/bibir.jpg', 'img/tengkuk.jpg', 'img/lengan.jpg', 'img/pipi.jpg', 'img/kaki.jpg', 'img/gelitik.jpg', 'img/fantasi.jpg', 'img/eyecontact.jpg', 'img/telinga.jpg', 'img/peluk.jpg', 'img/tanya.jpg', 'img/paha.jpg', 'img/leher.jpg', 'img/rambut.jpg', 'img/ciumdalam.jpg', 'img/truthdare.jpg', 'img/pelukbelakang.jpg', 'img/tutupmata.jpg', 'img/bisikpujian.jpg', 'img/punggung.jpg', 'img/dada.jpg', 'img/tanya2.jpg', 'img/dagu.jpg', 'img/punggungbawah.jpg', 'img/kuku.jpg', 'img/lutut.jpg', 'img/3cium.jpg', 'img/tangancium.jpg', 'img/gilirannya.jpg', 'img/nakal.jpg', 'img/akuingin.jpg', 'img/goyang.jpg']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});