
import React, { useState } from 'react';
import {
  MOCK_ACTIVITIES,
  MOCK_PROJECTS,
  MOCK_CERTIFICATIONS,
  PROFILE_INFO
} from './constants';
import ActivityCard from './components/ActivityCard';
import GeminiAnalyst from './components/GeminiAnalyst';
import ImageGallery from './components/ImageGallery';

type Tab = 'activities' | 'projects' | 'certifications';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('activities');

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8">
      {/* Header Profile */}
      <header className="pt-32 pb-20 mb-20 border-b border-zinc-100">
        {/* Profile Avatar */}
        <div className="mb-8 flex justify-start">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-zinc-200 shadow-xl">
              <img
                src="./images/profile.jpg"
                alt={PROFILE_INFO.fullName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full ring-2 ring-zinc-900/10 pointer-events-none"></div>
          </div>
        </div>
        <h1 className="text-5xl font-black tracking-tight text-zinc-900 mb-8">{PROFILE_INFO.fullName}</h1>

        <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm mb-10">
          <div className="space-y-1.5">
            <p className="font-bold text-zinc-300 uppercase tracking-widest text-[10px]">Đơn vị</p>
            <p className="text-zinc-600 font-medium">{PROFILE_INFO.school}</p>
          </div>
          <div className="space-y-1.5">
            <p className="font-bold text-zinc-300 uppercase tracking-widest text-[10px]">Lĩnh vực</p>
            <p className="text-zinc-600 font-medium">{PROFILE_INFO.field}</p>
          </div>
          <div className="space-y-1.5">
            <p className="font-bold text-zinc-300 uppercase tracking-widest text-[10px]">Trọng tâm</p>
            <p className="text-zinc-600 font-medium">{PROFILE_INFO.focus}</p>
          </div>
        </div>

        <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed italic">
          {PROFILE_INFO.bio}
        </p>
      </header>

      {/* Primary Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md flex gap-10 mb-24 border-b border-zinc-50">
        {(['activities', 'projects', 'certifications'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`nav-link h-16 flex items-center text-[10px] font-black uppercase tracking-[0.2em] ${activeTab === tab ? 'active' : 'text-zinc-400 hover:text-zinc-600'}`}
          >
            {tab === 'activities' ? 'Nhật ký' : tab === 'projects' ? 'Dự án' : 'Chứng chỉ'}
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="min-h-[60vh]">
        {activeTab === 'activities' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="space-y-0">
              {MOCK_ACTIVITIES.map(activity => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>

            <div className="mt-20">
              <GeminiAnalyst logContent="[Sample SOC Log Content for analysis]" />
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-24">
            {MOCK_PROJECTS.map(project => (
              <section key={project.id} className="max-w-3xl">
                <header className="mb-10">
                  <h2 className="text-3xl font-bold mb-4 text-zinc-900">{project.title}</h2>
                  <p className="text-zinc-500 text-lg leading-relaxed">{project.description}</p>
                </header>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.technologies.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 text-[10px] font-bold text-zinc-500 rounded uppercase tracking-wider">{t}</span>
                  ))}
                </div>

                <div className="prose prose-zinc prose-sm md:prose-base max-w-none text-zinc-600 leading-relaxed bg-zinc-50/50 p-8 rounded-2xl border border-zinc-100">
                  {project.content}
                </div>
              </section>
            ))}
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_CERTIFICATIONS.map(cert => (
              <div key={cert.id} className="p-8 border border-zinc-100 rounded-2xl hover:border-zinc-300 transition-all hover:shadow-sm bg-white flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-4">{cert.issuer}</p>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{cert.title}</h3>
                  <p className="text-zinc-500 text-sm mb-6">{cert.date}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed italic border-t border-zinc-50 pt-4 mb-6">{cert.content}</p>
                </div>
                {cert.images && cert.images.length > 0 && (
                  <div className="mt-auto">
                    <ImageGallery images={cert.images} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Global Footer */}
      <footer className="mt-60 mb-24 py-12 border-t border-zinc-100 flex flex-col items-center">
        <div className="w-8 h-1 bg-zinc-900 mb-8" />
        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] text-center">
          Evidence-Based Technical Portfolio
        </p>
        <p className="text-[9px] text-zinc-300 uppercase tracking-widest mt-4">
          All records verified by technical logs
        </p>
      </footer>
    </div>
  );
};

export default App;
