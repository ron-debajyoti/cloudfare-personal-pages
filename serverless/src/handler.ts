import { Post } from './types';
import { v4 as uuid } from 'uuid';

declare const APP_POSTS: KVNamespace;

interface handleProps {
  body: Post;
  id: string;
}

const insertCache = ({ body, id }: handleProps): Promise<void> =>
  APP_POSTS.put(id, JSON.stringify(body));
const getCache = (key: string): Promise<string | null> => APP_POSTS.get(key);

const handleGetRequest = async () => {
  const { keys } = await APP_POSTS.list<string>();
  const postsList = await Promise.all(
    keys.map(async (key) => {
      const post = await getCache(key.name);
      if (post) return JSON.parse(post);
    }),
  );
  return new Response(JSON.stringify(postsList), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Content-Type': 'application/json',
    },
  });
};

const handlePostRequest = async (req: Request) => {
  const body: Post = await req.json();
  const id: string = uuid();
  body.id = id;
  const contentType = (await req.headers.get('content-type')) || '';

  if (contentType.includes('application/json')) {
    return insertCache({ body, id }).then(() => {
      return new Response(`Post submitted successfully !`, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Content-Type': 'application/json',
        },
      });
    });
  }
  return new Response(null, { status: 404 });
};

export async function handleRequest(request: Request): Promise<Response> {
  if (request.method === 'GET') {
    const response: Response = await handleGetRequest();
    return response;
  } else if (request.method === 'POST') {
    const response: Response = await handlePostRequest(request);
    return response;
  }
  return new Response(null, { status: 404 });
}
