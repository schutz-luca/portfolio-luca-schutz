import Link from 'next/link';
import { AnimatedSection } from '@/src/components/motion';
import { StyContact } from './styles';

export const Contact = () => {
    return (
        <AnimatedSection id="about">
            <StyContact>
                <h2>let's get in touch!</h2>
                <p>
                    If my profile looks interesting to you,
                    <br />
                    let's talk a little, maybe we can do amazing things together!
                    <br /><br />
                    Send me a message on
                    <Link href='https://www.linkedin.com/in/luca-schutzenhofer/' target="_blank">{' LinkedIn '}</Link>
                    or on my
                    <Link href='mailto:lucaschutzenhofer@hotmail.com'>{' email '}</Link>
                    :
                </p>
            </StyContact>
        </AnimatedSection>
    );
};