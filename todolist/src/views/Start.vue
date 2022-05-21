<template>
    <button @click="start">开始任务</button>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useRouter } from 'vue-router'
    export default defineComponent({
        name: 'start',
        setup(props, ctx) {
            let router = useRouter()

            let start = () => {
                router.push('/home')
            }

            return {
                start
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>