import React, { Component } from 'react';
import LinkedList from './LinkedList';

class LinkedListComp extends Component {
    constructor() {
        super();
        this.state = {
            display: 'Display text'
        }
        this.ll = null;
        // this.addll = this.addll.bind(this);
        // this.newll = this.newll.bind(this);
        // this.show = this.show.bind(this);
        // this.next = this.next.bind(this);
        // this.first = this.first.bind(this);

    }

    updateCurrent = () => {
        this.setState({display: this.ll.showCurrent()});
    }

    inputGet = () => {
        let sub = document.getElementById('subin').value;
        let amt = document.getElementById('amtin').value;
        return [sub,amt];
    }

    newll = () => {
        this.ll = new LinkedList(...this.inputGet());
        this.show();
    }

    show = () => {
        if(this.ll){
            this.setState({display: this.ll.show()});
        }
        else {
            alert('No Linked List Exists!');
        }
    }

    addll = () => {
       if(this.ll){
            this.ll.add(...this.inputGet());
            this.show();
       } else {
           
       }
    }

    first = () => {
        if(this.ll){
            this.ll.resetCurrent();
            this.updateCurrent();
        } else {
            
        }
    }

    next = () => {
        if(this.ll){
            this.ll.moveForward();
            this.updateCurrent();
        } else {
            alert('No Linked List Exists!');
        }
    }

    prev = () => {
        if(this.ll){
            this.ll.moveBack();
            this.updateCurrent();
        }
    }
    
    last = () => {
        if(this.ll){
            this.ll.tailCurrent();
            this.updateCurrent();
        }
    }

    insert = () => {
        if(this.ll){
            this.ll.insert(...this.inputGet());
            this.show();
        }

    }

    delete = () => {
        if(this.ll){
            this.ll.delete();
            this.show();
        }
    }

    render() {
        return(
            <div>
                <h2>Hello World</h2>
                <div>
                    <button onClick={this.newll}>New</button>
                    <button onClick={this.addll}>Add</button>
                    <button onClick={this.insert}>Insert</button>
                    <button onClick={this.delete}>Delete</button>
                    <br/>
                    Subject: <input id='subin'></input> Amount: <input id='amtin'></input>
                    <br/>
                    <button onClick={this.first}>First</button>
                    <button onClick={this.next}>Next</button>
                    <button onClick={this.prev}>Prev</button>
                    <button onClick={this.last}>Last</button>
                    <br/>
                    <button onClick={this.show}>Show All</button>
                    <div id='display'>{this.state.display}</div>
                </div>
            </div>
        );
    }   
}

export default LinkedListComp;