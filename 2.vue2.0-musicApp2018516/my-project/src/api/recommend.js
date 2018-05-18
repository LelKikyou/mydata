import jsonp from "../common/js/jsonp.js"
export default function getRecommend() {
    const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
    return jsonp(url, {
        g_tk: 5381,
        inCharset: "utf-8",
        outCharset: "utf-8",
        notice: 0,
        format: "jsonp",
        platform: "h5"
    }, {
            param: 'jsonpCallback'
        })
}