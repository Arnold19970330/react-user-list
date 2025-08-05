import type { User } from "../types/UserType";
import React, { useState } from "react";

interface UserModalProps {
  user: User;
  onClose: () => void;
  onSave: (updatedUser: User) => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose, onSave }) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [city, setCity] = useState(user.city);
  const [occupation, setOccupation] = useState(user.occupation);

  const handleSave = () => {
    const updatedUser: User = {
      ...user,
      name,
      age,
      city,
      occupation,
    };

    onSave(updatedUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 text-green-200 p-6 rounded-lg shadow-lg max-w-md w-full relative border border-green-500">
        {/* ✖️ Bezárás gomb */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-green-300 hover:text-white text-xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Felhasználó szerkesztése
        </h2>

        {/* 📋 Szerkeszthető mezők – mindenhez input */}
        <div className="mb-3">
          <label className="block mb-1 font-semibold">Név:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded bg-zinc-800 text-green-200 border border-zinc-700"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-semibold">Kor:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 rounded bg-zinc-800 text-green-200 border border-zinc-700"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-semibold">Város:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-3 py-2 rounded bg-zinc-800 text-green-200 border border-zinc-700"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-semibold">Foglalkozás:</label>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="w-full px-3 py-2 rounded bg-zinc-800 text-green-200 border border-zinc-700"
          />
        </div>

        {/* ✅ Mentés gomb */}
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
          >
            Mégse
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
          >
            Mentés
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
