class Queue{
    constructor(){
        this.items = []
    }

    IsEmpty(){
        return this.items.length === 0
    }

    Insert(value){
         this.items.push(value)
    }

    Delete(){
        if(this.IsEmpty()){
            console.log('Queue is empty')
        }else{
            return this.items.shift()
        }
    }
}

let q = new Queue()
q.Insert(10)
q.Insert(20)
q.Insert(30)
console.log(q.Delete())
console.log(q.Delete())
console.log(q.Delete())
q.Delete()
