const stat_cache='app_v1',stat_files=['voice_recognition.js','voice_recognition.html','style.css','privacy.html','terms.html','voice_timer.js','stopwatch.js','ru.png','en.png','signal.wav','favicon.svg','manifest.json','maskable_icon.png']

self.addEventListener('install',ev=>{
	console.log('inst')
   // ev.waitUntil(caches.open(stat_cache).then(cache=>cache.addAll(stat_files)))
})

 self.addEventListener('activate',async ev=>{console.log('act')
    //const cache_names = await caches.keys()	
	//await Promise.all(cache_names.filter(n=>n!==stat_cache).map(n=>caches.delete(n)))	
})

//self.addEventListener('fetch',ev=>{ev.respondWith(cachefirst(ev.request))})

async function cachefirst(req){
	const c= await caches.match(req)
	return c ?? await fetch(req)
}
