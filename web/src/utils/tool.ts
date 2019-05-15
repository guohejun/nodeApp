const tool = {
  // val: name对应的值不存在，默认返回val
  getStorage (name: string, val: object): object {
    let v: object = sessionStorage.getItem(name)
    let w: object
    if (v == null) {
      return val
    }
    try {
      w = JSON.parse(v)
      return w
    } catch (e) {
      return v
    }
  },
  setStorage (name: string, data: object): object {
    sessionStorage.setItem(name, JSON.stringify(data))
    return data
  }
}
export default tool
