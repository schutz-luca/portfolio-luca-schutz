import { HeaderItemType } from '@/src/layout/main/types';
import { Cycle } from 'framer-motion';

export interface SideMenuProps {
    options: HeaderItemType[];
    isOpen?: boolean;
    toggleOpen?: Cycle;
    handleActive: (index: number) => any;
}

export interface SideMenuItemProps {
    option: HeaderItemType;
    onClick?: Cycle;
}