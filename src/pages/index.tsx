import { AnimatedSection } from '@/components/motion';
import { MainLayout } from '@/layout/main';
import { Home } from '@/templates/home';

const HomePage = () => (
    <MainLayout>
        <Home />
        <AnimatedSection id="about">
            <h1>about</h1>
        </AnimatedSection>
        <AnimatedSection id="experience">
            <h1>experience</h1>
        </AnimatedSection>
        <AnimatedSection id="contact">
            <h1>contact</h1>
        </AnimatedSection>
    </MainLayout>
);

export default HomePage;