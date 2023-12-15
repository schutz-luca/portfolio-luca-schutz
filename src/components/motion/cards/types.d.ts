export interface CardsProps {
    cards: ICard[];
    onClose?: () => void;
    onSelect?: () => void;
}

export interface ICard {
    id: string;
    category: string;
    title: string;
    description: string;
    content: JSX.Element;
    image: string;
    imageCredit?: {
        text: string;
        link: string;
    };
}

export interface CardViewProps {
    card: ICard;
    closeView: () => void;
}