import { motion } from 'framer-motion';
import { FC, useState, useEffect } from 'react';
import { ThemeButton } from '@/src/templates/theme-button';
import { MenuItem, MotionItem } from './MenuItem';
import { SideMenuProps } from './types';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const MenuList: FC<SideMenuProps> = ({ options, isOpen, toggleOpen }) => {
  const [hideOptions, setHideOptions] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHideOptions(!isOpen);
    }, 500);
    return () => clearInterval(interval);
  }, [isOpen]);



  return (
    <motion.ul variants={variants}>
      <MotionItem>
        <div className='theme-item'>
          <ThemeButton />
        </div>
      </MotionItem>
      {
        options.map(option => (
          <MenuItem option={option} key={option.href} onClick={toggleOpen} />
        ))
      }
    </motion.ul >
  );
};