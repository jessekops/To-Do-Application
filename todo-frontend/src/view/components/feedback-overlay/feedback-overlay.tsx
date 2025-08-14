import React, { useEffect } from 'react';
import css from './feedback-overlay.module.scss';

interface FeedbackOverlayProps {
    message: string;
    isVisible: boolean;
    duration?: number; // ms
    onClose: () => void;
}

export default function FeedbackOverlay({ message, isVisible, duration = 1500, onClose }: FeedbackOverlayProps) {
    useEffect(() => {
        if (!isVisible) return;
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [isVisible, duration, onClose]);

    if (!isVisible) return null;

    return (
        <div className={css.overlay}>
            <div className={css.message}>{message}</div>
        </div>
    );
}
