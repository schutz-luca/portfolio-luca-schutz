import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { MdClose } from 'react-icons/md';
import { CardViewProps } from './types';

export const CardView: FC<CardViewProps> = ({ card, closeView }) => {
  const { category, title, id, image, content, imageCredit, description } = card;

  return (
    <>
      <div className='card-content-container open'>
        <motion.div className='card-content' layoutId={`card-container-${id}`}>
          <div className='card-close' onClick={closeView}>
            <MdClose />
          </div>
          <motion.div className='card-image-container open'>
            {imageCredit &&
              <Link href={imageCredit.link} target='_blank' className='image-credit'>
                {imageCredit.text}
              </Link>
            }
            <Image className='card-image' src={image} alt='' width={900} height={900} />
          </motion.div>
          <motion.div className='title-container' layoutId={`title-container-${id}`}>
            <span className='category open'>{category}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.div>
          <motion.div className='content-container open' animate>
            {content}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        className='overlay'
        onClick={closeView}
      />
    </>
  );
};
