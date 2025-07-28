import { Bubble } from '@/src/components/bubble';

export const DeveloperContent = () => (
    <>
        <p className='description'>
            I&apos;m a fullstack <b>JavaScript</b> developer, Frontend specialist.
            I have already developed several types of applications, including <b>social networks</b> for the content sale,
            improvements for a large company in the financial market, creation of applications for one of the largest audiovisual software companies, etc.
            <br />
            Unfortunately, most projects are private for commercial reasons.
        </p>
        <div className='skills'>
            <h4>Specialist</h4>
            <div className='flex'>
                <Bubble text='React.js' />
                <Bubble text='Context API' />
                <Bubble text='CSS Skills' />
                <Bubble text='JQuery' />
                <Bubble text='Node.js' color='purple' />
                <Bubble text='Express' color='purple' />
                <Bubble text='Serverless' color='purple' />
                <Bubble text='Git' color='waterGreen' />
                <Bubble text='JavaScript' color='waterGreen' />
                <Bubble text='Typescript' color='waterGreen' />
            </div>
            <div className='divisor' />
            <h4>Experient</h4>
            <div className='flex'>
                <Bubble text='Next.js' />
                <Bubble text='Framer Motion' />
                <Bubble text='Redux' />
                <Bubble text='Nest.js' color='purple' />
                <Bubble text='TypeOrm' color='purple' />
                <Bubble text='PostgreSQL' color='purple' />
                <Bubble text='AWS' color='waterGreen' />
                <Bubble text='Azure' color='waterGreen' />
                <Bubble text='DevOps' color='waterGreen' />
            </div>
            <div className='divisor' />
            <h4>Acquainted</h4>
            <div className='flex'>
                <Bubble text='React Native' />
                <Bubble text='Angular' />
                <Bubble text='Vue.js' />
                <Bubble text='Docker' color='waterGreen' />
                <Bubble text='IA Prompts' color='waterGreen' />
                <Bubble text='Elasticsearch' color='waterGreen' />
            </div>
        </div>
    </>
);