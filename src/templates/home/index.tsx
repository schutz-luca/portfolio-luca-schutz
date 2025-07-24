import Image from 'next/image';
import { AnimatedSection } from '@/src/components/motion';
import DotsSquareSVG from '@/public/assets/images/square-of-dots.svg';
import profilePic from '@/public/assets/images/profile-pic.png';
import { StyHome } from './styles';

export const Home = () => (
    <AnimatedSection id='home'>
        <StyHome>
            <div className='flex-row'>
                <div className='text-container'>
                    <p className='presenting'>hello buddy, my name is</p>
                    <h1>
                        <small>Luca</small>
                        <br />
                        <b>Schutz</b>
                    </h1>
                    <h2><b>Frontend Expert</b> with amazing <b>Design Skills</b></h2>
                    <p>I can be described as several things, among them <b>Software Engineer</b>, Graphic Designer, independent music producer, multi-instrumentalist and <b>enthusiast of philosophy and the human experience</b>.</p>
                </div>
                <div className='image-container'>
                    <Image src={profilePic} alt='Schutz Luca pic' className='image' />
                    <DotsSquareSVG className='dots' />
                </div>
            </div>
        </StyHome>
    </AnimatedSection>
);