<template>
  <div class="home">
    <div class="mui-content">
      <div class="Loginbackground">
        <div class="logo_Top">
          <div>
            <img
              src="../assets/images/logo.png"
              class="logo"
              style="height:68px;"
            >
          </div>
          <div class="Font">
            建筑云
          </div>
        </div>

        <div class="Backstage_Data">
          <div class="mui-input-row input_sl">
            <span class="iconfont icon-icon icon-dengluren"></span>
            <input
              placeholder="用户名"
              type="text"
              id="username"
              class="ub-f1"
              v-model="info.username"
            >
          </div>
          <div class="mui-input-row input_sl">
            <span class="iconfont icon-icon icon-mima"></span>
            <input
              placeholder="密码"
              type="password"
              id="password"
              class="umw4 ub-f1"
              v-model="info.password"
            >
          </div>
          <div class="mui-input-row div_01">
            <div class="jz_password">
              <input
                type="checkbox"
                class="uabs ub-con"
                id="remember"
              >
              <span>记住密码</span>
            </div>
            <div
              class="sz_server"
              id="sw"
              style="text-align: right;padding-right: 5%;"
            >
              <span class="iconfont icon-icon icon-shezhi"></span>
              <a
                id="mdialog4"
                href="javascript:;"
                style="color: black;"
                @click="setServePath"
              >设置</a>
            </div>
          </div>

          <div class="Btn_div">
            <button
              id="Btn"
              type="button"
              style="padding:5px 0"
              class="mui-btn mui-btn-primary mui-btn-block"
              ref="btnLogin"
              @click="login"
            >登　录</button>
          </div>
          <div
            class="Other mui-input-row"
            style="margin-top: 23%;"
          >
            <div class="Corporate_name mui-input-row">
              公司：广州汇软信息科技有限公司
            </div>
            <div class="mui-input-row">网址：<a
                style="color: black;"
                href="http://pcm77.com"
              >www.pcm77.com</a></div>
          </div>
        </div>
        <div style="width:100%;margin:auto;position: absolute;bottom: 10px;">

        </div>
      </div>
      <!----设置：模态框------>
      <!----<div class="" style="z-index:9999">
			<div class="">
				<div class="mui-input-row input_sl">
					<span class="iconfont icon-ai-password Icon_span"></span>
					<input placeholder="密码" type="password" id="password" class="umw4 ub-f1">
				</div>
			</div>
		</div>---->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import '../assets/js/index.js'
// import '../assets/js/public.js'

import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      info: {
        'username': 'abc',
        'password': 'aaa',
      }
    }
  },
  created() {
    mui.init();
    mui.plusReady(function () {
      launchScreen();
    })

  },
  methods: {
    login() {
      var serverPath = localStorage.getItem("serverPath") + "/mobile/app/Login.ashx";
      var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;

      // var objExp = new RegExp(Expression);
      // if (!objExp.test(serverPath)) {
      //   mui.alert("地址格式不正确");
      //   return;
      // }

      // if (!this.userInfo.name) {
      //   mui.alert("登录名不能为空");
      //   return;
      // }

      console.log(this.info);
      
      let baseurl = process.env.VUE_APP_BASE_API
      // let url = `${baseurl}/movie/top250`
      let url = `${baseurl}/mobile/app/Login.ashx`

      fetch(url,{
        method:'post',
        body:'json='+JSON.stringify(this.info),
        headers:{'Content-Type':'application/x-www-form-urlencoded'}
      }).then(res =>{
        this.$router.push('shouye')
      })
      // axios.post(url, {
      //   method: 'post',
      //   headers:{'Content-Type':'application/x-www-form-urlencoded'},
      //   data: this.info
      // }).then(function (res) {
      //   console.log(res);
      // })
      // axios.post(url, {
      //   method: 'post',
      //   body: JSON.stringify(this.userInfo)
      // }).then(res => {
      //   console.log(res);

      // })

    },
    setServePath() {
      let serverPath = localStorage.getItem("serverPath");
      let btnArray = ['取消', '确定'];
      mui.prompt(' ', serverPath, '设置服务器地址', btnArray, function (e) {
        // e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
        if (e.index == 1) {
          if (e.value) {
            localStorage.setItem("serverPath", e.value);
          }
        }
      })
    },


  }
}
</script>


<style >
@import '../assets/css/style.css';
@import '../assets/css/dialog.css';
@import '../assets/app/css/iconfont.css';
.home .logo{
  height:68px;
}

.home #Btn{
  padding:5px 0;
}
.home .Other{
  margin-top: 23%;
}
  
  
  /* 
  .mui-input-row
    display flex  
    justify-content space-between
  #mdialog4
    color black  
  #Btn
    padding 5 0  
  .Other
    margin-top 23%  
  .mui-input-row
    color black   */
</style>
