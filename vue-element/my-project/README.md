# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

#打包主意事项
1，在config文件夹下的index.js文件中的assetsPublicPath路径修改为当前路径：
   build: {  
      // Template for index.html  
      index: path.resolve(__dirname, '../dist/index.html'),  
  
      // Paths  
      assetsRoot: path.resolve(__dirname, '../dist'),  
      assetsSubDirectory: 'static',    
      assetsPublicPath: './', #加这个
   }
2，模式要去掉，不能使用html5的Historty模式，不然路由不显示：
   export default new Router({  
       // mode:'history', //打包的时候注销掉  
       routes:[...]  
    })     
3，如果打包之后 发现有的图片路径不对：
   更改build/utils.js文件中的 ExtractTextPlugin 的 options配置.  
  
    if (options.extract) {  
        return ExtractTextPlugin.extract({  
            use: loaders,  
            publicPath: '../../', //注意: 此处根据路径, 自动更改  
            fallback: 'vue-style-loader'  
       })  
    } else {  
        return ['vue-style-loader'].concat(loaders)  
    }  
