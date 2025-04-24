import Counter from "./Counter";
import ProfileEditor from "./ProfileEditor";
import UserList from "./UserList";

export default function App() {
  return (
    <div className="p-4 flex items-center justify-between flex-col">
      <h1 className="text-3xl font-bold mb-4">Buggy Dashboard 🐛</h1>
      <ProfileEditor />
      <UserList />
      <Counter />

      <footer className="mt-8 p-4 bg-gray-500 text-white w-full text-center">
        Debugging Challenge 🧠
      </footer>
    </div>
  );
}
