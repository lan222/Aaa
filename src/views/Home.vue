<template>
  <div>
		<div id="shouye">
			<div class="lunbo"></div>
			<div class="home-dahez">
				<div class="bao">
					<div class="home-left">
						<div class="yibufen">
							<img src="../images/2.03.jpg" alt=""><img src="../images/2.03.jpg" alt="">
							<img src="../images/2.03.jpg" alt=""><img src="../images/2.03.jpg" alt="">
						</div>
						<div class="erbufen">
							<div class="erbufen-yi">
								<p>全新商铺</p>
								<p>-New Shops-</p>
							</div>
							<div class="erbufen-er"  v-for="i in arr">
								<img :src="i.img" alt="">
							</div>
							<div class="erbufen-san">
								<div class="erbufen-left"  v-for="i in arr">
									<p>{{i.name}}</p>
									<p>{{i.des}}</p>
									<p>{{i.huxing}}</p>
									<p>{{i.price}}</p>
								</div>
							</div>
							<div class="erbufen-si">
								<p>浏览更多新楼盘</p>
							</div>
						</div>

						<div class="erbufen">
							<div class="erbufen-yi">
								<p>全新商铺</p>
								<p>-New Shops-</p>
							</div>
							<div class="erbufen-er"  v-for="i in arr">
								<img :src="i.img" alt="">
							</div>
							<div class="erbufen-san">
								<div class="erbufen-left"  v-for="i in arr">
									<p>{{i.name}}</p>
									<p>{{i.des}}</p>
									<p>{{i.huxing}}</p>
									<p>{{i.price}}</p>
								</div>
							</div>
							<div class="erbufen-si">
								<p>浏览更多新楼盘</p>
							</div>
						</div>

						<div class="erbufen">
							<div class="erbufen-yi">
								<p>全新商铺</p>
								<p>-New Shops-</p>
							</div>
							<div class="erbufen-er"  v-for="i in arr">
								<img :src="i.img" alt="">
							</div>
							<div class="erbufen-san">
								<div class="erbufen-left"  v-for="i in arr">
									<p>{{i.name}}</p>
									<p>{{i.des}}</p>
									<p>{{i.huxing}}</p>
									<p>{{i.price}}</p>
								</div>
							</div>
							<div class="erbufen-si">
								<p>浏览更多新楼盘</p>
							</div>
						</div>
					</div>
					<div class="home-right2">
						<div class="home-right2-yi">
							<p class="p1">楼市动向 - NEWS<span>阅读更多</span></p>
							<ul>
								<li><a href="javascript:;">攔金31億元！中山第四季度土地成...</a></li>
								<li><a href="javascript:;">In this chapter in our series ...</a></li>
							</ul>
							<ul>
								<li><a href="javascript:;">攔金31億元！中山第四季度土地成...</a></li>
								<li><a href="javascript:;">In this chapter in our series ...</a></li>
							</ul>
							<ul>
								<li><a href="javascript:;">攔金31億元！中山第四季度土地成...</a></li>
								<li><a href="javascript:;">In this chapter in our series ...</a></li>
							</ul>
							<ul>
								<li><a href="javascript:;">攔金31億元！中山第四季度土地成...</a></li>
								<li><a href="javascript:;">In this chapter in our series ...</a></li>
							</ul>
							<ul>
								<li><a href="javascript:;">攔金31億元！中山第四季度土地成...</a></li>
								<li><a href="javascript:;">In this chapter in our series ...</a></li>
							</ul>
							<ul>
								<li><a href="javascript:;">攔金31億元！中山第四季度土地成...</a></li>
								<li><a href="javascript:;">In this chapter in our series ...</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
	  data(){
		  return {
			  arr:[]
			  }
		  },
	  created(){
		  this.$http.get('http://localhost:1000').then(function(e){
			  this.arr=e.body
		  })
	  
  }
}
</script>

<style>
.home-dahez{width: 100%;overflow: hidden;}
.bao{width: 70%;margin: 0 auto;display: flex}
.home-left{width: 68%;}
.yibufen{width: 100%;}
.yibufen img{width: 49%;margin:0 1% 1% 0}
.erbufen{border: 1px solid #E2E2E2;margin: 0 0 50px 0}
.erbufen-yi p{text-align: center}
.erbufen-yi p:nth-child(1){font-size: 24px;font-weight: bold}
.erbufen-yi p:nth-child(2){font-size: 16px;color: #999}
.erbufen-yi{padding: 20px 0;background-color: #F7F7F7}
.erbufen-er img{width: 32%;margin-right: 1%;float: left}
.erbufen-san{display: flex;width: 100%} 
.erbufen-left{width: 31%;padding: 15px;background:#fff;
border-right: 5px solid #f7f7f7;overflow: hidden;}
.erbufen-left p{font-size: 14px;}
.erbufen-left p:nth-of-type(1){font-size: 18px;font-weight: bold}
.erbufen-si{width:100%;padding: 20px 0;background-color: #F7F7F7;
display: flex;justify-content: center}
.erbufen-si p{width:20%;padding: 5px; border:1px solid blue;text-align: center;}
.home-right2{width: 28%;margin-left: 4%}
.home-right2-yi{background: #e2e2e2}
.p1{padding: 20px;display: flex;justify-content: space-between}
.p1 span{border: 1px solid #000;padding: 5px;margin-top:-5px }
.home-right2-yi a{display: inline-block}
.home-right2-yi ul{margin: 0 0 20px 10px}
.home-right2-yi ul a{color: #000}
.home-right2-yi ul li a:nth-type(1){color: #e2e2e2}
</style> 

