<template>
    <div class="container">
       <div class="tips">已完成 {{isComplete}} 个/总共 {{all}} 个</div> 
       <button v-if="isComplete > 0" @click="clear">清除已完成</button>
    </div>
</template>

<script>

    import { defineComponent, ref, computed} from 'vue'
    import { useStore } from 'vuex'

    export default defineComponent({
        name: 'NavFooter',
        props: {
            
        },
        setup(props, ctx) {
            let store = useStore()
            let unCompleteList = computed(() => {
                return store.state.list.filter(item => {
                    return item.complete == false
                })
            })

            let all = computed(() => {
                return store.state.list.length;
            })

            let isComplete = computed(() => {
                return all.value - unCompleteList.value.length
            })

            let clear = () => {
                store.commit('resetList', unCompleteList.value)
            }
            return {
                isComplete,
                all,
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