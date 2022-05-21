<template>
    <NavHeaderVue></NavHeaderVue>
    <NavMainVue></NavMainVue>
    <NavFooterVue></NavFooterVue>
</template>

<script>
    import {defineComponent, ref, reactive, toRefs} from 'vue'
    import NavHeaderVue from '@/components/navHeader/NavHeader.vue'
    import NavMainVue from '@/components/navMain/NavMain.vue'
    import NavFooterVue from '@/components/navFooter/NavFooter.vue'
    
    export default defineComponent({
        name: 'Home',
        props: {
            
        },
        components: {
            NavHeaderVue,
            NavMainVue,
            NavFooterVue
        },
        setup(props, ctx) {
            
            return {

            }
        }
    })
</script>

<style lang="scss" scoped>

</style>