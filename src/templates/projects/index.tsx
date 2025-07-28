import { AnimatedSection } from '@/src/components/motion';
import { Project } from '@/src/components/project';
import StorytellerCover from '@/public/assets/images/projects/storyteller.jpg';
import CinebingoCover from '@/public/assets/images/projects/cinebingo.jpg';
import { StyProjects } from './styles';
import { ProjectProps } from '@/src/components/project/types';

const projects: ProjectProps[] = [
    {
        title: 'Storyteller',
        subTitle: 'Gain insights by generating pertinent narratives through 10 simple, strategically chosen questions',
        description: 'Storyteller is a creative support tool designed for those who want to speed up creative processes and connect more empathetically with their audience. Ideal for bringing ideas to life and overcoming creative blocks while keeping up with the fast pace of trends.',
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
        subTitle: 'Movie-themed bingo web app game featuring daily rankings to fuel player competitiveness',
        description: 'Game experience designed for movie lovers who enjoy daily challenges and friendly competition. Each day, players get a new bingo board featuring a curated mix of classic, cult, and trending films. Scores are ranked in real time, encouraging players to beat their own records and challenge friends. Designed to deliver fast, nostalgic fun with ongoing engagement.',
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
        <StyProjects>
            {projects.map(project => <Project {...project} key={project.title} />)}
        </StyProjects>
    </AnimatedSection>
);