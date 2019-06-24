import React from 'react';
import User from './User'

function TodoItem(props) {
    const todoList = props.todoItems.map((el) => {
        const user = props.user.find((item => item.id === el.userId));
        return (
            <tr key={el.id} className={el.completed ? 'done' : 'not'}>
                <td>{el.id}</td>
                <td><User user={user}/></td>
                <td>{el.title}</td>
                <td>{el.completed ? 'completed' : 'not completed'} </td>
            </tr>
        )
    });

    return (
        <tbody>
        {todoList}
        </tbody>
    )
}

export default TodoItem;