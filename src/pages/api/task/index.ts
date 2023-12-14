import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, description } = req.body;

  const session = await getServerSession(req, res, authOptions);

  if (session?.user?.email) {
    const result = await prisma.task.create({
      data: {
        title,
        description,
        author: { connect: { email: session?.user?.email } },
      },
    });
    res.json(result);
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
