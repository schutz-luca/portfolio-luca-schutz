import { useContext } from 'react';
import DeveloperImage from '@/public/assets/images/developer.jpg';
import { AnimatedSection, Cards } from '@/src/components/motion';
import { ICard } from '@/src/components/motion/cards/types';
import { AppManagerContext } from '@/src/context/app-manager';
import { DeveloperContent } from './DeveloperContenxt';

export const About = () => {
    const cards: ICard[] = [
        {
            id: '0',
            category: 'Developer',
            title: 'Fullstack Software Engineer',
            description: '// React.js // Node.js // Next.js // Nest.js // Vue //',
            content: <DeveloperContent />,
            image: DeveloperImage.src,
            imageCredit: { text: 'Image by pressfoto', link: 'https://www.freepik.com/free-photo/rear-view-programmer-working-all-night-long_5698334.htm#query=developer&position=2&from_view=search&track=sph' }
        },
    ];

    const { setDisableScroll } = useContext(AppManagerContext);

    const onSelect = () => setDisableScroll(true);
    const onClose = () => setDisableScroll(false);

    return (
        <AnimatedSection id="about">
            <h2>about</h2>
            <Cards cards={cards} onSelect={onSelect} onClose={onClose} />
        </AnimatedSection>
    );
};