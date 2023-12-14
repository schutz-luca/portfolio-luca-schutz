import React, { useState } from "react";
import { GetServerSideProps } from "next";
// import Layout from "../components/Layout";
// import Post, { PostProps } from "../components/Post";
import { useSession, getSession, signOut } from "next-auth/react";
import prisma from '@/lib/prisma'
import { User, Task } from "@prisma/client";
import Link from "next/link";
import { MainLayout } from "../layout/main";


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if (!session || !session?.user?.email)
        return {
            props: {}
        }

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
    // const { data: session, status } = useSession();
    const user = props?.user;
    const loadedTasks = props?.tasks ?? [];
    const logged = !!user;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState(loadedTasks)

    const addTask = (task: Task) => setTasks(tasks.concat(task))
    const removeTask = (taskId: number) => setTasks(tasks.filter(task => task.id !== taskId))

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            const body = { title, description };
            const result = await fetch(`/api/task`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            setTitle('')
            const taskAdded = await result.json();
            addTask(taskAdded)

        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async (id) => {
        const result = await fetch(`/api/task/${id}`, {
            method: "DELETE",
        });

        const deletedTask = await result.json();
        removeTask(deletedTask.id)
    }

    return (
        <MainLayout
            headerItems={
                logged ?
                    [] :
                    []
            }
        >
            <div>
                {logged ?
                    <div>
                        <h1>
                            {user.email}
                        </h1>
                        <img style={{ width: 100 }} src={user?.image || ''} />
                        <button onClick={() => signOut()}>
                            <a>Log out</a>
                        </button>
                    </div> :
                    <div>
                        <Link href="/api/auth/signin" legacyBehavior>
                            Log in
                        </Link>
                    </div>
                }
            </div>
            <div>
                {tasks?.map(task =>
                    <p>
                        <button onClick={() => deleteTask(task.id)}>x</button>
                        {task.title}
                    </p>)}
                <form onSubmit={submitData}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="what do you need to do?" />
                    <button type='submit' style={{ display: 'none' }} />
                </form>
            </div>
        </MainLayout>
    );
};

export default Todo;
