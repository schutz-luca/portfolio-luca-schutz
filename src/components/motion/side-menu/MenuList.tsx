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

export const MenuList: FC<SideMenuProps> = ({ options, isOpen, toggleOpen, handleActive }) => {
  const handleOnClick = (index) => {
    if (toggleOpen)
      toggleOpen();

    handleActive(index);
  };

  return (
    <motion.ul variants={variants}>
      <MotionItem>
        <div className='theme-item'>
          <ThemeButton />
        </div>
      </MotionItem>
      {
        options.map((option, index) => (
          <MenuItem option={option} key={`${option.text}#${index}`} onClick={() => handleOnClick(index)} />
        ))
      }
    </motion.ul >
  );
};