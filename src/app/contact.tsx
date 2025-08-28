'use client';
import React from "react";

const TextArea = ({ label, placeholder, title }: { label: string, placeholder: string, title: string }) => (
  <div className='mb-8'>
    <label htmlFor={title} className="block text-lg/6 font-medium text-white">{label}</label>
    <div className="mt-2">
      <textarea required placeholder={placeholder} id={title} name={title} rows={5} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-lg text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"></textarea>
    </div>
  </div>
)

const TextField = ({ label, placeholder, title }: { label: string, placeholder: string, title: string }) => (
  <div className='mb-8'>
    <label htmlFor={title} className="block text-lg/6 font-medium text-white">{label}</label>
    <div className="mt-2">
      <div className="flex items-center rounded-md bg-transparent/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
        <input required id={title} type="text" name={title} placeholder={placeholder} className="input:-internal-autofill-selected:bg-gray-800 block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-lg text-white placeholder:text-gray-500 focus:outline-none" />
      </div>
    </div>
  </div>
)

export default function Contact({ access_key }: { access_key: string | undefined }) {
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", access_key || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
    } else {
      console.error("Error", data);
    }
  };

  return (
    <>
      <div className="min-h-[75vh] flex flex-col justify-center border-t border-gray-800">
        <div className="mx-auto w-full max-w-lg xl:max-w-2xl">
          <h2 className="text-3xl font-bold uppercase pb-6">Drop a line.</h2>
          <form onSubmit={onSubmit}>
            <TextField title='name' label='Full Name' placeholder='Stanley Lieber' />
            <TextField title='email' label='Email' placeholder='the_man@excelsior.com' />
            <TextArea title='message' label='Message' placeholder='Message...' />
            <div className="text-right">
              <button className="cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}