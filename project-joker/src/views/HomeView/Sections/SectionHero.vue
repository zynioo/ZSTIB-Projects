<template>
  <div class="Hero">
    <div class="Hero-content">
      <div class="Hero-content-left">
        <slot name="leftBlock"> </slot>
      </div>
      <div class="Hero-content-right">
        <slot name="rightBlock"> </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
</script>

<style>
.Hero {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--size-10);
  .Hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .Hero-content-right {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
@media (max-width: 986px) {
  .Hero-content {
    flex-direction: column !important;
    align-items: center;
    .Hero-content-left,
    .Hero-content-right {
      text-align: center;
    }
    .logo {
      height: auto;
    }
  }
}
</style>
