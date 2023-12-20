import { Task } from '@prisma/client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { StyTodo, TaskList } from './styles';
import { TodoTemplateProps } from './types';

export const TodoTemplate = ({ loadedTasks, user, logged }: TodoTemplateProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState<Task[]>(loadedTasks);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const friendlyName = user?.name?.split(' ')[0];

    const submitTask = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            setLoading(true);

            const body = { title, description };

            const result = await fetch('/api/task', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const taskAdded = await result.json();
            setTasks(tasks.concat(taskAdded));

            setTitle('');
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async (id) => {
        setTasks(tasks.filter(task => task.id !== id));

        await fetch(`/api/task/${id}`, {
            method: 'DELETE',
        });
    };

    const checkUncheckTask = async (task: Task) => {
        const body = { completed: !task.completed };

        const tasksCopy = [...tasks];
        const updatedItem = tasksCopy.find(item => item.id === task.id) as Task;
        updatedItem.completed = body.completed;
        setTasks(tasksCopy);

        await fetch(`/api/task/${task.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
    };

    useEffect(() => {
        if (!loading && inputRef.current)
            inputRef.current.focus();

    }, [loading, inputRef?.current]);

    return (
        <StyTodo>
            {logged ?
                <>
                    <h2 className='greetings'>
                        hey <b>{friendlyName}</b>, <br />
                        <small>Welcome back to <b className='effect'>Schutzverse</b> ToDo List 📑</small>
                    </h2>
                    <p>Always many things to do, right? 🤯 Relax, we are going to help you...</p>
                    <div className='container'>
                        <TaskList>
                            {tasks.length ? tasks?.map(task =>
                                <li key={task.id}>
                                    <div className={task.completed ? 'checked' : ''} onClick={() => checkUncheckTask(task)}>
                                        {task.completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                                    </div>

                                    <div>{task.title}</div>
                                    <button onClick={() => deleteTask(task.id)}>x</button>
                                </li>
                            ) :
                                <li className='empty'>No tasks created yet 👻</li>
                            }
                        </TaskList>
                        <form onSubmit={submitTask}>
                            <input
                                disabled={loading}
                                value={loading ? 'just a sec, adding it for you...' : title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='what do you need to do?'
                                ref={inputRef}
                            />
                            <button type='submit' style={{ display: 'none' }}
                            />
                        </form>
                    </div>
                </>
                :
                <>
                    <h2 className='greetings'>
                        Welcome to <b>Schutzverse</b> ToDo List 📑
                    </h2>
                    <p>This is a place for you to feel free to create your tasks and organize your routine!</p> <br />
                    <b className='persist-message'>All the tasks are associated to your account, when you come back they will still be here</b>
                    <br /><br /><br />
                    <p>Let&apos;s start, to continue please</p>
                    <Link href='/api/auth/signin'>
                        log in with github <FaGithub />
                    </Link>
                </>

            }

        </StyTodo>
    );
};