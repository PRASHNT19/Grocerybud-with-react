import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import "./App.css";

const App = () => {
  return (
    <section className="section-center">
      <Items items={groceryItems} />
    </section>
  );
};

export default App;
