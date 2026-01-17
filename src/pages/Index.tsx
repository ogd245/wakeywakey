import { useState } from 'react';
import Typewriter from '@/components/Typewriter';
import RevealContent from '@/components/RevealContent';

const retroGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHgxN2p4ZHBneXV3OHRzMGo5dXIzMWI1OWVnYXNvYWN0NXhyeXJ5dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KyEtlYiutRHVC68Ess/giphy.gif";

const Index = () => {
  const [showReveal, setShowReveal] = useState(false);
  
  // ✨ CUSTOMIZE YOUR TEXT HERE ✨
  const typewriterText = `wakey wakey, eggs and bakies, its time to rise and shine, you didnt even hangout with me yesterday, so a little yap, i was playing competitive just now because i couldnt sleep, then i got a bit bored so i thought i should do something, then i remembered that you really liked when i did that hangout thing so i thought i should make something for you to see when you wake up:p, so i made this in the last hour, it isnt much but i didnt use any template this time, also stop leaving me on seen, if you do that again, ill ghost you forever... JK ill never leave you, hope you are sleeping well, my pretty submissive gay

I LOVE YOU<3`;

  // ✨ CUSTOMIZE YOUR REVEAL MESSAGE HERE ✨
  const cuteMessage = "HAIIIIII <3\nwakey wakey ♡";

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 lg:p-16 relative overflow-hidden crt-flicker">
      {/* Scanline overlay */}
      <div className="scanlines" />
      
      {/* Vignette effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, hsl(120 10% 2% / 0.4) 100%)'
        }}
      />
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Terminal body */}
        <div className="p-6 md:p-10 min-h-[60vh]">
          
          <Typewriter 
            text={typewriterText}
            speed={50}
            onComplete={() => {
              setTimeout(() => setShowReveal(true), 800);
            }}
          />
          
          {showReveal && (
            <RevealContent 
              gifUrl={retroGif}
              message={cuteMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
