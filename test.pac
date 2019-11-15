function FindProxyForURL(url, host) {
    return "PROXY 127.0.0.1:8080";
    if (shExpMatch(url, "https://raw.githubusercontent.com/envoy/Embassy/*")) {
        return "PROXY 127.0.0.1:8080; DIRECT";
    } else {
        return "DIRECT";
    }
}
