import React, {useState} from 'react';
import {useTodos} from '../../hooks/use-todos';
import Button from '../components/button/button';
import AddTodoModal from "../components/add-todo-modal/add-todo-modal";
import css from './todo-page.module.scss';

export function TodoPage() {
    const {todos, loading, error, addTodo, markComplete} = useTodos();

    const [newTitle, setNewTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openTodoModal = () => setIsModalOpen(true);
    const closeTodoModal = () => {
        setIsModalOpen(false);
        setNewTitle('');
    };

    const handleAddTodo = () => {
        if (newTitle.trim() === '') return;
        addTodo(newTitle.trim());
        closeTodoModal();
    };

    return (
        <div className={css.container}>
            <div className={css.header}>
                <h1>Mijn Todo's</h1>
                <Button onClick={openTodoModal} title="New Todo"/>
            </div>

            {loading && <p>Bezig met laden...</p>}
            {error && <p>Er is een fout opgetreden: {error.message}</p>}

            <ul className={css.todoList}>
                {todos.map(({id, title, done}) => (
                    <li
                        key={id}
                    >
                        <input
                            type="checkbox"
                            checked={done}
                            onChange={() => markComplete(id)}
                            disabled={loading}

                        />
                        <span>
              {title}
            </span>
                    </li>
                ))}
            </ul>


            <AddTodoModal
                isOpen={isModalOpen}
                onAdd={handleAddTodo}
                onCancel={closeTodoModal}
                newTitle={newTitle}
                setNewTitle={setNewTitle}
            />
        </div>
    );
}
