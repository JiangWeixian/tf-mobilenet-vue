<template>
  <div class="toast-wrapper z-depth-3">
    <p class="toast-content">
      {{ content }}
    </p>
  </div>
</template>

<script>
    export default {
      name: "toast",
      props: {
        content: {
          type: String,
          required: true
        }
      }
    }
</script>

<style lang="stylus" scoped>
@import "Toast.styl";
</style>
