// 例子：代理接听电话，实现拦截黑名单
var backPhoneList = ['189XXXXX140'];       // 黑名单列表
// 代理
var ProxyAcceptPhone = function(phone) {
    // 预处理
    console.log('电话正在接入...');
    if (backPhoneList.includes(phone)) {
        // 屏蔽
        console.log('屏蔽黑名单电话');
    } else {
        // 转接
        AcceptPhone.call(this, phone);
    }
}
// 本体
var AcceptPhone = function(phone) {
    console.log('接听电话:', phone);
};

// 外部调用代理
ProxyAcceptPhone('189XXXXX140');
// ProxyAcceptPhone('189XXXXX141');
