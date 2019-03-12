import utility from "utility"

export function getRedirectPath({type, avatar}) {
    //根据type,跳到boss,还是牛人,没头像的跳到信息补全页面
    let url = (type === "BOSS") ? "/boss" : "/genius";
    if (!avatar) url += "info";
    return url;
}

//md5加密
export function md5Imooc(v) {
    const imooc="imooc#$#$@@@";
    return utility.md5(utility.md5(v+imooc))
}