import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Upload } from "lucide-react";

export function ContactForm() {
  const [phone, setPhone] = useState("");

  const formatPhone = (value) => {
    // Удаляем всё, кроме цифр
    let digits = value.replace(/\D/g, "");

    // Принудительно начинаем с 7
    if (digits.startsWith("8")) digits = "7" + digits.slice(1);
    if (!digits.startsWith("7")) digits = "7" + digits;

    // Обрезаем до 11 цифр
    digits = digits.slice(0, 11);

    // Формируем маску
    const parts = [];

    parts.push("+7");
    if (digits.length > 1) parts.push(" (" + digits.slice(1, 4));
    if (digits.length >= 4) parts.push(") " + digits.slice(4, 7));
    if (digits.length >= 7) parts.push("-" + digits.slice(7, 9));
    if (digits.length >= 9) parts.push("-" + digits.slice(9, 11));

    return parts.join("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(formatPhone(value));
  };

  return (
    <section
      id="contact-form"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="bg-custom"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 mb-6">
              <div className="w-2 h-2 bg-[#B22222] rounded-full animate-pulse"></div>
              <span className="text-white tracking-wider text-sm">
                СВЯЖИТЕСЬ С НАМИ
              </span>
            </div>
            <h2 className="text-white mb-4">Получите расчёт вашего проекта</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Заполните форму, и наш менеджер свяжется с вами
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
            {/* <<< FORM >>> */}
            <form
              action="https://formspree.io/f/movgldqp"
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Ваше имя <span className="text-[#B22222]">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Иван Иванов"
                  className="bg-white/10 border-white/20 text-white rounded-xl h-14"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-white mb-2">
                  Телефон <span className="text-[#B22222]">*</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 (___) ___-__-__"
                  className="bg-white/10 border-white/20 text-white rounded-xl h-14"
                  required
                />
              </div>

              {/* File upload */}
              {/* <div>
                <label htmlFor="file" className="block text-white mb-2">
                  Прикрепить файл (опционально)
                </label>

                <div className="relative">
                  <input
                    id="file"
                    name="file"
                    type="file"
                    className="hidden"
                    accept=".pdf,.dwg,.dxf,.ai,.svg,.png,.jpg,.jpeg"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setFileName(e.target.files[0].name);
                      } else setFileName("");
                    }}
                  />

                  <label
                    htmlFor="file"
                    className="flex items-center justify-center gap-3 bg-white/10 border-2 border-dashed border-white/20 rounded-xl h-24 cursor-pointer hover:bg-white/15 transition"
                  >
                    <Upload className="w-6 h-6 text-gray-300" />
                    <span className="text-gray-300">
                      {fileName || "Нажмите для загрузки файла"}
                    </span>
                  </label>
                </div>

                <p className="text-gray-400 text-sm mt-2">
                  PDF, DWG, DXF, AI, SVG, PNG, JPG (до 10 МБ)
                </p>
              </div> */}

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-[#B22222] cursor-pointer hover:bg-[#8B0000] text-white h-14 text-lg rounded-xl"
              >
                Отправить заявку
              </Button>

              <p className="text-gray-400 text-sm text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
            {/* <<< END FORM >>> */}
          </div>
        </div>
      </div>
    </section>
  );
}
