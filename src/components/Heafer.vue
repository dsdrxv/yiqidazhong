<template>
    <div id="content">
        <div class="zuo">
           <router-link tag="p" to="/Dizhi"><span>岳阳市</span><img id="dada" src="../img/dizi.png" alt=""></router-link>
        </div>
        <div class="you">
            <img src="../img/sosuo.png" />
			<img src="../img/fayan.png" />
			<img src="../img/shaoma.png" />
        </div>
    </div>
</template>

<script>
export default {
    name:"Heafer"
}
</script>

<style scope>
    #content {
    height: 1.56667rem;
    width: 100%;
    background: #001e50;
    border-top: 0.03667rem solid #ebe8e3;
    position: relative;
}
p{
        font-size: 0.53333rem;
    margin: 0.42rem 0 0 0.5rem;
}

.zuo{
    width: 50%;
    float: left;
    height: 100%;
}
span>img{
    width: 20px;
    margin: 0 12px;
}
.you{
    width: 50%;
    float: right;
    height: 100%;
}
.you img{
    width: 0.53333rem;
    margin-top: 0.45rem;
    margin-left: 0.90667rem;
}
#dada{
    width: 0.40667rem;
    margin-left: 0.17667rem;
}
</style>