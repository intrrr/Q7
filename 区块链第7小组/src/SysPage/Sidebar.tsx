import React from 'react';

// 定义 Sidebar 组件的属性类型
interface SidebarProps {
  title: string;    // 标题，类型为 string
  content: string;  // 内容，类型为 string
}

const Sidebar = ({ title, content }:SidebarProps) => {
  return (
    <div className='flex w-full  h-screen bg-slate-200'>
      <div className='w-60 bg-gray-800 text-white p-4'>
        <h2 className='text-xl'>{title}</h2> 
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Sidebar;



/**
 * 1.   h-full : 
 *      它将元素的高度设置为父元素的高度，意味着只有当父元素有明确的高度时，
 *      h-full 才能起作用。如果父元素的高度没有设置，h-full 就不会生效，子元素的高度会被忽略或者默认为 auto。
 * 2.  h-screen :
 *      是基于 视口的高度（即浏览器窗口的高度），它不依赖于父元素的高度。
 */