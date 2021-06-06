
    let cnt_acquaint=0;
    let cnt_interwined=0;
    let cnt_genesis=0;
    let cnt_crystal=0;
    let cnt_rmb=0;
    let cnt_purchase=0;
    let cnt_ssrwish=0;
    let cnt_srwish=0;

    //五星角色
    let cnt_ssrjuese=0;
    let cnt_keqing=0;
    let cnt_mona=0;
    let cnt_qiqi=0;
    let cnt_diluke=0;
    let cnt_qin=0;
    //五星武器
    let cnt_ssrwuqi=0;
    let cnt_amosizhigong=0;
    let cnt_tiankongzhiyi=0;
    let cnt_sifengyuandian=0;
    let cnt_tiankongzhijuan=0;
    let cnt_hepuyuan=0;
    let cnt_tiankongzhiji=0;
    let cnt_langdemolu=0;
    let cnt_tiankongzhiao=0;
    let cnt_tiankongzhiren=0;
    let cnt_fengyingjian=0;
    //四星角色
    let cnt_srjuese=0;
    let cnt_luoshaliya=0;
    let cnt_xinyan=0;
    let cnt_shatang=0;
    let cnt_diaona=0;
    let cnt_chongyun=0;
    let cnt_nuoaier=0;
    let cnt_bannite=0;
    let cnt_feixieer=0;
    let cnt_ningguang=0;
    let cnt_xingqiu=0;
    let cnt_beidou=0;
    let cnt_xiangling=0;
    let cnt_anbai=0;
    let cnt_leize=0;
    let cnt_kaiya=0;
    let cnt_babala=0;
    let cnt_lisha=0;
    // 四星武器
    let cnt_srwuqi=0;
    let cnt_gongzang=0;
    let cnt_jiligong=0;
    let cnt_juexian=0;
    let cnt_xifengliegong=0;
    let cnt_zhaoxin=0;
    let cnt_jilicanzhang=0;
    let cnt_liulangyuezhang=0;
    let cnt_xifengmidian=0;
    let cnt_xifengchangqiang=0;
    let cnt_xialimiechen=0;
    let cnt_yucai=0;
    let cnt_jilidajian=0;
    let cnt_zhongjian=0;
    let cnt_xifengdajian=0;
    let cnt_xialilongyin=0;
    let cnt_jilijian=0;
    let cnt_dijian=0;
    let cnt_xifengjian=0;
    //三星武器
    let cnt_rwuqi=0;
    let cnt_dangong=0;
    let cnt_shensheshouzhishi=0;
    let cnt_yayugong=0;
    let cnt_feiyufaqiu=0;
    let cnt_taolongyingjietan=0;
    let cnt_modaoxulun=0;
    let cnt_heiyingqiang=0;
    let cnt_yilifuren=0;
    let cnt_muyulongxuedejian=0;
    let cnt_tieyingkuojian=0;
    let cnt_feitianyujian=0;
    let cnt_limingshenjian=0;
    let cnt_lenren=0;
    // 祈愿 wish
    function wish_1(){
        if(cnt_acquaint<1){
            alert("缺少1个相遇之缘，请先购买！");
        }else{
            cnt_acquaint=cnt_acquaint-1;
            sendResult_acquaint(cnt_acquaint);
            wish01();
            let temp=" "
            sendResult_wish02(temp);
            sendResult_wish03(temp);
            sendResult_wish04(temp);
            sendResult_wish05(temp);
            sendResult_wish06(temp);
            sendResult_wish07(temp);
            sendResult_wish08(temp);
            sendResult_wish09(temp);
            sendResult_wish10(temp);
        }

    }
    function wish_10(){
        if(cnt_acquaint<10){
            alert("缺少10个相遇之缘，请先购买！");
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
        let temp=Math.floor(Math.random()*27888);
        let x="ssr";
        let Temp=Math.floor(Math.random()*390);
        let y="sr";
        let z="r";
        if(cnt_ssrwish == 90){//90保底出金
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish01(x);
        }else if(cnt_srwish==10){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish01(y);

        }
        else  if(temp%167==0){
                cnt_ssrwish=0;//ssr保底重置
                cnt_srwish=0;//sr保底重置
                alert("恭喜您未通过保底获得了SSR");
                x=random_ssr();//随机获得一张ssr
                sendResult_wish01(x);
            }else  if(Temp%19==0){
                    cnt_srwish=0;//sr保底重置
                    alert("恭喜您未通过保底获得了SR");
                    y=random_sr();//随机获得一张
                    sendResult_wish01(y);
                }else{
                    z=random_r();
                    sendResult_wish01(z);
                }
}
    function wish02(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        let temp=Math.floor(Math.random()*27888);
        let x="ssr";
        let Temp=Math.floor(Math.random()*390);
        let y="sr";
        let z="r";
        if(cnt_ssrwish == 90){//90保底出金
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish02(x);
        }else if(cnt_srwish==10){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish02(y);

        }
        else  if(temp%167==0){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish02(x);
        }else  if(Temp%19==0){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish02(y);
        }else{
            z=random_r();
            sendResult_wish02(z);
        }
    }
    function wish03(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        let temp=Math.floor(Math.random()*27888);
        let x="ssr";
        let Temp=Math.floor(Math.random()*390);
        let y="sr";
        let z="r";
        if(cnt_ssrwish == 90){//90保底出金
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish03(x);
        }else if(cnt_srwish==10){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish03(y);

        }
        else  if(temp%167==0){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish03(x);
        }else  if(Temp%19==0){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish03(y);
        }else{
            z=random_r();
            sendResult_wish03(z);
        }
    }
    function wish04(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        let temp=Math.floor(Math.random()*27888);
        let x="ssr";
        let Temp=Math.floor(Math.random()*390);
        let y="sr";
        let z="r";
        if(cnt_ssrwish == 90){//90保底出金
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish04(x);
        }else if(cnt_srwish==10){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish04(y);

        }
        else  if(temp%167==0){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish04(x);
        }else  if(Temp%19==0){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish04(y);
        }else{
            z=random_r();
            sendResult_wish04(z);
        }
    }
    function wish05(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        let temp=Math.floor(Math.random()*27888);
        let x="ssr";
        let Temp=Math.floor(Math.random()*390);
        let y="sr";
        let z="r";
        if(cnt_ssrwish == 90){//90保底出金
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish05(x);
        }else if(cnt_srwish==10){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish05(y);

        }
        else  if(temp%167==0){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish05(x);
        }else  if(Temp%19==0){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish05(y);
        }else{
            z=random_r();
            sendResult_wish05(z);
        }
    }
    function wish06(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        let temp=Math.floor(Math.random()*27888);
        let x="ssr";
        let Temp=Math.floor(Math.random()*390);
        let y="sr";
        let z="r";
        if(cnt_ssrwish == 90){//90保底出金
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish06(x);
        }else if(cnt_srwish==10){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish06(y);

        }
        else  if(temp%167==0){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish06(x);
        }else  if(Temp%19==0){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish06(y);
        }else{
            z=random_r();
            sendResult_wish06(z);
        }
    }
    function wish07(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        let temp=Math.floor(Math.random()*27888);
        let x="ssr";
        let Temp=Math.floor(Math.random()*390);
        let y="sr";
        let z="r";
        if(cnt_ssrwish == 90){//90保底出金
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish07(x);
        }else if(cnt_srwish==10){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish07(y);

        }
        else  if(temp%167==0){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish07(x);
        }else  if(Temp%19==0){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish07(y);
        }else{
            z=random_r();
            sendResult_wish07(z);
        }
    }
    function wish08(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        let temp=Math.floor(Math.random()*27888);
        let x="ssr";
        let Temp=Math.floor(Math.random()*390);
        let y="sr";
        let z="r";
        if(cnt_ssrwish == 90){//90保底出金
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish08(x);
        }else if(cnt_srwish==10){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish08(y);

        }
        else  if(temp%167==0){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish08(x);
        }else  if(Temp%19==0){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish08(y);
        }else{
            z=random_r();
            sendResult_wish08(z);
        }
    }
    function wish09(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        let temp=Math.floor(Math.random()*27888);
        let x="ssr";
        let Temp=Math.floor(Math.random()*390);
        let y="sr";
        let z="r";
        if(cnt_ssrwish == 90){//90保底出金
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish09(x);
        }else if(cnt_srwish==10){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish09(y);

        }
        else  if(temp%167==0){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish09(x);
        }else  if(Temp%19==0){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish09(y);
        }else{
            z=random_r();
            sendResult_wish09(z);
        }
    }
    function wish10(){
        cnt_ssrwish=cnt_ssrwish+1;
        cnt_srwish=cnt_srwish+1;
        let temp=Math.floor(Math.random()*27888);
        let x="ssr";
        let Temp=Math.floor(Math.random()*390);
        let y="sr";
        let z="r";
        if(cnt_ssrwish == 90){//90保底出金
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish10(x);
        }else if(cnt_srwish==10){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish10(y);

        }
        else  if(temp%167==0){
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SSR");
            x=random_ssr();//随机获得一张ssr
            sendResult_wish10(x);
        }else  if(Temp%19==0){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您未通过保底获得了SR");
            y=random_sr();//随机获得一张
            sendResult_wish10(y);
        }else{
            z=random_r();
            sendResult_wish10(z);
        }
    }


    function random_ssr(){
        let tempRandomSsr=Math.floor(Math.random()*15);
        let ssr="ssr";
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
                cnt_qiqi=cnt_qiqi+1;
                cnt_ssrjuese=cnt_ssrjuese+1;
                sendResult_qiqi(cnt_qiqi);
                sendResult_wuxingjuese(cnt_ssrjuese);
                break;
            case 3:
                ssr = "迪卢克";
                cnt_diluke=cnt_diluke+1;
                cnt_ssrjuese=cnt_ssrjuese+1;
                sendResult_diluke(cnt_diluke);
                sendResult_wuxingjuese(cnt_ssrjuese);
                break;
            case 4:
                ssr = "琴";
                cnt_qin=cnt_qin+1;
                cnt_ssrjuese=cnt_ssrjuese+1;
                sendResult_qin(cnt_qin);
                sendResult_wuxingjuese(cnt_ssrjuese);
                break;
            case 5:
                ssr = "阿莫斯之弓";
                    cnt_amosizhigong=cnt_amosizhigong+1;
                    cnt_ssrwuqi=cnt_ssrwuqi+1;
                    sendResult_amosizhigong(cnt_amosizhigong);
                    sendResult_wuxingwuqi(cnt_ssrwuqi);
                break;
            case  6:
                ssr = "天空之翼";
                    cnt_tiankongzhiyi=cnt_tiankongzhiyi+1;
                    cnt_ssrwuqi=cnt_ssrwuqi+1;
                    sendResult_tiankongzhiyi(cnt_tiankongzhiyi);
                    sendResult_wuxingwuqi(cnt_ssrwuqi);
                break;
            case 7:
                ssr = "四风原典";
                    cnt_sifengyuandian=cnt_sifengyuandian+1;
                    cnt_ssrwuqi=cnt_ssrwuqi+1;
                    sendResult_sifengyuandian(cnt_sifengyuandian);
                    sendResult_wuxingwuqi(cnt_ssrwuqi);
                break;
            case 8:
                ssr = "天空之卷";
                    cnt_tiankongzhijuan=cnt_tiankongzhijuan+1;
                    cnt_ssrwuqi=cnt_ssrwuqi+1;
                    sendResult_tiankongzhijuan(cnt_tiankongzhijuan);
                    sendResult_wuxingwuqi(cnt_ssrwuqi);
                break;
            case 9:
                ssr = "和璞鸢";
                    cnt_hepuyuan=cnt_hepuyuan+1;
                    cnt_ssrwuqi=cnt_ssrwuqi+1;
                    sendResult_hepuyuan(cnt_hepuyuan);
                    sendResult_wuxingwuqi(cnt_ssrwuqi);
                break;
            case 10:
                ssr = "天空之脊";
                    cnt_tiankongzhiji=cnt_tiankongzhiji+1;
                    cnt_ssrwuqi=cnt_ssrwuqi+1;
                    sendResult_tiankongzhiji(cnt_tiankongzhiji);
                    sendResult_wuxingwuqi(cnt_ssrwuqi);
                break;
            case 11:
                ssr = "狼的末路"
                    cnt_langdemolu=cnt_langdemolu+1;
                    cnt_ssrwuqi=cnt_ssrwuqi+1;
                    sendResult_langdemolu(cnt_langdemolu);
                    sendResult_wuxingwuqi(cnt_ssrwuqi);
                break;
            case 12:
                ssr = "天空之傲";
                    cnt_tiankongzhiao=cnt_tiankongzhiao+1;
                    cnt_ssrwuqi=cnt_ssrwuqi+1;
                    sendResult_tiankongzhiao(cnt_tiankongzhiao);
                    sendResult_wuxingwuqi(cnt_ssrwuqi);
                break;
            case 13:
                ssr = "天空之刃";
                    cnt_tiankongzhiren=cnt_tiankongzhiren+1;
                    cnt_ssrwuqi=cnt_ssrwuqi+1;
                    sendResult_tiankongzhiren(cnt_tiankongzhiren);
                    sendResult_wuxingwuqi(cnt_ssrwuqi);
                break;
            case 14:
                ssr = "风鹰剑";
                    cnt_fengyingjian=cnt_fengyingjian+1;
                    cnt_ssrwuqi=cnt_ssrwuqi+1;
                    sendResult_fengyingjian(cnt_fengyingjian);
                    sendResult_wuxingwuqi(cnt_ssrwuqi);
        }
        return ssr;
    }
    function random_sr() {
        let tempRandomSr = Math.floor(Math.random() * 35);
        let sr="sr";
        switch (tempRandomSr) {
            case 0:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 1:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 2:
                sr = "砂糖";
                cnt_shatang = cnt_shatang + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_shatang(cnt_shatang);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 3:
                sr = "迪奥娜";
                cnt_diaona = cnt_diaona + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_diaona(cnt_diaona);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 4:
                sr = "重云";
                cnt_chongyun = cnt_chongyun + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_chongyun(cnt_chongyun);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 5:
                sr = "诺艾尔";
                cnt_nuoaier = cnt_nuoaier + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_nuoaier(cnt_nuoaier);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 6:
                sr = "班尼特";
                cnt_bannite = cnt_bannite + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_bannite(cnt_bannite);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 7:
                sr = "菲谢尔";
                cnt_feixieer = cnt_feixieer + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_feixieer(cnt_feixieer);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 8:
                sr = "凝光";
                cnt_ningguang = cnt_ningguang + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_ningguang(cnt_ningguang);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 9:
                sr = "行秋";
                cnt_xingqiu = cnt_xingqiu+ 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xingqiu(cnt_xingqiu);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 10:
                sr = "北斗";
                cnt_beidou = cnt_beidou + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_beidou(cnt_beidou);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 11:
                sr = "香菱";
                cnt_xiangling= cnt_xiangling + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xiangling(cnt_xiangling);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 12:
                sr = "安柏";
                cnt_anbai = cnt_anbai + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_anbai(cnt_anbai);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 13:
                sr = "雷泽";
                cnt_leize = cnt_leize + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_leize(cnt_leize);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 14:
                sr = "凯亚";
                cnt_kaiya = cnt_kaiya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_kaiya(cnt_kaiya);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 15:
                sr = "芭芭拉";
                cnt_babala = cnt_babala + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_babala(cnt_babala);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 16:
                sr = "丽莎";
                cnt_lisha = cnt_lisha + 1;
                cnt_srjuese = cnt_lisha + 1;
                sendResult_lisha(cnt_lisha);
                sendResult_sixingjuese(cnt_srjuese);
                break;
            case 17:
                sr = "弓藏";
                cnt_gongzang = cnt_gongzang + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_gongzang(cnt_gongzang);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 18:
                sr = "祭礼弓";
                cnt_jiligong = cnt_jiligong + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_jiligong(cnt_jiligong);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 19:
                sr = "绝弦";
                cnt_juexian = cnt_juexian + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_juexian(cnt_juexian);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 20:
                sr = "西风猎弓";
                cnt_xifengliegong = cnt_xifengliegong + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_xifengliegong(cnt_xifengliegong);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 21:
                sr = "昭心";
                cnt_zhaoxin = cnt_zhaoxin + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_zhaoxin(cnt_zhaoxin);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 22:
                sr = "祭礼残章";
                cnt_jilicanzhang = cnt_jilicanzhang + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_jilicanzhang(cnt_jilicanzhang);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 23:
                sr = "流浪乐章";
                cnt_liulangyuezhang = cnt_liulangyuezhang + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_liulangyuezhang(cnt_liulangyuezhang);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 24:
                sr = "西风秘典";
                cnt_xifengmidian = cnt_xifengmidian + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_xifengmidian(cnt_xifengmidian);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 25:
                sr = "西风长枪";
                cnt_xifengchangqiang = cnt_xifengchangqiang + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_xifengchangqiang(cnt_xifengchangqiang);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 26:
                sr = "匣里灭辰";
                cnt_xialimiechen = cnt_xialimiechen + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_xialimiechen(cnt_xialimiechen);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 27:
                sr = "雨裁";
                cnt_yucai = cnt_yucai + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_yucai(cnt_yucai);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 28:
                sr = "祭礼大剑";
                cnt_jilidajian = cnt_jilidajian + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_jilidajian(cnt_jilidajian);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 29:
                sr = "钟剑";
                cnt_zhongjian = cnt_zhongjian + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_zhongjian(cnt_zhongjian);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 30:
                sr = "西风大剑";
                cnt_xifengdajian = cnt_xifengdajian + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_xifengdajian(cnt_xifengdajian);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 31:
                sr = "匣里龙吟";
                cnt_xialilongyin = cnt_xialilongyin + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_xialilongyin(cnt_xialilongyin);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 32:
                sr = "祭礼剑";
                cnt_jilijian = cnt_jilijian + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_jilijian(cnt_jilijian);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 33:
                sr = "笛剑";
                cnt_dijian = cnt_dijian + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_dijian(cnt_dijian);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
            case 34:
                sr = "西风剑";
                cnt_xifengjian = cnt_xifengjian + 1;
                cnt_srwuqi = cnt_srwuqi + 1;
                sendResult_xifengjian(cnt_xifengjian);
                sendResult_sixingwuqi(cnt_srwuqi);
                break;
        }
        return sr;
    }
    function random_r() {
        let tempRandomr = Math.floor(Math.random() * 14);
        let r="r";
        switch (tempRandomr) {
            case 0:
                r = "弹弓";
                cnt_dangong = cnt_dangong + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_dangong(cnt_dangong);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 1:
                r = "神射手之誓";
                cnt_shensheshouzhishi = cnt_shensheshouzhishi + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_shensheshouzhishi(cnt_shensheshouzhishi);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 2:
                r = "鸦羽弓";
                cnt_yayugong = cnt_yayugong + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_yayugong(cnt_yayugong);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 3:
                r = "翡玉法球";
                cnt_feiyufaqiu = cnt_feiyufaqiu + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_feiyufaqiu(cnt_feiyufaqiu);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 4:
                r = "讨龙英杰谭";
                cnt_taolongyingjietan = cnt_taolongyingjietan + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_taolongyingjietan(cnt_taolongyingjietan);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 5:
                r = "魔导绪论";
                cnt_modaoxulun = cnt_modaoxulun + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_modaoxulun(cnt_modaoxulun);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 6:
                r = "黑缨枪";
                cnt_heiyingqiang = cnt_heiyingqiang + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_heiyingqiang(cnt_heiyingqiang);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 7:
                r = "以理服人";
                cnt_yilifuren = cnt_yilifuren + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_yilifuren(cnt_yilifuren);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 8:
                r = "沐浴龙血的剑";
                cnt_muyulongxuedejian = cnt_muyulongxuedejian + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_muyulongxuedejian(cnt_muyulongxuedejian);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 9:
                r = "铁影阔剑";
                cnt_tieyingkuojian = cnt_tieyingkuojian + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_tieyingkuojian(cnt_tieyingkuojian);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 10:
                r = "弹弓";
                cnt_dangong = cnt_dangong + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_dangong(cnt_dangong);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 11:
                r = "飞天御剑";
                cnt_feitianyujian = cnt_feitianyujian + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_feitianyujian(cnt_feitianyujian);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 12:
                r = "黎明神剑";
                cnt_limingshenjian = cnt_limingshenjian + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_limingshenjian(cnt_limingshenjian);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
            case 13:
                r = "冷刃";
                cnt_lenren = cnt_lenren + 1;
                cnt_rwuqi = cnt_rwuqi + 1;
                sendResult_lenren(cnt_lenren);
                sendResult_sanxingwuqi(cnt_rwuqi);
                break;
        }
        return r;
    }
    <!--充值 recharge-->
    function recharge_6(){
    cnt_genesis=cnt_genesis+60;
    cnt_crystal=cnt_crystal+60;
    cnt_rmb=cnt_rmb+6;
    cnt_purchase=(cnt_crystal-cnt_crystal%160)/160;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
    sendResult_rmb(cnt_rmb);
    sendResult_purchase(cnt_purchase)
}
    function recharge_30(){
    cnt_genesis=cnt_genesis+330;
    cnt_crystal=cnt_crystal+330;
    cnt_rmb=cnt_rmb+30;
    cnt_purchase=(cnt_crystal-cnt_crystal%160)/160;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
    sendResult_rmb(cnt_rmb);
    sendResult_purchase(cnt_purchase)
}
    function recharge_98(){
    cnt_genesis=cnt_genesis+1090;
    cnt_crystal=cnt_crystal+1090;
    cnt_rmb=cnt_rmb+98;
    cnt_purchase=(cnt_crystal-cnt_crystal%160)/160;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
    sendResult_rmb(cnt_rmb);
    sendResult_purchase(cnt_purchase)
}
    function recharge_198(){
    cnt_genesis=cnt_genesis+2240;
    cnt_crystal=cnt_crystal+2240;
    cnt_rmb=cnt_rmb+198;
    cnt_purchase=(cnt_crystal-cnt_crystal%160)/160;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
    sendResult_rmb(cnt_rmb);
    sendResult_purchase(cnt_purchase)
}
    function recharge_328(){
    cnt_genesis=cnt_genesis+3880;
    cnt_crystal=cnt_crystal+3880;
    cnt_rmb=cnt_rmb+328;
    cnt_purchase=(cnt_crystal-cnt_crystal%160)/160;
    sendResult_genesis(cnt_genesis);
    sendResult_crystal(cnt_crystal);
    sendResult_rmb(cnt_rmb);
    sendResult_purchase(cnt_purchase)
}
    function recharge_648(){
    cnt_genesis=cnt_genesis+8080;
    cnt_crystal=cnt_crystal+8080;
    cnt_rmb=cnt_rmb+648;
    cnt_purchase=(cnt_crystal-cnt_crystal%160)/160;
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
                alert("所需原石不足，请先充值！")
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
            alert("所需原石不足，请先充值！")
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
        let num = document.getElementById("result_keqing");
        num.innerHTML = cnt_keqing;
    }
    function sendResult_mona(cnt_mona) {
        let num = document.getElementById("result_mona")
        num.innerHTML = cnt_mona;
    }
    function sendResult_qiqi(cnt_qiqi) {
        let num = document.getElementById("result_qiqi")
        num.innerHTML = cnt_qiqi;
    }
    function sendResult_diluke(cnt_diluke) {
        let num = document.getElementById("result_diluke")
        num.innerHTML = cnt_diluke;
    }
    function sendResult_qin(cnt_qin) {
        let num = document.getElementById("result_qin")
        num.innerHTML = cnt_qin;
    }

    function sendResult_luoshaliya(cnt_luoshaliya) {
        let num = document.getElementById("result_luoshaliya")
        num.innerHTML = cnt_luoshaliya;
    }
    function sendResult_xinyan(cnt_xinyan) {
        let num = document.getElementById("result_xinyan")
        num.innerHTML = cnt_xinyan;
    }
    function sendResult_shatang(cnt_shatang) {
        let num = document.getElementById("result_shatang")
        num.innerHTML = cnt_shatang;
    }
    function sendResult_diaona(cnt_diaona) {
        let num = document.getElementById("result_diaona")
        num.innerHTML = cnt_diaona;
    }
    function sendResult_chongyun(cnt_chongyun) {
        let num = document.getElementById("result_chongyun");
        num.innerHTML = cnt_chongyun;
    }
    function sendResult_nuoaier(cnt_nuoaier) {
        let num = document.getElementById("result_nuoaier");
        num.innerHTML = cnt_nuoaier;
    }
    function sendResult_bannite(cnt_bannite) {
        let num = document.getElementById("result_bannite")
        num.innerHTML = cnt_bannite;
    }
    function sendResult_feixieer(cnt_feixieer) {
        let num = document.getElementById("result_feixieer")
        num.innerHTML = cnt_feixieer;
    }
    function sendResult_ningguang(cnt_ningguang) {
        let num = document.getElementById("result_ningguang")
        num.innerHTML = cnt_ningguang;
    }
    function sendResult_xingqiu(cnt) {
        let num = document.getElementById("result_xingqiu")
        num.innerHTML = cnt;
    }
    function sendResult_beidou(cnt) {
        let num = document.getElementById("result_beidou")
        num.innerHTML = cnt;
    }
    function sendResult_xiangling(cnt) {
        let num = document.getElementById("result_xiangling")
        num.innerHTML = cnt;
    }
    function sendResult_anbai(cnt) {
        let num = document.getElementById("result_anbai")
        num.innerHTML = cnt;
    }
    function sendResult_leize(cnt) {
        let num = document.getElementById("result_leize")
        num.innerHTML = cnt;
    }
    function sendResult_kaiya(cnt) {
        let num = document.getElementById("result_kaiya")
        num.innerHTML = cnt;
    }
    function sendResult_babala(cnt) {
        let num = document.getElementById("result_babala")
        num.innerHTML = cnt;
    }
    function sendResult_lisha(cnt) {
        let num = document.getElementById("result_lisha")
        num.innerHTML = cnt;
    }

    function sendResult_amosizhigong(cnt_amosizhigong) {
        let num = document.getElementById("result_amosizhigong")
        num.innerHTML = cnt_amosizhigong;
    }
    function sendResult_tiankongzhiyi(cnt_tiankongzhiyi) {
        let num = document.getElementById("result_tiankongzhiyi")
        num.innerHTML = cnt_tiankongzhiyi;
    }
    function sendResult_sifengyuandian(cnt_sifengyuandian) {
        let num = document.getElementById("result_sifengyuandian")
        num.innerHTML = cnt_sifengyuandian;
    }
    function sendResult_tiankongzhijuan(cnt_tiankongzhijuan) {
        let num = document.getElementById("result_tiankongzhijuan")
        num.innerHTML = cnt_tiankongzhijuan;
    }
    function sendResult_hepuyuan(cnt_hepuyuan) {
        let num = document.getElementById("result_hepuyuan")
        num.innerHTML = cnt_hepuyuan;
    }
    function sendResult_tiankongzhiji(cnt_tiankongzhiji) {
        let num = document.getElementById("result_tiankongzhiji")
        num.innerHTML = cnt_tiankongzhiji;
    }
    function sendResult_langdemolu(cnt_langdemolu) {
        let num = document.getElementById("result_langdemolu")
        num.innerHTML = cnt_langdemolu;
    }
    function sendResult_tiankongzhiao(cnt_tiankongzhiao) {
        let num = document.getElementById("result_tiankongzhiao")
        num.innerHTML = cnt_tiankongzhiao;
    }
    function sendResult_tiankongzhiren(cnt_tiankongzhiren) {
        let num = document.getElementById("result_tiankongzhiren")
        num.innerHTML = cnt_tiankongzhiren;
    }
    function sendResult_fengyingjian(cnt_fengyingjian) {
        let num = document.getElementById("result_fengyingjian")
        num.innerHTML = cnt_fengyingjian;
    }

    function sendResult_gongzang(cnt) {
        let num = document.getElementById("result_gongzang")
        num.innerHTML = cnt;
    }
    function sendResult_jiligong(cnt) {
        let num = document.getElementById("result_jiligong")
        num.innerHTML = cnt;
    }
    function sendResult_juexian(cnt) {
        let num = document.getElementById("result_juexian")
        num.innerHTML = cnt;
    }
    function sendResult_xifengliegong(cnt) {
        let num = document.getElementById("result_xifengliegong")
        num.innerHTML = cnt;
    }
    function sendResult_zhaoxin(cnt) {
        let num = document.getElementById("result_zhaoxin")
        num.innerHTML = cnt;
    }
    function sendResult_jilicanzhang(cnt) {
        let num = document.getElementById("result_jilicanzhang")
        num.innerHTML = cnt;
    }
    function sendResult_liulangyuezhang(cnt) {
        let num = document.getElementById("result_liulangyuezhang")
        num.innerHTML = cnt;
    }
    function sendResult_xifengmidian(cnt) {
        let num = document.getElementById("result_xifengmidian")
        num.innerHTML = cnt;
    }
    function sendResult_xifengchangqiang(cnt) {
        let num = document.getElementById("result_xifengchangqiang")
        num.innerHTML = cnt;
    }
    function sendResult_xialimiechen(cnt) {
        let num = document.getElementById("result_xialimiechen")
        num.innerHTML = cnt;
    }
    function sendResult_yucai(cnt) {
        let num = document.getElementById("result_yucai")
        num.innerHTML = cnt;
    }
    function sendResult_jilidajian(cnt) {
        let num = document.getElementById("result_jilidajian")
        num.innerHTML = cnt;
    }
    function sendResult_zhongjian(cnt) {
        let num = document.getElementById("result_zhongjian")
        num.innerHTML = cnt;
    }
    function sendResult_xifengdajian(cnt) {
        let num = document.getElementById("result_xifengdajian")
        num.innerHTML = cnt;
    }
    function sendResult_xialilongyin(cnt) {
        let num = document.getElementById("result_xialilongyin")
        num.innerHTML = cnt;
    }
    function sendResult_jilijian(cnt) {
        let num = document.getElementById("result_jilijian")
        num.innerHTML = cnt;
    }
    function sendResult_dijian(cnt) {
        let num = document.getElementById("result_dijian")
        num.innerHTML = cnt;
    }
    function sendResult_xifengjian(cnt) {
        let num = document.getElementById("result_xifengjian")
        num.innerHTML = cnt;
    }

    function sendResult_dangong(cnt_dangong) {
        let num = document.getElementById("result_dangong")
        num.innerHTML = cnt_dangong;
    }
    function sendResult_shensheshouzhishi(cnt_shensheshouzhishi) {
        let num = document.getElementById("result_shensheshouzhishi")
        num.innerHTML = cnt_shensheshouzhishi;
    }
    function sendResult_yayugong(cnt_yayugong) {
        let num = document.getElementById("result_yayugong")
        num.innerHTML = cnt_yayugong;
    }
    function sendResult_feiyufaqiu(cnt_feiyufaqiu) {
        let num = document.getElementById("result_feiyufaqiu")
        num.innerHTML = cnt_feiyufaqiu;
    }
    function sendResult_taolongyingjietan(cnt_taolongyingjietan) {
        let num = document.getElementById("result_taolongyingjietan")
        num.innerHTML = cnt_taolongyingjietan;
    }
    function sendResult_modaoxulun(cnt_modaoxulun) {
        let num = document.getElementById("result_modaoxulun")
        num.innerHTML = cnt_modaoxulun;
    }
    function sendResult_heiyingqiang(cnt_heiyingqiang) {
        let num = document.getElementById("result_heiyingqiang")
        num.innerHTML = cnt_heiyingqiang;
    }
    function sendResult_yilifuren(cnt_yilifuren) {
        let num = document.getElementById("result_yilifuren")
        num.innerHTML = cnt_yilifuren;
    }
    function sendResult_muyulongxuedejian(cnt_muyulongxuedejian) {
        let num = document.getElementById("result_muyulongxuedejian")
        num.innerHTML = cnt_muyulongxuedejian;
    }
    function sendResult_tieyingkuojian(cnt_tieyingkuojian) {
        let num = document.getElementById("result_tieyingkuojian")
        num.innerHTML = cnt_tieyingkuojian;
    }
    function sendResult_feitianyujian(cnt_feitianyujian) {
        let num = document.getElementById("result_feitianyujian")
        num.innerHTML = cnt_feitianyujian;
    }
    function sendResult_limingshenjian(cnt_limingshenjian) {
        let num = document.getElementById("result_limingshenjian")
        num.innerHTML = cnt_limingshenjian;
    }
    function sendResult_lenren(cnt_lenren) {
        let num = document.getElementById("result_lenren")
        num.innerHTML = cnt_lenren;
    }


    function sendResult_wuxingjuese(cnt_ssrjuese) {
        let num = document.getElementById("result_wuxingjuese")
        num.innerHTML = cnt_ssrjuese;
    }
    function sendResult_wuxingwuqi(cnt_ssrwuqi) {
        let num = document.getElementById("result_wuxingwuqi")
        num.innerHTML = cnt_ssrwuqi;
    }
    function sendResult_sixingjuese(cnt_srjuese) {
        let num = document.getElementById("result_sixingjuese")
        num.innerHTML = cnt_srjuese;
    }
    function sendResult_sixingwuqi(cnt_srwuqi) {
        let num = document.getElementById("result_sixingwuqi")
        num.innerHTML = cnt_srwuqi;
    }
    function sendResult_sanxingwuqi(cnt_rwuqi) {
        let num = document.getElementById("result_sanxingwuqi")
        num.innerHTML = cnt_rwuqi;
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