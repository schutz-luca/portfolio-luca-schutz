import { IStateSetter } from '@/types/commons';
import { ReactNode } from 'react';

export interface MainLayoutProps {
    children: ReactNode
}

export interface HeaderItemType {
    href: string;
    text: string;
}

export interface HeaderProps {
    active: number;
    setActive: IStateSetter<number>;
}