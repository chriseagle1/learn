<template>
    <div class="startArea">
        <button @click="start">开始任务</button>
    </div>
    
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { useRouter } from 'vue-router'
    export default defineComponent({
        name: 'start',
        setup(props, ctx) {
            let router = useRouter()

            let start = () => {
                router.push({
                    name: 'home',
                })
            }

            return {
                start
            }
        }
    })
</script>

<style lang="scss" scoped>
    button {
        width: 200px;
        height: 100px;
        border: 0px;
    }
    button:active {
        color: #4FA9FD;
        border: 1px solid #4FA9FD
    }
    .startArea {
        margin-top: 100px;
        display: flex;
        justify-content: center;
    }
</style>