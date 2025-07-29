import Link from 'next/link';
import { SkillContent } from '@/src/components/skill-content';

const skills = {
    'Specialist': [
        { text: 'Adobe Photoshop' },
        { text: 'Adobe Premiere', color: 'purple' },
        { text: 'Figma', color: 'waterGreen' }
    ],
    'Experient': [
        { text: 'Adobe Illustrator' },
        { text: 'Paint Tool Sai 2' },
        { text: 'Adobe After Effects', color: 'purple' },
        { text: 'Loomis Method', color: 'waterGreen' }
    ]
};

export const DesignerContent = () =>
    <SkillContent
        description={
            <>
                I began my career in graphic design in 2016 as a freelancer. As I transitioned into development, I recognized the importance of enhancing this creative foundation by specializing in UI/UX design.
                <br />
                <br />
                Since then, I’ve continuously applied these skills across the projects I’ve contributed to—bridging visual design and functional experiences.
                Explore my work on <Link href='https://www.behance.net/schutz_luca' target='_blank'>Behance</Link>.
            </>
        }
        skills={skills}
    />;