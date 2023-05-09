import { AnimatePresence } from 'framer-motion';
import React, { FC, useState } from 'react';
import { Card } from './Card';
import { CardView } from './CardView';
import { CardsProps, ICard } from './types';
import { StyCardContainer } from './styles';

export const Cards: FC<CardsProps> = ({ cards, onSelect, onClose }) => {
  const [selectedCard, setSelectedCard] = useState<ICard | null>(null);

  const selectCard = (card: ICard) => {
    setSelectedCard(card);
    if (onSelect)
      onSelect();
  };

  const closeView = () => {
    setSelectedCard(null);
    if (onClose)
      onClose();
  };

  return (
    <StyCardContainer>
      <AnimatePresence>
        {selectedCard &&
          <CardView card={selectedCard} closeView={closeView} />
        }
      </AnimatePresence>
      <ul className="card-list">
        {cards.map(card => (
          <li
            className={'card'}
            onClick={() => selectCard(card)}
            key={card.id}
          >
            <Card key={card.id} {...card} />
          </li>
        ))}
      </ul>
    </StyCardContainer>
  );
};