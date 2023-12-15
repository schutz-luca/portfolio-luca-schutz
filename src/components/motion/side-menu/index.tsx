import { motion, useCycle } from 'framer-motion';
import { useRef, FC } from 'react';
import { MenuList } from './MenuList';
import { MenuToggle } from './MenuToggle';
import { StySideMenu } from './styles';
import { SideMenuProps } from './types';
import { useDimensions } from './use-dimensions';

const closedButtonPosition = 'calc(100% - 22px - 20px) 27px';
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at ${closedButtonPosition})`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: `circle(22px at ${closedButtonPosition})`,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 40
    }
  }
};

export const SideMenu: FC<SideMenuProps> = ({ options }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <StySideMenu
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className={`sidemenu ${isOpen ? 'open' : 'closed'}`}
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <motion.div className='background' variants={sidebar} />
      <MenuList options={options} isOpen={isOpen} toggleOpen={toggleOpen} />
    </StySideMenu>
  );
};
