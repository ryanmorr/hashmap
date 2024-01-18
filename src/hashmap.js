export default function hashmap(...props) {
    const map = Object.create(null, {
        [Symbol.iterator]: {
            enumerable: false,
            writable: false,
            configurable: false,
            value: () => ({
                items: Object.entries(map),
                next: function next() {
                    return {
                        done: this.items.length === 0,
                        value: this.items.shift()
                    };
                }
            })
        }
    });
    if (props.length) {
        Object.assign(map, ...props);
    }
    return map;
}
