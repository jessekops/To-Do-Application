import React, {useState} from 'react';
import {useTodos} from '../../hooks/use-todos';
import Button from '../components/button/button';
import AddTodoModal from "../components/add-todo-modal/add-todo-modal";
import css from './todo-page.module.scss';
import TodoItem from "../components/todo-item/todo-item";
import LoadingIndicator from "../components/loading-indicator/loading-indicator";

export function TodoPage() {
    const {todos, loading, error, addTodo, markComplete} = useTodos();

    const [newTitle, setNewTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sortedTodos = [...todos].sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
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

    const handleMarkComplete = (id: string) => {
        markComplete(id);
    }

    return (
        <div className={css.container}>
            <div className={css.header}>
                <h1 className={css.header}>Mijn Todo's</h1>
                <Button onClick={openTodoModal} title="New Todo"/>
            </div>

            {loading && <LoadingIndicator />}
            {error && <p>Er is een fout opgetreden: {error.message}</p>}

            <ul className={css.todoList}>
                {sortedTodos.map(({ id, title, done }) => (
                    <TodoItem
                        key={id}
                        id={id}
                        title={title}
                        done={done}
                        onToggle={handleMarkComplete}
                        disabled={loading}
                    />
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
