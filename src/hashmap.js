/**
 * Create a basic hashmap
 *
 * @param {...Object} props
 * @return {Object}
 * @api public
 */
export default function hashmap(...props) {
    const map = Object.create(null);
    if (props.length) {
        Object.assign(map, ...props);
    }
    return map;
}
