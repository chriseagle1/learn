<template>
    <div v-if="list.length > 0">
        <div v-for="(item, index) in list" :key="index">
            <div class="task-item">
                <input type="checkbox" v-model="item.complete"> {{item.title}}
                <button class="btn" @click="del(item, index)">删除</button>
            </div>
        </div>
    </div>
    <div class = "emptyList" v-else>
        暂无任务
    </div>
</template>

<script>
    import {defineComponent, ref, computed} from 'vue'

    export default defineComponent ({
        name: 'NavMain',
        props: {
            todoList: {
                type: Array,
                required: true
            }
        },
        emits: {
            delItem: null
        },
        setup(props, ctx) {
            let del = (item, index) => {
                ctx.emit('delItem', index)
            }
            let list = computed(() => {
                return props.todoList
            })
            
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
    .emptyList {
        padding-left: 9px;
        margin: 10px 11px;
    }
    
</style>