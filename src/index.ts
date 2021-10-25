import { handleRequest } from './handler' 

addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // handle urls which are towards '/posts'
  if (url.pathname === '/posts') {
    event.respondWith(handleRequest(event.request))
  }
})
