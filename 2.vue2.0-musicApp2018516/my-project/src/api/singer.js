import jsonp from "../common/js/jsonp.js"
export function getSinger(data) {
    const url = "https://u.y.qq.com/cgi-bin/musicu.fcg";
    return jsonp(url, {
        g_tk: "5381",
        loginUin: 0,
        hostUin: 0,
        format: "jsonp",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        callback: "__jp0",
        platform: "yqq",
        needNewCode: 0,
        data: data
    }, {
            param: 'jsonpCallback'
        })
}