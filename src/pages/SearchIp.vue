<template>
  <div id="search-ip">
    <div>
      <p v-text="ip">ここにIPが表示されます</p>
    </div>
    <div>
      <input @click="getIp" type="button" value="IPを取得">
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchlp",
  data() {
    return {
      ip: ''
    }
  },
  methods: {
    getIp() {
      this.ip = 'IPを取得しています';
      this.$axios.get('https://httpbin.org/get')
        .then((response) => {
          this.ip = response.data.origin
        }).catch((reason) => {
          this.ip = 'IPの取得に失敗しました';
        });
    }
  }
}
</script>

<style scoped>

</style>
