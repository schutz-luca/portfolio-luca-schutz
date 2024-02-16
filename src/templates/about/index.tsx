import { useContext } from 'react';
import DesignerImage from '@/public/assets/images/designer.jpg';
import DeveloperImage from '@/public/assets/images/developer.jpg';
import HumanImage from '@/public/assets/images/human.jpg';
import { AnimatedSection, Cards } from '@/src/components/motion';
import { ICard } from '@/src/components/motion/cards/types';
import { AppManagerContext } from '@/src/context/app-manager';
import { DeveloperContent } from './DeveloperContenxt';
import { DesignerContent } from './DesignerContent';
import { HumanContent } from './HumanContent';

export const About = () => {
    const cards: ICard[] = [
        {
            id: '0',
            category: 'Developer',
            title: 'Fullstack Software Engineer',
            description: '// React.js // Node.js // Next.js // Nest.js //',
            content: <DeveloperContent />,
            image: DeveloperImage.src,
            imageCredit: { text: 'Image by pressfoto', link: 'https://www.freepik.com/free-photo/rear-view-programmer-working-all-night-long_5698334.htm#query=developer&position=2&from_view=search&track=sph' }
        },
        {
            id: '1',
            category: 'Designer',
            title: 'Graphics & UI/UX',
            description: '// Figma // Photoshop // Illustrator // Premiere //',
            content: <DesignerContent />,
            image: DesignerImage.src
        },
        {
            id: '2',
            category: 'Human',
            title: 'Artist & lover of the Human Experience',
            description: '// Subjects of Interest // Soft Skills //',
            content: <HumanContent />,
            image: HumanImage.src,
            imageCredit: { text: 'Art by Boris Pelcer', link: 'https://www.borispelcer.com/index' }
        },
    ];

    const { setDisableScroll } = useContext(AppManagerContext);

    const onSelect = () => setDisableScroll(true);
    const onClose = () => setDisableScroll(false);

    return (
        <AnimatedSection id='about'>
            <h2>what am I good at?</h2>
            <Cards cards={cards} onSelect={onSelect} onClose={onClose} />
        </AnimatedSection>
    );
};