import { useDispatch, useSelector } from "react-redux";

import { INPUT_CHANGE } from "../../store/actionTypes";

const fields = ["title", "content"];

function NoteForm() {
  const formValues = useSelector((state) => state.form.values);
  const dispatch = useDispatch();

  function handleChange(event) {
    const {
      target: { name, value },
    } = event;
    dispatch({ type: INPUT_CHANGE, payload: { name, value } });
  }

  return (
    <form>
      {fields.map((field) => (
        <div>
          <label for={field}>{field}</label>
          <input
            id={field}
            name={field}
            value={formValues[field]}
            onChange={handleChange}
          />
        </div>
      ))}
    </form>
  );
}
export default NoteForm;
