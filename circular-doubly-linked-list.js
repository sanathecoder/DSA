class Node{
    constructor(info){
        this.data = info
        this.next = null
        this.prev = null
    }
}

class CircularDoublyLL{
    constructor(){
        this.head = null
    }

    InsertAtEnd(value){
        let temp = new Node(value)
        if(this.head === null){
            this.head = temp
            temp.next = temp
            temp.prev = temp
            return
        }
        let t = this.head
        while(t.next !== this.head){
            t = t.next
        }

        t.next = temp
        temp.prev = t
        temp.next = this.head
        this.head.prev = temp
       

    }

    PrintCLL(){
        let t1 = this.head
        while(t1.next !== this.head){
            console.log(t1.data)
            t1 = t1.next
        }
        console.log(t1.data)
    }    

}


let CircularDLL = new CircularDoublyLL()
CircularDLL.InsertAtEnd(10)
CircularDLL.InsertAtEnd(20)
CircularDLL.InsertAtEnd(30)
CircularDLL.PrintCLL()