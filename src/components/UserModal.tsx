import React from "react"
import type { User } from "../types/UserType"

interface UserModalProps {
  user: User
  onClose: () => void
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
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

        <h2 className="text-2xl font-bold text-green-400 mb-4">Részletes adatok</h2>

        <p className="mb-2">
          <span className="font-semibold">Név:</span> {user.name}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Kor:</span> {user.age}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Város:</span> {user.city}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Foglalkozás:</span> {user.occupation}
        </p>
      </div>
    </div>
  )
}

export default UserModal
