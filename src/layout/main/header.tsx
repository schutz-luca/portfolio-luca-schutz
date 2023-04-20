import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/logo';
import { ThemeButton } from '@/templates/theme-button';
import { StyHeader } from './styles';
import { HeaderItemType } from './types';

export const Header = () => {
    const headerItems: HeaderItemType[] = [
        { href: '/', text: 'home' },
        { href: '/#about', text: 'about' },
        { href: '/#experience', text: 'experience' },
        { href: '/#contact', text: 'contact' }
    ];
    const [active, setActive] = useState(headerItems[0]);
    const handleActive = (item: HeaderItemType) => setActive(item);

    return (
        <StyHeader>
            <Logo />
            <ul>
                {headerItems.map(item => (
                    <li key={item.href}>
                        <Link
                            onClick={() => handleActive(item)}
                            href={item.href}
                            className={active.href === item.href ? 'active' : ''}
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