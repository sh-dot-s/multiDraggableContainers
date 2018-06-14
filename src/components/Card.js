import React from 'react';

export const Card = (props) => {
    return (
        <li
            className={props.isDraggable
            ? "StackedListItem--isDraggable"
            : "card-body"}
            tabIndex={props.tabIndex}>
            <div className="card bg-default shadow p-4 mb-4 bg-white">
                <div className="card-body text-center">
                    <p className="card-text">{props.cardText}</p>
                </div>
            </div>
        </li>
    );
}
