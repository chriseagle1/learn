<template>
  <div class="container">
      <div class="login">
          <div class="item">
              <h2>酒店管理系统</h2>
          </div>
          <div class="item">
              <span>账号: </span>
              <div><el-input v-model="userName" placeholder="Please input"/></div>
          </div>
          <div class="item">
              <span>密码: </span>
              <div>
                <el-input
                        v-model="password"
                        type="password"
                        placeholder="Please input password"
                        show-password
                    />
             </div>
          </div>
          <div class="item">
              <span>记住我:</span>
              <div><el-checkbox v-model="remeber" label="" size="large"/></div>
          </div>
          <div class="item">
              <div class="submit">
                <el-button type="primary" @click="login">登陆</el-button>
                <el-button>取消</el-button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import { alertProps } from 'element-plus'
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
    import {Login} from '../api/AdminLogin'

    export default {
        name: 'login',
        props: [

        ],
        setup(props, ctx) {
            let loginParams = reactive({
                userName: '',
                password: '',
                remeber: false,
                
            })
            
            let $router = useRouter();

            let login = async () => {
                //rememberMe
                let sucess = await Login({username: loginParams.userName, password: loginParams.password})

                if(sucess) {
                    $router.push('layout');
                }
            }

            return {
                ...toRefs(loginParams),
                login
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(to bottom, rgb(6, 6, 49), rgb(121, 143, 151));
        display: flex;
        justify-content: center;
        align-items: center;
        color: #eee;
        font-family: 'xinxingshu';
        .login {
            width: 400px;
            height: 255px;
            border: 1px solid #eee;
            border-radius: 6px;
            .item {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 13px 5px;
                span {
                    width: 65px;
                    text-align: right;
                    padding-right: 12px;
                    font-size: 14px;
                }

                h2 {
                    margin: 0 auto;
                }

                div {
                    width: 200px;
                }
            }
        }
    }
</style>