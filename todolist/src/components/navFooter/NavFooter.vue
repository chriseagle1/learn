<template>
    <div class="container">
       <div class="tips">已完成 {{isComplete}} 个/总共 {{list.length}} 个</div> 
       <button v-if="isComplete > 0" @click="clear">清除已完成</button>
    </div>
</template>

<script>

    import { defineComponent, ref, computed} from 'vue'

    export default defineComponent({
        name: 'NavFooter',
        props: {
            todoList: {
                type: Array,
                required: true
            }
        },
        setup(props, ctx) {
            let list = computed(() => {
                return props.todoList
            })
            
            let isComplete = computed(() => {
                let arr = props.todoList.filter(item => {
                    return item.complete === true
                })
                return arr.length
            }) 

            let clear = () => {
                ctx.emit('clearComplete')
            }

            return {
                list,
                isComplete,
                clear
            }
        }
    })
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        align-items: center;
    }

    .tips {
        margin: 0px 10px;
    }
</style>