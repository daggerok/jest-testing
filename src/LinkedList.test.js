import LinkedList from './LinkedList';

describe('Linked list', () => {

  test('should has null next reference in empty list', () => {
    let list = new LinkedList();
    expect(list.next).toBeDefined()
    expect(list.next).toBeNull()
  });

  test('should not has next on empty list', () => {
    let list = new LinkedList();
    expect(list.hasNext()).toBe(false)
  });
});
