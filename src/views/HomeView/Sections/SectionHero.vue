<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start" >
          <slot name="leftBlock">
            
          </slot>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <slot name="rightBlock">

          </slot>
        </div>
      </div>
    </div>
    
  </template>
  
<script lang="ts" setup>
import EmailMe from "../EmailMe.vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
  
</script>
  
<style >

@media (max-width: 986px) {
  .col-md-10{
    margin-top: 4rem;
  }
    img{
      width: 435px;
      height: 355px;
    }
}
</style>
