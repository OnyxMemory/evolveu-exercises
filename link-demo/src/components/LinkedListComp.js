import React, { Component } from 'react';
import linked from './linkedList';

class LinkedListComp extends Component {


    onNew(e) {
        let val = document.getElementById("newNodeTxt").value;
        //console.log('onNew',e);
        //console.log("value",val)
        let ll =new linked.LinkedList(val);
        console.log(ll.show())

    }

    render() {
        return (
            <div className="LinkedList">Hello World
                <br/>
                <button onClick={this.onNew}>New</button>
                <input id="newNodeTxt"></input>
            </div>
        )
    }
}

export default LinkedListComp;