import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/main.jpg"
          alt="Laser cutting machine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/85 to-gray-800/80" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-px bg-gradient-to-l from-[#B22222] to-transparent opacity-50" />
        <div className="absolute bottom-1/3 left-0 w-96 h-px bg-gradient-to-r from-[#B22222] to-transparent opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-gray-700/30 rotate-45" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Small label */}
          <div className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-8">
            {/* <div className="w-2 h-2 bg-[#B22222] rounded-full animate-pulse" /> */}
            <img src="/logo.png" className='rounded-full w-12 h-12' alt="" />
            <span className="text-gray-300 text-sm tracking-wide">ViAn Company</span>
          </div>

          <h1 className="text-white mb-6 tracking-tight">
            Лазерная резка неметаллических материалов с высокой точностью
          </h1>
          
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Режем акрил, фанеру, полистирол, картон и другие материалы по вашим чертежам
          </p>

          <Button 
            onClick={scrollToForm}
            className="bg-[#B22222] cursor-pointer hover:bg-[#8B0000] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#B22222]/20 transition-all hover:shadow-xl hover:shadow-[#B22222]/30 hover:scale-105"
          >
            Оставить заявку
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
