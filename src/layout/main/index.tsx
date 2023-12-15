
import { useScroll, useSpring, motion } from 'framer-motion';
import Link from 'next/link';
import { useCallback, useContext, useEffect, useState, useRef } from 'react';
import { AiOutlineBehance, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { ThemeProvider } from 'styled-components';
import { CircleText } from '@/src/components/circle-text';
import { Loading } from '@/src/components/loading';
import { AppManagerContext } from '@/src/context/app-manager';
import GlobalStyle from '@/src/styles/globals';
import { Header } from './Header';
import { StyMain, StySideElement } from './styles';
import { MainLayoutProps } from './types';

export const MainLayout = ({ children, headerItems, isMainPage }: MainLayoutProps) => {
    const [loading, setLoading] = useState(true);
    const [sections, setSections] = useState<HTMLElement[]>([]);
    const [activeSection, setActiveSection] = useState<number>(0);
    const [waitScroll, setWaitScroll] = useState(false);
    const [isKeyUp, setIsKeyUp] = useState(true);

    const { theme } = useContext(AppManagerContext);

    const mainRef = useRef<HTMLElement | null>(null);

    // Top progress bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scrollTo = (value: number) => window.scrollTo({
        top: value,
        behavior: 'smooth'
    });

    const goToFirstSection = useCallback(() => setActiveSection(0), []);
    const goToLastSection = useCallback(() => setActiveSection(sections.length - 1), [sections.length]);

    const changeSection = useCallback((value: number) => {
        const currentIndex = activeSection - value;
        const currentSection = sections ? sections[currentIndex] : null;

        if (!currentSection || waitScroll || currentIndex === activeSection)
            return;

        setActiveSection(currentIndex);
        setWaitScroll(true);
    }, [waitScroll, activeSection, sections]);

    const handleMouseWheel = useCallback((event: any) => {
        event.preventDefault();
        event.stopPropagation();

        const value = Math.sign(event.wheelDeltaY);
        changeSection(value);
    }, [changeSection]);

    const handleKeyUp = useCallback(() => {
        if (!isKeyUp)
            setIsKeyUp(true);
    }, [isKeyUp]);

    const handleKeyDown = useCallback((event: any) => {
        const downwardKeys = [
            'Down',
            ' ',
            'Spacebar',
            'ArrowDown',
            'Right',
            'PageDown',
            'ArrowRight',
        ];
        const upwardKeys = ['Up', 'ArrowUp', 'Left', 'PageUp', 'ArrowLeft'];

        // Prevent running multiple events in keydown
        if (isKeyUp)
            setIsKeyUp(false);
        else {
            if (downwardKeys.includes(event.key) || upwardKeys.includes(event.key))
                event.preventDefault();
            return;
        }


        if (downwardKeys.includes(event.key)) {
            event.preventDefault();
            changeSection(-1);
        } else if (upwardKeys.includes(event.key)) {
            event.preventDefault();
            changeSection(1);
        } else if (event.key === 'Home') {
            event.preventDefault();
            goToFirstSection();
        } else if (event.key === 'End') {
            event.preventDefault();
            goToLastSection();
        }
    }, [changeSection, isKeyUp, goToLastSection, goToFirstSection]);

    const sectionToIndex = (selectedSection: string) => {
        const sectionsId = sections.map(section => section.id);
        return sectionsId?.indexOf(selectedSection);
    };

    // Scroll to selected section whener active session changes
    useEffect(() => {
        const currentSection = sections ? sections[activeSection] : undefined;
        if (currentSection) {
            scrollTo(currentSection.offsetTop);
        }
        // eslint-disable-next-line
    }, [activeSection]);

    // Loading interval
    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setLoading(false);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [loading]);

    // Mousewheel interval
    useEffect(() => {
        if (waitScroll) {
            const interval = setInterval(() => {
                setWaitScroll(false);
            }, 500);
            return () => clearInterval(interval);
        }
    }, [waitScroll]);

    useEffect(() => {
        const section = window.location.href.split('#')[1];
        const index = sectionToIndex(section);

        if (isMainPage && index !== -1 && index !== undefined)
            setActiveSection(index);

        // eslint-disable-next-line
    }, [sections]);

    // Handle with listeners
    useEffect(() => {
        document.removeEventListener('mousewheel', handleMouseWheel);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);

        if (!isMainPage)
            return;

        document.addEventListener('mousewheel', handleMouseWheel, { passive: false });
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

    }, [handleMouseWheel, handleKeyDown, handleKeyUp, waitScroll, activeSection, isMainPage]);

    // Create an HTMLElement array with children elements
    useEffect(() => {
        let sectionsNodes: any = mainRef.current?.children;

        if (!sectionsNodes)
            return;

        var sections: any[] = [];
        [].push.apply(sections, sectionsNodes);

        setSections(sections);
    }, [loading]);

    return (
        <ThemeProvider theme={theme}>
            <Loading visible={loading} />
            <Header active={activeSection} setActive={setActiveSection} headerItems={headerItems} isMainPage={isMainPage}/>
            <StySideElement className='left'>
                <ul>
                    <li>
                        <Link href='https://www.behance.net/schutz_luca' target='_blank'>
                            <AiOutlineBehance />
                        </Link>
                    </li>
                    <li>
                        <Link href='https://www.linkedin.com/in/luca-schutzenhofer/' target='_blank'>
                            <AiOutlineLinkedin />
                        </Link>
                    </li>
                    <li>
                        <Link href='https://github.com/schutz-luca' target='_blank'>
                            <AiOutlineGithub />
                        </Link>
                    </li>
                </ul>
            </StySideElement>
            <StySideElement className='right'>
                <CircleText
                    text='LSLSLSLSLSLSLSLSLSLSLSLSLSLS'
                    className='scrolling-obj'
                    style={{ transform: `rotate(${scrollYProgress.get() * 900}deg)` }}
                />
                <Link href='mailto:lucaschutzenhofer@hotmail.com'>
                    lucaschutzenhofer@hotmail.com
                </Link>
            </StySideElement>
            <StyMain ref={mainRef}>
                {!loading && children}
            </StyMain>
            <motion.div className='progress' style={{ scaleX }} />
            <motion.div className='progress bottom' style={{ scaleX }} />
            <GlobalStyle />
        </ThemeProvider>
    );
};