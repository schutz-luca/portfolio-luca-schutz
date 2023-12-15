import { Task } from "@prisma/client";
import { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { StyTodo, TaskList } from "./styles";
import { TodoTemplateProps } from "./types";

export const TodoTemplate = ({ loadedTasks, user, logged }: TodoTemplateProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState<Task[]>(loadedTasks)

    const friendlyName = user?.name?.split(' ')[0];

    const submitTask = async (e: React.SyntheticEvent) => {
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
            setTasks(tasks.concat(taskAdded))

        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async (id) => {
        await fetch(`/api/task/${id}`, {
            method: "DELETE",
        });

        setTasks(tasks.filter(task => task.id !== id))
    }

    const checkUncheckTask = async (task: Task) => {
        const body = { completed: !task.completed }
        await fetch(`/api/task/${task.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        const tasksCopy = [...tasks];
        const updatedItem = tasksCopy.find(item => item.id === task.id) as Task;
        updatedItem.completed = body.completed;
        setTasks(tasksCopy)
    }

    return (
        <StyTodo>
            {logged ?
                <>
                    <h2 className="greetings">
                        hey <b>{friendlyName}</b>, <br />
                        <small>Welcome back to <b>Schutzeverse</b> ToDo List 📑</small>
                    </h2>
                    <p>Always many things to do, right? 🤯 Relax, we are going to help you...</p>

                    <TaskList>
                        {tasks.length ? tasks?.map(task =>
                            <li>
                                <div className={task.completed ? 'checked' : ''} onClick={() => checkUncheckTask(task)}>
                                    {task.completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                                </div>

                                <text>{task.title}</text>
                                <button onClick={() => deleteTask(task.id)}>x</button>
                            </li>
                        ) :
                            <li className="empty">No tasks created yet 👻</li>
                        }
                    </TaskList>

                    <form onSubmit={submitTask}>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="what do you need to do?" />
                        <button type='submit' style={{ display: 'none' }} />
                    </form>
                </>
                :
                <>
                    <p>This is a place for feeling free to note your daily tasks with a pretty and modern interface</p> <br />
                    <h1>
                        login
                    </h1>
                </>

            }

        </StyTodo>
    )
}