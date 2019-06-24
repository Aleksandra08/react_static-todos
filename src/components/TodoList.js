import React from 'react';
import todos from './todos'
import users from './users'
import TodoItem from './TodoItem'

function TodoList() {

    return (
        <table>
         <TodoItem todoItem={todos} user={users}/>
        </table>
    );
}


export default TodoList;