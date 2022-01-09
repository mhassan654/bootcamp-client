<template>
    <div>
    <NavBar/>

    <slot></slot>
    </div>
</template>

<script>
import NavBar from '../utils/NavBar.vue';
export default{
    components: {
        NavBar,
    }

}
</script>