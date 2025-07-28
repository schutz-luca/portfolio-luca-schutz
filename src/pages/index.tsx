import { AnimatedSection } from '@/src/components/motion';
import { MainLayout } from '@/src/layout/main';
import { Skills } from '@/src/templates/skills';
import { Home } from '@/src/templates/home';
import { Contact } from '../templates/contact';
import { Projects } from '../templates/projects';

const HomePage = () => (
    <MainLayout
        headerItems={[
            { href: '/', text: 'home' },
            { href: '/', text: 'skills' },
            { href: '/', text: 'projects' },
            { href: '/', text: 'contact' },
        ]}
        isMainPage
    >
        <Home />
        <Skills />
        <Projects />
        <Contact />
    </MainLayout>
);

export default HomePage;