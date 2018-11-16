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

// test('test move', ()=> {
//     let tst = new LinkedList('first', 10);
//     tst.move();
//     expect(tst.current).toBe(tst.head);
//     expect(tst.current.subject).toBe('first');
//     tst.add('second',20);
//     tst.add('third',30);
//     tst.move();
//     expect(tst.current.subject).toBe('second');
//     tst.move();
//     expect(tst.current.subject).toBe('third');

// })

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

