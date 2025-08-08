import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
    mutation CreateTodo($title: String!) {
        createTodo(title: $title) {
            id
            title
            done
        }
    }
`;

export const COMPLETE_TODO = gql`
    mutation CompleteTodo($id: ID!) {
        completeTodo(id: $id) {
            id
            title
            done
        }
    }
`;

