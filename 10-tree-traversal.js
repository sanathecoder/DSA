class Node {
    constructor(value){
        this.data = value
        this.left = null
        this.right = null
    }
    preOrder(root){
        if(root !== null){
            console.log( root.data , " ")
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

     InOrder(root){
        if(root !== null){
            this.InOrder(root.left)
            console.log( root.data , " ")
            this.InOrder(root.right)
        }
    }

     postOrder(root){
        if(root !== null){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log( root.data , " ")
        }
    }
}

let root = new Node(1)
root.left = new Node(3)
root.right =  new Node(5)
root.left.left = new Node(2)
root.left.right = new Node(4)
root.right.right = new Node(8)
// root.postOrder(root)
// root.preOrder(root)
root.InOrder(root)