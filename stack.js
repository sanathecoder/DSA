class stack{
    constructor(){
        this.s  = []
    }

    length(){
        return this.s.length
    }

    push(value){
        this.s.push(value)
    }

    peek(){
        if(this.s.length === 0){
            throw new Error("Stack is empty");
        
        }else{
            return this.s[this.s.length - 1]
        }
    }
    pop(){
         return this.s.pop()
    }
}

let stk = new stack()
stk.push(10)
stk.push(20)
stk.push(30)
stk.push(40)
stk.push(50)

console.log(stk.length())
console.log(stk.peek())
console.log(stk.pop())
console.log(stk.length())
console.log(stk.peek())

