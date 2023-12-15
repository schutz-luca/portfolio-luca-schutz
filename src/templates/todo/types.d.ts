import { Task, User } from "@prisma/client";

export interface TodoTemplateProps {
    loadedTasks: Task[];
    user?: User;
    logged?: boolean;
}