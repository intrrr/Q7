import React, { useState } from 'react';
import SysPage from './SysPage';
import MyTitle from './SysPage/MyTitle';
import 石泰榕 from './SysPage2/石泰榕';
import 谭雷 from './SysPage3/谭雷';

const App = () => {
  const [activeComponent, setActiveComponent] = useState<string>(''); // 控制显示的组件

  const handleRunShiTaiRong = () => {
    setActiveComponent('石泰榕'); // 显示石泰榕组件
  };

  const handleRunTanLei = () => {
    setActiveComponent('谭雷'); // 显示谭雷组件
  };

  return (
    <>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={handleRunShiTaiRong}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          石泰榕
        </button>
        <button
          onClick={handleRunTanLei}
          className="bg-green-500 text-white px-6 py-8 rounded hover:bg-green-600"
        >
          谭雷
        </button>
      </div>
      {activeComponent === '石泰榕' && <石泰榕 />}
      {activeComponent === '谭雷' && <谭雷 />}
    </>
  );
};

export default App;


