import React from 'react'

export default function Todo(props) {
    console.log(props);
    return (
        <li className="list-group-item">
            { props.item.title }
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
        </li>
    )
}
