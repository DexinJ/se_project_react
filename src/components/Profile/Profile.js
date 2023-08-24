import "./Profile.css";
import ClothSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
function Profile({ onClick, defaultClothing, onSelectCard }) {
  return (
    <div className="profile">
      <SideBar src={"/images/Avatar.svg"} name={"Terrence Tegegne"} />
      <ClothSection
        clothing={defaultClothing}
        onClick={onClick}
        onSelectCard={onSelectCard}
      />
    </div>
  );
}

export default Profile;
