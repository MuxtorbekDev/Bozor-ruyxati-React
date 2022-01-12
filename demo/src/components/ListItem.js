import { Link } from "react-router-dom";

export default function ListItem(props) {
  console.log(props);
  return (
    <Link to={`/note/${props.note.id}`}>
      <div className="notes-list-item">
        <p>{props.note.body}</p>;
      </div>
    </Link>
  );
}
