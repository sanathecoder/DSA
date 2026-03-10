class Node{
    constructor(data){
        this.data = data
        this.head = null
    }
}

class circularSingleLinkedlist{
    constructor(){
        this.head = null
    }

    InsertAtEnd(value){
        let temp = new Node(value)
        if(this.head !== null){
            let t1 = this.head
            while(t1.next !== this.head){
                t1 = t1.next
            }
            t1.next = temp
            temp.next = this.head
        }else{
            this.head = temp
            temp.next = this.head
        }
    }
    InsertAtBeg(value){
        let temp = new Node(value)
        // for empty list 
        if(this.head == null){
            this.head = temp
            temp.next = this.head
            return
        }

        // for non-empty list 
        let t1 = this.head
        if(this.head !== null){
            while(t1.next!== this.head){
                t1 = t1.next
            }
            temp.next = this.head
            t1.next = temp
                this.head = temp
        }
    }

    InsertAtMid(value,x){
        let temp = new Node(value)
        let t1 = this.head
        while(t1.next !== this.head){
            if(t1.data == x){
                temp.next = t1.next
                t1.next = temp
                return
            }
            t1 = t1.next
        }
    }

     deleteCircularLL(value){
        let t1 = this.head
        let prev = t1
        // Head delete case
if(this.head.data == value){

    // Single node case
    if(t1.next === this.head){
        this.head = null
        return
    }

    // Find last node
    let last = this.head
    while(last.next !== this.head){
        last = last.next
    }

    this.head = t1.next
    last.next = this.head
    return
}

        while(t1.next !== this.head){
            if(t1.data == value){
                prev.next = t1.next
                return
            }else{
                prev = t1
                t1 = t1.next
            }
        }

        if(t1.data == value){
            prev.next = this.head
        }
    }

    printLL(){
        let t1 = this.head
    while(t1.next !== this.head){
        console.log(t1.data)
        t1 = t1.next
    }  
    console.log(t1.data)
  }
}

let Circularlist = new circularSingleLinkedlist()
Circularlist.InsertAtEnd(20)
Circularlist.InsertAtEnd(40)
Circularlist.InsertAtEnd(60)
Circularlist.InsertAtBeg(10)
Circularlist.InsertAtBeg(30)
Circularlist.InsertAtBeg(70)
Circularlist.InsertAtMid(50,40)
Circularlist.deleteCircularLL(30)
Circularlist.printLL()
