


//https://raw.githubusercontent.com/kshipeng/JavaScript/master/金鱼.js


//封面信息（key不可更改）
function coverInfo() {
    var name = "金鱼";
    var imageURL = "http://cdn.63a0.com/Uploads/Advertisement/20200720_012455_15951794950467_3974.jpg";
    return { "name": name, "logo": imageURL, "source":"JS" };
}

//房间列表
function videoListInfo() {
    var url = "https://cdn.63a0.com/index.php/Api/LiveApi/getPlatformlist";
    var method = "POST";
    var param = { "id": "127" };
    var header = {};
    return { "url": url, "method": method, "param": param, "header": header };
}

//处理网络数据，统一格式
function handleData(dic) {
    //dic 为字典，需经过处理，最终如下,key的名称必须如下所示
    // {
    //     "data": [
    //         {
    //             "name": "大哥过来啊",
    //             "title": "大哥过来啊",
    //             "city": "澳门专场",
    //             "headimage": "https://downaoligie.oss-cn-qingdao.aliyuncs.com/65.jpg",
    //             "cover": "https://downaoligie.oss-cn-qingdao.aliyuncs.com/65.jpg",
    //             "video": "rtmp://tpull.amghkwy.cn/live/9185723_1598444341?txSecret=cf2a19ff267b69c798f7f8bb0e95d574&txTime=5F45AA75",
    //             "Popularity": "288888",
    //             "id": "288888"
    //         },
    //         ...
    // }

    var dataArr = dic["data"];
    var formatArr = new Array();
    for (let i = 0; i < dataArr.length; i++) {
        let subDic = dataArr[i];
        var formatDic = {
            "name": subDic["title"],
            "Popularity": subDic["watch_number"],
            "video": subDic["address"],
            "cover": subDic["header"],
            "id": subDic["room_id"]
        };
        formatArr.push(formatDic);
    }

    return { "data": formatArr };
}
