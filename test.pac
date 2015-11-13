function FindProxyForURL(url, host) {
    var uri = "/61.162.184.14/8088/video.pac";
    var pattern = /([0-9.]+)\/([0-9]+)/;
    var res = pattern.exec(uri);
    var proxy = "PROXY " + res[1] + ":" + res[2];
    //return "PROXY 10.0.1.10:8888";
    if (shExpMatch(host, "aapi.tv.sohu.com")) {
        return proxy;
    } else if (shExpMatch(url, "http://data.video.qiyi.com/*")) {
        return proxy;
    } else if (shExpMatch(url, "http://vv.video.qq.com/*")) {
        return proxy;
    } else if (shExpMatch(host, "m.sjzhushou.com")) {
        return proxy;
    } else if (shExpMatch(host, "i.play.api.3g.youku.com")) {
        return proxy;
    } else if (shExpMatch(url, "http://www.tudou.com/albumplay/*")) {
        return proxy;
    } else {
        return "PROXY 10.0.1.10:8888";
        return "DIRECT";
    }
}
