import React, { useState } from "react";
import type { User } from "../types/UserType";

interface AddUserModalProps {
  onClose: () => void;
  onAdd: (newUser: User) => void;
  nextId: number;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ onClose, onAdd, nextId }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [city, setCity] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleAdd = () => {
    if (!name || !age || !city || !occupation) return;

    const newUser: User = {
      id: nextId,
      name,
      age: Number(age),
      city,
      occupation,
    };

    onAdd(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 text-green-200 p-6 rounded-lg shadow-lg max-w-md w-full relative border border-green-500">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-green-300 hover:text-white text-xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-green-400 mb-4">Új felhasználó</h2>

        <input
          type="text"
          placeholder="Név"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 bg-zinc-800 rounded text-green-300"
        />
        <input
          type="number"
          placeholder="Kor"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="w-full mb-2 p-2 bg-zinc-800 rounded text-green-300"
        />
        <input
          type="text"
          placeholder="Város"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full mb-2 p-2 bg-zinc-800 rounded text-green-300"
        />
        <input
          type="text"
          placeholder="Foglalkozás"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          className="w-full mb-4 p-2 bg-zinc-800 rounded text-green-300"
        />

        <button
          onClick={handleAdd}
          className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
        >
          Hozzáadás
        </button>
      </div>
    </div>
  );
};

export default AddUserModal;
