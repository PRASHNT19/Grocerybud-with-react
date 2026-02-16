import SingleItem from "./SingleItem";
import "./Items.css";

const Items = ({ items, editCompleted, removeItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem key={item.id} item={item} editCompleted={editCompleted} removeItem={removeItem} />
        );
      })}
    </div>
  );
};

export default Items;
