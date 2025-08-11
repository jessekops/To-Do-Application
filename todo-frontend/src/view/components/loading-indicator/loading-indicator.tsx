import React from 'react';
import css from './loading-indicator.module.scss';

const LoadingIndicator: React.FC = () => {
    return (
        <div className={css.loader} role="status" aria-label="Loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default LoadingIndicator;
