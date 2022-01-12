import notes from "../assets/data";

export default function Note(props) {
  const noteId = props.match.params.id;
  // eslint-disable-next-line eqeqeq
  const currentNote = notes.find((note) => note.id == noteId);
  return (
    <div>
      <p>{currentNote?.body}</p>
    </div>
  );
}
