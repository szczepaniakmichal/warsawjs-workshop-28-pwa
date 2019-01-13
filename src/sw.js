const cache_name = 'pwa-1.0.0';

self.addEventListener('install', (evt) => {
evt.waitUntil(starfCashing)
});

async function starfCashing(){
    try{
        const cache = await cashes.open('pwa');
        self.skipWaiting();
        await cache.add('/*');
        
    } catch(err){
        console.log(err);
    }
}

self.addEventListener(active, (evt){
evt.waitUntil(startActivating){
    try{
        const keys = await caches.keys();
        keys
        .filter(key !== 'pwa')
        .map(key => cashes.delete(key));
        return await Promise.all(delete); 

    } catch (err){
        console.log(err);
    }

}
})

self.addEventListener('fetch', (evt) => {
    console.log('[sw]', evt.request);
    evt.respondWith
})
