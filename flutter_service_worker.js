'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1b081f2ef52d161650e1f38d241f96f2",
"index.html": "6d20c8dfd4ec20f7fba78e86d0dc618c",
"/": "6d20c8dfd4ec20f7fba78e86d0dc618c",
"main.dart.js": "8681f84b17a48d24dbaf5a73a5331635",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "c4115b57970d597e6ae81e18e63f1547",
"icons/Icon-192.png": "8eaece70e8eb7cc90d33da06965f5604",
"icons/Icon-maskable-192.png": "37528618a7be859a968d35191c4733ee",
"icons/Icon-maskable-512.png": "0b8a67efd496fcee661537ae32637d43",
"icons/Icon-512.png": "99f446d626cf7c2d4240724f204957cc",
"manifest.json": "1ba51aadfd36f30af433a91d79eccdb4",
".git/config": "ccd75492f0300977a97a940013b9204d",
".git/objects/6a/e5b00f6ffc37e16da32d3dfccd2d79e7af6a52": "dacfb4f898da3ad0befed5ddf8bbf192",
".git/objects/d7/cf7bcf727160342d7ac84cae20f9cad5640f2a": "929a4d5dd8dcb7d067fb8c17005ebea8",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/bc/8a345030ce8649db75a45f11597de9e1639b3a": "d3b67469d59c7c957c15cb1be0ce4b31",
".git/objects/bc/61eb5874d4b34d379d4c21d3008e8c39c7699a": "58fedce5e17b7a206b827619cb351492",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c6/a610fdfe570d16a3ecfe6763d5448ce43bd150": "1db2a7cfa90d61c7c656acb0b737d35a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/86/ca33337a71bae45087ba727f19241d3e82e32d": "b49f2ed1a7e331ee5a141d377c4e82f7",
".git/objects/00/712f0d69aae32b6147fb8acab9e834d4755013": "bc67d37227a0e3654c94948286a0334b",
".git/objects/5c/e5097f85b52f1ec3705ab2f4036728d907de78": "2f5ba5a87eec4875a81dd5e87f624e50",
".git/objects/5c/111bf1f727c7b42cebd360a8bbe1dc731a49b8": "f519069ce44ddda97603f0bf959dfa68",
".git/objects/65/a0e23497fe0c792406073c66bf3afbd3225564": "ff6330a22500010ef7f9771c22fd011d",
".git/objects/62/d4bc98ac35e93579a97b852c145feaff03ff0b": "9c974fd531ef02fc0e8fca9128666831",
".git/objects/3a/ad64da3afca337dff65a248e9d04f515264de9": "d09f678b57b72dd532f5e19e7aa5c8a4",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/08/eae9e329b34e2e062ca6543d5ecb3c0f3cde20": "086d102e4c10f6c969988e9998ad1de2",
".git/objects/99/354a8553199bc8e3bd9ac56218598ca679919d": "30965da5bdfd97f49871501cd5879ad5",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d5/294d8cf131bad402ac3430fd66c6529b3b5b95": "9135d3f5dd79dd09a39eee5690136d26",
".git/objects/a8/3af8aa85da0100048f61c8b0be256217f4d182": "001921a788f2425fedac50e4c6e90496",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/a825b9d83c68b10e3721cbedb44aaf9e986bd6": "8906718b2bb30d07eb1ed7238c16542a",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/3d2a119b5357c3bfd33319ee840ac444fbd467": "256b3801e919b4153883bea75a0f10b0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4a/91983628dc5b2f07843c48a61c83b68b90eadc": "2a02e3e34027f01277f7e3ea2b875e5a",
".git/objects/1c/27b1bf40af6bf0c259324f15a3c727ae893434": "9410130b1c638d82aab0bfb881ebbff9",
".git/objects/49/548661b7e6251b627fa9632a6466dd8004a906": "0cc92a5f58ae16c09c62aad269c77565",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f0bb52f34db3fbd2692be5b4779567be",
".git/logs/refs/heads/main": "f0bb52f34db3fbd2692be5b4779567be",
".git/logs/refs/remotes/origin/main": "e23a426504bc0e84926f44f7ce513bde",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "321b7fe81f1caa5624d800412aa033c9",
".git/refs/remotes/origin/main": "321b7fe81f1caa5624d800412aa033c9",
".git/index": "fb9dc8a5835dcdcb7a88674b0ec09455",
".git/COMMIT_EDITMSG": "91869fdedcb29dccb269bdfff5096dc2",
"assets/AssetManifest.json": "6bc76683320e75c457b43fa48378b02e",
"assets/NOTICES": "2365d748c684964937d566448f20b68b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "fefec707379a130aed96be9210ca7741",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/cookies.png": "7ccd2e4e96cbca93c2a65330be919e39",
"assets/assets/logo.png": "7ed5250da51f26e3463da5a759d13bd7",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
