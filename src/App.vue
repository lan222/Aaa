<template>

  <div class="home">
    <div id="home-bai">
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <div id="top">
        <div>REALSTATE地产，您居家置业最信赖的地产！</div>
        <div class="home-right">
          <img src="./images/0220_03.gif">
          <img src="./images/0221_03.gif">
          <img src="./images/0222_03.gif">
          <img src="./images/0223_03.gif">
        </div>
      </div>
    </div>
    <div id="home-list">
      <div class="home-img"><img src="./images/0224.png"></div>
    </div>
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">全新楼盘</router-link>  
      <router-link to="/Nice">二手楼盘</router-link>  
      <!--<router-link to="/Nice">全新商铺</router-link> 
      <router-link to="/Nice">楼市动态</router-link>  
      <router-link to="/Nice">联系我们</router-link>-->
    </div>
    <div id="home-list1"><img src="./images/0225.png">008-6666-6666 <span>咨询电话</span> </div>
      
      <router-view/>
  </div>

</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>

<style>
*{padding: 0;margin: 0;text-decoration:none}
li{list-style-type: none}
#home-bai{width: 100%;overflow: hidden;background: #262626}
#top{margin: 0 auto;width: 80%;color: #8E8E8E;padding: 15px 0 15px 0;
display: flex;justify-content: space-between;align-item:center}
.home-right img{margin-right: 10px}

#home-list{margin: 0 0 0 10%;display: inline-block;float: left}
#home-list img{padding: 15px 0}

#home-list1{width:15%;display: inline-block;float: right;margin-right: 10%;
padding: 30px 0;color: #888888}
.home-right1{float: right}
#home-list1 img{float: left}
#nav a{padding:45px 0;display: inline-block;width: 7%;text-align:center;float: left;
font-size: 20px;}
#nav a:nth-child(1){margin-left:5%}
#home-list1 span{background: #3A79E8;padding: 3px 8px;color: #fff;border-radius: 5px}
</style>
