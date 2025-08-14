import React from 'react';
import css from './add-todo-modal.module.scss';
import Button from "../button/button";
import OutlinedButton from "../outlined-button/outlined-buttons";

type AddTodoModalProps = {
    isOpen: boolean;
    onAdd: () => void;
    onCancel: () => void;
    newTitle: string;
    setNewTitle: (value: string) => void;
};

const AddTodoModal: React.FC<AddTodoModalProps> = ({
                                                       isOpen,
                                                       onAdd,
                                                       onCancel,
                                                       newTitle,
                                                       setNewTitle
                                                   }) => {
    if (!isOpen) return null;

    return (
        <div className={css.overlay}>
            <div className={css.modal}>
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
                        <OutlinedButton onClick={onCancel} title="Cancel"/>
                        <Button onClick={onAdd} title="Add Todo"/>
                    </div>
                </>
            </div>
        </div>
    );
};

export default AddTodoModal;
