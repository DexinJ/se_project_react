import "./ItemCard.css";
function ItemCard({ item, onClick }) {
  return (
    <div className="item">
      <img
        src={item.link}
        className="item__image"
        alt={item.name}
        onClick={() => {
          onClick(item);
        }}
      />
      <div className="item__info">{item.name}</div>
    </div>
  );
}

export default ItemCard;
