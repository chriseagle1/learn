<template>
  <div class="container">
      <div class="left">
          <div class="logo"></div>
          <div class="left-nav">
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-sub-menu index="1">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
                </el-menu-item>
            </el-menu>
          </div>
      </div>
      <div class="right">
          <div class="top">
              <el-menu
                default-active="1"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                @select="handleSelect"
            >
                <el-menu-item index="1">Processing Center</el-menu-item>
                <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="3" disabled>Info</el-menu-item>
                <el-menu-item index="4">Orders</el-menu-item>
            </el-menu>
          </div>
          <div class="bottom">3</div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'layout',
        props: [

        ],
        setup(props, ctx) {
            let handleOpen = (key, keyPath) => {
                console.log(key, keyPath)
            }
            let handleClose = (key, keyPath) => {
                console.log(key, keyPath)
            }

            return [
                handleOpen,
                handleClose
            ]
        }
    }
</script>

<style lang="scss" scoped>
   .container {
       width: 100vw;
       height: 100vh;
       display: flex;
       .left {
           width: 200px;
           display: flex;
           flex-direction: column;
           background-color: #545c64;
           .logo {
               height: 60px;
               background: url(../assets/hotel4.png) no-repeat;
               background-size: 100%;
               background-position: center;
           }
           .left-nav {
               flex: 1;
               .el-menu {
                   border-right: 0px;
               }
           }
       }
       .right {
           flex: 1;
           display: flex;
           flex-direction: column;
            .top {
                height: 60px;
            }
            .bottom {
                flex: 1;
            }
       }
       
   }
</style>