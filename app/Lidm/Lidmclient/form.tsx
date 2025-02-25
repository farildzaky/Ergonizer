"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
    const [name, setName] = useState("");
    const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("userName", name); // Simpan di localStorage
    router.push("/greeting"); // Redirect ke halaman greeting
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Masukkan Nama" 
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;