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
Circularlist.printLL()
