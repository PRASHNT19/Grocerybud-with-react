import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState(groceryItems);

  const editCompleted = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.error("Item removed");
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Items
        items={items}
        editCompleted={editCompleted}
        removeItem={removeItem}
      />
    </section>
  );
};

export default App;
