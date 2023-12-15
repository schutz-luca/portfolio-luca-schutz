import { FC, useEffect, useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { StyLogo } from './styles';
import { LogoProps } from './types';

export const Logo: FC<LogoProps> = ({ loadingPage }) => {
    const [hideHandler, setHideHandler] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setHideHandler(!hideHandler);
        }, 8000);
        return () => clearInterval(interval);
    }, [hideHandler]);

    return (
        <StyLogo className={loadingPage ? 'loading-page' : ''}>
            <FaReact className={`react-icon${hideHandler ? ' hide' : ''}`} />
            <text className={`${hideHandler ? 'hide' : ''}`}>LSTZ</text>
            <p className={`${hideHandler ? 'hide' : ''} welcome`}>
                Welcome to <b>Schutz</b>verse ⚛️
            </p>
        </StyLogo >
    );
};
