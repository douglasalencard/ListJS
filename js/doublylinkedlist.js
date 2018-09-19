class DoublyLinkedList extends LinkedList{
    constructor(){
        super();
        this.tail = null;
    }
    
    append(element){
        let node = new Node(element);
        if(this.isEmpty()){
            this.head=node;
        }else{
            this.tail.next=node;
            node.previous=this.tail;
        }
        this.tail=node;
        this.lenght++
    }

    insert(position, element){
        if(position>=0 && position<=this.lenght){
            let node = new Node(element)
            let current = this.head
            let index = 0

            if(position==0){

                if (!this.head){
                    this.head = node
                    this.tail = node
                }else{
                    node.next=this.head
                    this.head.previous = node
                    this.head = node
                }

            }else if(position==this.lenght){
                node.previous = this.tail
                this.tail.next = node
                this.tail = node
            }else{
                while(index<position){
                    index++
                    current=current.next
                }
                current.previous.next = node
                node.previous = current.previous
                current.previous = node
            }

            this.lenght++
            return true
        }
        return false
    }

    removeAt(position) {
        
    }
}