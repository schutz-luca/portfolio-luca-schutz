import { Bubble } from '../bubble';
import { BubbleColors } from '../bubble/types';
import { SkillContentProps } from './types.d';

export const SkillContent = (props: SkillContentProps) => (
    <>
        <p className='description'>
            {props.description}
        </p>
        <div className='skills'>
            {Object.entries(props.skills).map(([level, items]) => (
                <div key={level}>
                    <div className='divisor' />
                    <h4>{level}</h4>
                    <div className='flex'>
                        {items.map(({ text, color }) => (
                            <Bubble key={text} text={text} color={color as BubbleColors} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </>
);