
    let cnt_acquaint=0;
    let cnt_interwined=0;
    let cnt_genesis=0;
    let cnt_crystal=0;
    let cnt_rmb=0;
    let cnt_purchase=0;

    <!--祈愿 wish-->
    function wish_1(){
        if(cnt_acquaint<1){
            alert("缺少1个相遇之缘，是否消耗160原石购买?");
        }else{
            cnt_acquaint=cnt_acquaint-1;
            sendResult_acquaint(cnt_acquaint)
        }

    }
    function wish_10(){
        if(cnt_acquaint<10){
            alert("缺少10个相遇之缘，是否消耗1600原石购买?");
        }else{
            cnt_acquaint=cnt_acquaint-10;
            sendResult_acquaint(cnt_acquaint)
        }

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

