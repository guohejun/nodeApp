/**
 * 验证手机号
 */
export function valiPhone (rule, value, callback) {
  if (value === '' || /^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value)) {
    callback()
  } else {
    callback(new Error('手机号码格式不正确'))
  }
}
