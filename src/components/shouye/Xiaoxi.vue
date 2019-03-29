<template>
<div id="xiaoxi">
  	<header class="mui-bar mui-bar-nav" style="background: #1296db;">
			<h1 class="mui-title">项目管理系统</h1>
		</header>
		<div class="mui-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="../WebPage/daiban.html?type=daiban">
						<img class="mui-media-object mui-pull-left"  src="images/news/8.png">
						<div class="mui-media-body">
							待办
							<p class='mui-ellipsis'>待审批、待审阅的所有业务流程信息</p>
						</div>
						<span id="span1" class="mui-badge"   style="float:right;background: #d81e06;color: white;">0</span>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="../WebPage/daiban.html?type=yiban">
						<img class="mui-media-object mui-pull-left" src="images/news/7.png">
						<div class="mui-media-body">
							已办		
							<p class='mui-ellipsis'>已审批、已审阅的所有业务流程信息</p>
						</div>
						<span id="span2" class="mui-badge"  style="float:right;background: #1ab111;color:white">0</span>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="images/news/5.png">
						<div class="mui-media-body">
							相关	
							<p class='mui-ellipsis'>本人发起的所有业务单据信息</p>
						</div>
						<span id="span3" class="mui-badge"  style="float:right;background: #1296eb;color: white;">0</span>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="../WebPage/zhidu.html">
						<img class="mui-media-object mui-pull-left" src="images/news/10.png">
						<div class="mui-media-body">
							相关制度	
							<p class='mui-ellipsis'>本人相关需要了解和阅读的各类制度，或是项目制度</p>
						</div>
						<span id="span4" class="mui-badge"  style="float:right;background: #1296eb;color: white;">0</span>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="../WebPage/news.html">
						<img class="mui-media-object mui-pull-left" src="images/news/1.jpg">
						<div class="mui-media-body">
							通知公告							
						</div>
						<p class='mui-ellipsis'>新闻，通知，公告信息</p>
						<span id="span5" class="mui-badge"  style="float:right;background: #1296bb;color: white;">0</span>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="../WebPage/huiyi.html">
						<img class="mui-media-object mui-pull-left" src="images/news/renshi.png">
						<div class="mui-media-body">
							项目会议							
						</div>
						<p class='mui-ellipsis'>各类项目会议纪要，及项目议事日程</p>
						<span id="span6" class="mui-badge"  style="float:right;background: #1296bb;color: white;">0</span>
					</a>
				</li>
			</ul> 				
		</div>
		<div>
			<nav class="mui-bar mui-bar-tab">
			<a  class="mui-tab-item "  href="shouye.html" @click="$router.push('/shouye')">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a id="nav2" class="mui-tab-item mui-active" href="xiaoxi.html">
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
export default {

}
</script>
<style lang='css' scoped>


</style>