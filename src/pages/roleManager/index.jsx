import { Fragment, useEffect, useReducer } from "react";
import {
    Table,
    Button,
    Modal,
    Form,
    Input,
    Select,
    message,
    Popconfirm,
    List,
    Card,
    Checkbox,
    Tree,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import config from "../../config";


const ROLE_MAP = {
    norml: "普通管理员",
    admin: "超级管理员",
};

const initState = {
    data: config,
    isModalOpen: false,
};

const reducer = function (state = initState, action) {
    if (action) {
        return { ...state, ...action };
    }
    return state;
};

function Role() {
    const [form] = Form.useForm(); // 创建一个form表单对象,还需要给form赋值具体的表单实例
    const [state, dispatch] = useReducer(reducer, initState);
    const handleDel = (role) => {
        let { data } = state;
        delete data[role];
        dispatch({ data: { ...data } });
    };
    // 取出config对象的key值数组,封装生成tree data的方法
    const setRoleData = function (data) {
        return Object.keys(data).map((item, i) => {
            // 生成tree data的第一层对象
            let o = {
                title: (
                    <Fragment>
                        {item}
                        <Popconfirm
                            placement="top"
                            title="确定删除该角色?"
                            onConfirm={() => handleDel(item)}
                            okText="确定"
                            cancelText="取消"
                        >
                            <DeleteOutlined />
                        </Popconfirm>
                    </Fragment>
                ),
                key: i,
                children: [],
            };
            o.children = Object.keys(data[item]).map((key, j) => {
                // 生成tree data的第二层数据
                let secondO = {
                    title: "",
                    key: `${i}-${j}`,
                };
                let thArr = [];
                // 生成tree data 第三层数据
                console.log(data[item][key]);
                Object.keys(data[item][key]).forEach((threeKey, k) => {
                    let tItme = data[item][key][threeKey];
                    if (threeKey !== "title") {
                        thArr.push(
                            <span
                                style={{ marginLeft: "15px" }}
                                key={`${i}-${j}-${tItme.title}`}
                            >
                                {tItme.title}{" "}
                                <Checkbox
                                    onChange={(e) => handleChangeRole(e, item, key, threeKey)}
                                    checked={tItme.value}
                                />
                            </span>
                        );
                    }
                });
                // 把第三层的页面操作权限放到第二层数据的title位置
                secondO.title = (
                    <Fragment>
                        {config[item][key].title}
                        <span>{thArr}</span>
                    </Fragment>
                );
                return secondO;
            });
            return o;
        });
    };

    useEffect(function () {
        init();
    }, []);
    const init = () => {

    };

    // 点击显示修改用户信息的弹窗并把输入填充到form表单
    const onUpdate = (row) => {

    };

    // 由于form输入的内容会保留，每次点击添加则要把数据设置为"",需要获取form的实例，调用实例的setFiledsValue方法设置form表单默认值。
    const handleShow = () => {
        form.setFieldsValue({
            username: "",
            password: "",
            repassword: "",
            role: "",
        });
        dispatch({
            isModalOpen: true,
            id: "",
        });
    };

    const handleCancel = () => {
        dispatch({
            isModalOpen: false,
        });
    };

    // 获取角色名称，并添加到角色数据，默认添加的角色权限都是normal的。
    const onFinish = (values) => {

    };

    /**
     *
     * @param {*} e 事件对象
     * @param {*} role 角色
     * @param {*} path 角色下面的页面
     * @param {*} item 页面下面的功能
     */
    const handleChangeRole = (e, role, path, item) => {
        const { data } = state;
        data[role][path][item].value = e.target.checked;
        dispatch({ data: { ...data } });
    };

    const handleSave = () => {

    }


    return (
        <Fragment>
            <p>
                <Button type="primary" onClick={handleShow}>
                    添加
                </Button>
                <Button onClick={handleSave} style={{ marginLeft: '10px' }}>保存</Button>
            </p>
            <Tree treeData={setRoleData(state.data)} />
            <Modal
                title="添加角色"
                open={state.isModalOpen}
                onCancel={handleCancel}
                footer={false}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="角色名称"
                        name="roleName"
                    >
                        <Input disabled={state.id} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" style={{marginLeft:'60px'}}>
                            确定
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Fragment>
    );
}

export default Role;
