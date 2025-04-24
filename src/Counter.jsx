import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="mt-4 p-4 bg-orange-100 rounded-lg w-4/6 flex justify-center items-center gap-1 flex-col">
      <p className="font-bold">Count: {count}</p>
      <button
        onClick={() => setCount(0)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Reset
      </button>
    </div>
  );
}
