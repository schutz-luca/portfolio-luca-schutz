import { AnimatedSection } from '@/src/components/motion';
import { MainLayout } from '@/src/layout/main';
import { About } from '@/src/templates/about';
import { Home } from '@/src/templates/home';
import { Contact } from '../templates/contact';

const HomePage = () => (
    <MainLayout>
        <Home />
        <About />
        <Contact />
    </MainLayout>
);

export default HomePage;