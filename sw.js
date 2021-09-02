const stat_cache='app_v1'
const stat_files=['voice_recognition.js','index.html','style.css','privacy.html','terms.html','voice_timer.js','stopwatch.js','ru.png','en.png','signal.wav','favicon.svg','manifest.json','maskable_icon.png','48.png','72.png','96.png','144.png','192.png','512.png']

self.addEventListener('install',ev=>{
	console.log('inst')
    ev.waitUntil(caches.open(stat_cache).then(cache=>cache.addAll(stat_files)))
})

 self.addEventListener('activate',async ev=>{console.log('act')
    const cache_names = await caches.keys()	
	await Promise.all(cache_names.filter(n=>n!==stat_cache).map(n=>caches.delete(n)))	
})

self.addEventListener('fetch',ev=>{ev.respondWith(cachefirst(ev.request))})

async function cachefirst(req){
	const c= await caches.match(req)
	return c ?? await fetch(req)
}
