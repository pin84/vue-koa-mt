<template>
  <div id="shouye">
    <header
      class="mui-bar mui-bar-nav"
      style="background: #1296db;"
    >
      <h1 class="mui-title">项目管理系统</h1>
    </header>
    <div class="mui-content">
      <div class="mui-card">
        <div class="mui-slider">
          <div class="mui-slider-group mui-slider-loop">
            <!--支持循环，需要重复图片节点-->
            <div class="mui-slider-item mui-slider-item-duplicate">
              <a href="#"><img src="./images/local/2018-07-17-001.jpg" /></a>
            </div>
            <div class="mui-slider-item"><a href="#"><img src="./images/local/2018-07-17-002.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="./images/local/2018-07-17-003.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="./images/local/2018-07-17-004.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="./images/local/2018-07-17-005.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="./images/local/2018-07-17-007.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="./images/local/2018-07-17-008.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="./images/local/2018-07-17-008.jpg" /></a></div>
            <!--支持循环，需要重复图片节点-->
            <div class="mui-slider-item mui-slider-item-duplicate">
              <a href="#">
                <img src="./images/local/2018-07-17-006.jpg">
              </a>
            </div>
          </div>
        </div>
      </div>

      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="../approval/approval.html">
            <span class="mui-icon iconfont icon-shenpi1"></span>
            <div class="mui-media-body">审批</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="../quality/quality.html">
            <span class="mui-icon iconfont icon-zhiliangbaoz-copy"></span>
            <div class="mui-media-body">质量</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="../security/security.html">
            <span class="mui-icon iconfont icon-anquan"></span>
            <div class="mui-media-body">安全</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="../report/report.html">
            <span class="mui-icon iconfont icon-huibaoguanli"></span>
            <div class="mui-media-body">工作汇报</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="../camera/camera.html">
            <span class="mui-icon iconfont icon-paizhao"></span>
            <div class="mui-media-body">随手拍</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="../xunjian/xunjian.html">
            <span class="mui-icon iconfont icon-xunjian"></span>
            <div class="mui-media-body">巡检</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="../attendance/attendance.html">
            <span class="mui-icon iconfont icon-qiandao-kaoqindaqia"></span>
            <div class="mui-media-body">考勤</div>
          </a></li>
      </ul>
    </div>
    <div>
			<nav class="mui-bar mui-bar-tab ">
			<a  class="mui-tab-item mui-active"  href="shouye.html" @click="$router.push('/xiaoxi')" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">应用</span>
			</a>
			<a id="nav2" class="mui-tab-item " href="xiaoxi.html" @click="$router.push('/xiaoxi')">
				<span class="mui-icon mui-icon-email"><span id="span7" class="mui-badge" style="background: #d81e06;color: white;">0</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a id="nav3" class="mui-tab-item" href="contacts.html">
				<!--<span class="mui-icon mui-icon-contact"></span>-->
				<span class="mui-icon iconfont icon-report"></span>
				<span class="mui-tab-label">报表</span>
			</a>
			<a id="nav4" class="mui-tab-item" href="me.html">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">个人</span>
			</a>
		</nav>
		</div>
  </div>
</template>
<script>
import Nav from '../nav'
export default {
  components: {
    Nav
  },



  created() {

    mui.init({
      swipeBack: false //启用右滑关闭功能
    });

  },

  methods: {
    toPage() { }
  }


}
</script>
<style lang='css' scoped>
/* @import '../../assets/css/public.css';
@import '../../assets/css/iconfont.css'; */
*{
  motion: 0;
  padding: 0;
}

.mui-content{
  /* padding-top:0 !important; */
  padding-bottom:60px !important;
}
	.title{
    margin: 20px 15px 7px;
    color: #6d6d72;
    font-size: 15px;
  }
  .mui-slider-loop img{
    height:230px;
  }
  .iconfont{
    color:#007aff;
  }
  img{
    border-radius:20px;
  }
  .mui-card{
    border-radius:20px;
    -moz-box-shadow: 2px 2px 10px #909090;
    -webkit-box-shadow: 2px 2px 10px #909090;
    box-shadow:2px 2px 10px #909090;
  }
  #videofile{
    opacity: 0;
    position: absolute;
    width:100%;
    height:100%;
    left:0px;
    bottom:10px;
  }	
  .mui-table-view-cell span{
    display: inline-block;
    padding: 10px 0px;
  }
  .icon-report{
    color: #929292;
  }

  .nav{
    position:fixed;
    bottom: 0;
    left :0;
  }
</style>  