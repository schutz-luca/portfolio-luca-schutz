import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const method = req.method;

    const session = await getServerSession(req, res, authOptions);
    if (!session?.user?.email) {
      res.status(401).send({ message: 'Unauthorized' });
      return;
    }

    if (method === 'POST') {
      const { title, description } = req.body;
      const result = await prisma.task.create({
        data: {
          title,
          description,
          author: { connect: { email: session?.user?.email } },
        },
      });
      res.json(result);
    } else

      if (method === 'GET') {
        const tasks = await prisma.task.findMany({
          where: {
            author: { email: session.user.email },
          },
          include: {
            author: {
              select: { name: true },
            },
          },
        });
        res.json(tasks);
      }
  }
  catch (error: any) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
}
