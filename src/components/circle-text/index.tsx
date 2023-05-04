import { FC } from 'react';
import { CircleTextProps } from './types';

export const CircleText: FC<CircleTextProps> = ({ text, ...props }) => (
    <svg viewBox="0 0 100 100" width="100" height="100" {...props}>
        <defs>
            <path id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
        </defs>
        <text font-size="17">
            <textPath xlinkHref="#circle">
                {text}
            </textPath>
        </text>
    </svg>
);