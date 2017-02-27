<template>
    <div style="background:#eee;font-size:16px; overflow: hidden;padding-bottom:41px;">
<Headermy title="商品详情"></Headermy>  
	<div class="goods_top">
	<div class="swiper-container" id="home_lunbotu" >
        <div class="swiper-wrapper">
            <div class="swiper-slide"><router-link to="/goods"><img style="height:320px;width:320px;" :src="$route.query.img" alt=""></router-link></div>
           <div class="swiper-slide"><router-link to="goods"><img style="height:320px;width:320px;" src="https://img10.jiuxian.com/2016/0831/145fd1ef1f4a4de1a4903aebdb85cf845.jpg" alt=""></router-link></div>

            <div class="swiper-slide"><router-link to=""><img style="height:320px;width:320px;" src="https://img09.jiuxian.com/2016/0831/776fda15ffef4d2ca270f684e29bf5f15.jpg" alt=""></router-link></div>
        </div>


        <!-- https://img08.jiuxian.com/2016/0831/8af327c084894bf8ab922bfac08a87e25.jpg -->
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>

    <input type="hide" style="display:none;" id="good_name" v-model="$route.query.id">
    <p class="goods_name"><span style="display:inline-block;background:red;width:25px;height:15px;color:white;font-size:12px;">自营</span>{{$route.query.name}}</p>
    <div class="goods_price"><b style="color:red;margin-right:25px;">￥{{$route.query.price}}</b><del>270.00</del><div class="goods_jj" style="">降价通知</div></div>

	</div>

    <div style="font-size:20px;margin-bottom:5px;">
        <div class="goods_num"><span style="margin:0 5px;">数量</span><input style="width:25px;padding:2px 0;background:white;border-color:#bfbfbf;" type="button" value="-" @click="good_num_change(-1)"><input id="good_num"  type="text" style="display:inline-block;width:50px;padding:0;text-align:center;padding:2px 0;border-color:#bfbfbf;" v-model="good_num"><input style="width:25px;padding:2px 0;background:white;border-color:#bfbfbf;" type="button" value="+" @click="good_num_change(1)"></div>
        <div class="goods_add">送至<span>北京</span><span>北京市</span><span>东城区</span></div>
    </div>

    <div class="goods_sx">
        <img width="13" height="13" style="margin-left:5px;" src="https://img10.jiuxian.com/bill/2016/1129/16d97e874a194b55b347ca1f63a89b58.png" alt=""><span>正品保障</span>
        <img width="13" height="13" src="https://img09.jiuxian.com/bill/2016/1129/8efeb2432fcf4bd585dee2b6d3e800f1.png"><span>满百包邮</span>
        <img width="13" height="13" src="https://img09.jiuxian.com/bill/2016/1129/c625b2a3daf94197810e69579d10e031.png" alt=""><span>7天退还</span>
    </div>
    <div style="background:white">
        <div style="width:100%;height:40px;line-height:40px;margin-left:10px;">商品评价<span style="font-size:14px;">{{$route.query.commentsCount}}人评价</span> <span style="float:right;font-size:14px;margin-right:10px;">好评度<span >96%</span></span></div>
    <ul class="goods_pl">
        <li>
            <div><B>A***S</B><span>2017-02-06 02:32:49</span></div>
            <p>买了几次了,包装不错,好酒</p>
            <img src="https://img06.jiuxian.com/eva/2017/0206/ec566555db5e4cf38b68d779f9c637292.jpg" alt="">
        </li>
        <li>
            <div><B>alskdk</B><span>2017-01-06 01:37:49</span></div>
            <p>这酒不错</p>
            <img src="https://img06.jiuxian.com/eva/2017/0121/51232af348a54ae182128a9d450a40c42.jpg" alt="">

        </li>
        <li>
            <div><B>李大爷</B><span>2016-02-06 05:42:49</span></div>
            <p>假酒害人，这酒是真的。</p>
            <img  src="https://img07.jiuxian.com/eva/2017/0120/4e21f0df27a748a3a05d6f02a91e22812.jpg" alt="">

        </li>
    </ul>
    </div>

    <div class="goods_shangjia">
        <div class=""><img width="84px" height="38px" src=" https://img10.jiuxian.com/bill/2014/0419/dca93376dc8f4d18953f28c1203b3a86.jpg" alt=""></div>
        <div>
            <p>茅台 | <span style="color:#999;">北京</span></p>
            <p>贵州茅台酒独产于中国的贵州省仁怀市</p>
        </div>
    </div>
    <div class="goods_bigimg">
       <img src="http://img10.jiuxian.com/bill/2016/0901/f5987be29a3d4bbbb39ce9f81309b6ff.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/524cc918968845f0aa644655460fdb6f.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/be564978a7c84e0fa6b6238ad6166654.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/ee35aea7eb3e417cb988523bddebfca2.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/fc3653d374e44a1a9a6cec30014f5b34.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/cc9138c0709f4a4890fc6e1bf3c95d74.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/d5a861e34bff4ccb8b9a29deca5a6e3b.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/db50b5c974ef47c6a5d16f6a3bbe328e.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/87f257e5aaa94edf9f83627017803ebf.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/fc0c5a55c5d04183ad056ba1640842e5.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/c9b29f04fd4649a4a5904d135fe2eac5.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/2d00cf4676cd44d08fd1c85f820da2e7.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/71e51564b7b04ad9befafe69bd2e954a.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/1216/8c2c0c8a70d043cfbf126485c23e4b55.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/cd5e3e1c06874def85b21c9f4cc5ec3a.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/d89b1cfe98bd41d2a0cc2db8408fdf37.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/bde0376bdaf644f1b2dd9ced20991f26.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/d17bd56e65774a218f2fa8100ac1112b.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/7ca106d77b844f4fbb91615863c8f2c2.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/1b7a831aafbe49c08e4f363cce04f33e.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/cd6e60a36caf477492b1f7ddc082cce3.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/cc12fda2d5454b768d6d62d48c79d624.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/883b5bcc25e14e25aad429d1eca7bc3e.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/1fd9fdebb0674322bc621a0882ee8762.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/dfaaad1ddd344965bec6dacc58d7de49.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/5750ee6d9a9b4e459fe7e4d87258acd5.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/d67cf34321f24f72ad5645246142db02.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/40ba207a00bf4cbfa74d81a7d5e5a1f5.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/09f72ae394fc403a8f0de7201c5414ed.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/bedbef12191a4afcb301cefd77fea688.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/8b9ba94fe1b14fa08a4af2e9aca5f188.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/5a1bd64e5761429488070fc108f95f2c.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/3254853d0dfb46a1b270df685c0fd8b2.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/588d844fa9fc46598cc2f8ddacf2fbf2.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/feb6bcdc0e0543a49e835a177efdbc4f.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/3e9e399c2c8547efa439d57f1d8885c5.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/89902ac2ff1249dd865f0ba229fbc0d4.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/a53e1ebabc664ccb81bc3072069f6ef8.jpg" /><img src="http://img10.jiuxian.com/bill/2016/0901/e1cc0bf53cbb4a248b59c06cf660ce38.jpg" />
       <img src="http://img10.jiuxian.com/bill/2016/0901/2daa4dce79c04301886deb85db08fcbf.jpg" />
    </div>
    
    <Goods_footer></Goods_footer>
    <div id="addshopshow" class="messge-box" style="width: 180px; height: 88px; margin-top: -44px; margin-left: -90px;"><div class="messge-box-icon"><i class="message-toast-icon succee-icon"><img src="../../images/goods_gou.png" style="margin-top: -14px;
    height: 40px;
    width: 32px" alt=""></i></div><div class="messge-box-content">加入购物车成功</div></div>
    </div>
</template>
<style lang="less">
 .messge-box {
    width: 145px;
    background: rgba(0,0,0,0.8);
    border-radius: 8px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    display: none;
.messge-box-icon {
    width: 26px;
    height: 26px;
    display: inline-block;
    margin: 18px 0 9px 0;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    .succee-icon {
    display: inline-block;
    height: 26px;
    width: 26px;
    background-position: -1px -29px;
}
}
.messge-box-content {
    font-size: 15px;
    line-height: 15px;
    color: #fff;
    padding: 0 10px 21px 10px;
}
}

.goods_top{
    width: 100%;
    height: 400px;
    background: white;
    font-size: 20px;
    text-align: center;
    margin-top: 50px;
}
.goods_name{
        /*background: blue;*/
        margin: 5px;
        width:95%;
        padding:0 5px;
        font-size: 20px;
        height: 40px;
        line-height: 20px;text-align: left;
    }
    .goods_price{
        width: 97%;
        padding:5px 5px;
        text-align: left;
    }
    .goods_jj{
        width: 80px;
        height: 20px;
        font-size:14px;
        color:#686868;
        float:right;
        text-align: center;
        line-height: 20px;
        border:1px solid #bfbfbf;
        margin-top: -3px;
    }
    .goods_num{
        font-size: 20px;
        padding: 10px 5px;
        margin-top: 5px;
        background: white; 
        input{
            border:1px solid black;
        }
    }
    .goods_add{
        padding: 10px;
        background: white;
        span{
           margin-left: 5px;
        }
    }
    .goods_sx{
        width:100%;
        height:30px;
        line-height: 30px;
        margin: 2px 0;
        background: #f9f9f9;
        padding-left: 5px;

        span{
            margin-right: 5px;
        }
    }


    .goods_pl{
        background: white;
        li{
        padding: 5px 10px;
            div{
                padding: 5px 0;
                color:#666;
                span{
                    float:right;
                

                }
                

            }

            p{
                padding:5px 0;
            }

             img{
                    width: 22%; 
                    height: auto; 
                     };

        }}

        .goods_shangjia{
            font-size: 14px;
            padding: 10px;
            height: 58px;
            margin: 5px 0;
            background: white;
            div{
                float: left;
                p{
                    width: 100%;
                    overflow: hidden;
                    height: 19px;
                 line-height: 19px;
                    padding:2px 0; 
                }
            }
        }
        .goods_bigimg{
            font-size: 0;
                img{
                    width:100%;
                    height: auto;
                }
        }
</style>

<script>
import Goods_footer from "../../component/header/goods_footer.vue";
import Headermy from "../../component/header/headerMy.vue";
	export default{

        components:{
            Goods_footer,Headermy
        },
        data(){
            return{
                good_num:1,
            }
        },

		mounted(){
			 $(".nav").hide();


             function addtoshop(){
                
             
             for(var i=0; i<orderJson.Product.length;i++){
                 console.log($("#good_name").val(),orderJson.Product[i].id);
                if($("#good_name").val()==orderJson.Product[i].id){ 
                    orderJson.Product[i].quantity+=Number($("#good_num").val());
                    console.log(orderJson.Product[i]);
                    break;
                }
             }
             
            }

                $("#addshop").click(function(){
                    addtoshop();
                    $("#addshopshow").css("margin-top",document.body.scrollTop-44+"px");
                    $("#addshopshow").show();
                  setTimeout("$('#addshopshow').hide()",1500);
                    console.log();
                })


                     var swiper = new Swiper('.swiper-container', {
                            pagination: '.swiper-pagination',
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            paginationClickable: true,
                            spaceBetween: 30,
                            centeredSlides: true,
                            autoplayDisableOnInteraction: false
                        });

                  




		},
        methods:{
             good_num_change(i){
                this.good_num+=i;
                if(this.good_num<1){
                    this.good_num=1;
                }
            }
           


        }

	}


</script>