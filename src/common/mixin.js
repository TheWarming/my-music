//解决推荐/热门/搜索有时候无法滑动的问题
export const autoRefreshMixin = {
  activated () {
    this.$refs.scroll.refresh()
  }
}