<template>
  <button :class="[
      'te-button',
      typeStyle(type),
      sizeStyle(size),
      { 'te-button--disabled': disabled }
    ]"
    :type="nativeType"
    :disabled="disabled"
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
    type: String,
    size: String,
    disabled: Boolean,
    loading: Boolean,
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  setup (props, ctx) {
    // 点击监听
    function handleClick (e) {
      if (props.disabled) return
      ctx.emit('click', e)
    }
    return {
      typeStyle,
      sizeStyle,
      handleClick,
      handleMousedown
    }
  }
}
// 按钮类型样式
function typeStyle (type) {
  const typeMaven = ['primary', 'danger', 'warning', 'success', 'dark']
  let typeStyles = ''
  if (type && typeMaven.includes(type)) {
    typeStyles = `te-button--${type}`
  }
  return typeStyles
}
// 按钮大小样式
function sizeStyle (size) {
  const sizeMaven = ['lg', 'sm', 'xs']
  let sizeStyle = ''
  if (size && sizeMaven.includes(size)) {
    sizeStyle = `te-button--${size}`
  }
  return sizeStyle
}
// 鼠标点击事件监听
let timer = null
function handleMousedown (e) {
  e.preventDefault()
  if (timer) {
    clearTimeout(timer)
  }
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

  timer = setTimeout(function () {
    ripple.remove()
    clearTimeout(timer)
  }, 800)
}
</script>
