import Link from 'next/link';
import { SkillContent } from '@/src/components/skill-content';

const skills = {
    'Soft Skills': [
        { text: 'Nonviolent Communication' },
        { text: 'Design Thinking' },
        { text: 'People Management' },
        { text: 'Self Teached' },
        { text: 'Critical Thinking', color: 'purple' },
        { text: 'Creativity', color: 'purple' },
        { text: 'Emotional Intelligence', color: 'purple' }
    ],
    'Subjects I am interested in': [
        { text: 'Music Production', color: 'waterGreen' },
        { text: 'Guitars', color: 'waterGreen' },
        { text: 'Psychoanalysis', color: 'purple' },
        { text: 'Existentialism', color: 'purple' },
        { text: 'Stoicism', color: 'purple' },
        { text: 'Quantum Mechanics' },
        { text: 'Astronomy' }
    ]
};

export const HumanContent = () =>
    <SkillContent
        description={
            <>
                Since childhood, I&apos;ve been driven by a deep curiosity to understand the world and the people around me. I explored art, music, philosophy, astronomy, and psychology in search of answers.
                <br />
                Along the way, I developed a strong sense of emotional maturity that continues to shape the way I think, create, and connect, giving meaning to my life.
                <br />
                <br />
                I like to share some of my thoughts whenever possible. Check it out at my <Link href='https://schutz-luca.medium.com/' target='_blank'>Medium profile</Link>
            </>
        }
        skills={skills}
    />;