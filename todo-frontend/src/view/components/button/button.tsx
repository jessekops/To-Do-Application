import React from 'react';
import css from './button.module.scss';

type ButtonProps = {
    onClick?: () => void;
    title?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
    return (
        <button className={css.button} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;
