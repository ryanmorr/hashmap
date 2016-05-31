// Cache `hasOwnProperty` from another context
const has = {}.hasOwnProperty;

/**
 * Merge properties with map
 *
 * @param {Object} map
 * @param {Object} props
 * @return {Object}
 * @api private
 */
function merge(map, props) {
    if ('assign' in Object) {
        return Object.assign(map, props);
    }
    for (const prop in props) {
        if (has.call(props, prop)) {
            map[prop] = props[prop];
        }
    }
}

/**
 * Create a basic hashmap
 *
 * @param {Object} props
 * @return {Object}
 * @api public
 */
export default function hashmap(props = null) {
    const map = Object.create(null);
    if (props) {
        merge(map, props);
    }
    return map;
}
