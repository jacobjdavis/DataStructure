class LLNode {
    // {prio: 10, value: A}
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    prio() {
        return this.data.prio;
    }

    printme() {
        console.log(this.data.value);
    }
}

const head = Symbol("head");
class LL {
    constructor() {
        this[head] = null;
    }

    push(data) {
        /* PUSH(HEAD, DATA, PRIORITY)
        Step 1: Create new node with DATA and PRIORITY
        Step 2: Check if HEAD has lower priority. If true follow Steps 3-4 and end. Else goto Step 5.
        Step 3: NEW -> NEXT = HEAD
        Step 4: HEAD = NEW
        Step 5: Set TEMP to head of the list
        Step 6: While TEMP -> NEXT != NULL and TEMP -> NEXT -> PRIORITY > PRIORITY
        Step 7: TEMP = TEMP -> NEXT
        [END OF LOOP]
        Step 8: NEW -> NEXT = TEMP -> NEXT
        Step 9: TEMP -> NEXT = NEW
        Step 10: End */

        const newNode = new LLNode(data); // 1
        if (!this[head]) {
            this[head] = newNode;
            return;
        }
        if (this[head].prio() > newNode.prio()) {
            newNode.next = this[head]; // 3
            this[head] = newNode; // 4
        }
        else {
            let temp = this[head];
            while (temp.next !== null && temp.next.prio() < newNode.prio()) {
                temp = temp.next;
            }
            newNode.next = temp.next;
            temp.next = newNode;
        }
    }

    pop() {
        let temp = this[head];
        this[head] = this[head].next;
        return temp;
    }

    traverse() {
        let current = this[head];
        while(current !== null) {
            current.printme();
            current = current.next;
        }
    }
}

let myLL = new LL;
myLL.push({prio: 20, value: "A"});
myLL.push({prio: 10, value: "B"});
myLL.push({prio: 15, value: "C"});
myLL.push({prio: 100, value: "D"});
myLL.traverse();