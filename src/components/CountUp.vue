<template>
  <span v-view.once="startCount">{{ Math.round(count) }}</span>
</template>
<script>

export default {
  props: ['value'],
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    async startCount() {
      const step = this.value / 50;
      console.log(step);
      while (this.count <= this.value) {
        await new Promise(resolve => setTimeout(resolve, 20));
        this.count = this.count+ step;
        if (this.count > this.value) {
          this.count = this.value;
        }
      }
    }
  },
}

</script>