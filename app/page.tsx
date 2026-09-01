"use client";

import React, { useState } from 'react';
import { Sparkles, BookOpen, Search } from 'lucide-react';
import { runesData, spreadDescriptions, getLabels, type Rune } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<'draw' | 'meanings'>('draw');
  const [spreadCount, setSpreadCount] = useState<number>(1);
  const [question, setQuestion] = useState<string>('');
  const [selectedRunes, setSelectedRunes] = useState<{ rune: Rune; label: string }[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleStartReading = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const shuffled = [...runesData].sort(() => 0.5 - Math.random());
      const chosen = shuffled.slice(0, spreadCount);
      const labels = getLabels(spreadCount);
      
      setSelectedRunes(chosen.map((rune, idx) => ({ rune, label: labels[idx] })));
      setIsAnimating(false);
    }, 600);
  };

  const handleSpreadChange = (count: number) => {
    setSpreadCount(count);
    setSelectedRunes(null);
    setQuestion('');
  };

  const filteredRunes = runesData.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen flex flex-col justify-between selection:bg-amber-700 selection:text-white font-sans">
      {/* Header */}
      <header className="py-6 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-amber-500 flex items-center gap-2">
            <span>ᚠ</span> RUNE DIVINATION
          </h1>
          <nav className="flex gap-4 text-sm md:text-base">
            <button 
              onClick={() => setActiveTab('draw')} 
              className={`transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${activeTab === 'draw' ? 'text-amber-400 font-medium border-amber-500' : 'text-zinc-400 border-transparent hover:text-amber-300'}`}
            >
              <Sparkles className="w-4 h-4" /> เสี่ยงทาย
            </button>
            <button 
              onClick={() => setActiveTab('meanings')} 
              className={`transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${activeTab === 'meanings' ? 'text-amber-400 font-medium border-amber-500' : 'text-zinc-400 border-transparent hover:text-amber-300'}`}
            >
              <BookOpen className="w-4 h-4" /> ความหมายรูน
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-8 flex-grow w-full">
        {activeTab === 'draw' ? (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center space-y-3">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-400">เสียงกระซิบแห่งเทพเจ้า</h2>
              <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">ตั้งจิตอธิษฐานถึงคำแนะนำที่คุณต้องการ แล้วเลือกรูปแบบการเปิดแผ่นป้ายรูนโบราณ Elder Futhark</p>
            </div>

            {/* Spread Selector */}
            <div className="flex flex-wrap justify-center gap-3">
              {[1, 3, 5].map((count) => (
                <button 
                  key={count}
                  onClick={() => handleSpreadChange(count)}
                  className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    spreadCount === count 
                      ? 'border-amber-600/50 bg-amber-500/10 text-amber-400 shadow-lg shadow-amber-900/10' 
                      : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-amber-600/50 hover:text-amber-400'
                  }`}
                >
                  {count} รูน {count === 1 ? "(คำตอบฉับพลัน)" : count === 3 ? "(อดีต-ปัจจุบัน-อนาคต)" : "(กางเขนแห่งรูน)"}
                </button>
              ))}
            </div>

            {/* Spread Description */}
            <div className="bg-zinc-900/50 border border-amber-600/20 rounded-2xl p-6 max-w-2xl mx-auto space-y-3">
              <h3 className="text-lg font-serif font-bold text-amber-400">{spreadDescriptions[spreadCount].title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">{spreadDescriptions[spreadCount].desc}</p>
              <div className="pt-2 border-t border-zinc-800">
                <p className="text-xs text-amber-300/80 font-semibold mb-1">วิธีใช้:</p>
                <p className="text-xs text-zinc-400 leading-relaxed">{spreadDescriptions[spreadCount].usage}</p>
              </div>
            </div>

            {/* Question Input */}
            <div className="max-w-md mx-auto">
              <input 
                type="text" 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="พิมพ์คำถามหรือเรื่องที่ต้องการคำแนะนำ (ไม่บังคับ)..." 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors text-zinc-200 placeholder-zinc-600"
              />
            </div>

            {/* Action Button */}
            <div className="text-center">
              <button 
                onClick={handleStartReading}
                disabled={isAnimating}
                className="font-serif px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg shadow-amber-900/20 transition-all transform active:scale-95 disabled:opacity-50"
              >
                {isAnimating ? "กำลังอัญเชิญรูน..." : "สุ่มเสี่ยงทายรูน"}
              </button>
            </div>

            {/* Results */}
            {selectedRunes && (
              <div className="space-y-6 pt-4 animate-fadeIn">
                <div className="p-4 bg-zinc-900/80 border border-amber-600/30 rounded-2xl text-center max-w-2xl mx-auto">
                  <p className="text-amber-300/80 text-sm italic mb-1">
                    {question ? `คำถาม: "${question}"` : "คำทำนายทั่วไปสำหรับคุณในขณะนี้"}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-amber-400">คำทำนายของคุณ</h3>
                </div>

                <div className={`grid grid-cols-1 ${selectedRunes.length === 1 ? 'max-w-sm mx-auto' : selectedRunes.length === 3 ? 'md:grid-cols-3 max-w-3xl mx-auto' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'} gap-4 md:gap-6`}>
                  {selectedRunes.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-600/40 rounded-2xl p-5 flex flex-col items-center text-center space-y-4 shadow-xl shadow-amber-950/20 hover:border-amber-500 transition-all"
                    >
                      <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">{item.label}</span>
                      <div className="w-16 h-20 md:w-20 md:h-24 rounded-xl bg-zinc-950 border border-amber-600/50 flex items-center justify-center shadow-inner">
                        <span className="font-serif text-4xl md:text-5xl text-amber-400">{item.rune.symbol}</span>
                      </div>
                      <div>
                        <h4 className="font-serif text-lg md:text-xl font-bold text-amber-300">{item.rune.name}</h4>
                        <p className="text-amber-100/90 font-medium text-xs md:text-sm mt-1">{item.rune.meaning}</p>
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed border-t border-zinc-800 pt-3">{item.rune.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <h2 className="font-serif text-3xl font-bold text-amber-400">คัมภีร์รูน Elder Futhark (24 ตัว)</h2>
              <p className="text-zinc-400 text-sm">ทำความเข้าใจความหมายเชิงสัญลักษณ์ของอักษรศักดิ์สิทธิ์แต่ละตัว</p>
            </div>
            
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-zinc-500" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาชื่อรูนหรือความหมาย..." 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors text-zinc-200 placeholder-zinc-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredRunes.map((rune, idx) => (
                <div key={idx} className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-4 flex items-start gap-4 hover:border-amber-600/40 transition-colors">
                  <div className="w-12 h-14 rounded-lg bg-zinc-900 border border-amber-600/30 flex items-center justify-center shrink-0">
                    <span className="font-serif text-2xl text-amber-400">{rune.symbol}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-amber-300 text-base">{rune.name}</h4>
                    <p className="text-zinc-200 text-xs font-medium">{rune.meaning}</p>
                    <p className="text-zinc-500 text-xs">{rune.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-zinc-800 text-center text-xs text-zinc-500">
        <p>&copy; 2026 Rune Divination TSX App. แรงบันดาลใจจากตำนานนอร์ดิกโบราณ</p>
      </footer>
    </div>
  );
}
