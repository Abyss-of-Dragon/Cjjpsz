
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
    let cnt_ninggguang=0;
    let cnt_xingqiu=0;
    let cnt_beidou=0;
    let cnt_xiangling=0;
    let cnt_anbai=0;
    let cnt_leize=0;
    let cnt_kaiya=0;
    let cnt_babala=0;
    let cnt_lisha=0;
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
        if(cnt_ssrwish == 90){//90保底出金
            cnt_ssrwish=0;//ssr保底重置
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SSR");
            let x=random_ssr();//随机获得一张ssr
            sendResult_wish01(x);
        }else if(cnt_srwish==10){
            cnt_srwish=0;//sr保底重置
            alert("恭喜您通过保底获得了SR");
            let x=random_sr();//随机获得一张sr
            sendResult_wish01(x);
        }else {
            //let temp=Math.floor(Math.random()*26);
            //floor() 返回小于等于x的最大整数
            //random返回介于 0（包含） ~ 1（不包含） 之间的一个随机
        }

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
        if(cnt_ssrwish==10){
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
        let tempRandomSsr=Math.floor(Math.random()*15);
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
        let sr;
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
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 6:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 7:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 8:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 9:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 10:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 11:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 12:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 13:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 14:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 15:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 16:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 17:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 18:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 19:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 20:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 21:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 22:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 23:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 24:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 25:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 26:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 27:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 28:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;


                return sr;
            case 29:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 30:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 31:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 32:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 33:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 34:
                sr = "辛焱";
                cnt_xinyan = cnt_xinyan + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_xinyan(cnt_xinyan);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
            case 35:
                sr = "罗莎莉亚";
                cnt_luoshaliya = cnt_luoshaliya + 1;
                cnt_srjuese = cnt_srjuese + 1;
                sendResult_luoshaliya(cnt_luoshaliya);
                sendResult_wuxingjuese(cnt_srjuese);
                break;
        }
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