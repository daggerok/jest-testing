export default class LinkedList {

  constructor() {
    this.next = null;
  }

  hasNext = () => !!this.next;
}
