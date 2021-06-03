
    let cnt_acquaint=0;
    let cnt_genesis=0;
    let cnt_crystal=0;

    <!--充值 recharge-->
    function recharge_6(){
    cnt_genesis=cnt_genesis+60;
    cnt_crystal=cnt_crystal+60;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
}
    function recharge_30(){
    cnt_genesis=cnt_genesis+330;
    cnt_crystal=cnt_crystal+330;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
}
    function recharge_98(){
    cnt_genesis=cnt_genesis+1090;
    cnt_crystal=cnt_crystal+1090;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
}
    function recharge_198(){
    cnt_genesis=cnt_genesis+2240;
    cnt_crystal=cnt_crystal+2240;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
}
    function recharge_328(){
    cnt_genesis=cnt_genesis+3880;
    cnt_crystal=cnt_crystal+3880;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
}

    function recharge_648(){
    cnt_genesis=cnt_genesis+8080;
    cnt_crystal=cnt_crystal+8080;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
}

    function purchase (){

}

    function sendResult_genesis(cnt_genesis) {
    let num = document.getElementById("result_genesis")
    num.innerHTML = cnt_genesis;
}
    function sendResult_crystal(cnt_crystal) {
    let num = document.getElementById("result_crystal")
    num.innerHTML = cnt_crystal;
}

