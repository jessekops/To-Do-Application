import React, {useState} from 'react';
import {useTodos} from '../../hooks/use-todos';
import Button from '../components/button/button';
import AddTodoModal from "../components/add-todo-modal/add-todo-modal";
import css from './todo-page.module.scss';
import TodoItem from "../components/todo-item/todo-item";
import LoadingIndicator from "../components/loading-indicator/loading-indicator";
import FeedbackOverlay from "../components/feedback-overlay/feedback-overlay";

export function TodoPage() {
    const {todos, loading, error, addTodo, markComplete} = useTodos();

    const [newTitle, setNewTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [feedbackVisible, setFeedbackVisible] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const sortedTodos = [...todos].sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));

    const openTodoModal = () => setIsModalOpen(true);
    const closeTodoModal = () => {
        setIsModalOpen(false);
        setNewTitle('');
    };

    const showFeedback = (message: string) => {
        setFeedbackMessage(message);
        setFeedbackVisible(true);
    };

    const handleAddTodo = () => {
        if (newTitle.trim() === '') return;
        addTodo(newTitle.trim());
        setNewTitle('');
        showFeedback('Todo added!');
        closeTodoModal();
    };

    const handleMarkComplete = (id: string) => {
        markComplete(id);
        showFeedback('Todo completed!');
    };

    return (
        <div className={css.container}>
            <div className={css.header}>
                <h1 className={css.header}>My todo's</h1>
                <Button onClick={openTodoModal} title="New Todo"/>
            </div>

            {loading ? (
                <LoadingIndicator/>
            ) : error ? (
                <p className={css.errorMessage}>An error occurred: {error.message}</p>
            ) : (
                <ul className={css.todoList}>
                    {sortedTodos.length === 0 && (
                        <li className={css.emptyMessage}>You don't have any todo's 🎉</li>
                    )}
                    {sortedTodos.map(({id, title, done}) => (
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
            )}

            <AddTodoModal
                isOpen={isModalOpen}
                onAdd={handleAddTodo}
                onCancel={closeTodoModal}
                newTitle={newTitle}
                setNewTitle={setNewTitle}
            />

            <FeedbackOverlay
                message={feedbackMessage}
                isVisible={feedbackVisible}
                onClose={() => setFeedbackVisible(false)}
            />
        </div>
    );
}
