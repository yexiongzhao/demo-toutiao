export default {
  updateTokenInfo(state, payload) {
    // 把提交过来的 payload 对象，作为 tokenInfo 的值
    state.tokenInfo = payload
    // 测试 state 中是否有数据
    console.log(state)
  }
}
