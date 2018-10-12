/**
 * 用于判断数据类型
 * @param {*} value 需要判断的数值
 */
const getType = (value) => {
  let typeStr = Object.prototype.toString.call(value)
  switch(typeStr) {
    case '[object Number]':
      return 'number'
    case '[object Object]':
      return 'object'
    case '[object Array]':
      return 'array'
    case '[object String]':
      return 'string'
    default:
      return 'other'
  }
}

/**
 * 用于实现数据深拷贝
 * @param {*} data 需要深拷贝的源数据
 */
const deepCopy = (data) => {
  let [type, target] = [getType(data)]
  if (type === 'object') {
    target = {}
    for(let key in data) {
      target[key] = deepCopy(data[key])
    }
  } else if (type === 'array') {
    target = []
    data.forEach((item, index) => {
      target[index] = deepCopy(item)
    })
  } else {
    return data
  }
  return target
}

export {
  deepCopy
}