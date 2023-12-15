import { IStateSetter } from '@/src/types/commons';
import { ReactNode } from 'react';

export interface MainLayoutProps {
    children: ReactNode;
    headerItems: HeaderItemType[];
    isMainPage?: boolean;
}

export interface HeaderItemType {
    text?: string;
    element?: ReactNode;
    href: string;
    action?: () => void
}

export interface HeaderProps {
    active: number;
    setActive: IStateSetter<number>;
    headerItems: HeaderItemType[];
    isMainPage?: boolean;
}