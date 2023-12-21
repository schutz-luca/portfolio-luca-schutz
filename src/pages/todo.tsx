import { User, Task } from '@prisma/client';
import React from 'react';
import { GetServerSideProps } from 'next';
import { getSession, signIn, signOut } from 'next-auth/react';
import { MdLogout } from 'react-icons/md';
import prisma from '@/lib/prisma';
import { Avatar } from '../components/avatar';
import { MainLayout } from '../layout/main';
import { TodoTemplate } from '../templates/todo';


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if (!session || !session?.user?.email)
        return {
            props: {}
        };

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
    return {
        props: {
            user: session.user,
            tasks
        },
    };
};

type Props = {
    user?: User;
    tasks?: Task[];
};

const Todo: React.FC<Props> = (props) => {
    const user = props?.user;
    const loadedTasks = props?.tasks ?? [];
    const logged = !!user;

    return (
        <MainLayout
            headerItems={
                [
                    { href: '/', text: 'home' },
                    logged ?
                        {
                            element:
                                <div className='flex centralize'>
                                    <MdLogout style={{ marginRight: 12 }} />
                                    <Avatar src={user?.image || ''} size={40} />
                                </div>,
                            action: () => signOut(),
                            href: ''
                        } :
                        {
                            text: 'login',
                            action: () => signIn(),
                            href: ''
                        }
                ]
            }
        >
            <TodoTemplate loadedTasks={loadedTasks} user={user} logged={logged} />
        </MainLayout>
    );
};

export default Todo;
