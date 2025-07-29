import { SkillContent } from '@/src/components/skill-content';

const skills = {
    'Specialist': [
        { 'text': 'React' },
        { 'text': 'Context API' },
        { 'text': 'CSS & SCSS' },
        { 'text': 'JQuery' },
        { 'text': 'Node.js', 'color': 'purple' },
        { 'text': 'Express', 'color': 'purple' },
        { 'text': 'Serverless', 'color': 'purple' },
        { 'text': 'MongoDB', 'color': 'purple' },
        { 'text': 'Git', 'color': 'waterGreen' },
        { 'text': 'JavaScript', 'color': 'waterGreen' },
        { 'text': 'Typescript', 'color': 'waterGreen' },
        { 'text': 'SOLID', 'color': 'waterGreen' }
    ],
    'Experient': [
        { 'text': 'Next.js' },
        { 'text': 'Framer Motion' },
        { 'text': 'Redux' },
        { 'text': 'Nest.js', 'color': 'purple' },
        { 'text': 'TypeOrm', 'color': 'purple' },
        { 'text': 'Prisma', 'color': 'purple' },
        { 'text': 'PostgreSQL', 'color': 'purple' },
        { 'text': 'Azure', 'color': 'waterGreen' },
        { 'text': 'IA Prompting', 'color': 'waterGreen' },
        { 'text': 'DevOps', 'color': 'waterGreen' },
        { 'text': 'ElasticSearch', 'color': 'waterGreen' }
    ],
    'Acquainted': [
        { 'text': 'React Native' },
        { 'text': 'Angular' },
        { 'text': 'Vue.js' },
        { 'text': 'Bootstrap' },
        { 'text': 'Docker', 'color': 'waterGreen' },
        { 'text': 'AWS', 'color': 'waterGreen' }
    ]
};

export const DeveloperContent = () =>
    <SkillContent
        description={
            <>
                <b>JavaScript</b> full-stack developer, Front-end specialist.
                <br />
                I have already developed several types of projects, including <b>social networks</b> for content sale,
                improvements for a large company in the financial market, creation of applications for one of the largest audiovisual software companies, etc.
                Check my projects on the next section.
            </>
        }
        skills={skills}
    />;