
    let cnt_acquaint=0;
    let cnt_interwined=0;
    let cnt_genesis=0;
    let cnt_crystal=0;
    let cnt_rmb=0;
    let cnt_purchase=0;
    let cnt_ssrwish=0;
    let cnt_srwish=0;
    let cnt_ssrjuese=0;
    //let cnt_srjuese=0;
    let cnt_keqing=0;
    let cnt_mona=0;

    <!--祈愿 wish-->
    function wish_1(){
        if(cnt_acquaint<1){
            alert("缺少1个相遇之缘，是否消耗160原石购买?");
        }else{
            cnt_acquaint=cnt_acquaint-1;
            sendResult_acquaint(cnt_acquaint);
            wish01();
        }

    }
    function wish_10(){
        if(cnt_acquaint<10){
            alert("缺少10个相遇之缘，是否消耗1600原石购买?");
        }else{
            cnt_acquaint=cnt_acquaint-10;
            sendResult_acquaint(cnt_acquaint)
            wish01();
            wish02();
            wish03();
            wish04();
            wish05();
            wish06();
            wish07();
            wish08();
            wish09();
            wish10();
            }
    }
    function wish01(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        if(cnt_ssrwish == 90){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            let x=random_ssr();//随机获得一张ssr
            sendResult_wish01(x);
        }else{
            let x="未获得SSR";
            sendResult_wish01(x);
        }
        // temp=Math.floor(Math.random()*1);
        //floor() 返回小于等于x的最大整数
        //random返回介于 0（包含） ~ 1（不包含） 之间的一个随机
    }
    function wish02(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        if(cnt_ssrwish==90){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            let x=random_ssr();//随机获得一张ssr
            sendResult_wish02(x);
        }else{
            let x="未获得SSR";
            sendResult_wish02(x);
        }
        // temp=Math.floor(Math.random()*1);
        //floor() 返回小于等于x的最大整数
        //random返回介于 0（包含） ~ 1（不包含） 之间的一个随机
    }
    function wish03(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        if(cnt_ssrwish==90){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            let x=random_ssr();//随机获得一张ssr
            sendResult_wish03(x);
        }else{
            let x="未获得SSR";
            sendResult_wish03(x);
        }
        // temp=Math.floor(Math.random()*1);
        //floor() 返回小于等于x的最大整数
        //random返回介于 0（包含） ~ 1（不包含） 之间的一个随机
    }
    function wish04(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        if(cnt_ssrwish==90){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            let x=random_ssr();//随机获得一张ssr
            sendResult_wish04(x);
        }else{
            let x="未获得SSR";
            sendResult_wish04(x);
        }
        // temp=Math.floor(Math.random()*1);
        //floor() 返回小于等于x的最大整数
        //random返回介于 0（包含） ~ 1（不包含） 之间的一个随机
    }
    function wish05(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        if(cnt_ssrwish==90){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            let x=random_ssr();//随机获得一张ssr
            sendResult_wish05(x);
        }else{
            let x="未获得SSR";
            sendResult_wish05(x);
        }
        // temp=Math.floor(Math.random()*1);
        //floor() 返回小于等于x的最大整数
        //random返回介于 0（包含） ~ 1（不包含） 之间的一个随机
    }
    function wish06(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        if(cnt_ssrwish==90){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            let x=random_ssr();//随机获得一张ssr
            sendResult_wish06(x);
        }else{
            let x="未获得SSR";
            sendResult_wish06(x);
        }
        // temp=Math.floor(Math.random()*1);
        //floor() 返回小于等于x的最大整数
        //random返回介于 0（包含） ~ 1（不包含） 之间的一个随机
    }
    function wish07(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        if(cnt_ssrwish==90){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            let x=random_ssr();//随机获得一张ssr
            sendResult_wish07(x);
        }else{
            let x="未获得SSR";
            sendResult_wish07(x);
        }
        // temp=Math.floor(Math.random()*1);
        //floor() 返回小于等于x的最大整数
        //random返回介于 0（包含） ~ 1（不包含） 之间的一个随机
    }
    function wish08(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        if(cnt_ssrwish==90){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            let x=random_ssr();//随机获得一张ssr
            sendResult_wish08(x);
        }else{
            let x="未获得SSR";
            sendResult_wish08(x);
        }
        // temp=Math.floor(Math.random()*1);
        //floor() 返回小于等于x的最大整数
        //random返回介于 0（包含） ~ 1（不包含） 之间的一个随机
    }
    function wish09(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        if(cnt_ssrwish==90){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            let x=random_ssr();//随机获得一张ssr
            sendResult_wish09(x);
        }else{
            let x="未获得SSR";
            sendResult_wish09(x);
        }
        // temp=Math.floor(Math.random()*1);
        //floor() 返回小于等于x的最大整数
        //random返回介于 0（包含） ~ 1（不包含） 之间的一个随机
    }
    function wish10(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        if(cnt_ssrwish==90){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            let x=random_ssr();//随机获得一张ssr
            sendResult_wish10(x);
        }else{
            let x="未获得SSR";
            sendResult_wish10(x);
        }
        // temp=Math.floor(Math.random()*1);
        //floor() 返回小于等于x的最大整数
        //random返回介于 0（包含） ~ 1（不包含） 之间的一个随机
    }
    function random_ssr(){
        let tempRandomSsr=Math.floor(Math.random()*1);
        let ssr;
            switch (tempRandomSsr) {
            case 0:
                 ssr = "刻晴";
                cnt_keqing=cnt_keqing+1;
                cnt_ssrjuese=cnt_ssrjuese+1;
                sendResult_keqing(cnt_keqing);
                sendResult_wuxingjuese(cnt_ssrjuese);
                break;
            case 1:
                ssr = "莫娜";
                cnt_mona=cnt_mona+1;
                cnt_ssrjuese=cnt_ssrjuese+1;
                sendResult_mona(cnt_mona);
                sendResult_wuxingjuese(cnt_ssrjuese);
                break;
            case 2:
                ssr = "七七";
                break;
            case 3:
                ssr = "迪卢克";
                break;
            case 4:
                ssr = "琴";
                break;
            case 5:
                ssr = "阿莫斯之弓";
                break;
            case  6:
                ssr = "天空之翼";
                break;
            case 7:
                ssr = "四风原典";
                break;
            case 8:
                ssr = "天空之卷";
                break;
            case 9:
                ssr = "和璞鸢";
                break;
            case 10:
                ssr = "天空之脊";
                break;
            case 11:
                ssr = "狼的末路";
                break;
            case 12:
                ssr = "天空之傲";
                break;
            case 13:
                ssr = "天空之刃";
                break;
            case 14:
                ssr = "风鹰剑";
        }
        return ssr;
    }
    <!--充值 recharge-->
    function recharge_6(){
    cnt_genesis=cnt_genesis+60;
    cnt_crystal=cnt_crystal+60;
    cnt_rmb=cnt_rmb+6;
    cnt_purchase=cnt_purchase+(cnt_crystal-cnt_crystal%160)/160;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
    sendResult_rmb(cnt_rmb);
    sendResult_purchase(cnt_purchase)
}

    function recharge_30(){
    cnt_genesis=cnt_genesis+330;
    cnt_crystal=cnt_crystal+330;
    cnt_rmb=cnt_rmb+30;
    cnt_purchase=cnt_purchase+(cnt_crystal-cnt_crystal%160)/160;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
    sendResult_rmb(cnt_rmb);
    sendResult_purchase(cnt_purchase)
}

    function recharge_98(){
    cnt_genesis=cnt_genesis+1090;
    cnt_crystal=cnt_crystal+1090;
    cnt_rmb=cnt_rmb+98;
    cnt_purchase=cnt_purchase+(cnt_crystal-cnt_crystal%160)/160;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
    sendResult_rmb(cnt_rmb);
    sendResult_purchase(cnt_purchase)
}

    function recharge_198(){
    cnt_genesis=cnt_genesis+2240;
    cnt_crystal=cnt_crystal+2240;
    cnt_rmb=cnt_rmb+198;
    cnt_purchase=cnt_purchase+(cnt_crystal-cnt_crystal%160)/160;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
    sendResult_rmb(cnt_rmb);
    sendResult_purchase(cnt_purchase)
}

    function recharge_328(){
    cnt_genesis=cnt_genesis+3880;
    cnt_crystal=cnt_crystal+3880;
    cnt_rmb=cnt_rmb+328;
    cnt_purchase=cnt_purchase+(cnt_crystal-cnt_crystal%160)/160;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
    sendResult_rmb(cnt_rmb);
    sendResult_purchase(cnt_purchase)
}

    function recharge_648(){
    cnt_genesis=cnt_genesis+8080;
    cnt_crystal=cnt_crystal+8080;
    cnt_rmb=cnt_rmb+648;
    cnt_purchase=cnt_purchase+(cnt_crystal-cnt_crystal%160)/160;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
    sendResult_rmb(cnt_rmb);
    sendResult_purchase(cnt_purchase)
}

    <!--购买 purchase-->
    function purchase_acquaint (){
            let cnt=prompt("请输入您的数量","0")
            if (cnt<=cnt_crystal/160)
            {
                cnt_acquaint=cnt_acquaint+Number(cnt);
                cnt_crystal=cnt_crystal-Number(cnt)*160;
                cnt_purchase=cnt_purchase-cnt;
                sendResult_purchase(cnt_purchase);
                sendResult_acquaint(cnt_acquaint);
                sendResult_crystal(cnt_crystal);
            }else if(cnt>cnt_crystal/160||cnt_crystal<160){
                alert("所需原石不足，是否凝取结晶？")
            }
}
    function purchase_interwined (){
        let cnt=prompt("请输入您的数量","0")
        if (cnt<=cnt_crystal/160)
        {
            cnt_interwined=cnt_acquaint+Number(cnt);
            cnt_crystal=cnt_crystal-Number(cnt)*160;
            cnt_purchase=cnt_purchase-cnt;
            sendResult_purchase(cnt_purchase);
            sendResult_interwined(cnt_interwined);
            sendResult_crystal(cnt_crystal);
        }else if(cnt>cnt_crystal/160||cnt_crystal<160){
            alert("所需原石不足，是否凝取结晶？")
        }
    }

    <!--sendResult-->
    function sendResult_purchase(cnt_purchase) {
        let num = document.getElementById("result_purchase")
        num.innerHTML = cnt_purchase;
    }
    function sendResult_rmb(cnt_rmb) {
        let num = document.getElementById("result_rmb")
        num.innerHTML = cnt_rmb;
    }
    function sendResult_acquaint(cnt_acquaint) {
        let num = document.getElementById("result_acquaint")
        num.innerHTML = cnt_acquaint;
    }
    function sendResult_interwined(cnt_interwined) {
        let num = document.getElementById("result_interwined")
        num.innerHTML = cnt_interwined;
    }

    function sendResult_genesis(cnt_genesis) {
    let num = document.getElementById("result_genesis")
    num.innerHTML = cnt_genesis;
}
    function sendResult_crystal(cnt_crystal) {
    let num = document.getElementById("result_crystal")
    num.innerHTML = cnt_crystal;
}

    function sendResult_keqing(cnt_keqing) {
        let num = document.getElementById("result_keqing")
        num.innerHTML = cnt_keqing;
    }
    function sendResult_mona(cnt_mona) {
        let num = document.getElementById("result_mona")
        num.innerHTML = cnt_mona;
    }
    function sendResult_wuxingjuese(cnt_ssrjuese) {
        let num = document.getElementById("result_wuxingjuese")
        num.innerHTML = cnt_ssrjuese;
    }
    function sendResult_wish01(x) {
        let num = document.getElementById("wish_1")
        num.innerHTML = x;
    }
    function sendResult_wish02(x) {
        let num = document.getElementById("wish_2")
        num.innerHTML = x;
    }
    function sendResult_wish03(x) {
        let num = document.getElementById("wish_3")
        num.innerHTML = x;
    }
    function sendResult_wish04(x) {
        let num = document.getElementById("wish_4")
        num.innerHTML = x;
    }
    function sendResult_wish05(x) {
        let num = document.getElementById("wish_5")
        num.innerHTML = x;
    }
    function sendResult_wish06(x) {
        let num = document.getElementById("wish_6")
        num.innerHTML = x;
    }
    function sendResult_wish07(x) {
        let num = document.getElementById("wish_7")
        num.innerHTML = x;
    }
    function sendResult_wish08(x) {
        let num = document.getElementById("wish_8")
        num.innerHTML = x;
    }
    function sendResult_wish09(x) {
        let num = document.getElementById("wish_9")
        num.innerHTML = x;
    }
    function sendResult_wish10(x) {
        let num = document.getElementById("wish_10")
        num.innerHTML = x;
    }