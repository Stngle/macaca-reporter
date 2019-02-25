/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7b98d59da365bb7eaec7dbae40b5ba65"
  },
  {
    "url": "assets/css/0.styles.80c35da1.css",
    "revision": "a451e57ab10a2048fbcf8433ec2f7b95"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7a841a92.js",
    "revision": "0411db0f64e1bab445b3373f13de7e2d"
  },
  {
    "url": "assets/js/11.fe9b36f5.js",
    "revision": "d677484e8534598fdeffaa8d505fb922"
  },
  {
    "url": "assets/js/12.0072155e.js",
    "revision": "c19f0d2681cbd1d3a0d6e2644d928cd7"
  },
  {
    "url": "assets/js/13.297ab572.js",
    "revision": "26cc9a29031bd867d5915a00569a5468"
  },
  {
    "url": "assets/js/14.90b4746b.js",
    "revision": "e21472aa19338246f82643ef58969f79"
  },
  {
    "url": "assets/js/15.7697a506.js",
    "revision": "a8ebc485293b60c161d9cca2a12d891e"
  },
  {
    "url": "assets/js/2.9adb3ff4.js",
    "revision": "f51bbd2a06c587f57039419f198987b6"
  },
  {
    "url": "assets/js/3.0c334393.js",
    "revision": "fdd479622f8b6f2b1f82625742522fc7"
  },
  {
    "url": "assets/js/4.07a7d0bb.js",
    "revision": "49ec67b45c3793afb431cc8ced2f178f"
  },
  {
    "url": "assets/js/5.bc1e8ee5.js",
    "revision": "4a3a6a10e60196898ed2706b47e39a64"
  },
  {
    "url": "assets/js/6.e201f76f.js",
    "revision": "099ee3d0dabb89a23f08447eae78f4da"
  },
  {
    "url": "assets/js/7.817ebba1.js",
    "revision": "e525b7e3df0be10d49f53dfea06e6ba6"
  },
  {
    "url": "assets/js/8.e44815ea.js",
    "revision": "7c2ee62aa67847ad171d1ff0a503eb00"
  },
  {
    "url": "assets/js/9.8b4a96fb.js",
    "revision": "88830264b9881da68ec7ee5673a0627a"
  },
  {
    "url": "assets/js/app.d46ab29e.js",
    "revision": "7c4a9fc43bbddee82345c87d421c3a3a"
  },
  {
    "url": "guide/index.html",
    "revision": "1133f006f18ae63266d95c30c0aea29f"
  },
  {
    "url": "guide/install.html",
    "revision": "3633e54c8a07c8fcde53d6bba4776b5c"
  },
  {
    "url": "guide/integration.html",
    "revision": "2e28dfed686ff0a04e24109dea42c662"
  },
  {
    "url": "guide/presentations.html",
    "revision": "4c0f37616c94a8677107f9e629af0463"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "a268ad0f35fe8abd0a35059259c97b34"
  },
  {
    "url": "index.html",
    "revision": "623b86b225a8dad257074926b58cf053"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a8e6e8555c8e206a3dd2ea2c97cc8a0e"
  },
  {
    "url": "zh/guide/install.html",
    "revision": "06b99dbffff04ddfbfa2762d5adbbbc1"
  },
  {
    "url": "zh/guide/integration.html",
    "revision": "0d2465657a49c6efbba912b1c5be6666"
  },
  {
    "url": "zh/guide/presentations.html",
    "revision": "8a2c09d8c233bdd7eb7987c92a633679"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "8d397a813d3b85a39cfbfb56a70c007f"
  },
  {
    "url": "zh/index.html",
    "revision": "ab972f54a8311d08c0f512812f377e18"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
