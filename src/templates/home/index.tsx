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
                    <p className='presenting'>hey! nice to meet you, I&apos;m</p>
                    <h1>
                        <small>Luca</small>
                        <b>Schutz</b>
                    </h1>
                    <h2><b>Front-end Expert</b> {'//'} <b>Full-stack Engineer</b> {'//'} <b>Tech Lead</b></h2>
                    <p>
                        <b>Software Architect</b> focused in <b>Creative Solutions</b>. Postgraduated in Software Architecture & Solutions, skilled across the full digital product lifecycle, from
                        requirements to front-end and back-end development, CI/CD in the cloud, version control, and production release management.
                    </p>
                    <br />
                    <p>
                        In a time when machines are increasingly becoming more human-like, I strive to find ways to <b>create impactful experiences</b> and use technology not only to solve problems, <b>but to connect people</b> to ideas and special feelings.
                    </p>
                </div>
                <div className='image-container'>
                    <Image src={profilePic} alt='Schutz Luca pic' className='image' />
                    <DotsSquareSVG className='dots' />
                </div>
            </div>
        </StyHome>
    </AnimatedSection>
);