import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Typography, Divider } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
const { Title, Text } = Typography

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const shoppingCart = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>خوش آمدید, {user?.userName || user?.email || 'کاربر عزیز'}!</Title>
            <Divider />
            <Title level={4}>خرید های شما</Title>
            {shoppingCart.length === 0 ? (
                <Text>کارت خرید شما خالیست</Text>
            ) : (
                <>
                    <List
                        grid={{ gutter: 16, column: 3 }}
                        dataSource={shoppingCart}
                        renderItem={item => (
                            <List.Item key={item.idMeal}>
                                <Card
                                    hoverable
                                    cover={<img alt={item.strMeal} src={item.strMealThumb} style={{ height: 200, objectFit: 'cover' }} />}
                                >
                                    <Card.Meta
                                        title={<Link to={`/product/${item.idMeal}`}>{item.strMeal}</Link>}
                                        description={
                                            <>
                                                <Text>تعداد: {item.quantity}</Text><br />
                                                <Text strong>قیمت کل: تومان{item.totalPrice.toFixed(2)}</Text>
                                            </>
                                        }
                                    />
                                </Card>
                            </List.Item>
                        )}
                    />
                    <Divider />
                    <Text strong>کل محصولات : {totalQuantity}</Text><br />
                    <Text strong> قیمت کل: تومان{totalPrice.toFixed(2)}</Text>
                </>
            )}
        </div>
    )
}

export default Dashboard
