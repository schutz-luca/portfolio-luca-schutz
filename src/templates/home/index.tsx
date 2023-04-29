import Image from 'next/image';
import { FC, useRef } from 'react';
import DotsSquareSVG from '@/assets/square-of-dots.svg';
import ProfilePic from '@/assets/profile.png';
import { AnimatedSection } from '@/components/motion';
import { StyHome } from './styles';

export const Home: FC = () => {
    const textRef = useRef();

    return (
        <AnimatedSection id="home">
            <StyHome>
                <p>hello buddy, my name is</p>
                <h1>Luca <b>Schutz</b></h1>
                <div className="flex-row">
                    <p>I am many things, among them <b>Software Engineer</b>, Graphic Designer, independent music producer, multi-instrumentalist and a <b>lover of the human psyche</b>.</p>

                    <div className="image-container">
                        <Image src={ProfilePic} alt="Schutz Luca pic" className="image" />
                        <DotsSquareSVG className="dots" />
                    </div>
                </div>
            </StyHome>
        </AnimatedSection>
    );
};