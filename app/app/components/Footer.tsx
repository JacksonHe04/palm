'use client';

import Link from 'next/link';
import { URLs, PALM_BASE_URL } from '@/app/constants/urls';

const footerSections = [
  {
    title: '项目开源',
    links: [
      {
        name: 'GitHub 仓库',
        url: URLs.github.repository,
      },
      {
        name: '关于开发者',
        url: URLs.github.personal,
      },
    ],
  },
  {
    title: '联系我们',
    links: [
      {
        name: '联系导师',
        url: `${PALM_BASE_URL}members.html`,
      },
      {
        name: '联系招生老师',
        url: URLs.contact,
      },
      {
        name: '联系开发者',
        url: URLs.github.personal,
      },
    ],
  },
  {
    title: '更多网站',
    links: [
      {
        name: '东南大学官网',
        url: URLs.seu.main,
      },
      {
        name: '东南大学计算机学院',
        url: URLs.seu.cs,
      },
      {
        name: '东大计软智常用网址',
        url: URLs.seu.commonLinks,
      },
    ],
  },
  {
    title: '关于 PALM',
    links: [
      {
        name: 'PALM 实验室',
        url: PALM_BASE_URL,
      },
      {
        name: '研究生申请指南',
        url: `${PALM_BASE_URL}application.html`,
      },
      {
        name: '实验室成员',
        url: `${PALM_BASE_URL}members.html`,
      },
    ],
  },
];

export default function Footer() {
  const handleExternalLink = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer
      className="w-full mt-0 py-5 sm:py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/home-bg-m.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="mx-auto my-0 md:text-left">
              <h3 className="text-gray-700 font-bold mb-2">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.url.startsWith('http') ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-500"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.url} className="text-gray-700 hover:text-blue-500">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 border-t border-gray-700/30 pt-5 sm:pt-10">
          <p className="text-center text-gray-700">
            CopyRight ©{' '}
            <a
              href={URLs.github.personal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              何锦诚
            </a>{' '}
            | 刘宇轩 | 戴雨成 | 胡瀚 <br className="md:hidden" /> 2025 All rights reserved.
          </p>
          <p className="text-center text-gray-700 mt-3">东南大学 2025 年创业实践项目作品</p>
        </div>
      </div>

      <style jsx>{`
        footer {
          box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </footer>
  );
}