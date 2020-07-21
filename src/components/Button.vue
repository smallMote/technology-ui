<template>
  <button :class="[
      'te-button',
      typeStyle(type)
    ]"
    @click="handleClick"
    @mousedown.capture="handleMousedown"
  >
    <span v-on:stop.prevent v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'TeButton',
  props: {
    type: String
  },
  setup (props, ctx) {
    // 点击监听
    function handleClick (e) {
      // console.log(e.target)
      ctx.emit('click', e)
    }
    return {
      typeStyle,
      handleClick,
      handleMousedown
    }
  }
}
// 按钮类型样式
function typeStyle (type) {
  const typeMaven = ['primary', 'danger', 'warning', 'success']
  let typeStyles = ''
  if (type && typeMaven.includes(type)) {
    typeStyles = `te-button--${type}`
  }
  return typeStyles
}
// 鼠标点击事件监听
function handleMousedown (e) {
  e.preventDefault()
  let self = $(e.target)
  if (self[0].nodeName !== 'BUTTON' || !self.hasClass('te-button')) {
    // self = $(e.target.parentNode)
    self = self.parents('button.te-button')
  }
  let ripple = null
  let eWidth = 0
  let eHeight = 0
  let size = 0
  let rippleX = 0
  let rippleY = 0
  if (self.find('.ripple').length === 0) {
    self.prepend('<span class="ripple"></span>')
  }
  ripple = self.find('.ripple')
  ripple.removeClass('animated')
  eWidth = self.outerWidth()
  eHeight = self.outerHeight()
  size = Math.max(eWidth, eHeight)
  ripple.css({ width: size, height: size })
  rippleX = parseInt(e.pageX - self.offset().left) - (size / 2)
  rippleY = parseInt(e.pageY - self.offset().top) - (size / 2)

  ripple.css({ top: rippleY + 'px', left: rippleX + 'px' }).addClass('animated')

  const timer = setTimeout(function () {
    ripple.remove()
    clearTimeout(timer)
  }, 800)
}
</script>
