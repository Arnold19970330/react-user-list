import UserList from "./components/UserList";
import type { User } from "./types/UserType";
import { useMemo, useState } from "react";
import Pagination from "./components/Pagination";
import UserModal from "./components/UserModal";
import AddUserModal from "./components/AddUserModal";

const baseUsers: User[] = [
  {
    id: 1,
    name: "Kovács Anna",
    age: 28,
    city: "Budapest",
    occupation: "Fejlesztő",
  },
  {
    id: 2,
    name: "Nagy Péter",
    age: 35,
    city: "Debrecen",
    occupation: "Projektmenedzser",
  },
  {
    id: 3,
    name: "Szabó Éva",
    age: 22,
    city: "Szeged",
    occupation: "UI/UX Designer",
  },
  {
    id: 4,
    name: "Tóth János",
    age: 41,
    city: "Miskolc",
    occupation: "Adatbázis adminisztrátor",
  },
  {
    id: 5,
    name: "Horváth Katalin",
    age: 31,
    city: "Pécs",
    occupation: "Tesztelő",
  },
  {
    id: 6,
    name: "Kiss Gábor",
    age: 29,
    city: "Győr",
    occupation: "Frontend fejlesztő",
  },
  {
    id: 7,
    name: "Molnár Zsófia",
    age: 38,
    city: "Kecskemét",
    occupation: "Scrum Master",
  },
  {
    id: 8,
    name: "Varga Balázs",
    age: 25,
    city: "Székesfehérvár",
    occupation: "Junior fejlesztő",
  },
  {
    id: 9,
    name: "Farkas Judit",
    age: 33,
    city: "Nyíregyháza",
    occupation: "Marketing menedzser",
  },
  {
    id: 10,
    name: "Balogh László",
    age: 45,
    city: "Szombathely",
    occupation: "Rendszergazda",
  },
  {
    id: 11,
    name: "Papp Ildikó",
    age: 26,
    city: "Veszprém",
    occupation: "Grafikus",
  },
  {
    id: 12,
    name: "Juhász Imre",
    age: 39,
    city: "Eger",
    occupation: "Backend fejlesztő",
  },
  {
    id: 13,
    name: "Mészáros Orsolya",
    age: 30,
    city: "Sopron",
    occupation: "HR specialista",
  },
  {
    id: 14,
    name: "Takács Dániel",
    age: 27,
    city: "Zalaegerszeg",
    occupation: "DevOps mérnök",
  },
  {
    id: 15,
    name: "Simon Eszter",
    age: 36,
    city: "Békéscsaba",
    occupation: "Termékfelelős",
  },
];

function App() {
  const [users, setUsers] = useState<User[]>(() =>
    Array.from({ length: 50 }, (_, i) => {
      const base = baseUsers[i % baseUsers.length];
      return {
        ...base,
        id: i + 1,
        name: `${base.name} ${i + 1}`,
      };
    })
  );
  const [searchTerm, setSearchTerm] = useState("");
  type SortOrder = "asc" | "desc";
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const [showAddModal, setShowAddModal] = useState(false);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // 1. Szűrés ugyebár név, város vagy foglakozás szerint.
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      `${user.name} ${user.city} ${user.occupation}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, users]);

  // 2. Rendezés név szerint
  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [filteredUsers, sortOrder]);

  // 3. Listázás

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedUsers.slice(startIndex, endIndex);
  }, [sortedUsers, currentPage]);

  return (
    <div className="min-h-screen bg-black text-green-200 p-6 font-fira">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-green-500">
          Felhasználók listája React alkalmazás
        </h1>

        <input
          type="text"
          placeholder="Keresés név, város vagy foglalkozás alapján..."
          className="w-full p-2 mb-4 rounded bg-zinc-800 text-green-300 placeholder-green-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-xl font-extrabold mb-2 text-green-500">Szűrők</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setSortOrder("asc")}
              className={`px-4 py-2 rounded w-fit transition duration-200 ${
                sortOrder === "asc"
                  ? "bg-green-600 text-white"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              A–Z
            </button>

            <button
              onClick={() => setSortOrder("desc")}
              className={`px-4 py-2 rounded w-fit transition duration-200 ${
                sortOrder === "desc"
                  ? "bg-green-600 text-white"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              Z–A
            </button>
          </div>
          <div>
            <h2 className="text-xl font-extrabold mb-2 text-green-500">
              Új felhasználó hozzáadása
            </h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-green-700 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
            >
              Új felhasználó hozzáadása
            </button>
          </div>
        </div>
        {selectedUser && (
          <UserModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
            onSave={(updatedUser) => {
              const updated = users.map((u) =>
                u.id === updatedUser.id ? updatedUser : u
              );
              setUsers(updated);
              setSelectedUser(null);
            }}
          />
        )}
        {showAddModal && (
          <AddUserModal
            onClose={() => setShowAddModal(false)}
            onAdd={(newUser) => setUsers([...users, newUser])}
            nextId={users.length + 1}
          />
        )}
        <UserList users={paginatedUsers} onSelect={setSelectedUser} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(sortedUsers.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default App;
