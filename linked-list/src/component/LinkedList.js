class Node {
    constructor(subject,amount){
        this.subject = subject;
        this.amount = amount;
        this.forwardNode = null;
    }

}

class LinkedList {
    constructor(subject,amount){
        this.head = new Node(subject,amount);
        //this.current = this.head;
        this.tail = this.head;
    }

    show() {
        //let tmpCur = this.current;
        let retString = `${this.head.subject} ${this.head.amount}`
        let current=this.head;
        while(current.forwardNode){
            //this.move();
            current = current.forwardNode;
            retString +=`, ${current.subject} ${current.amount}`;
        }
        //this.current=tmpCur;
        return retString;
        

    }

    add(subject, amount) {
        let node = new Node (subject, amount);
        this.tail.forwardNode = node;
        this.tail = node;
    }

    // move() {
    //     if(this.current.forwardNode){
    //         this.current=this.current.forwardNode;
    //     }
    // }

}
export default LinkedList;