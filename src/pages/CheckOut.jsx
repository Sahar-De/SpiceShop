import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Form, Alert, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import { MapContainer, TileLayer, Popup, Marker, useMapEvents } from 'react-leaflet';
import SendInfo from '../components/SendInfo';
import { clearCart } from '../slices/CartSlice';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix leaflet's default icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const LocationMarker = ({ position, setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>لوکیشن دریافت سفارش</Popup>
    </Marker>
  );
};

const CheckOut = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [form] = Form.useForm();
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    if (!position) {
      message.error('لطفا لوکیشن خود را روی نقشه انتخاب کنید.');
      return;
    }
    setLoading(true);
    try {
      // Simulate order submission
      const orderData = {
        customer: values,
        deliveryLocation: position,
        items: cart.items,
        totalPrice: cart.totalPrice,
      };
      // Replace with real API endpoint if available
      await axios.post('/api/orders', orderData);
      message.success('موقعیت شما انتخاب شد!');
      form.resetFields();
      setPosition(null);
      dispatch(clearCart());
    } catch (error) {
      message.error('موقعیت شما ثبت نشد!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container" style={{ maxWidth: 900, margin: 'auto', padding: 20 }}>
      <h1>Checkout</h1>
      {cart.items.length === 0 ? (
        <Alert message="کارت شما خالی است" type="info" />
      ) : (
        <>
          <section style={{ marginBottom: 20 }}>
            <h2>سفارشات:</h2>
            <ul>
              {cart.items.map((item) => (
                <li key={item.idMeal} style={{ marginBottom: 10 }}>
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    style={{ width: 60, height: 60, objectFit: 'cover', marginRight: 10 }}
                  />
                  <strong>{item.strMeal}</strong> x {item.quantity} = ${item.totalPrice.toFixed(2)}
                </li>
              ))}
            </ul>
            <h3>کل: تومان {cart.totalPrice.toFixed(2)}</h3>
          </section>

          <section style={{ marginBottom: 20 }}>
            <h2>اطلاعات موقعیت ارسال</h2>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{ name: '', address: '', phone: '' }}
            >
              <Form.Item
                label="نام"
                name="name"
                rules={[{ required: true, message: 'لطفا نام خود را وارد کنید' }]}
              >
                <Input placeholder="نام و نام خانوادگی" />
              </Form.Item>

              <Form.Item
                label="آدرس"
                name="address"
                rules={[{ required: true, message: 'لطفا ادرس را وارد کنید' }]}
              >
                <Input.TextArea placeholder="آدرس " rows={3} />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  { required: true, message: 'لطفا شماره تماس وارد کنید' },
                  { pattern: /^\+?\d{10,15}$/, message: 'شماره تماس معتبر نیست' },
                ]}
              >
                <Input placeholder="Phone number" />
              </Form.Item>

              <Form.Item label="موقعیت خود را روی نقشه اتنخاب کنید">
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  style={{ height: 300, width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <LocationMarker position={position} setPosition={setPosition} />
                </MapContainer>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  انتخاب لوکیشن
                </Button>
              </Form.Item>
            </Form>
          </section>
          <Button type='default'>پرداخت</Button>
          <SendInfo />
        </>
      )}
    </div>
  );
};

export default CheckOut;
