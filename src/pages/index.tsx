import { AnimatedSection } from '@/src/components/motion';
import { MainLayout } from '@/src/layout/main';
import { About } from '@/src/templates/about';
import { Home } from '@/src/templates/home';
import { Contact } from '../templates/contact';

const HomePage = () => (
    <MainLayout
        headerItems={[
            { href: '/#home', text: 'home' },
            { href: '/#about', text: 'about' },
            // { href: '/#experience', text: 'experience' },
            { href: '/#contact', text: 'contact' }
        ]}
    >
        <Home />
        <About />
        <Contact />
    </MainLayout>
);

export default HomePage;