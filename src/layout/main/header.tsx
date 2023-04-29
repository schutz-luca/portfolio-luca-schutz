import Link from 'next/link';
import { FC } from 'react';
import { Logo } from '@/components/logo';
import { ThemeButton } from '@/templates/theme-button';
import { StyHeader } from './styles';
import { HeaderItemType, HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ active, setActive }) => {
    const headerItems: HeaderItemType[] = [
        { href: '/#home', text: 'home' },
        { href: '/#about', text: 'about' },
        { href: '/#experience', text: 'experience' },
        { href: '/#contact', text: 'contact' }
    ];
    const handleActive = (index: number) => setActive(index);

    return (
        <StyHeader>
            <Logo />
            <ul>
                {headerItems.map((item, index) => (
                    <li key={item.href}>
                        <Link
                            onClick={() => handleActive(index)}
                            href={item.href}
                            className={active === index ? 'active' : ''}
                            scroll={false}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
                <li>
                    <ThemeButton />
                </li>
            </ul>
        </StyHeader>
    );
};