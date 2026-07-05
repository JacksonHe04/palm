import { Users, GraduationCap, BookOpen, Library, ArrowRight } from 'lucide-react';
import { PALM_BASE_URL } from '@/app/constants/urls';

const smallCards = [
  {
    icon: Users,
    title: 'PALM 实验室简介',
    href: `${PALM_BASE_URL}intro.html`,
  },
  {
    icon: GraduationCap,
    title: '研究队伍及人才培养',
    href: `${PALM_BASE_URL}members.html`,
  },
  {
    icon: BookOpen,
    title: '科学研究及主要成果',
    href: `${PALM_BASE_URL}publication.html`,
  },
  {
    icon: Library,
    title: '科研资源共享',
    href: `${PALM_BASE_URL}projects.html`,
  },
];

export default function HomeCards() {
  return (
    <div className="cards-grid">
      <a href={`${PALM_BASE_URL}application.html`} target="_blank" rel="noopener noreferrer">
        <div className="stats-card h-full">
          <div className="stats-number">Join Us</div>
          <div>请阅读PALM实验室招生说明</div>
          <div className="join-cta">
            <span>点击阅读</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </a>

      <div className="small-cards-list">
        <a href={`${PALM_BASE_URL}`} target="_blank" rel="noopener noreferrer">
          <div className="horizontal-card">
            <div className="flex items-center justify-center gap-8">
              <img src="/palm_logo_cicle.png" alt="PALM Logo" style={{ width: '48px', height: '48px' }} />
              <div>
                <div className="lab-title">东南大学 PALM 实验室</div>
                <p className="lab-subtitle">计算机科学与工程学院</p>
              </div>
            </div>
          </div>
        </a>

        <div className="small-cards">
          {smallCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <a key={index} href={card.href} target="_blank" rel="noopener noreferrer">
                <div className="small-card">
                  <div className="card-icon-wrapper">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>
                  <div className="card-title">{card.title}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}