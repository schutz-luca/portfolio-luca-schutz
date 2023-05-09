import { AnimatedSection } from '@/src/components/motion';
import { MainLayout } from '@/src/layout/main';
import { About } from '@/src/templates/about';
import { Home } from '@/src/templates/home';

const HomePage = () => (
    <MainLayout>
        <Home />
        <About />
        <AnimatedSection id="experience">
            <h1>experience</h1>
        </AnimatedSection>
        <AnimatedSection id="contact">
            <h1>contact</h1>
        </AnimatedSection>
    </MainLayout>
);

export default HomePage;