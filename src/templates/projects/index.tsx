import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { AnimatedSection } from '@/src/components/motion';
import { Project } from '@/src/components/project';
import StorytellerCover from '@/public/assets/images/projects/storyteller-cover.jpg';
import StorytellerLogo from '@/public/assets/images/projects/storyteller-logo.png';
import CinebingoCover from '@/public/assets/images/projects/cinebingo-cover.jpg';
import CinebingoLogo from '@/public/assets/images/projects/cinebingo-logo.png';
import { StyProjects } from './styles';
import { ProjectProps } from '@/src/components/project/types';

const projects: ProjectProps[] = [
    {
        title: 'Storyteller',
        logo: StorytellerLogo,
        texts: [
            'Gain insights by generating pertinent narratives through 10 simple, strategically chosen questions.',
            'Storyteller is a creative AI support tool designed for those who want to speed up creative processes and connect more empathetically with their audience. Ideal for bringing ideas to life and overcoming creative blocks while keeping up with the fast pace of trends.'
        ],
        link: 'https://storyteller-webapp.vercel.app/',
        code: 'https://github.com/schutz-luca/storyteller-webapp',
        cover: StorytellerCover,
        techs: [
            { name: 'React', kind: 'frontend' },
            { name: 'Express.js', kind: 'backend' },
            { name: 'Typescript', kind: 'other' },
            { name: 'Fluid Framework', kind: 'other' },
            { name: 'OpenAI Integration', kind: 'other' }
        ]
    },
    {
        title: 'Cinebingo',
        logo: CinebingoLogo,
        texts: [
            'Game experience designed for movie lovers who enjoy daily challenges and friendly competition.',
            'Each day, players get a new bingo board featuring a curated mix of classic, cult, and trending films. Scores are ranked in real time, encouraging players to beat their own records and challenge friends. Designed to deliver fast, nostalgic fun with ongoing engagement.'
        ],
        link: 'https://cinebingo.vercel.app/',
        code: 'https://github.com/schutz-luca/cinebingo',
        cover: CinebingoCover,
        techs: [
            { name: 'React', kind: 'frontend' },
            { name: 'Express.js', kind: 'backend' },
            { name: 'Typescript', kind: 'other' },
            { name: 'Fluid Framework', kind: 'other' },
            { name: 'TMDB API', kind: 'other' }
        ]
    }
];

export const Projects = () => (
    <AnimatedSection id='projects'>
        <h2>own projects</h2>
        <StyProjects>
            <p>
                Due to <b>confidentiality agreements</b> with the companies I’ve collaborated with, most of the projects I’ve worked on cannot be <b>publicly shared</b>. Below is a selection of personal projects that reflect my technical expertise and creative vision:
            </p>
            {projects.map(project => <Project {...project} key={project.title} />)}
            <Link href='https://github.com/schutz-luca?tab=repositories' className='more' target='_blank'>
                View full projects list
                <FaChevronRight />
            </Link>
        </StyProjects>
    </AnimatedSection>
);