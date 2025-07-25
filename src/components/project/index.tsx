import Image from 'next/image';
import { StyProject } from './styles';
import { ProjectProps } from './types.d';
import { Bubble } from '../bubble';

export const Project = ({
    title,
    subTitle,
    description,
    link,
    code,
    cover,
    techs
}: ProjectProps) => (
    <StyProject>
        {/* <div> */}
        <Image src={cover} alt={`${title} project's cover`} />
        {/* </div> */}
        <div className='content'>
            <div>
                <h3>{title}</h3>
                <h4>{subTitle}</h4>
                <p>{description}</p>
                <div className='techs'>
                    {techs.map(tech => <Bubble key={tech} text={tech} />)}
                </div>
            </div>
            <div className='links'>
                <a href={link} target='_blank' rel='noopener noreferrer'>View Project</a>
                <a href={code} target='_blank' rel='noopener noreferrer'>View Code</a>
            </div>
        </div>
    </StyProject>
);