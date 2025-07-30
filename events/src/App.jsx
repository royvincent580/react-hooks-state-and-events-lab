import { useState } from 'react';
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';
import './App.css';

const itemData = [
  { id: 1, name: "🍯 Greek Yogurt", category: "Dairy" },
  { id: 2, name: "🥭 Pomegranate", category: "Produce" },
  { id: 3, name: "🥬 Lettuce", category: "Produce" },
  { id: 4, name: "🧀 String Cheese", category: "Dairy" },
  { id: 5, name: "🍪 Chocolate Cookies", category: "Dessert" },
  { id: 6, name: "🍌 Bananas", category: "Produce" },
  { id: 7, name: "🥛 Milk", category: "Dairy" },
  { id: 8, name: "🍰 Cheesecake", category: "Dessert" },
  { id: 9, name: "🍅 Tomatoes", category: "Produce" },
  { id: 10, name: "🍦 Ice Cream", category: "Dessert" }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={() => setIsDarkMode(!isDarkMode)} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;