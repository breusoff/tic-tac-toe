import TodoAny from "src/types/TodoAny";

/**
 * Глубоко сравнивает два объекта
 */
function isEqual(value: TodoAny, other: TodoAny): boolean {
    // Get the value type
    const type = Object.prototype.toString.call(value);

    // If the two objects are not the same type, return false
    if (type !== Object.prototype.toString.call(other)) return false;

    // If items are not an object or array, return false
    if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

    // Compare the length of the length of the two items
    const valueLen =
        type === "[object Array]" ? value.length : Object.keys(value).length;
    const otherLen =
        type === "[object Array]" ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;

    return JSON.stringify(value) === JSON.stringify(other);
}

export default isEqual;
