<template>
    <div class="task-name">
        <input type="text" placeholder="请输入任务名称" v-model="value" @keydown.enter="enter">
    </div>
    
</template>

<script>
    import { defineComponent , ref} from 'vue'

    export default defineComponent({
        name: 'NavHeader',
        props: {
            msg: {
                type: String,
                required: true
            }
        },
        setup(props, ctx) {
            let value = ref('')
            let enter = () => {
                ctx.emit('addItem', value.value)
                value.value = ''
            }

            return {
                value,
                enter
            }
        }
    })
</script>

<style lang="scss" scoped>
    .task-name input {
        margin: 10px 20px;
        height: 26px;
        line-height: 26px;
        padding-left: 8px;
    }
</style>