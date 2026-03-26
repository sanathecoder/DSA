class CircularQueue{
    constructor(size){
        this.size = size
        this.items = [null]*size
        this.front = this.rear = -1
    }
    enqueue(value){
        if( (this.rear + 1) % this.front ){
            console.log("Queue is full")
        }else if(this.front === -1){
            this.rear = this.front = 0
            this.items[this.rear] = value
        }else{
            this.rear = (this.rear + 1) % this.size
            this.items[this.rear] = value
        }
    }
}