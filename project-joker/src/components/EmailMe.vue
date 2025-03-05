<template>
<router-link to="/Contact" class="btn btn-primary btn-lg px-4 me-md-2">Napisz do nas</router-link>
<!-- <a href="mailto:michal.zajac996@gmail.com" class="btn btn-primary btn-lg px-4 me-md-2">Napisz do nas</a> -->

</template>
<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

</script>
<style scoped>
.btn {
    margin-top: 5px;
    display: inline-block;
    padding: 0.8rem 1.3rem;
    color: #fff;
    font-size: 18px;
    transition: all 0.3s;
    position: relative;
    z-index: 1;
    cursor: pointer;
    font-weight: bold;
    border: none;
    border: 1px solid var(--primary);
    border-radius: 0;
}

.btn:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    z-index: -2;
}

.btn:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--dark);
    transition: all 0.3s;
    z-index: -1;
}

.btn:hover {
    color: var(--white);
}

.btn:hover:before {
    width: 100%;
}
</style>