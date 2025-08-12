import React from 'react';
import css from './add-todo-modal.module.scss';
import Button from "../button/button";

type AddTodoModalProps = {
    isOpen: boolean;
    onAdd: () => void;
    onCancel: () => void;
    newTitle: string;
    setNewTitle: (value: string) => void;
    isSuccess?: boolean;
};

const AddTodoModal: React.FC<AddTodoModalProps> = ({
                                                       isOpen,
                                                       onAdd,
                                                       onCancel,
                                                       newTitle,
                                                       setNewTitle,
                                                       isSuccess = false
                                                   }) => {
    if (!isOpen) return null;

    return (
        <div className={css.overlay}>
            <div className={css.modal}>
                {isSuccess ? (
                    <h2 className={css.success}>Todo added successfully!</h2>
                ) : (
                    <>
                        <h2 className={css.title}>Add Todo</h2>
                        <input
                            className={css.input}
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            placeholder="New todo title"
                        />
                        <div className={css.actions}>
                            <Button onClick={onAdd} title="Add Todo" />
                            <Button onClick={onCancel} title="Cancel" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AddTodoModal;
