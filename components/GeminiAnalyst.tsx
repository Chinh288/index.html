
import React, { useState } from 'react';
import { analyzeSecurityLog } from '../services/gemini';

interface GeminiAnalystProps {
  logContent: string;
}

const GeminiAnalyst: React.FC<GeminiAnalystProps> = ({ logContent }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    setIsLoading(true);
    const result = await analyzeSecurityLog(logContent);
    setAnalysis(result || "Không có kết quả.");
    setIsLoading(false);
  };

  return (
    <div className="mt-20 py-10 bg-zinc-50 border-y border-zinc-100 -mx-6 px-6 lg:mx-0 lg:rounded-xl lg:border">
      {!analysis && !isLoading ? (
        <div className="text-center">
          <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-6">AI Terminal Analysis</p>
          <button 
            onClick={handleAnalyze}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-all"
          >
            Chạy phân tích kỹ thuật (Gemini)
          </button>
        </div>
      ) : (
        <div className="max-w-none">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Báo cáo phân tích tự động</span>
            {analysis && (
              <button onClick={() => setAnalysis(null)} className="text-zinc-400 hover:text-black text-[10px] font-bold uppercase tracking-widest">Đóng</button>
            )}
          </div>
          
          {isLoading ? (
            <div className="space-y-4">
              <div className="h-2 bg-zinc-200 rounded w-full animate-pulse"></div>
              <div className="h-2 bg-zinc-200 rounded w-5/6 animate-pulse"></div>
              <div className="h-2 bg-zinc-200 rounded w-2/3 animate-pulse"></div>
            </div>
          ) : (
            <div className="text-zinc-600 text-sm font-mono leading-relaxed whitespace-pre-wrap">
              {analysis}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GeminiAnalyst;
