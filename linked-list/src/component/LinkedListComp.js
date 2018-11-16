import React, { Component } from 'react';
import LinkedList from './LinkedList';

class LinkedListComp extends Component {
    constructor() {
        super();
        this.state = {
            display: 'Display text'
        }
        this.ll = null;
        this.addll = this.addll.bind(this);
        this.newll = this.newll.bind(this);
        this.show = this.show.bind(this);

    }
    newll() {
        let sub = document.getElementById('subin').value;
        let amt = document.getElementById('amtin').value;

        this.ll = new LinkedList(sub,amt);
    }

    show() {
        if(this.ll){
            this.setState({display: this.ll.show()});
        }
        else {
            alert('No Linked List Exists!');
        }
    }

    addll() {
       if(this.ll){
            let sub = document.getElementById('subin').value;
            let amt = document.getElementById('amtin').value;
            this.ll.add(sub,amt);
       } else {
           alert('No Linked List Exists!');
       }
    }

    render() {
        return(
            <div>
                <h2>Hello World</h2>
                <div>
                    <button onClick={this.newll}>New Linked List</button>
                    <button onClick={this.addll}>Add Node</button>
                    <br/>
                    <input id='subin'></input><input id='amtin'></input>
                    <br/>
                    <button onClick={this.show}>Show All</button>
                    <div id='display'>{this.state.display}</div>
                </div>
            </div>
        );
    }   
}

export default LinkedListComp;