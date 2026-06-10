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

    search(root, value){
        if(root == null){
           console.log("element not found")
        }else if(root.data == value){
            console.log("element found")
        }else if(root.data > value){
           this.search(root.left, value)
        }else{
           this.search(root.right, value)
        }
        return root
    }

    get_successor(root){
        let curr = root.right
        while(curr !== null && curr.left !== null){
            curr = curr.left
        }
        return curr
    }

    // deletion 

    delete(root,value){
        if(root == null){
            return root
        }
         if(root.data > value){
           root.left = this.delete(root.left,value)
        }
        if(root.data ){
            root.right = this.delete(root.right,value)
        }else{
            if(root.left == null){
                return root.right
            }
            if(root.right == null){
                return root.left
            }
            else{
                let succ = this.get_successor(root)
                root.data = succ.data
                root.left = this.delete(root.right,succ.data)
            }
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

let tree = new Node()

let root = tree.insert(null,20)
root =  tree.insert(root, 15)
root =  tree.insert(root, 30)
root =  tree.insert(root, 40)
root =  tree.insert(root, 12)
root =  tree.insert(root, 18)
root =  tree.insert(root, 25)
root =  tree.insert(root, 50)

root.InOrder(root)
root.search(root,18)
root.search(root,80)