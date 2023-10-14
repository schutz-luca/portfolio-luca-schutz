import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC } from 'react';
import { TbHandClick } from 'react-icons/tb';
import { ICard } from './types';

export const Card: FC<ICard> = ({ id, title, category, description, image }) => {
  return (
    <div className="card-content-container">
      <motion.div className="card-content" layoutId={`card-container-${id}`}>
        <motion.div className="card-image-container" layoutId={`card-image-container-${id}`}>
          <Image className="card-image" src={image} alt="" width={800} height={800}/>
        </motion.div>
        <motion.div className="title-container" layoutId={`title-container-${id}`} >
          <div className="category">{category}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </motion.div>
        <span className='read-more'>
          Read More
          <TbHandClick />
        </span>
      </motion.div>
    </div>
  );
};
