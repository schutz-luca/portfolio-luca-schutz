import { FC } from 'react';
import { StyBubble } from './styles';
import { BubbleProps } from './types';

export const Bubble: FC<BubbleProps> = ({ text, color }) => (
    <StyBubble className={color}>
        {text}
    </StyBubble>
);