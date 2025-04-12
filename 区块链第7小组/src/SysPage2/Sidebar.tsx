import React from 'react';

interface SidebarProps2 {
  title: string;
  menuItems: { label: string; link: string }[];
}

const Sidebar = (props: SidebarProps2) => {
  const { title, menuItems } = props;

  return (
    <div className="flex w-60 bg-gray-800 text-white h-full p-4">
      {/* 让内容垂直排列，并从顶部开始排列 */}
      <div className="flex flex-col justify-start w-full">
        {/* 标题 */}
        <div className="text-sm font-bold mb-4">{title}</div>
        
        {/* 菜单项列表 */}
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-blue-400 hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

