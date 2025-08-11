import { useState, useEffect, useCallback } from 'react';
import {
    getTodos,
    createTodo,
    completeTodo,
} from '../api/service/todo-service';

export function useTodos() {
    const [todos, setTodos] = useState<
        { id: string; title: string; done: boolean }[]
    >([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchTodos = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getTodos();
            setTodos(data);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    const addTodo = async (title: string) => {
        setLoading(true);
        setError(null);
        try {
            const newTodo = await createTodo(title);
            setTodos((prev) => [...prev, newTodo]);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };

    const markComplete = async (id: string) => {
        setLoading(true);
        setError(null);
        try {
            const updated = await completeTodo(id);
            setTodos((prev) =>
                prev.map((todo) => (todo.id === id ? updated : todo))
            );
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };

    return {
        todos,
        loading,
        error,
        fetchTodos,
        addTodo,
        markComplete,
    };
}
