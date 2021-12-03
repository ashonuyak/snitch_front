<template>
  <input type="checkbox" :id="id" :checked="checked" v-model="checked">
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    id: String,
  }
}
</script>

<style lang="scss" scoped>
</style>