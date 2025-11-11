import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#B22222] rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded" />
              </div>
              <span className="text-white text-xl">LaserCut</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Профессиональная лазерная резка неметаллических материалов с высокой точностью и в кратчайшие сроки.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B22222] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B22222] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B22222] transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B22222] transition-colors duration-300">
                  Резка акрила
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B22222] transition-colors duration-300">
                  Резка фанеры
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B22222] transition-colors duration-300">
                  Резка кожи
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B22222] transition-colors duration-300">
                  Резка пластика
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B22222] transition-colors duration-300">
                  Гравировка
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-6">Компания</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B22222] transition-colors duration-300">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B22222] transition-colors duration-300">
                  Наши работы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B22222] transition-colors duration-300">
                  Прайс-лист
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B22222] transition-colors duration-300">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B22222] transition-colors duration-300">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B22222] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+74951234567" className="text-gray-400 hover:text-white transition-colors duration-300">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#B22222] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@lasercut.ru" className="text-gray-400 hover:text-white transition-colors duration-300">
                    info@lasercut.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B22222] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400">
                    г. Москва, ул. Производственная, 15
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} LaserCut. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-[#B22222] transition-colors duration-300 text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-500 hover:text-[#B22222] transition-colors duration-300 text-sm">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#B22222] to-transparent" />
    </footer>
  );
}
