<template>
    <div class="todoListArea">
        <NavHeaderVue :msg="msg" @addItem="add"></NavHeaderVue>
        <NavMainVue :todoList="list" @delItem="del"></NavMainVue>
        <NavFooterVue :todoList="list" @clearComplete="clear"></NavFooterVue>
    </div>
</template>

<script>
    import {defineComponent, ref, reactive, toRefs, onMounted, computed} from 'vue'
    import NavHeaderVue from '@/components/navHeader/NavHeader.vue'
    import NavMainVue from '@/components/navMain/NavMain.vue'
    import NavFooterVue from '@/components/navFooter/NavFooter.vue'
    import { useStore } from 'vuex'
    
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
            let msg = ref('')
            let store = useStore();
            let list = computed(() => {
                return store.state.list
            })
            
            let add = (val) => {
                let flag = ref(true)
                list.value.map(item => {
                    if(item.title == val) {
                        flag = false
                        alert('任务已存在');
                    }
                })
                if(flag) {
                    store.commit('addTask', {
                        title: val,
                        complete: false
                    });
                }
            }

            let del = (val) => {
                store.commit('delTask', val)
            }

            let clear = () => {
                let unCompleteList = computed(() => {
                    return list.value.filter(item => {
                        return item.complete == false
                    })
                })
                
                store.commit('resetList', unCompleteList.value)
            }

            return {
                msg,
                add,
                list,
                del,
                clear
            }
        }
    })
</script>

<style lang="scss" scoped>
</style>