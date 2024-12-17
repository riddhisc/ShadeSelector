import React, { useState, useEffect } from "react";
import ColorBox from "./components/ColorBox";
import Header from "./components/Header";
import { FaSyncAlt, FaHeart, FaTrash } from "react-icons/fa";  // Correct imports for icons


const App = () => {
  const [palette, setPalette] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize palette and load favorites on mount
  useEffect(() => {
    setPalette(generatePalette());
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  // Update localStorage when favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Generate a random color palette
  function generatePalette() {
    return Array.from({ length: 5 }, () => 
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
    );
  }

  // Copy color to clipboard
  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
  };

  // Save current palette to favorites
  const saveToFavorites = () => {
    setFavorites(prev => [...prev, palette]);
  };

  // Delete a saved palette
  const deleteFavorite = (index) => {
    setFavorites(prev => prev.filter((_, i) => i !== index));
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-300 p-8`}>
      <div className="max-w-6xl mx-auto">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Current Palette */}
        <div className="flex justify-center gap-6 mb-10">
          {palette.map((color, index) => (
            <ColorBox key={index} color={color} onCopy={copyToClipboard} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-6 mb-12">
          <button 
            onClick={() => setPalette(generatePalette())}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            <FaSyncAlt /> Generate New Palette
          </button>
          <button 
            onClick={saveToFavorites}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md"
          >
            <FaHeart className="w-5 h-5" /> Save Palette
          </button>
        </div>

        {/* Saved Palettes */}
        {favorites.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Saved Palettes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((favPalette, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex gap-2 mb-4">
                    {favPalette.map((color, i) => (
                      <div 
                        key={i} 
                        className="w-16 h-16 rounded-lg shadow-md"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                  <button
                    onClick={() => deleteFavorite(index)}
                    className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
                  >
                    <FaTrash className="w-5 h-5" /> Delete Palette
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
