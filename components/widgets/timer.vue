<template>
  <div>
    <div class="timer">
      <p id="demo">
        <span>
          <span class="timer-num">{{ days }}</span>
          <span class="padding-l">:</span>
          <span class="timer-cal">天</span>
        </span>
        <span>
          <span class="timer-num">{{ hours }}</span>
          <span class="padding-l">:</span>
          <span class="timer-cal">时</span>
        </span>
        <span>
          <span class="timer-num">{{ minutes }}</span>
          <span class="padding-l">:</span>
          <span class="timer-cal">分</span>
        </span>
        <span>
          <span class="timer-num">{{ seconds }}</span>
          <span class="timer-cal">秒</span>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  props: ['date'],
  data() {
    return {
      timerdate: Math.trunc(new Date(this.date).getTime() / 1000),
      now: Math.trunc(new Date().getTime() / 1000)
    }
  },
  computed: {
    seconds() {
      return (this.timerdate - this.now) % 60
    },
    minutes() {
      return Math.trunc((this.timerdate - this.now) / 60) % 60
    },
    hours() {
      return Math.trunc((this.timerdate - this.now) / 60 / 60) % 24
    },
    days() {
      return Math.trunc((this.timerdate - this.now) / 60 / 60 / 24)
    }
  }
}
</script>
