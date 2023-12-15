import { MdPerson } from 'react-icons/md';
import Image from 'next/image';
import { IAvatarProps } from './index.d';
import { $AvatarContainer } from './styles';

export const defaultProps = {
    size: '60px'
};

export const Avatar = (props: IAvatarProps) => {
    return (
        <$AvatarContainer style={{ height: props.size, width: props.size }}>
            {props.src ?
                <Image src={props.src} alt='' height={props.size} width={props.size}/>
                :
                <MdPerson />
            }
        </$AvatarContainer>
    );
};

Avatar.defaultProps = defaultProps;