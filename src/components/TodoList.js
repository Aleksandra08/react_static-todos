import React from 'react';
import todos from './todos'
import users from './users'
import TodoItems from './TodoItems'

function TodoList() {
    return (
        <table>
            <tbody>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Text</th>
                <th>Completed</th>
            </tr>
            </tbody>
            <TodoItems todoItems={todos} user={users}/>
        </table>
    );
}

export default TodoList;