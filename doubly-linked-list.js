class Node{
    constructor(value=null){
        this.data = value
        this.prev = null
        this.next = null

    }
}

class DoublyLL{
    constructor(){
        this.head = null

    }

    InsertAtEnd(value){
        let temp = new Node(value)
        if(this.head == null){
            this.head = temp
            return
        }

        let t = this.head
        while(t.next !== null){
            t = t.next
        }

        t.next = temp
        temp.prev = t
    }

    printLL(){
        let t1 = this.head
        while(t1 !== null){
            console.log(t1.data)
            t1 = t1.next
        }

    }
}

let list = new DoublyLL()

list.InsertAtEnd(10)
list.InsertAtEnd(20)
list.InsertAtEnd(30)
list.printLL()