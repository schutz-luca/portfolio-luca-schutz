import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Logo } from '../logo';
import { StyLoading } from './styles';
import { LoadingProps } from './types';

export const Loading = ({ visible }: LoadingProps) => {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        if (!visible) {
            const interval = setInterval(() => {
                setHide(true);
            }, 500);
            return () => clearInterval(interval);
        }
        else if (hide)
            setHide(false);
    }, [visible, hide]);

    return (
        <>
            {!hide &&
                <AnimatePresence>
                    {visible &&
                        <StyLoading
                            key='loading'
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                key='spinner'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                exit={{ opacity: 0 }}
                            >
                                <Logo loadingPage />
                            </motion.div>
                        </StyLoading>
                    }
                </AnimatePresence >
            }
        </>
    );
};