import "./HeaderListItem.css";

function HeaderListItem(props) {
  return (
    <li className="HeaderListItem">
      <p>{props.nums}</p>
    </li>
  );
}

export default HeaderListItem;
