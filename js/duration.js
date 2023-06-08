var now = new Date();
function createtime() {
    var grt= new Date("06/07/2023 19:00:00");//在此处修改你的建站时间，格式：月/日/年 时:分:秒
    now.setTime(now.getTime()+250);
    days = (now - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days);
    hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours);
    if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;}
    seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;}
    document.getElementById("timeDate").innerHTML = "本站已安全运行 "+dnum+" 天 ";
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}
setInterval("createtime()",250);


// 作者: EmoryHuang
// 链接: https://emoryhuang.cn/blog/1729600336.html#%E6%B7%BB%E5%8A%A0%E7%BD%91%E7%AB%99%E8%BF%90%E8%A1%8C%E6%97%B6%E9%97%B4
// 来源: EmoryHuang's Blog
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。