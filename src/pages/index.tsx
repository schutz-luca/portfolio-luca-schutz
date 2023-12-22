import { AnimatedSection } from '@/src/components/motion';
import { MainLayout } from '@/src/layout/main';
import { About } from '@/src/templates/about';
import { Home } from '@/src/templates/home';
import { Contact } from '../templates/contact';

const HomePage = () => (
    <MainLayout
        headerItems={[
            { href: '/', text: 'home' },
            { href: '/', text: 'about' },
            // { href: '/#experience', text: 'experience' },
            { href: '/', text: 'contact' },
            { href: '/todo', text: 'todo list' }
        ]}
        isMainPage
    >
        <Home />
        <About />
        <Contact />
    </MainLayout>
);

export default HomePage;