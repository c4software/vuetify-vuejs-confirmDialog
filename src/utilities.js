export const cloneObj = function (obj) {
    return Object.assign({}, obj)
}

export const mergeObjs = function () {
    let values = []
    for (let i = 0; i < arguments.length; i++){
        values.push(arguments[i])
    }
    return Object.assign(...(values.map(cloneObj)))
}