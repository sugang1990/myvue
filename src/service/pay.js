import fetch from '../tool/fetch'
/**
 * 获取支付信息列表
 */

export const getPayList = () => fetch('http://localhost:3000/test', {
  type: '1'
})
export const test = type => fetch('http://localhost:3000/test', {
  type: type
})

export const test2 = (type, name) => fetch('http://localhost:3000/test', {
  type: type,
  name: name
})
