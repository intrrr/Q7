import React, { useState } from 'react';

type CarModel = {
  name: string;
  description: string;
  imageUrl: string;
  price: string;
};

const carModels: CarModel[] = [
  {
    name: '2024款保时捷 Panamera',
    description:
      '2024款 Panamera 作为大型豪华轿车，提供多种动力选择，包括 2.9T V6 双涡轮增压发动机和 Turbo E-Hybrid 插电式混合动力系统。新款车型在动力和豪华配置方面都有显著提升。',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.vYZhaUke6M0kHwqOn4rWNQHaEK&pid=Api',
    price: '起售价：103.8 万元',
  },
  {
    name: '2024款保时捷 911',
    description:
      '2024款 911 作为经典跑车系列，推出了首款混合动力车型 911 Carrera GTS，搭载全新 T-Hybrid 高性能混合动力系统，提供卓越的驾驶性能和更高的燃油效率。',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.SJA0yf_MSNKtiEXwUQ2VZgHaEK&pid=Api',
    price: '起售价：待定',
  },
];

const CarShowcase: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<CarModel | null>(null);

  // 跳转到保时捷配置器页面
  const handleConfigureClick = () => {
    window.location.href = 'https://configurator.porsche.com/zh-CN/model-start/';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">2024款部分保时捷车型介绍</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {carModels.map((car) => (
          <div
            key={car.name}
            className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedCar(car)}
          >
            <img src={car.imageUrl} alt={car.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <p className="text-gray-600 mt-2">{car.description}</p>
              <p className="text-gray-800 font-semibold mt-4">{car.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCar && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-1/2">
            <img
              src={selectedCar.imageUrl}
              alt={selectedCar.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{selectedCar.name}</h2>
              <p className="text-gray-600 mt-2">{selectedCar.description}</p>
              <p className="text-gray-800 font-semibold mt-4">{selectedCar.price}</p>
              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
                onClick={() => setSelectedCar(null)}
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 配置按钮 */}
      <div className="text-center mt-8">
        <button
          className="px-6 py-6 bg-red-600 text-white rounded-lg"
          onClick={handleConfigureClick}
        >
          请配置您的保时捷
        </button>
      </div>
    </div>
  );
};

export default CarShowcase;
