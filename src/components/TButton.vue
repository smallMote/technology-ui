<template>
  <button
    :class="[
      't-button',
      typeStyle(type),
      sizeStyle(size),
      { 't-button--disabled': disabled },
      { 'is-circle': circle !== undefined }
    ]"
    :type="nativeType"
    :disabled="disabled"
    @click="handleClick"
    @mousedown.capture="handleMousedown"
  >
    <span v-on:stop.prevent v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import $ from "jquery"
import { defineComponent } from "vue";
export default defineComponent({
  name: 'TButton',
  props: {
    type: String,
    size: String,
    disabled: Boolean,
    loading: Boolean,
    circle: String,
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  setup(props, ctx) {
    // 点击监听
    function handleClick (e: any) {
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
})

// 类型className
function typeStyle(type: string): string {
  const typeMaven: Array<string> = ['primary', 'danger', 'warning', 'success', 'dark', 'purple']
  let typeStyles: string = ''
  if (type && typeMaven.includes(type)) {
    typeStyles = `t-button--${type}`
  }
  return typeStyles
}

// 大小className
function sizeStyle(size: string): string {
  const sizeMaven: Array<string> = ['lg', 'sm', 'xs']
  let sizeStyle: string = ''
  if (size && sizeMaven.includes(size)) {
    sizeStyle = `t-button--${size}`
  }
  return sizeStyle
}

// 鼠标按压监听
let timer: undefined | number = undefined
function handleMousedown(e: any) {
  e.preventDefault()
  if (timer) {
    clearTimeout(timer)
  }
  let self: any = $(e.target)
  if (self[0].nodeName !== 'BUTTON' || !self.hasClass('t-button')) {
    // self = $(e.target.parentNode)
    self = self.parents('button.t-button')
  }
  // let ripple = null
  let eWidth: number = 0
  let eHeight: number = 0
  let size = 0
  let rippleX = 0
  let rippleY = 0
  if (self.find('.ripple').length === 0) {
    self.prepend('<span class="ripple"></span>')
  }
  let ripple = self.find('.ripple')
  ripple.removeClass('animated')
  eWidth = self.outerWidth() || 0
  eHeight = self.outerHeight() || 0
  size = Math.max(eWidth, eHeight)
  ripple.css({ width: size, height: size })
  rippleX = parseInt((e.pageX - self.offset().left) + '') - (size / 2)
  rippleY = parseInt((e.pageY - self.offset().top) + '') - (size / 2)

  ripple.css({ top: rippleY + 'px', left: rippleX + 'px' }).addClass('animated')

  timer = setTimeout(function () {
    ripple.remove()
    clearTimeout(timer)
  }, 800)
}
</script>
