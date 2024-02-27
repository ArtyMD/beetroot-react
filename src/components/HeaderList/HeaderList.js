import "./HeaderList.css";
import HeaderListItem from "../HeaderListItem/HeaderListItem";
function HeaderList() {
  return (
    <ul className="HeaderList">
      {[1, 2, 3, 4, 5].map((item) => (
        <HeaderListItem key={item} nums={item}/>
      ))}
    </ul>
  );
}

export default HeaderList;
