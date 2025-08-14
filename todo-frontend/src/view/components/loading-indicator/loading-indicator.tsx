import React from 'react';
import css from './loading-indicator.module.scss';

export default function LoadingIndicator() {
    return (
        <div className={css.loaderWrapper}>
            <div className={css.dot}></div>
            <div className={css.dot}></div>
            <div className={css.dot}></div>
        </div>
    );
}
