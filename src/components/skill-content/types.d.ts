import { ReactNode } from 'react';

export interface SkillContentProps {
    description: ReactNode;
    skills: {
        [level: string]: { text: string; color?: string }[];
    };
}