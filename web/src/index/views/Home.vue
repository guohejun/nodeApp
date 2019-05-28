<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="@/assets/logo.png"/>
    <h1>my name is {{name}}</h1>
  </div>
</template>

<script lang="ts">
import { setStorage, getStorage } from '@/utils/tool'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  name: string = ''
  init ():void {
    const userInfo = {
      name: 'Xiao Ming',
      age: 12,
      gender: 1
    }
    setStorage('pwd', '123456')
    setStorage('UserInfo', userInfo)
    const pwd = getStorage('pwd')
    const user = getStorage('UserInfo', {})
    this.name = user.name
  }
  mounted () {
    this.init()
  }
}
</script>

<style lang="less">
  .home {
    padding: 36px;
    .logo {
      width: 200px;
      height: 200px;
    }
  }
</style>
