import { useState } from "react";

export default function ProfileEditor() {
  const [user, setUser] = useState({ name: "Alice", age: 25 });
  const [isSaving, setIsSaving] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setUser((initialUser) => ({
      ...initialUser,
      name: value,
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg w-full flex items-center justify-center">
      <input
        type="text"
        value={user.name}
        onChange={handleNameChange}
        className="border p-2"
      />
      <button
        onClick={handleSave}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isSaving ? "Saving..." : "Save"}
      </button>
    </div>
  );
}
