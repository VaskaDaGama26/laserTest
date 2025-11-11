import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Upload, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    file: null as File | null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    if (!formData.name || !formData.phone) {
      toast.error('Пожалуйста, заполните все обязательные поля');
      return;
    }

    // Mock submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', file: null });
      }, 3000);
    }, 500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
      toast.success(`Файл "${e.target.files[0].name}" прикреплён`);
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22222]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B22222]/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 mb-6">
              <div className="w-2 h-2 bg-[#B22222] rounded-full animate-pulse" />
              <span className="text-white tracking-wider text-sm">СВЯЖИТЕСЬ С НАМИ</span>
            </div>
            <h2 className="text-white mb-4">Получите расчёт вашего проекта за 15 минут</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Заполните форму, и наш менеджер свяжется с вами для уточнения деталей и расчёта стоимости
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Ваше имя <span className="text-[#B22222]">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#B22222] focus:ring-[#B22222] rounded-xl h-14"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Телефон <span className="text-[#B22222]">*</span>
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#B22222] focus:ring-[#B22222] rounded-xl h-14"
                    required
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label htmlFor="file" className="block text-white mb-2">
                    Прикрепить файл чертежа (опционально)
                  </label>
                  <div className="relative">
                    <input
                      id="file"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.dwg,.dxf,.ai,.svg,.png,.jpg,.jpeg"
                    />
                    <label
                      htmlFor="file"
                      className="flex items-center justify-center gap-3 bg-white/10 border-2 border-dashed border-white/20 rounded-xl h-24 cursor-pointer hover:bg-white/15 hover:border-[#B22222]/50 transition-all duration-300"
                    >
                      <Upload className="w-6 h-6 text-gray-300" />
                      <span className="text-gray-300">
                        {formData.file ? formData.file.name : 'Нажмите для загрузки файла'}
                      </span>
                    </label>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    Форматы: PDF, DWG, DXF, AI, SVG, PNG, JPG (макс. 10 МБ)
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#B22222] hover:bg-[#8B0000] text-white h-14 text-lg rounded-xl shadow-lg shadow-[#B22222]/20 transition-all hover:shadow-xl hover:shadow-[#B22222]/30 hover:scale-[1.02]"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Отправить заявку
                </Button>

                {/* Privacy Notice */}
                <p className="text-gray-400 text-sm text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-white mb-3">Заявка успешно отправлена!</h3>
                <p className="text-gray-300">
                  Наш менеджер свяжется с вами в ближайшее время
                </p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-[#B22222] mb-2">Телефон</div>
              <div className="text-white">+7 (495) 123-45-67</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-[#B22222] mb-2">Email</div>
              <div className="text-white">info@lasercut.ru</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-[#B22222] mb-2">Режим работы</div>
              <div className="text-white">Пн-Пт: 9:00-18:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
