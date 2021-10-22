export async function handleRequest(request: Request): Promise<Response> {
  const { query } = await request.json();
  return new Response(`JSON guery: ${query}`)
}
