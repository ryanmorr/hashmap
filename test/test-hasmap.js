import { expect } from 'chai';
import hashmap from '../src/hashmap';

describe('hashmap', () => {
    it('should be an object', () => {
        const map = hashmap();
        expect(map).to.be.an('object');
    });

    it('should support assigning and reading properties', () => {
        const map = hashmap();
        map.foo = 1;
        map.bar = 2;

        expect(map['foo']).to.equal(1); // eslint-disable-line dot-notation
        expect(map.bar).to.equal(2);
    });

    it('should support enumeration', () => {
        const map = hashmap();
        map.foo = 1;
        map.bar = 2;

        let i = 0;
        const keys = Object.keys(map);
        for (const prop in map) {
            expect(prop).to.equal(keys[i]);
            expect(map[prop]).to.equal(map[keys[i]]);
            i++;
        }
    });

    it('should not have a prototype or inherited properties/methods', () => {
        const map = hashmap();
        const props = [
            'isPrototypeOf',
            'hasOwnProperty',
            'toLocaleString',
            'propertyIsEnumerable',
            'toString',
            'valueOf',
            'constructor'
        ];

        expect(Object.getPrototypeOf(map)).to.equal(null);
        expect(props.every(key => key in map)).to.equal(false);
    });

    it('should allow object literal as an argument to populate the map with its properties', () => {
        const map = hashmap({foo: 1, bar: 2});
        expect(map).to.eql({foo: 1, bar: 2});
    });
});
