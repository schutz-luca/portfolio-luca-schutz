import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const taskId = req.query.id;
    const method = req.method;

    const session = await getServerSession(req, res, authOptions);
    if (!session)
      res.status(401).send({ message: 'Unauthorized' });


    if (method === 'DELETE') {
      // DELETE
      const task = await prisma.task.delete({
        where: { id: Number(taskId) },
      });
      res.json(task);
    } else

      if (method === 'PUT') {
        // PUT
        const body = req.body;

        const task = await prisma.task.update({
          data: body,
          where: { id: Number(taskId) },
        });
        res.json(task);
      }

      else {
        throw { message: `The HTTP ${req.method} method is not supported at this route` };
      }
  }
  catch (error: any) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
}
