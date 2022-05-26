import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { saveProduct, updateProduct } from '../../store/action';

function ProductForm({ editProduct }) {
    const dispatch = useDispatch()
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const newProduct = {
            name: values.productName,
            price: +values.price
        }
        if (editProduct) {
            dispatch(updateProduct(editProduct.id, newProduct))
        } else {
            dispatch(saveProduct(newProduct))
        }
        form.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    useEffect(() => {
        form.resetFields();
        if (!editProduct) return;
        const values = {
            productName: editProduct.name,
            price: editProduct.price,
        }
        form.setFieldsValue(values)
    },
        [form, editProduct])
    return (
        <div>
            <div>Product Form</div>
            <Form
                form={form}
                name="basic"
                initialValues={editProduct}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="productName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Product name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your price!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};



export default ProductForm