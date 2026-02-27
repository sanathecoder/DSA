// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Singly Linked List class
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(value) {
        let temp = new Node(value);

        if (this.head !== null) {
            let t1 = this.head;
            while (t1.next !== null) {
                t1 = t1.next;
            }
            t1.next = temp;
        } else {
            this.head = temp;
        }
    }

    insertAtBeg(value){
        let temp = new Node(value)
        temp.next = this.head
        this.head = temp
    }

    printLL() {
        let t1 = this.head;

        while (t1.next !== null) {
            console.log(t1.data);
            t1 = t1.next;
        }
        console.log(t1.data)
    }
}

// Create object
let list = new SinglyLinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtBeg(5)

list.printLL();