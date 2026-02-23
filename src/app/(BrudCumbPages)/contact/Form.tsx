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
    console.log(form);
    // burda API çağırışı edə bilərsən
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-black/80  text-sm leading-5 font-medium mb-1">
            Ad və soyad
          </label>
          <input
            type="text"
            name="name"
            disabled
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5  rounded-lg bg-background focus:outline-none "
            placeholder="Ad və soyad"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Telefon nömrəsi
          </label>
          <input
            type="text"
            name="phone"
            disabled
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5  rounded-lg bg-background focus:outline-none "
            placeholder="Telefon nömrəsi"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          disabled
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2.5   rounded-lg bg-background focus:outline-none "
          placeholder="Email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Mesajınız</label>
        <textarea
          name="message"
          disabled
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5  h-27  rounded-lg bg-background focus:outline-none "
          placeholder="Mesajınız"
        />
      </div>

      <div className="flex justify-end mt-7">
        <button
          disabled
          className={` backdrop-blur-xl  text-white  bg-primary       px-4 py-1.5 font-500 rounded-[48px] flex items-center gap-3 transition-colors duration-300 ease-in-out`}
        >
          <span>Göndər </span>
          <div
            className={` bg-white text-primary
           w-9 h-9 rounded-full flex items-center justify-center
          `}
          >
            <RightArrow />
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
