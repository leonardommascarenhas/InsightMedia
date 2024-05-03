import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  contact: string;
  messagem: string;
};

// type FormProps = {
//   onSubmit: (data: FormData) => void;
// };

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    messagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="lg:absolute -top-12 right-12 my-8 lg:my-0 py-8 px-10 shadow-2xl rounded-3xl mx-4 xl:w-[446px] bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.name}
          onChange={handleChange}
          className="bg-formGray rounded-3xl p-1"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-formGray rounded-3xl p-1"
        />
        <label htmlFor="telefone">Telefone</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="bg-formGray rounded-3xl p-1"
        />
        <label htmlFor="nome">Acrescente algo</label>
        <input
          type="textarea"
          id="message"
          name="message"
          value={formData.name}
          onChange={handleChange}
          className="bg-formGray rounded-3xl py-12"
        />
        <button
          type="submit"
          className="bg-mainOrange font-black mx-auto w-2/3 lg:w-80 text-black hover:bg-black hover:text-white transition-colors duration-500 rounded-3xl p-4"
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
