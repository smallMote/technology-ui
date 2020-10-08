<template>
  <div class="btn-group btn-type-group">
    <h1>Button Type Styles</h1>
    <t-button>Button</t-button>
    <t-button type="primary">Button</t-button>
    <t-button type="danger">Button</t-button>
    <t-button type="warning">Button</t-button>
    <t-button type="success">Button</t-button>
    <t-button type="dark">Button</t-button>
    <t-button type="purple">Button</t-button>
  </div>
  <div class="btn-group btn-size-group">
    <h1>Button Size Styles</h1>
    <t-button size="lg">Button</t-button>
    <t-button type="primary">Button</t-button>
    <t-button size="sm" type="danger">Button</t-button>
    <t-button size="xs" type="warning">Button</t-button>
  </div>
  <div class="btn-group btn-type-group">
    <h1>Button Circle Styles</h1>
    <t-button circle size="lg">B</t-button>
    <t-button circle type="primary">B</t-button>
    <t-button circle size="sm" type="danger">B</t-button>
    <t-button circle size="xs" type="warning">B</t-button>
    <t-button circle type="purple" size="lg">B</t-button>
  </div>
  <div class="btn-group btn-size-group">
    <h1>Button Disabled Styles</h1>
    <t-button :disabled="true">Button</t-button>
    <t-button :disabled="true" type="primary">Button</t-button>
    <t-button :disabled="true" type="danger">Button</t-button>
    <t-button :disabled="true" type="warning">Button</t-button>
    <t-button :disabled="true" type="success">Button</t-button>
    <t-button :disabled="true" type="dark">Button</t-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  }
});
</script>
