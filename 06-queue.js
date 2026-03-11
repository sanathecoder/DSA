class Queue{
    constructor(){
        this.items = []
    }

    IsEmpty(){
        return this.items.length === 0
    }

    insert(value){
        this.items.insert(value)
    }
    
}