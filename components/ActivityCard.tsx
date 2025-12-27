
import React from 'react';
import { Activity, SkillLevel } from '../types';
import ImageGallery from './ImageGallery';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const getLevelStyles = (level: SkillLevel) => {
    switch (level) {
      case SkillLevel.BASIC: return 'text-blue-600 border-blue-100 bg-blue-50/50';
      case SkillLevel.INTERMEDIATE: return 'text-amber-600 border-amber-100 bg-amber-50/50';
      case SkillLevel.ADVANCED: return 'text-rose-600 border-rose-100 bg-rose-50/50';
      default: return 'text-zinc-500 border-zinc-100 bg-zinc-50/50';
    }
  };

  return (
    <article className="relative grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 group">
      {/* Sidebar Metadata (Desktop) */}
      <div className="md:col-span-3">
        <div className="sticky top-24 space-y-6">
          <time className="block text-sm font-mono text-zinc-400 tracking-tight">
            {activity.date}
          </time>
          
          <div className="space-y-3">
            <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Phân loại</p>
            <div className="flex flex-wrap gap-2">
              {activity.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Độ khó</p>
            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getLevelStyles(activity.level)}`}>
              {activity.level}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-9 pl-0 md:pl-8 md:border-l border-zinc-100">
        <h3 className="text-2xl font-bold text-zinc-900 mb-8 leading-snug group-hover:text-black transition-colors">
          {activity.title}
        </h3>

        <div className="space-y-10">
          {activity.content.split('\n\n').map((section, idx) => {
            const isH2 = section.startsWith('## ');
            const isH3 = section.startsWith('### ');
            
            if (isH2) {
              return (
                <div key={idx} className="pt-4 border-t border-zinc-50">
                  <h2 className="text-lg font-bold text-zinc-900 mb-4">{section.replace('## ', '')}</h2>
                </div>
              );
            }

            if (isH3) {
              const [title, ...body] = section.split('\n');
              return (
                <div key={idx} className="space-y-3">
                  <h4 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em]">
                    {title.replace('### ', '')}
                  </h4>
                  <div className="text-zinc-600 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                    {body.join('\n').trim()}
                  </div>
                </div>
              );
            }

            if (section.includes('* ')) {
              return (
                <ul key={idx} className="space-y-2 py-2">
                  {section.split('\n').map((line, lidx) => (
                    <li key={lidx} className="flex gap-3 text-zinc-600 text-sm md:text-base leading-relaxed">
                      <span className="text-zinc-300 mt-1.5 flex-shrink-0">•</span>
                      <span>{line.replace('* ', '')}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={idx} className="text-zinc-600 text-sm md:text-base leading-relaxed">
                {section}
              </p>
            );
          })}
        </div>

        {activity.images && activity.images.length > 0 && (
          <div className="mt-12 rounded-xl overflow-hidden border border-zinc-100 shadow-sm">
            <ImageGallery images={activity.images} />
          </div>
        )}
      </div>
    </article>
  );
};

export default ActivityCard;
