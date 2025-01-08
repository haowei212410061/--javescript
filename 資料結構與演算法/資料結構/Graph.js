//以下的演算法可以從任意節點開始
//深度優先: 如果該節點相鄰的兩個節點都已經走過了話 就退回到前面一個節點
//廣度優先:
/**
 * 1. 先找到一個起始位置的節點
 * 2. 找到該節點相鄰的節點 找到之後就把相鄰的節點標成灰色
 * 3. 如果該節點相鄰的節點都走過的話 就找到佇列的下一個節點 重複第二個步驟
 */

//BFT code 
// 虛擬碼:
// BFT(starter):
//     let queue be a new queue;
//     queue.push(starter);
//     mark starter as visited;
//     while queue.length is not;
//         firstNode = queue.dequeue();
//         write firstNode to the result list;
//         for each neighbor of firstNode:
//             if neighbor has not been visited: 如果節點還沒被拜訪過
//                 queue.push(neighbor);  先把這個節點push到佇列裡面
//                 mark neighbor as visited   把相鄰的節點標記成拜訪過的
//     return result
class Node{
    constructor(value){
        this.value = value;
        this.neighbors = [];
        this.visited = false;

    }

    addNeighbor(n){
        this.neighbors.push(n)
    }
}




let result = []
function BFT(starter){
    let queue = [];
    queue.push(starter);

    starter.visited = true;
    while(queue.length !== 0){
        let firstNode = queue.shift();
        result.push(firstNode)
        firstNode.neighbors.forEach(neighbor=>{
            if(!neighbor.visited){
                neighbor.visited = true;
                queue.push(neighbor)
            }
        })
    }
    return result
}
