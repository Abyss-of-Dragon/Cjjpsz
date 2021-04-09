window.onload = function () {
    var broadcast = document.getElementById("broadcast"),
        img_list = document.getElementById("img_list"),
        button_list = document.getElementById("button_list").getElementsByTagName("li"),
        index = 0,
        timer = null;
        //初始化
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
   
        // 自动切换
        timer = setInterval(autoPlay, 1000);
   
        // 调用自动播放函数
        function autoPlay() {
            index++;
            if (index >= button_list.length) {
                index = 0;
            }
            imgChange(index);
        }
    
    function imgChange(buttonIndex) {
        for (let i = 0; i < button_list.length; i++) {
            button_list[i].className="";
        }
        button_list[buttonIndex].className = "first-li";//按钮样式切换
        img_list.style.marginLeft = -500* buttonIndex + "px";
        index = buttonIndex;
    }
    //鼠标接触div
    broadcast.onmouseover = function(){
        clearInterval(timer);

    }
    //鼠标离开div
    broadcast.onmouseout = function(){
        timer = setInterval(autoPlay, 2000);
    }
    //鼠标悬停ol
    for (var i = 0; i < button_list.length; i++) {
        button_list[i].id = i;
        button_list[i].onmouseover = function() {
            clearInterval(timer);
            imgChange(this.id);
        }
    }
}
