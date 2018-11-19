// test('returns string', () => {
// 	let tst = new link.LinkedList();
// 	expect(tst.play('hello')).toBe('hello');
// });
import LinkedList from './LinkedList';


test('hello world', () => {
    console.log('hello world');
});

// test('test creating node', () => {
//     let tst = new Node('subject',20)
//     expect(tst.subject).toBe('subject');
//     expect(tst.amount).toBe(20);
// });

test('test create linked list', () => {
    let tst = new LinkedList('first', 10);
    expect(tst.head.subject).toBe('first');
    expect(tst.head.amount).toBe(10);
    tst = new LinkedList('second', 20);
    expect(tst.head.subject).toBe('second');
    expect(tst.head.amount).toBe(20);
});

test('add to tail', ()=> {
    let tst = new LinkedList('first', 10);
    tst.add('second', 20);
    expect(tst.tail.subject).toBe('second');
    tst.add('third', 30);
    expect(tst.tail.subject).toBe('third');
});

test('test moveForward', ()=> {
    let tst = new LinkedList('first', 10);
    tst.moveForward();
    expect(tst.current).toBe(tst.head);
    expect(tst.current.subject).toBe('first');
    tst.add('second',20);
    tst.add('third',30);
    tst.moveForward();
    expect(tst.current.subject).toBe('second');
    tst.moveForward();
    expect(tst.current.subject).toBe('third');

});

test('test showCurrent', ()=> {
    let tst = new LinkedList('first', 10);
    tst.add('second', 20);
    tst.add('third', 30);
    tst.add('fourth', 40);

    tst.moveForward();
    expect(tst.showCurrent()).toBe('second 20');
});

test('test moveBack', () => {
    let tst = new LinkedList('first', 10);
    tst.add('second', 20);
    tst.add('third', 30);
    tst.add('fourth', 40);
    tst.moveForward();
    tst.moveForward();
    expect(tst.showCurrent()).toBe('third 30');
    tst.moveBack();
    expect(tst.showCurrent()).toBe('second 20');
});

// test('test linked list show', () => {
//     let tst = new LinkedList('first', 10);
//     expect(tst.show()).toBe('first 10');
//     tst = new LinkedList('second', 20);
//     expect(tst.show()).toBe('second 20');
// });

test('test linked list add and show', () => {
    let tst = new LinkedList('first', 10);
    expect(tst.show()).toBe('first 10');
    tst.add('second', 20);
    expect(tst.show()).toBe('first 10, second 20');
    tst.add('third', 30);
    expect(tst.show()).toBe('first 10, second 20, third 30');
});

test('test insert', () => {
    let tst = new LinkedList('first', 10);
    tst.add('second', 20);
    tst.add('third', 30);
    tst.add('fourth', 40);
    tst.moveForward();
    tst.moveForward();
    tst.insert('inserted',99);
    expect(tst.show()).toBe('first 10, second 20, third 30, inserted 99, fourth 40');
    tst.moveForward();
    tst.insert('alsoinserted', 234);
    expect(tst.show()).toBe('first 10, second 20, third 30, inserted 99, alsoinserted 234, fourth 40');
});

test('test delete', () => {
    let tst = new LinkedList('first', 10);
    tst.add('second', 20);
    tst.add('third', 30);
    tst.add('fourth', 40);
    tst.moveForward();
    tst.moveForward();
    tst.delete();
    expect(tst.show()).toBe('first 10, second 20, fourth 40');
    tst.moveBack();
    tst.delete();
    expect(tst.show()).toBe('second 20, fourth 40');
    expect(tst.head.subject).toBe('second');
    tst.moveForward();
    tst.delete();
    expect(tst.show()).toBe('second 20');
    expect(tst.tail.subject).toBe('second');
});

test('test reset current and tail', () => {
    let tst = new LinkedList('first', 10);
    tst.add('second', 20);
    tst.add('third', 30);
    
    expect(tst.current.subject).toBe('first');
    tst.moveForward();
    tst.moveForward();
    expect(tst.current.subject).toBe('third');
    tst.resetCurrent();
    expect(tst.current.subject).toBe('first');
    expect(tst.showCurrent()).toBe('first 10');
    tst.tailCurrent();
    expect(tst.showCurrent()).toBe('third 30');

});

