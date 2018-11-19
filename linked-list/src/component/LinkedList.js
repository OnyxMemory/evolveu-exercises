class Node {
    constructor(subject,amount){
        this.subject = subject;
        this.amount = amount;
        this.forwardNode = null;
        this.backNode = null;
    }

}

class LinkedList {
    constructor(subject,amount){
        this.head = new Node(subject,amount);
        this.current = this.head;
        this.tail = this.head;
    }

    show() {
        let tmpCur = this.current;
        let retString = ''
        if (this.current==this.head){
            retString = `[${this.head.subject} ${this.head.amount}]`
        } else {
            retString = `${this.head.subject} ${this.head.amount}`
        }
        this.resetCurrent();
        while(this.current.forwardNode){
            this.moveForward();
            if(this.current == tmpCur){
                retString +=`, [${this.current.subject} ${this.current.amount}]`;
            } else {
                retString +=`, ${this.current.subject} ${this.current.amount}`;
            }
        }
        this.current=tmpCur;
        return retString;
        

    }

    add(subject, amount) {
        let node = new Node (subject, amount);
        node.backNode = this.tail;
        this.tail.forwardNode = node;
        this.tail = node;
    }
    insert(value, amount) {
		let node = new Node(value,amount);	///1,2,3				
        node.forwardNode = this.current.forwardNode;
        node.backNode = this.current;
        if(!this.current.forwardNode) {
            this.tail=node;
        }
        this.current.forwardNode = node;


    }

    delete() {
        if(this.current.backNode && this.current.forwardNode){
            let tmpBack = this.current.backNode;
            let tmpForward = this.current.forwardNode;
            tmpBack.forwardNode = tmpForward;
            tmpForward.backNode = tmpBack;
            this.current = tmpBack;
        } else if(this.current.backNode){
            let tmpBack = this.current.backNode;
            tmpBack.forwardNode = null;
            this.tail = tmpBack;
            this.current = this.tail;
        } else if(this.current.forwardNode){
            let tmpForward = this.current.forwardNode;
            tmpForward.backNode = null;
            this.head = tmpForward;
            this.current = this.head;
        } else {
            alert("Don't delete the Last Node")
        }
    }
    
    resetCurrent() {
        this.current=this.head;
    }

    tailCurrent() {
        this.current=this.tail;
    }

    moveForward() {
        if(this.current.forwardNode){
            this.current=this.current.forwardNode;
        }
    }

    moveBack() {
        if(this.current.backNode) {
            this.current = this.current.backNode;
        }
    }

    showCurrent() {
        return `${this.current.subject} ${this.current.amount}`
    }

}
export default LinkedList;