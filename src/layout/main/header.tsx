import Link from 'next/link';
import { FC } from 'react';
import { Logo } from '@/src/components/logo';
import { SideMenu } from '@/src/components/motion/side-menu';
import { ThemeButton } from '@/src/templates/theme-button';
import { StyHeader } from './styles';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ active, setActive, headerItems, isMainPage }) => {

    const handleActive = (index: number) => setActive(index);

    return (
        <StyHeader>
            <Link href={'/'}>
                <Logo />
            </Link>
            <ul className='topmenu'>
                {headerItems.map((item, index) => (
                    <li key={item.href} className={isMainPage ? 'not-main' : ''}>
                        {!item.action ?
                            <Link
                                onClick={() => isMainPage && handleActive(index)}
                                href={item.href}
                                className={(isMainPage && active === index) ? 'active' : ''}
                                scroll={false}
                            >
                                {item.text ?? item.element}
                            </Link>
                            :
                            <div className='action' onClick={item.action}>
                                {item.text ?? item.element}
                            </div>
                        }

                    </li>
                ))}
                <li>
                    <ThemeButton />
                </li>
            </ul>
            <SideMenu options={headerItems} />
        </StyHeader>
    );
};