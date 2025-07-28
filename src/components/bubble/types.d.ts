export type BubbleColors = 'default' | 'purple' | 'orange';
export interface BubbleProps {
    text: string;
    color?: BubbleColors
}