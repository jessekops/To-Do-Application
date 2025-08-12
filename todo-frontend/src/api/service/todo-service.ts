import apolloClient from '../graphql/apollo-client';
import {GET_TODOS} from '../graphql/queries';
import {CREATE_TODO, COMPLETE_TODO} from '../graphql/mutations';

export async function getTodos() {
    const {data} = await apolloClient.query({query: GET_TODOS, fetchPolicy: 'network-only'});
    return data.todos;
}

export async function createTodo(title: string) {
    const {data} = await apolloClient.mutate({
        mutation: CREATE_TODO,
        variables: {title},
        refetchQueries: [{query: GET_TODOS}],
    });
    return data.createTodo;
}

export async function completeTodo(id: string) {
    const {data} = await apolloClient.mutate({
        mutation: COMPLETE_TODO,
        variables: {id},
        refetchQueries: [{query: GET_TODOS}],
    });
    return data.completeTodo;
}




