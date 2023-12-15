import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import { AnimatedSectionProps } from './types';

export const AnimatedSection: FC<AnimatedSectionProps> = ({ children, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} id={id}>
            <span
                style={{
                    transform: isInView ? 'none' : 'translateY(-10px)',
                    opacity: isInView ? 1 : 0,
                    transition: 'opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    width: '100%'
                }}
            >
                {children}
            </span>
        </section>
    );
};