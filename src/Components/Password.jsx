import React, { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+~{}[]<>?";

    let generated = "";
    for (let i = 0; i < length; i++) {
      generated += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generated);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("✅ Password copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-400">
          🔐 Password Generator
        </h1>

        <div className="mb-4">
          <label className="block mb-2 text-gray-300 font-medium">
            Password Length: <span className="text-green-400">{length}</span>
          </label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full cursor-pointer accent-green-500"
          />
        </div>

        <div className="flex flex-col gap-2 mb-6 text-sm text-gray-300">
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="accent-green-500 mr-2"
            />
            Include Uppercase Letters
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="accent-green-500 mr-2"
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="accent-green-500 mr-2"
            />
            Include Symbols
          </label>
        </div>

        <div className="mb-4 flex">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Your password will appear here"
            className="w-full p-2 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
          >
            Copy
          </button>
        </div>

        <button
          onClick={generatePassword}
          className="w-full bg-green-600 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
