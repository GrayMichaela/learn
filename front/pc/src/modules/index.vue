<template>
<v-map/>
    <!-- <router-view /> -->
</template>

<script>
import Vmap from '@/components/map/index'
    export default {
        components:{Vmap},
        mounted() {
            // this.$router.replace({
            //         name: "home"
            //     })
        }
    };
</script>