function memoize(fn) {
    const cache = {}
    return function(...args) {
        const key = JSON.stringify(args)
        if (cache[key]) {
            return cache[key]
        }
        cache[key] = fn(...args)
        return cache[key]
    }
}