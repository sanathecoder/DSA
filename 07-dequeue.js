class dequeue{
    constructor(){
        this.items = []
    }

    IsEmpty(){
        return this.items.length === 0
    }

    InsertAtEnd(value){
        this.items.push(value)
    }

    DeleteAtFront(){
        if(this.IsEmpty()){
            console.log('DeQueue is Empty')
        }else{
            return this.items.shift()   // shift remove element from the start
        }
    }
    InsertAtFront(value){
        this.items.unshift(value)    // add element to the front
    }

    deleteAtend(){
        if(this.IsEmpty()){
            console.log('DeQueue is Empty')
        }else{
       return this.items.pop()   // remove element from the end
    }
    }
}

let dq = new dequeue()
dq.InsertAtFront(10)
dq.InsertAtFront(20)
dq.InsertAtEnd(30)
dq.InsertAtFront(40)
console.log(dq.deleteAtend())
console.log(dq.deleteAtend())
