import { AnimatedSection } from '@/src/components/motion';
import { MainLayout } from '@/src/layout/main';
import { About } from '@/src/templates/about';
import { Home } from '@/src/templates/home';
import { Contact } from '../templates/contact';
import { Projects } from '../templates/projects';

const HomePage = () => (
    <MainLayout
        headerItems={[
            { href: '/', text: 'home' },
            { href: '/', text: 'about' },
            { href: '/', text: 'projects' },
            { href: '/', text: 'contact' },
            { href: '/todo', text: 'todo list' }
        ]}
        isMainPage
    >
        <Home />
        <About />
        <Projects />
        <Contact />
    </MainLayout>
);

export default HomePage;