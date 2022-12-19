/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head){
        return head;
    }else{
        let headd = head; // set a reference to head of linked list
    if (headd === null) return;

    let currentNode = headd;
    let prevNode = null;
    let nextNode = null;
  
    // traverse list and adjust links
  while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
        nextNode = null;
    }
    headd = prevNode; // reset head
    if(head==null){
        return (headd);
    }else{
        return headd;
    }
  }
};