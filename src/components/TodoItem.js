import React from 'react';
import User from './User'

function TodoItem(props) {
    const todoList = props.todoItem.map((el) => {
        const user = props.user.find((i => i.id === el.userId));
        return (
            <tr key={el.id} className={el.completed ? 'done' : 'not'}>
                <td>{el.id}</td>
                <User user={user}/>
                <td>{el.title}</td>
                <td>{el.completed ? 'completed' : 'not completed'} </td>
            </tr>
        )
    });

    return (
        <tbody>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Text</th>
            <th>Completed</th>
        </tr>
        {todoList}
        </tbody>


    )
}


export default TodoItem;