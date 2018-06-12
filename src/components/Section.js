import React from 'react';
import {Card} from './Card';

export const Section = (props) => {
    return (
        <article
            id={props.containerId}
            className="StackedListWrapper StackedListWrapper--sizeLarge StackedListWrapper--axisHorizontal Container">
            <header className="StackedListHeader">
                <h3 className="Heading Heading--size3 Heading--colorWhite">{props.containerName}</h3>
            </header>
            <ul className="StackedList">
                {
                    props.cards.map((card, key) => (<Card key={key} cardText={card.cardText} isDraggable={card.isDraggable} tabIndex={card.tabIndex}/>))
                }
            </ul>
        </article>
    );
};
