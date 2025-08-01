import Link from 'next/link';
import Image from 'next/image';
import { StyProject } from './styles';
import { ProjectProps } from './types.d';
import { Bubble } from '../bubble';
import { BubbleColors } from '../bubble/types';
import { FaCode, FaGlobe } from 'react-icons/fa';

const techColors = {
    frontend: 'default',
    backend: 'purple',
    other: 'waterGreen'
};

export const Project = ({
    title,
    logo,
    texts,
    link,
    code,
    cover,
    techs
}: ProjectProps) => (
    <StyProject>
        <Image src={cover} alt={`${title} project's cover`} className='cover' />
        <div className='content'>
            <div className='content-text'>
                {logo ?
                    <div><Image src={logo} alt={`${title} project's logo`} className='logo' /></div> :
                    <h3>{title}</h3>

                }
                {texts.map(text => <p key={text}>{text}</p>)}
                <div className='techs'>
                    {techs.map(tech => <Bubble key={tech.name} text={tech.name} color={techColors[tech.kind] as BubbleColors} />)}
                </div>
            </div>
            <div className='links'>
                <Link href={link} target='_blank'>Live <FaGlobe /></Link>
                <Link href={code} target='_blank'>Code <FaCode /></Link>
            </div>
        </div>
    </StyProject>
);