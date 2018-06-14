import React from 'react';
import {Card} from './Card';

export const Section = (props) => {
    return (
        <article id={props.containerId} className="parent card bg-default shadow p-4 mb-4 bg-inverse">
            <h3 className="">{props.containerName}</h3>
            <ul className="StackedList list-unstyled">
                {
                    props
                    .cards
                    .map((card, key) => (<Card
                        key={key}
                        cardText={card.cardText}
                        isDraggable={card.isDraggable}
                        tabIndex={card.tabIndex}/>))
                }
            </ul>
        </article>
    );
};
<div class="card-deck">
  <div class="card bg-primary">
    <div class="card-body text-center">
      <p class="card-text">Some text inside the first card</p>
    </div>
  </div>
  <div class="card bg-warning">
    <div class="card-body text-center">
      <p class="card-text">Some text inside the second card</p>
    </div>
  </div>
  <div class="card bg-success">
    <div class="card-body text-center">
      <p class="card-text">Some text inside the third card</p>
    </div>
  </div>
  <div class="card bg-danger">
    <div class="card-body text-center">
      <p class="card-text">Some text inside the fourth card</p>
    </div>
  </div> 
</div>