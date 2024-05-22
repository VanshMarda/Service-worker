// self.addEventListener('install', (event) => {
//     console.log('Service Worker installing.');
//     // Perform any necessary setup
//   });
  
//   self.addEventListener('activate', (event) => {
//     console.log('Service Worker activating.');
//     // Clean up old caches or other tasks
//   });
  
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    console.log('Fetch event for:', event.request.url);
    const domain_name_1 = "i.ibb.co"
    const domain_name_2 = "space-prod2.sprinklr.com/ui/rest"
    // const path_name = "/50400/6e6122af-bf42-4d21-9f5c-6d5bea9e0b43-458261680/Image_CXWise_p.jpg"
    // event.respondWith(fetch(event.request));
    // if (url.hostname === domain_name_1 && url.pathname.startsWith('/CwMXtFm')) {
    //   const newUrl = url.href.replace(domain_name_1, domain_name_2);
    //   console.log("passed 1")
    //   event.respondWith(fetch(newUrl));
    // } 
    // else {
    //   console.log("passed 2")
    //   event.respondWith(fetch(event.request));
    // }
  });

// self.addEventListener('fetch', (event) => {
//     console.log('Fetch event for:', event.request.url);
  
//     if (event.request.url.includes('Image_CXWise_p.jpg')) {
//       console.log('Matched image URL:', event.request.url);
      
//       event.respondWith(
//         fetch(event.request, { mode: 'cors' }).then((response) => {
//           if (!response || response.status !== 200 || response.type !== 'basic') {
//             console.error('Error fetching the image:', response);
//             return response;
//           }
  
//           console.log('Image response status:', response.status);
//           return response;
//         }).catch((error) => {
//           console.error('Fetch error:', error);
//           throw error;
//         })
//       );
//     } else {
//       event.respondWith(fetch(event.request));
//     }
//   });
  
  