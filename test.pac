function FindProxyForURL(url, host) {
    var uri = "/61.162.184.14/8088/video.pac";
    var pattern = /([0-9.]+)\/([0-9]+)/;
    var res = pattern.exec(uri);
    var proxy = "PROXY " + res[1] + ":" + res[2];
    if (shExpMatch(url, "http://v.youku.com/player/get*")) {
        return proxy;
    } else if (shExpMatch(url, "http://hot.vrs.sohu.com/*")) {
        return proxy;
    } else if (shExpMatch(url, "http://data.video.qiyi.com/*")) {
        return proxy;
    } else if (shExpMatch(url, "http://vv.video.qq.com/*")) {
        return proxy;
    } else if (shExpMatch(host, "m.sjzhushou.com")) {
        return proxy;
    } else if (shExpMatch(host, "*.api.3g.youku.com")) {
        return proxy;
    } else if (shExpMatch(host, "api.mobile.youku.com")) {
        return proxy;
    } else if (shExpMatch(url, "http://www.tudou.com/albumplay/*")) {
        return proxy;
    } else {
        return "PROXY 10.0.1.10:8888";
    }
}
