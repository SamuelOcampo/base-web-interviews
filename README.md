# Web Interview Questions
This repository has questions, coding challenges and sample answers for the coding challenges for general FE interviewing.

## Coding Challenges
1. Class Components:
```
  Convert the given code (class-components) to Functional Components.
  Follow Up: Avoid unnecessary renders without modifying App's interval
```

2. Dark Mode:
```
  Using the given code (dark-mode) add support for "Dark Mode"
  Dark Mode should make it so the background is Dark and Fonts contrast with it
  Try using as little JS as possible
```

3. Notes:
```
  Create a full CRUD for a Notes application (notes has a JSON server with the structure).
  Each part should have its own screen (Creation, Editing, Details)
  Delete can just be a modal (or a separate screen)
  There should be an "All Notes" view
  Should use Redux to handle state and changes
  Anything you don't manage to complete or feel could be improved, leave comments for it.
```
## Challenge 3 TODOS

1. Add row controls. One for edit and one for delete.
2. On delete dispatcher will dispatch an event to remove that note
3. On Edit dispatcher will fill dispatch an event for pre-fill the form and then another one for route chage.
4. NoteForm needs a submit button and a handler that will trigger a dispatcher, this will create a new note if `id` is null else it will overwrite the existing