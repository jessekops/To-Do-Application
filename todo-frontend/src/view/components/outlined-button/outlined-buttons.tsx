import React from 'react';
import css from './outlined-button.module.scss';

type OutlinedButtonProps = {
    onClick?: () => void;
    title?: string;
};

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ onClick, title }) => {
    return (
        <button className={css.button} onClick={onClick}>
            {title}
        </button>
    );
};

export default OutlinedButton;
