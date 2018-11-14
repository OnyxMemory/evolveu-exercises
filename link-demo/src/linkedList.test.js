
import link from './linkedList';

test('returns string', () => {
	let tst = new link.LinkedList();
	expect(tst.play('hello')).toBe('hello');
});

// test('show', ()=> {
// 	let tst = new link.LinkedList
// 	expect(tst.show()).toBe("first");
// });

test('first', ()=> {
	//let tst = new link.LinkedList("first");
	//expect(tst.show()).toBe("first");
	let tst = new link.LinkedList("another");
	//expect(tst.show()).toBe("another");
	tst.add("new");
	expect(tst.show()).toBe("another new ");
});