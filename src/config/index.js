const config = {
    admin: {
        "/": { view: { value: true, title: "浏览" }, title: "首页" },
        "/adminuser": {
            view: { value: true, title: "浏览" },
            add: { value: true, title: "添加" },
            update: { value: true, title: "更新" },
            del: { value: true, title: "删除" },
            title: "后端管理",
        },
        "/users": { view: { value: true, title: "浏览" }, title: "会员管理" },
        "/product": {
            view: { value: true, title: "浏览" },
            add: { value: true, title: "添加" },
            update: { value: true, title: "更新" },
            del: { value: true, title: "删除" },
            title: "商品管理",
        },
        "/order": {
            view: { value: true, title: "浏览" },
            update: { value: true, title: "更新" },
            title: "订单管理",
        },
        "/role": {
            view: { value: true, title: "浏览" },
            add: { value: true, title: "添加" },
            update: { value: true, title: "更新" },
            title: "角色管理",
        },
    },
    normal: {
        "/": { view: { value: true, title: "浏览" }, title: "首页" },
        "/adminuser": {
            view: { value: false, title: "浏览" },
            add: { value: false, title: "添加" },
            update: { value: false, title: "更新" },
            del: { value: false, title: "删除" },
            title: "后端管理",
        },
        "/users": { view: { value: false, title: "浏览" }, title: "会员管理" },
        "/product": {
            view: { value: true, title: "浏览" },
            add: { value: false, title: "添加" },
            update: { value: false, title: "更新" },
            del: { value: false, title: "删除" },
            title: "商品管理",
        },
        "/order": {
            view: { value: true, title: "浏览" },
            update: { value: false, title: "更新" },
            title: "订单管理",
        },
        "/role": {
            view: { value: false, title: "浏览" },
            add: { value: false, title: "添加" },
            update: { value: false, title: "更新" },
            title: "角色管理",
        },
    },
};
export default config;
