import { IStateSetter } from '@/src/types/commons';
import { ReactNode } from 'react';

export interface MainLayoutProps {
    children: ReactNode;
    headerItems: HeaderItemType[];
}

export interface HeaderItemType {
    text: string;
    href?: string;
    action?: () => void
}

export interface HeaderProps {
    active: number;
    setActive: IStateSetter<number>;
    headerItems: HeaderItemType[];
}