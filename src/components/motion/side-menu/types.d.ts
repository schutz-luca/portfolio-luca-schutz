import { HeaderItemType } from '@/src/layout/main/types';
import { Cycle } from 'framer-motion';

export interface SideMenuProps {
    options: HeaderItemType[];
    isOpen?: boolean;
    toggleOpen?: Cycle;
}

export interface SideMenuItemProps {
    option: HeaderItemType;
    onClick?: Cycle;
}