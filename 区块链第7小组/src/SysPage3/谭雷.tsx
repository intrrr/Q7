import { useState } from 'react';

// 类型定义
type Content = {
    hero: {
        backgroundImage: string;
        title: string;
        description: string;
        buttonText: string;
    };
    features: Feature[];
    navItems: string[];
};

type Feature = {
    image: string;
    title: string;
    description: string;
    layout?: 'reverse'; // 可选布局方向
};

// 主要组件
export default function AppleStylePage() {
    // 状态管理移动端菜单
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 可自定义内容配置区（核心修改区域）
    const content: Content = {
        hero: {
            backgroundImage: '/img/haung.png', // 修改为绝对路径
            title: 'RTX50系列',
            description: 'GeForce RTX™ 50 系列 GPU 搭载 NVIDIA Blackwell 架构，为游戏玩家和创作者带来全新玩法。RTX 50 系列具备强大的 AI 算力，带来升级体验和更逼真的画面。',
            buttonText: '了解'
        },
        features: [
            {
                image: '/img/微信图片_20250408214953.png', // 修改为绝对路径
                title: 'RTX5090',
                description: 'NVIDIA® GeForce RTX™ 5090 D 是更为强劲的 GeForce GPU，可为游戏玩家和创作者带来全新玩法。它具有强大 AI 算力，能够处理前沿的模型，应对更具挑战性的创意项目。在游戏体验中，它支持全景光线追踪技术，并带来更低延迟。GeForce RTX 5090 D 采用 NVIDIA Blackwell 架构，并配备 32 GB 高速 GDDR7 显存，助你打开新局面。',
                layout: 'reverse'
            },
            {
                image: '/img/geforce-rtx-50-series-architecture-ari.jpeg', // 修改为绝对路径
                title: 'NVIDIA Blackwell 架构 专为游戏玩家和创作者打造的致胜平台',
                description: '第五代 Tensor Core:借助 FP4 和 DLSS 4，提供强劲 AI 性能;新型 SM 多单元流处理器：针对神经网络着色器优化；第四代 RT Core：专为 Mega Geometry 技术打造'
            }
        ],
        navItems: ['产品'] // 移除了“支持”和“商店”选项
    };

    const scrollToRTX5090 = () => {
        const rtx5090Section = document.getElementById('rtx5090');
        if (rtx5090Section) {
            rtx5090Section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="font-['-apple-system'] max-w-7xl mx-auto">
            {/* 导航栏 */}
            <nav className="fixed top-0 z-100 w-full bg-white/90 backdrop-blur-md shadow-md">
                <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
                    <div className="text-green-500 text-xl font-semibold mb-4 md:mb-0">NVIDIA</div>

                    {/* 桌面导航 */}
                    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-700 text-center">
                        {content.navItems.map((item) => (
                            <li
                                key={item}
                                className="hover:text-green-500 transition-colors px-4 py-2 md:py-0 cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* 移动端菜单按钮 */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* 移动端下拉菜单 */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/90 p-4 shadow-md">
                        <ul className="space-y-4 text-center text-gray-700">
                            {content.navItems.map((item) => (
                                <li
                                    key={item}
                                    className="hover:text-green-500 transition-colors cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>

            {/* 主视觉区域 */}
            <section
                className="h-screen flex flex-col justify-center items-center text-center p-8"
                style={{
                    background: `url('${content.hero.backgroundImage}') center/cover`,
                    // 备用背景样式（防止Tailwind动态值警告）
                    backgroundImage: `url('${content.hero.backgroundImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="backdrop-blur-xs bg-black/30 p-8 rounded-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        {content.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                        {content.hero.description}
                    </p>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition-colors"
                        onClick={scrollToRTX5090}
                    >
                        {content.hero.buttonText}
                    </button>
                </div>
            </section>

            {/* 特性区块 */}
            {content.features.map((feature, index) => (
                <section
                    key={index}
                    id={feature.title === 'RTX5090' ? 'rtx5090' : ''}
                    className={`flex flex-col md:flex-row items-center gap-8 p-8 md:p-16 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                >
                    {/* 图片容器（根据布局调整顺序） */}
                    <div className={`md:w-1/2 ${feature.layout === 'reverse' ? 'md:order-2' : ''}`}>
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>

                    {/* 文字内容 */}
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-gray-900">{feature.title}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                </section>
            ))}
        </div>
    );
}