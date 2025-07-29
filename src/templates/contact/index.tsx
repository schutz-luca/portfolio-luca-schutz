import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/src/components/motion';
import stacksLogos from '@/public/assets/images/stacks-logos.png';
import { StyContact } from './styles';

export const Contact = () => {
    return (
        <AnimatedSection id='contact'>
            <StyContact>
                <h2>let&apos;s get in touch 🎯</h2>
                <p>
                    If my profile looks interesting to you, let&apos;s talk a little,
                    maybe we can do amazing things together!
                    <br />
                    <br />
                    Send me a message on
                    <Link href='https://www.linkedin.com/in/luca-schutzenhofer/' target='_blank'>{' LinkedIn '}</Link>
                    or on my
                    <Link href='mailto:lucaschutzenhofer@hotmail.com'>{' email '}</Link>
                </p>
                <Image src={stacksLogos} alt='Stacks' className='stacks' />
            </StyContact>
        </AnimatedSection>
    );
};