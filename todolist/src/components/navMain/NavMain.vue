<template>
    <div v-for="(item, index) in list" :key="index">
        <div class="task-item">
            <input type="checkbox" v-model="item.complete"> {{item.title}}
            <button class="btn" @click="del(item, index)">删除</button>
        </div>
    </div>
</template>

<script>
    import {defineComponent, ref, computed} from 'vue'
    import { useStore } from 'vuex'

    export default defineComponent ({
        name: 'NavMain',
        props: {
            
        },
        setup(props, ctx) {
            let store = useStore();
            
            let list = computed(() => {
                return store.state.list
            })

            let del = (item, index) => {
                store.commit('delTask', index)
            }
            
            return {
                list,
                del
            }
        }
    })
</script>

<style lang="scss" scoped>
    .btn {
        display: none;
        float: right;
        margin-top: 3px;
        width: 55px;
        height: 25px;
        cursor: pointer;
    }

    .task-item {
        height: 30px;
        line-height: 30px;
        margin: 10px 20px;
        width: 143px;
        padding-left: 5px;
    }

    .task-item input {
        margin-right: 5px
    }

    .task-item:hover{
        background-color: #ddd;
        button {
            display: block;
        }   
    }
    
</style>