 class LinkedList {
 	constructor(value){
 		this.head=new Node(value, null);
 		this.current = this.head;
 		this.tail = this.head; 
 	}

	play(str) {
		//console.log(str);
		return str;
	}
	show() {
		let retString, pointer;
		retString = '';
		pointer = this.head;
		while(pointer) {
			retString += pointer.value + " ";
			pointer = pointer.next;
		}
		return retString;
	}
	insert(value) {
		let node = new Node(value,null);
		if(this.current.next){
			let temp = this.current.next;
			node.next = temp;
			this.current.next = node;
		} else {
			this.current.next=node;
			this.tail = node;

		}

	}
	add(value) {
		let node = new Node(value,null);  //1,2 3
		this.tail.next = node;		// 3.next = 4;
		this.tail = node;			// this.tail = 4;
	}

	move() {
		if (this.current.next){
			this.current = this.current.next;
		}
	}

	getCurrent() {
		return this.current;
	}
} 

class Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

export default {LinkedList, Node};

