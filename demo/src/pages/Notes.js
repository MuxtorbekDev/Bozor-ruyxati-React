import notes from "../assets/data";
import ListItem from "../components/ListItem";

export default function Notes() {
  return (
    <div>
      {notes.map((note, index) => (
        <ListItem notes={note} key={index} />
      ))}
    </div>
  );
}
