const EXPIRE_DAY = 1
/**
 * 存储值到localStorage
 * @param {string} key
 * @param value
 */
export const setStorage = (key: string, value: any): void => {
  const params = {
    date: new Date().getTime(),
    value
  }
  localStorage.setItem(key, JSON.stringify(params))
}
/**
 * 获取localStorage中的值
 * @param {string} key 键
 * @param val 默认返回值值
 * @param {number} day 过期天数 默认为1
 */
export const getStorage = (key: string, val: any = '', day: number = EXPIRE_DAY): any => {
  const v = localStorage.getItem(key)
  if (v === null) {
    return val
  }
  try {
    const vb = JSON.parse(v)
    if (new Date().getTime() - Number(vb.date) > 86400000 * day) {
      return null
    }
    return vb.value
  } catch (e) {
    return v
  }
}
export const removeStorage = (key: string): void => {
  localStorage.removeItem(key)
}
