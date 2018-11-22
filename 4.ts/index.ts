class XiaoJieJie2 {
    public sex: string
    protected name: string
    private age: number

    public constructor(sex: string, name: string, age: number) {
        this.sex = sex
        this.name = name
        this.age = age
    }

    public sayHello() {
        console.log('小哥哥好')
    }

    protected sayLove() {
        console.log('我爱你')
    }
}

var jiejie2: XiaoJieJie2 = new XiaoJieJie2('女', '热巴', 22)

class Xjj extends XiaoJieJie2 {
    x: string

    constructor(sex: string, name: string, age: number, color: string) {
        super(sex, name, age)
        this.x = color
    }
}

let a = new Xjj("x", "a", 11, "a");


interface xx {
    name: string,
    age: number
}

var z: xx = {name: "zz", age: 1};
console.log(z)
namespace xz {
    export class xx {

    }
}
let hqy1: xz.xx = new xz.xx();
namespace xxz {
    class xx {

    }
}