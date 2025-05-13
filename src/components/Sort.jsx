import React from 'react'
import {Button} from "antd"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const Sort = () => {
    const items = [
        {
          label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
              1st menu item
            </a>
          ),
          key: '0',
        },
        {
          label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
              2nd menu item
            </a>
          ),
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ];
  return (
    <div className='flex items-center justify-between my-8'>
        <div className='flex flex-wrap gap-3 items-center justify-start  mobile:gap-5 tablet:w-1/2'>
            <Button  style={{color:"var(--color-mint-500)"}} variant='text'>همه محصولات</Button>
            <Button color='#9d9d9d' variant='text'>محصولات جدید </Button>
            <Button color='#9d9d9d' variant='text'>تخفیف دارها</Button>
        </div>
        <div className='hidden tablet:block'>
        <Dropdown className='font-farsi text-md'
            menu={{
            items,
            }}
            trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
            <Space>
                مرتب سازی بر اساس:
                <DownOutlined />
            </Space>
            </a>
        </Dropdown>
        </div>
    </div>
  )
}

export default Sort