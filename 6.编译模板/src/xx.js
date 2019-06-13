/*
 * 版 本 Learun-ADMS V6.1.6.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2017 上海力软信息技术有限公司
 * 创建人：力软-前端开发组
 * 日 期：2017.04.18
 * 描 述：报表详情	
 */
var Id = request('Id');
var tableName = request('tableName');

var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            page.initData();
        },
        methods: {
            reportOne(sdcmSfbReport, reportJson) {
                function group(array, subGroupLength) {
                    let index = 0;
                    let newArray = [];
                    while (index < array.length) {
                        newArray.push(array.slice(index, index += subGroupLength));
                    }
                    return newArray;
                }

                $("#sdcmFrom").append("")
                var objArr = Object.keys(sdcmSfbReport.data[0]);
                var arr = group(objArr, 8);
                //找出最后一个数组，并补齐数据
                var endArr = arr[arr.length - 1]
                var len = endArr.length;
                for (var n = 0; n < 8 - len; n++) {
                    endArr.push("null")
                }
                var title = `<div class="title">${sdcmSfbReport.name}</div>`
                function thead(arr, obj) {
                    var th = "";
                    arr.forEach(item => {
                        th += `<th height="40" colspan="1"><div class="table-headCell">${item === "null" ? "" : obj[item]}</div></th>`
                    })
                    return `<thead><tr>${th}</tr></thead>`
                }
                function tbody(arr, obj) {
                    var th = "";
                    arr.forEach(item => {
                        th += `<th height="40" colspan="1"><div class="table-cell">${item === "null" ? "" : obj[item]}</div></th>`
                    })
                    return `<tbody><tr>${th}</tr></tbody>`
                }
                function body(arr) {
                    var body = "";
                    arr.forEach(item => {
                        body += thead(item, sdcmSfbReport.data[0]) + tbody(item, reportJson);
                    })
                    return body
                }

                var body = body(arr);

                var res = `<div class="sdcmReport">${title}<table style="width:800px" border="1" cellpadding="0" cellspacing="0"><colgroup><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"></colgroup>${body}</div>`

                $("#sdcmFrom").append(res)
            },
            reportTwo(reportJson, title) {
                $("#sdcmFrom").append("")
                var tbody = "";
                var hjWhgjan=0, hjQtxszf = 0
                reportJson.forEach((item, index) => {
                    hjWhgjan += item["whgjan"]
                    hjQtxszf += item["qtxszf"]
             
                    tbody += `<tr>${index === 0 ? '<td colspan="1" rowspan="9"><div style="width: 16px;margin: 0 auto;">' + title + '</div></td>' : ""}<td height="40" colspan="1" rowspan="1">
                        <div class="table-headCell">
                            ${item["title"]}
                        </div>
                    </td>
                    <td colspan="1" rowspan="1">
                        <div class="table-headCell">
                           ${item["hj"]}
                        </div>
                    </td>
                    <td colspan="1" rowspan="1">
                        <div class="table-headCell">
                            ${item["whgjan"]}
                        </div>
                    </td>
                    <td colspan="1" rowspan="1">
                        <div class="table-headCell">
                          ${item["qtxszf"]}
                        </div>
                    </td>
                </tr>`
                })
                tbody += `<tr>
                        <td height="40" colspan="2" rowspan="1">
                            <div class="table-headCell">
                                合计
                            </div>
                        </td>
                        <td colspan="1" rowspan="1">
                            <div class="table-headCell">
                                ${hjWhgjan+hjQtxszf}
                            </div>
                        </td>
                        <td colspan="1" rowspan="1">
                            <div class="table-headCell">
                                ${hjWhgjan}
                            </div>
                        </td>
                        <td colspan="1" rowspan="1">
                            <div class="table-headCell">
                               ${hjQtxszf}
                            </div>
                        </td>
                    </tr>`
                var dom = `<div class="sdcmReport">
                            <table style="width:800px" border="1" cellpadding="0" cellspacing="0">
                                <colgroup>
                                    <col width="50">
                                    <col width="200">
                                    <col width="200">
                                    <col width="200">
                                    <col width="200">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th height="40" colspan="2">
                                            <div class="table-headCell">
                                                项目
                                            </div>
                                        </th>
                                        <th colspan="1">
                                            <div class="table-headCell">
                                                总计
                                            </div>
                                        </th>
                                        <th colspan="1">
                                            <div class="table-headCell">
                                                危害国家安全罪犯
                                            </div>
                                        </th>
                                        <th colspan="1">
                                            <div class="table-headCell">
                                                其他刑事罪犯
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                ${tbody}
                                </tbody>
                            </table>
                        </div>`
                $("#sdcmFrom").append(dom)
            },
            reportThree() {

            },
            filterData(data, resData, title) {
                var reportJson = data.map(item => {
                    var whgjan = resData[item["whgjan"]]
                    var qtxszf = resData[item["qtxszf"]]
                    return {
                        title: item["title"],
                        whgjan: whgjan,
                        qtxszf: qtxszf,
                        hj: whgjan + qtxszf
                    }
                })
                page.methods.reportTwo(reportJson, title)
            }
        },
        initData: function () {
            if (!!Id) {
                $.lrSetForm(top.$.rootUrl + '/PrisonOrganization/SfbReport/GetDetail?Id=' + Id + '&tableName=' + tableName, function (data) {
                    var data = data[0];
                    if (data.tableName === "IF_Zfypxqgc") {
                        var resData = JSON.parse(data.reportJson)
                        var IF_Zfypxqgc = [

                            {
                                title: "不足2年",
                                whgjan: "NoTwoYearWhgjanz",
                                qtxszf: "NoTwoYearUpQtxsfz"
                            },
                            {
                                title: "2年以上",
                                whgjan: "TwoYearUpWhgjanz",
                                qtxszf: "TwoYearUpQtxsfz"
                            },
                            {
                                title: "5年以上",
                                whgjan: "FiveYearUpWhgjanz",
                                qtxszf: "FiveYearUpQtxsfz"
                            },
                            {
                                title: "7年以上",
                                whgjan: "SevenYearUpWhgjanz",
                                qtxszf: "SevenYearUpQtxsfz"
                            },
                            {
                                title: "10年以上",
                                whgjan: "TenYearUpWhgjanz",
                                qtxszf: "TenYearUpQtxsfz"
                            },
                            {
                                title: "12年以上",
                                whgjan: "TwelveYearUpWhgjanz",
                                qtxszf: "TwelveYearUpQtxsfz"
                            },
                            {
                                title: "15年以上",
                                whgjan: "FifteenYearUpWhgjanz",
                                qtxszf: "FifteenYearUpQtxsfz"
                            },
                            {
                                title: "无期徒刑",
                                whgjan: "WqWhgjanz",
                                qtxszf: "WqQtxsfz"
                            },
                            {
                                title: "死缓",
                                whgjan: "ShWhgjanz",
                                qtxszf: "ShQtxsfz"
                            },
                        ]
                        page.methods.filterData(IF_Zfypxqgc, resData, "原判刑期")
                    } else if (data.tableName === "IF_Zfsyxqgc") {
                        var resData = JSON.parse(data.reportJson)
                        var IF_Zfsyxqgc = [
                            {
                                title: "不足1年",
                                whgjan: "NoOneYearWhgjanz",
                                qtxszf: "NoOneYearUpQtxsfz"
                            },
                            {
                                title: "1年以上",
                                whgjan: "OneYearUpWhgjanz",
                                qtxszf: "OneYearUpQtxsfz"
                            },
                            {
                                title: "3年以上",
                                whgjan: "ThreeYearUpWhgjanz",
                                qtxszf: "ThreeYearUpQtxsfz"
                            },
                            {
                                title: "5年以上",
                                whgjan: "FiveYearUpWhgjanz",
                                qtxszf: "FiveYearUpQtxsfz"
                            },
                            {
                                title: "7年以上",
                                whgjan: "SevenYearUpWhgjanz",
                                qtxszf: "SevenYearUpQtxsfz"
                            },
                            {
                                title: "10年以上",
                                whgjan: "TenYearUpWhgjanz",
                                qtxszf: "TenYearUpQtxsfz"
                            },
                            {
                                title: "15年以上",
                                whgjan: "FifteenYearUpWhgjanz",
                                qtxszf: "FifteenYearUpQtxsfz"
                            },
                            {
                                title: "无期徒刑",
                                whgjan: "WqWhgjanz",
                                qtxszf: "WqQtxsfz"
                            },
                            {
                                title: "死缓",
                                whgjan: "ShWhgjanz",
                                qtxszf: "ShQtxsfz"
                            },
                        ]
                        page.methods.filterData(IF_Zfsyxqgc, resData, "剩余刑期")
                    } else if (data.tableName === "IF_Jyzyf") {

                    } else {
                        var reportJson = JSON.parse(data.reportJson);
                        reportJson["sumCount"] = data.sumCount;
                        page.methods.reportOne(sdcmSfbReport[data.tableName], reportJson)
                    }
                });
            }
        }
    };
    page.init();
}