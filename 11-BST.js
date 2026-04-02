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
            this.insert(root.left, value)
        }else{
           root.right = this.insert(root.right, value)
        }
    }
}