import React from 'react';
import css from './todo-item.module.scss';

type TodoItemProps = {
    id: string;
    title: string;
    done: boolean;
    onToggle: (id: string) => void;
    disabled?: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({ id, title, done, onToggle, disabled }) => {
    return (
        <li
            className={`${css.item} ${done ? css.checked : css.unchecked}`}
        >
            <input
                type="checkbox"
                checked={done}
                onChange={() => onToggle(id)}
                disabled={disabled}
                className={css.checkbox}
            />
            <p className={css.text}>{title}</p>
        </li>
    );
};

export default TodoItem;
