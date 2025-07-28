export type BubbleColors = 'default' | 'purple' | 'waterGreen';
export interface BubbleProps {
    text: string;
    color?: BubbleColors
}