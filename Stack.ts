class StackNode<T> {
    value: T;
    next: StackNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class Stack<T> {
    private head: StackNode<T> | null;

    constructor(){
        this.head = null;
    }

    push(value: T): void {
        const newNode = new StackNode<T>(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    pop(): T | null {
        if (!this.head) {
            return null;
        }        
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
}

const LittleMountain = new Stack<number>();
LittleMountain.push(1);
LittleMountain.push(2);
LittleMountain.push(3);
