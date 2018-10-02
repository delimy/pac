function FindProxyForURL(url, host) {
    if (shExpMatch(url, "https://analytics-service.us-east-1.staging.public.atl-paas.net/*")) {
        return "PROXY 127.0.0.1:8080; DIRECT";
    } else if (shExpMatch(url, "https://as.atlassian.com/*")) {
        return "PROXY 127.0.0.1:8080; DIRECT";
    } else {
        return "DIRECT";
    }
}
