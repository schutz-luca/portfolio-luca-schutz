import { Bubble } from '@/src/components/bubble';
import Link from 'next/link';

export const DesignerContent = () => (
    <>
        <p className='description'>
            I started my graphic design career in 2016 as a freelancer. As I evolved as a developer, I felt the need to expand this skill and specialize as a UI/UX designer.
            <br />
            Since then I have been putting these skills into practice in the projects I have participated in.
            You can check out a briefing on my <Link href='https://www.behance.net/schutz_luca' target='_blank'>Behance</Link>.
        </p>
        <div className='skills'>
            <h4>Specialist</h4>
            <div className='flex'>
                <Bubble text='Adobe Photoshop' />
                <Bubble text='Figma' color='orange' />
                <Bubble text='Adobe Premiere' color='purple' />
            </div>
            <div className='divisor' />
            <h4>Experient</h4>
            <div className='flex'>
                <Bubble text='Adobe Illustrator' />
                <Bubble text='Adobe After Effects' color='purple' />
                <Bubble text='Paint Tool Sai 2' />
            </div>
        </div>
    </>
);