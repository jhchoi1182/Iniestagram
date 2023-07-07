import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { User } from '@/model/user';

export async function withSessionUser(
  handler: (user: User) => Promise<Response>
): Promise<Response> {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  return handler(user);
}
