'use client';

import { URLs } from '@/app/constants/urls';

export default function HeroSection() {
  return (
    <div className="hero-grid">
      <div className="hero-content">
        <h1 className="hero-title">PAttern Learning and Mining(PALM) Lab</h1>
        <p className="hero-description">
          PALM
          实验室隶属东南大学计算机科学与工程学院，地点位于东南大学九龙湖校区计算机楼，主要从事数据挖掘与知识发现、机器学习、模式识别以及相关领域的基础性、前沿性、创新性的研究工作。
        </p>
        <a
          href={URLs.applicationForm}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-white rounded-lg transition-colors hover:opacity-90"
          style={{ backgroundColor: '#3b82f6', cursor: 'pointer' }}
        >
          申请加入我们
        </a>
      </div>

      <div className="hero-image">
        <img
          src="/lib.png"
          alt="home-img"
          className="w-full max-w-xl h-auto rounded-xl"
        />
      </div>
    </div>
  );
}