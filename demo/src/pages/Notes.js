import notes from "../assets/data";
import ListItem from "../components/ListItem";

export default function Notes() {
  return (
    <div>
      {notes.map((m, index) => (
        <ListItem key={index} notes={m} />
      ))}
    </div>
  );
}
