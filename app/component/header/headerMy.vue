<template>

    <div class="headerMy">
    <router-view></router-view>
        <div class="set" style="z-index:50000;">
        <img src="../../images/fanhui.png" height="30" width="30" alt="" onclick="window.history.go(-1)"  style="vertical-align: middle;" />
        </div>

        <div class="my" style="font-size: 20px;color: #000">{{title}}</div>
        <slot name="mySet"></slot>
        <slot name="myNews"></slot>
    </div>






</template>
<script type="text/javascript">

	export default {
        props:[
            "title"
        ]
	}
</script>
<style type="text/css">
html,body{
		width: 100%;
		height: 100%;
	}
.headerMy{
    width: 100%;
    height: 50px;
    padding-right: 1.5%;
    background:#eee;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    position: fixed;
    z-index: 10000;
}

.my{
    text-align:center;
    font-size:16px;
    width: 100%;
    color:white;


}
</style>