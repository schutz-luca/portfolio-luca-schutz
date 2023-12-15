import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import { IParent } from '@/src/types/commons';
import { SideMenuItemProps } from './types';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 0 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MotionItem: FC<IParent> = ({ children }) => (
  <motion.li
    variants={variants}
    whileTap={{ scale: 0.90 }}
    className='sm-item'
  >
    {children}
  </motion.li>
);

export const MenuItem: FC<SideMenuItemProps> = ({ option, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (option.action) option.action();
  }
  return (
    <MotionItem>
      <Link
        onClick={handleClick}
        href={option.href}
        scroll={false}
      >
        {option.text ?? option.element}
      </Link>
    </MotionItem>
  );
}
