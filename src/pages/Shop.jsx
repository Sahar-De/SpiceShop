import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import ProductCart from '../components/ProductCart'
import MealCart from '../components/mealCart'
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
  selectFilteredProducts,
  selectCategories,
  setSearchTerm,
  setSelectedCategory,
  setSelectedArea,
  selectAreas
} from "../slices/ProductSlice"
import { Layout, Button, Slider, Pagination } from 'antd'
import Sort from '../components/Sort'
import { useDispatch, useSelector } from 'react-redux'
const { Header, Content, Sider } = Layout


const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const filteredProducts = useSelector(selectFilteredProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);
  const cats = useSelector(selectCategories);
  const areas = useSelector(selectAreas)


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());

    }


  }, [status, dispatch]);

  // مدیریت جستجو و فیلتر  
  const handleSearch = (e) => {

    dispatch(setSearchTerm(e.target.value));

  };

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleAreaChange = (area) => {
    dispatch(setSelectedArea(area));
  }


  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }


  return (
    <Layout>
      <Header style={{ background: '#fff', padding: 0, height: 'auto' }}><Banner /></Header>
      <Layout style={{ padding: '0px', margin: '0px' }}>
        <Sider className='hidden laptop:block ml-6 ' width={250} style={{ background: '#fff' }}>
          <div className=' flex flex-col gap-3 font-farsi my-8 bg-lightgray pt-3'>
            <div className='flex flex-col gap-2 px-4'>
              <h2>دسته بندی</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '10px', }}>
                  <Button onClick={() => handleCategoryChange("")} variant="text" style={{ background: 'var(--color-lightgray)', textDecoration: 'none', border: "none", color: 'var(--color-mint-500)', font: 'var(--font-farsi)' }}>همه</Button>
                </li>
                {cats.map((c, i) => (
                  <li key={i} style={{ padding: '10px', }}>
                    <Button onClick={() => handleCategoryChange(c)} variant="text" style={{ background: 'var(--color-lightgray)', textDecoration: 'none', border: "none", color: 'var(--color-mint-500)', font: 'var(--font-farsi)' }}>{c}</Button>
                  </li>
                ))}

              </ul>
            </div>
            <div className='flex flex-col gap-2 px-4'>
              <h3>محدوده قیمت</h3>
              <Slider range defaultValue={30} color={"green"} />
              <p>قیمت:</p>
              <Button type='primary'>فیلتر</Button>
            </div>
            <div className='flex flex-col gap-2 px-4'>
              <h3>ملیت</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '10px', }}>
                  <Button onClick={() => handleCategoryChange("")} variant="text" style={{ background: 'var(--color-lightgray)', textDecoration: 'none', border: "none", color: 'var(--color-mint-500)', font: 'var(--font-farsi)' }}>همه</Button>
                </li>
                {areas.map((area, index) => (
                  <li key={index} style={{ padding: '10px', }}>
                    <Button onClick={() => handleAreaChange(area)} variant="text" style={{ background: 'var(--color-lightgray)', textDecoration: 'none', border: "none", color: 'var(--color-mint-500)', font: 'var(--font-farsi)' }}>{area}</Button>
                  </li>
                ))}

              </ul>
            </div>
            <img src="/images/SuperSaleBanner.png" className='mix-blend-darken ' />

          </div>
        </Sider>
        <Content className='pr-0 laptop:pr-6' >
          <Sort />
          <div className='w-full py-12 px-5'>
            {/* جستجو و فیلتر */}
            <input
              className='outline-0 p-2.5 rounded-md border border-gray-200 w-full'
              type="text"
              placeholder=" جستجو.  ...."
              onChange={handleSearch}
            />
          </div>
          <div className='grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-x-4  tablet:gap-x-8 gap-y-16'>
            {filteredProducts.map((p, i) => (
              <MealCart key={p.idMeal} product={p} />

            ))}
          </div>

          <Pagination defaultCurrent={1} total={50} />
        </Content>
      </Layout>


    </Layout>
  )
}

export default Shop