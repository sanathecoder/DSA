class Node{
    constructor(value){
        this.data = value
        this.left = null
        this.right = null
    }

    insert(root, value){
        if(root == null){
            return new Node(value)
        }else if(root.data == value){
            return root
        }else if(root.data > value){
           root.left = this.insert(root.left, value)
        }else{
           root.right = this.insert(root.right, value)
        }
        return root
    }


    InOrder(root){
        if(root!= null){
            this.InOrder(root.left)
            console.log(root.data , "  ")
            this.InOrder(root.right)
        }
    }
}

let root = new Node(20)
root.left = new Node(15)
root.right = new Node(30)
root.left.left = new Node(12)
root.left.right = new Node(18)
root.InOrder(root)