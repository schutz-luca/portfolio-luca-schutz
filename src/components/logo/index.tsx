import { FC } from 'react';
import { FaReact } from 'react-icons/fa';
import { StyLogo } from './styles';
import { LogoProps } from './types';

export const Logo: FC<LogoProps> = ({ loadingPage }) => (
    <StyLogo className={loadingPage ? 'loading-page' : ''}>
        <FaReact className='react-icon' />
        LSTZ
    </StyLogo >
);
