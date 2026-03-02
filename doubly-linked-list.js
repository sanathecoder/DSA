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

    InsertAtBeg(value){
        let temp = new Node(value)
        if(this.head == null){
            this.head = temp
            return
        }
        temp.next = this.head
        this.head.prev = temp
        this.head = temp
    }

    InsertAtMid(value,x){
        let t = this.head
        while(t.next !== null){
            if(t.data == x){
                break
            }else{
                t = t.next
            }
        }
        let temp = new Node(value)
        temp.next = t.next
        t.next.prev = temp
        t.next = temp
        temp.prev = t

    }
    
    deleteLL(value){
        if(this.head == null){
            console.log('List is empty')
            return
        }
        let t = this.head
        if(t.data  == value){
            this.head = t.next
            this.head.prev = null
            return
        }
        while(t.next !== null){
            if(t.data == value){
                t.prev.next = t.next
                t.next.prev = t.prev
                return
            }else{
                t = t.next
            }
        }

        if(t.data == value){
            t.prev.next = null
        }


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
list.InsertAtEnd(50)
list.InsertAtBeg(5)
list.InsertAtMid(40,20)
list.deleteLL(5)
list.deleteLL(50)
list.printLL()