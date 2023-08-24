import "./ItemCard.css";
function ItemCard({ item, onClick }) {
  const handleImageClick = () => {
    onClick(item);
  };
  return (
    <div className="item">
      <img
        src={item.imageUrl}
        className="item__image"
        alt={item.name}
        onClick={handleImageClick}
      />
      <div className="item__info">{item.name}</div>
    </div>
  );
}

export default ItemCard;
