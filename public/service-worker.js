// self.addEventListener('fetch', (event) => {
//   const url = new URL(event.request.url);
//   // console.log({ url, eventurl: event.request.url })
//   const domain_name_1 = "i.ibb.co"
//   // console.log(url.pathname.startsWith('/CwMXtFm'))

//   if (url.hostname === domain_name_1 && url.pathname.startsWith('/CwMXtFm')) {
//     // const newUrl = url.href.replace(domain_name_1, domain_name_2);
//     const new_url = "https://i.ibb.co/fNQ1CX1/android-chrome-384x384.png"
//     // console.log("passed 1")
//     // url.href = new_url
//     // event.respondWith(fetch(new_url));
//     event.request.url = new_url
//     event.respondWith((async () => {
//       const response = await fetch(event.request)
//       const response1 = await fetch(url)
//       console.log(response,response1)
//       return response
//     })())

//   }
//   else {
//     event.respondWith(fetch(event.request));
//   }
// });


self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const domain_name_1 = "i.ibb.co";

  if (url.hostname === domain_name_1 && url.pathname.startsWith('/CwMXtFm')) {
    const new_url = "https://i.ibb.co/fNQ1CX1/android-chrome-384x384.png";
    const newRequest = new Request(new_url, event.request);
    event.respondWith((async () => {
      const response = await fetch(newRequest);
      console.log('Original Request URL:', event.request);
      console.log('New Request URL:', newRequest);
      return response;
    })());
  } else {
    event.respondWith(fetch(event.request));
  }
});
