import React from 'react';
import { Menu, MenuProps } from 'antd';
import { history } from 'umi';

export default function Layout(props) {
  const currentPath = location.pathname.split('/').find(item => item !== '');
  const [current, setCurrent] = React.useState(`/${currentPath}`);
  const onClick = (e) => {
    setCurrent(e.key);
    history.push(e.key);
  };
  const items = [
    {
      label: '首页',
      key: '/',
    },
    {
      label: '关于',
      key: '/about',
    },
    {
      label: 'React',
      key: '/react',
    },
    {
      label: 'Vue',
      key: '/vue',
    },
  ];
  return (
    <div className='master-wrap'>
      <div className='header-menu'>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      {props.children}
    </div>
  );
}
