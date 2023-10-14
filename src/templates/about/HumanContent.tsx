import { Bubble } from '@/src/components/bubble';

export const HumanContent = () => (
    <>
        <p className='description'>
            Ever since I was a child, I&apos;ve always enjoyed trying to understand the world and the people around me.
            I looked in art, music, philosophy, astronomy, psychology for solutions to my doubts,
            I found results that made me someone very emotionally mature.
        </p>
        <div className='skills'>
            <h4>Soft Skills</h4>
            <div className="flex">
                <Bubble text="Nonviolent Communication" />
                <Bubble text="Critical Thinking" color="purple" />
                <Bubble text="Creativity" color="purple" />
                <Bubble text="Emotional Intelligence" color="purple" />
                <Bubble text="People Management" />
                <Bubble text="Self Teached" />
            </div>
            <div className="divisor" />
            <h4>Subjects I am interested in</h4>
            <div className="flex">
                <Bubble text="Music Production" color="orange" />
                <Bubble text="Guitars" color="orange" />
                <Bubble text="Psychoanalysis" color="purple" />
                <Bubble text="Carl Jung" color="purple" />
                <Bubble text="Existentialism" color="purple" />
                <Bubble text="Stoicism" color="purple" />
                <Bubble text="Quantum Mechanics" />
                <Bubble text="Astronomy" />
            </div>
        </div>
    </>
);