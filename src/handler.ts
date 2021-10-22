export async function handleRequest(request: Request): Promise<Response> {
  if (request.method === 'GET') {
    const { query } = await request.json();
    return new Response(`JSON guery: ${query}`);
  } else if (request.method === 'POST' ) {
    const { query } = await request.json();
    return new Response(`JSON guery: ${query}`);
  }
  return new Response();
}
