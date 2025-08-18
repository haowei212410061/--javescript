function middleNode(head){
    let nodes = [];
    while(head){
        nodes.push(head);
        head = head.next;
    }
    const middle = Math.floor(nodes.length);
    return nodes[middle]
}