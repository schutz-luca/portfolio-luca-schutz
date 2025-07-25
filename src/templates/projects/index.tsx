import Image from 'next/image';
import { AnimatedSection } from '@/src/components/motion';
import DotsSquareSVG from '@/public/assets/images/square-of-dots.svg';
import profilePic from '@/public/assets/images/profile-pic.png';
import { Project } from '@/src/components/project';
import StorytellerCover from '@/public/assets/images/projects/storyteller.jpg';
import { StyProjects } from './styles';
// import { StyHome } from './styles';

const projects = [
    {
        title: 'Storyteller',
        subTitle: 'Gain insights by generating pertinent narratives through 10 simple, strategically chosen questions',
        description: 'Storyteller is a creative support tool designed for those who want to speed up creative processes and connect more empathetically with their audience. Ideal for bringing ideas to life and overcoming creative blocks while keeping up with the fast pace of trends.',
        link: '',
        code: '',
        cover: StorytellerCover,
        techs: ['React', 'Express.js', 'Typescript', 'Fluid Framework', 'OpenAI Integration']
    },
    {
        title: 'Storyteller',
        subTitle: 'Gain insights by generating pertinent narratives through 10 simple, strategically chosen questions',
        description: 'Storyteller is a creative support tool designed for those who want to speed up creative processes and connect more empathetically with their audience. Ideal for bringing ideas to life and overcoming creative blocks while keeping up with the fast pace of trends.',
        link: '',
        code: '',
        cover: StorytellerCover,
        techs: ['React', 'Express.js', 'Typescript', 'Fluid Framework', 'OpenAI Integration']
    }
];

export const Projects = () => (
    <AnimatedSection id='projects'>
        <StyProjects>
            {projects.map(project => <Project {...project} key={project.title}/>)}
        </StyProjects>
    </AnimatedSection>
);