import OriginJsonp from "jsonp"
export default function jsonp(url, data, option) {
    url += (url.indexOf("?") < 0 ? "?" : "") + param(data);
    return new Promise((res, rej) => {
        OriginJsonp(url, option, (err, data) => {
            if (!err) {
                res(data);
            } else {
                rej(err)
            }
        })
    })
}
function param(data) {
    var arr = [];
    for (let k in data) {
        if (data[k] != undefined) {
            arr.push(k + "=" + encodeURIComponent(data[k]))
        } else {
            return "";
        }
    }
    return arr.join("&")
}