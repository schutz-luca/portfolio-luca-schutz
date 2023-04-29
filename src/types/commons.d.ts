import { ReactNode } from 'react';

export interface IParent {
    children: ReactNode
}

export type IStateSetter<T> = Dispatch<SetStateAction<T>>;