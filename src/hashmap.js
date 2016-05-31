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
        Object.assign(map, props);
    }
    return map;
}
