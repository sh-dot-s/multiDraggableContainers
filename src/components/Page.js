import React from 'react';
import setDraggable from './common/draggable';
import {Section} from './Section';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    cardText: "Text 1 D",
                    isDraggable: true,
                    tabIndex: 1
                },{
                    cardText: "Text 2 ND",
                    isDraggable: false,
                    tabIndex: 2
                }
            ]
        }
    }
    componentDidMount() {
        setDraggable();
    }
    render() {
        return (
            <div>
                <section id="MultipleContainers" className="MultipleContainers">
                    <Section containerId="1" containerName="Sample" cards = {this.state.cards}/>
                    <Section containerId="2" containerName="Sample2" cards = {this.state.cards}/>
                    <Section containerId="3" containerName="Sample3" cards = {this.state.cards}/>
                </section>
            </div>
        );
    }
}
