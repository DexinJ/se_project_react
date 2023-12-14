import "./Profile.css";
import ClothesSection from "../ClothSection/ClothSection";
import SideBar from "../SideBar/SideBar";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
function Profile({
  onClick,
  defaultClothing,
  onSelectCard,
  onChangeProfile,
  onLogOut,
  onLikeCard,
}) {
  const currentUser = useContext(CurrentUserContext);
  const avatar = currentUser ? currentUser.avatar : "";
  const name = currentUser ? currentUser.name : null;
  return (
    <div className="profile">
      <SideBar
        src={avatar}
        name={name}
        onChangeProfile={onChangeProfile}
        onLogOut={onLogOut}
      />
      <ClothesSection
        clothing={defaultClothing}
        onClick={onClick}
        onSelectCard={onSelectCard}
        onLikeCard={onLikeCard}
      />
    </div>
  );
}

export default Profile;
