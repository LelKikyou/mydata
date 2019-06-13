/*
 * 版 本 Learun-ADMS V6.1.6.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2017 上海力软信息技术有限公司
 * 创建人：力软-前端开发组
 * 日 期：2017.04.18
 * 描 述：报表详情	
 */
var Id = request('Id');
var tableName = request('tableName');

var bootstrap = function bootstrap($, learun) {
    "use strict";

    var page = {
        init: function init() {
            page.initData();
        },
        methods: {
            reportOne: function reportOne(sdcmSfbReport, reportJson) {
                function group(array, subGroupLength) {
                    var index = 0;
                    var newArray = [];
                    while (index < array.length) {
                        newArray.push(array.slice(index, index += subGroupLength));
                    }
                    return newArray;
                }

                $("#sdcmFrom").append("");
                var objArr = Object.keys(sdcmSfbReport.data[0]);
                var arr = group(objArr, 8);
                //找出最后一个数组，并补齐数据
                var endArr = arr[arr.length - 1];
                var len = endArr.length;
                for (var n = 0; n < 8 - len; n++) {
                    endArr.push("null");
                }
                var title = '<div class="title">' + sdcmSfbReport.name + '</div>';
                function thead(arr, obj) {
                    var th = "";
                    arr.forEach(function (item) {
                        th += '<th height="40" colspan="1"><div class="table-headCell">' + (item === "null" ? "" : obj[item]) + '</div></th>';
                    });
                    return '<thead><tr>' + th + '</tr></thead>';
                }
                function tbody(arr, obj) {
                    var th = "";
                    arr.forEach(function (item) {
                        th += '<th height="40" colspan="1"><div class="table-cell">' + (item === "null" ? "" : obj[item]) + '</div></th>';
                    });
                    return '<tbody><tr>' + th + '</tr></tbody>';
                }
                function body(arr) {
                    var body = "";
                    arr.forEach(function (item) {
                        body += thead(item, sdcmSfbReport.data[0]) + tbody(item, reportJson);
                    });
                    return body;
                }

                var body = body(arr);

                var res = '<div class="sdcmReport">' + title + '<table style="width:800px" border="1" cellpadding="0" cellspacing="0"><colgroup><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"></colgroup>' + body + '</div>';

                $("#sdcmFrom").append(res);
            },
            reportTwo: function reportTwo(reportJson, title) {
                $("#sdcmFrom").append("");
                var tbody = "";
                var hjWhgjan = 0,
                    hjQtxszf = 0;
                reportJson.forEach(function (item, index) {
                    hjWhgjan += item["whgjan"];
                    hjQtxszf += item["qtxszf"];

                    tbody += '<tr>' + (index === 0 ? '<td colspan="1" rowspan="9"><div style="width: 16px;margin: 0 auto;">' + title + '</div></td>' : "") + '<td height="40" colspan="1" rowspan="1">\n                        <div class="table-headCell">\n                            ' + item["title"] + '\n                        </div>\n                    </td>\n                    <td colspan="1" rowspan="1">\n                        <div class="table-headCell">\n                           ' + item["hj"] + '\n                        </div>\n                    </td>\n                    <td colspan="1" rowspan="1">\n                        <div class="table-headCell">\n                            ' + item["whgjan"] + '\n                        </div>\n                    </td>\n                    <td colspan="1" rowspan="1">\n                        <div class="table-headCell">\n                          ' + item["qtxszf"] + '\n                        </div>\n                    </td>\n                </tr>';
                });
                tbody += '<tr>\n                        <td height="40" colspan="2" rowspan="1">\n                            <div class="table-headCell">\n                                \u5408\u8BA1\n                            </div>\n                        </td>\n                        <td colspan="1" rowspan="1">\n                            <div class="table-headCell">\n                                ' + (hjWhgjan + hjQtxszf) + '\n                            </div>\n                        </td>\n                        <td colspan="1" rowspan="1">\n                            <div class="table-headCell">\n                                ' + hjWhgjan + '\n                            </div>\n                        </td>\n                        <td colspan="1" rowspan="1">\n                            <div class="table-headCell">\n                               ' + hjQtxszf + '\n                            </div>\n                        </td>\n                    </tr>';
                var dom = '<div class="sdcmReport">\n                            <table style="width:800px" border="1" cellpadding="0" cellspacing="0">\n                                <colgroup>\n                                    <col width="50">\n                                    <col width="200">\n                                    <col width="200">\n                                    <col width="200">\n                                    <col width="200">\n                                </colgroup>\n                                <thead>\n                                    <tr>\n                                        <th height="40" colspan="2">\n                                            <div class="table-headCell">\n                                                \u9879\u76EE\n                                            </div>\n                                        </th>\n                                        <th colspan="1">\n                                            <div class="table-headCell">\n                                                \u603B\u8BA1\n                                            </div>\n                                        </th>\n                                        <th colspan="1">\n                                            <div class="table-headCell">\n                                                \u5371\u5BB3\u56FD\u5BB6\u5B89\u5168\u7F6A\u72AF\n                                            </div>\n                                        </th>\n                                        <th colspan="1">\n                                            <div class="table-headCell">\n                                                \u5176\u4ED6\u5211\u4E8B\u7F6A\u72AF\n                                            </div>\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                ' + tbody + '\n                                </tbody>\n                            </table>\n                        </div>';
                $("#sdcmFrom").append(dom);
            },
            reportThree: function reportThree() {},
            filterData: function filterData(data, resData, title) {
                var reportJson = data.map(function (item) {
                    var whgjan = resData[item["whgjan"]];
                    var qtxszf = resData[item["qtxszf"]];
                    return {
                        title: item["title"],
                        whgjan: whgjan,
                        qtxszf: qtxszf,
                        hj: whgjan + qtxszf
                    };
                });
                page.methods.reportTwo(reportJson, title);
            }
        },
        initData: function initData() {
            if (!!Id) {
                $.lrSetForm(top.$.rootUrl + '/PrisonOrganization/SfbReport/GetDetail?Id=' + Id + '&tableName=' + tableName, function (data) {
                    var data = data[0];
                    if (data.tableName === "IF_Zfypxqgc") {
                        var resData = JSON.parse(data.reportJson);
                        var IF_Zfypxqgc = [{
                            title: "不足2年",
                            whgjan: "NoTwoYearWhgjanz",
                            qtxszf: "NoTwoYearUpQtxsfz"
                        }, {
                            title: "2年以上",
                            whgjan: "TwoYearUpWhgjanz",
                            qtxszf: "TwoYearUpQtxsfz"
                        }, {
                            title: "5年以上",
                            whgjan: "FiveYearUpWhgjanz",
                            qtxszf: "FiveYearUpQtxsfz"
                        }, {
                            title: "7年以上",
                            whgjan: "SevenYearUpWhgjanz",
                            qtxszf: "SevenYearUpQtxsfz"
                        }, {
                            title: "10年以上",
                            whgjan: "TenYearUpWhgjanz",
                            qtxszf: "TenYearUpQtxsfz"
                        }, {
                            title: "12年以上",
                            whgjan: "TwelveYearUpWhgjanz",
                            qtxszf: "TwelveYearUpQtxsfz"
                        }, {
                            title: "15年以上",
                            whgjan: "FifteenYearUpWhgjanz",
                            qtxszf: "FifteenYearUpQtxsfz"
                        }, {
                            title: "无期徒刑",
                            whgjan: "WqWhgjanz",
                            qtxszf: "WqQtxsfz"
                        }, {
                            title: "死缓",
                            whgjan: "ShWhgjanz",
                            qtxszf: "ShQtxsfz"
                        }];
                        page.methods.filterData(IF_Zfypxqgc, resData, "原判刑期");
                    } else if (data.tableName === "IF_Zfsyxqgc") {
                        var resData = JSON.parse(data.reportJson);
                        var IF_Zfsyxqgc = [{
                            title: "不足1年",
                            whgjan: "NoOneYearWhgjanz",
                            qtxszf: "NoOneYearUpQtxsfz"
                        }, {
                            title: "1年以上",
                            whgjan: "OneYearUpWhgjanz",
                            qtxszf: "OneYearUpQtxsfz"
                        }, {
                            title: "3年以上",
                            whgjan: "ThreeYearUpWhgjanz",
                            qtxszf: "ThreeYearUpQtxsfz"
                        }, {
                            title: "5年以上",
                            whgjan: "FiveYearUpWhgjanz",
                            qtxszf: "FiveYearUpQtxsfz"
                        }, {
                            title: "7年以上",
                            whgjan: "SevenYearUpWhgjanz",
                            qtxszf: "SevenYearUpQtxsfz"
                        }, {
                            title: "10年以上",
                            whgjan: "TenYearUpWhgjanz",
                            qtxszf: "TenYearUpQtxsfz"
                        }, {
                            title: "15年以上",
                            whgjan: "FifteenYearUpWhgjanz",
                            qtxszf: "FifteenYearUpQtxsfz"
                        }, {
                            title: "无期徒刑",
                            whgjan: "WqWhgjanz",
                            qtxszf: "WqQtxsfz"
                        }, {
                            title: "死缓",
                            whgjan: "ShWhgjanz",
                            qtxszf: "ShQtxsfz"
                        }];
                        page.methods.filterData(IF_Zfsyxqgc, resData, "剩余刑期");
                    } else if (data.tableName === "IF_Jyzyf") {} else {
                        var reportJson = JSON.parse(data.reportJson);
                        reportJson["sumCount"] = data.sumCount;
                        page.methods.reportOne(sdcmSfbReport[data.tableName], reportJson);
                    }
                });
            }
        }
    };
    page.init();
};