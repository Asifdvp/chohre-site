"use client";

import { useState } from "react";
import RightArrow from "@/assets/icons/right-arrow.svg";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3" aria-label="Əlaqə formu">
      <h2 className="text-base font-semibold text-black/80 mb-2">
        Bizimlə Əlaqə
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-black/80 text-sm leading-5 font-medium mb-1"
          >
            Ad və soyad
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            disabled
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Ad və soyad"
            aria-required="false"
            autoComplete="name"
          />
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-medium mb-1"
          >
            Telefon nömrəsi
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            disabled
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="+994 XX XXX XX XX"
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium mb-1"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          disabled
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="example@email.com"
          autoComplete="email"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium mb-1"
        >
          Mesajınız
        </label>
        <textarea
          id="contact-message"
          name="message"
          disabled
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 h-27 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Mesajınızı yazın..."
          aria-multiline="true"
        />
      </div>

      <div className="flex justify-end mt-7">
        <button
          disabled
          type="submit"
          aria-label="Formu göndər"
          className="backdrop-blur-xl text-white bg-primary px-4 py-1.5 font-500 rounded-[48px] flex items-center gap-3 transition-colors duration-300 ease-in-out disabled:opacity-60"
        >
          <span>Göndər</span>
          <div className="bg-white text-primary w-9 h-9 rounded-full flex items-center justify-center">
            <RightArrow aria-hidden="true" />
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
