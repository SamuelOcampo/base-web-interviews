import { useSelector } from "react-redux";

const headers = ["title", "content", "createdAt", "id"];
function HomePage() {
  const notes = useSelector((state) => state.notes.data);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {notes.map((note) => (
          <tr key={note.id}>
            {headers.map((key) => (
              <td key={note.id + "-" + key}>{note[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HomePage;
