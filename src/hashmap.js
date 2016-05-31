/**
 * Create a basic iterable hash map
 *
 * @param {...Object} props
 * @return {Object}
 * @api public
 */
export default function hashmap(...props) {
    // Create an object with no prototype to avoid
    // name collisions with potential properties
    const map = Object.create(null, {
        // Add support for the iterator protocol
        // via the `@@iterator` method
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
    // If any object parameters are provided, merge
    // their properties with the map
    if (props.length) {
        Object.assign(map, ...props);
    }
    return map;
}
