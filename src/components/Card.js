import React from 'react';

export const Card = (props) => {
    console.log(props);
    if (props.isDraggable) {
        return (
            <li
                className="StackedListItem StackedListItem--isDraggable StackedListItem--item2"
                tabIndex={props.tabIndex}>
                <div className="StackedListContent">
                    <h4 className="Heading Heading--size4 text-no-select">{props.cardText}</h4>
                    <div className="DragHandle"></div>
                    <div className="Pattern Pattern--typeHalftone"></div>
                    <div className="Pattern Pattern--typePlaced"></div>
                </div>
            </li>
        )
    }
    return (
        <li className={"StackedListItem StackedListItem--item" + props.tabIndex}>
            <div className="StackedListContent">
                <h4 className="Heading Heading--size4 text-no-select">{props.cardText}</h4>
                <div className="NopeHandle"></div>
            </div>
        </li>
    );
}