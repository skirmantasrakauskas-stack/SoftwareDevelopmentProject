# User Interface Contract: Add Tasks

## Task Entry

- Present a task-description field with a programmatically associated label.
- Provide an Add submit button within a form. Submitting with Enter is supported through native form behavior.
- A submitted description is trimmed before validation and display.

## Valid Submission

- A non-empty trimmed description creates exactly one distinct task entry.
- Append the entry after existing tasks without removing or reordering them.
- Show the task in the current page immediately; do not navigate or reload the page.
- Clear the description field and any prior validation message after a successful submission.
- Render the description as text, not interpreted HTML.

## Invalid Submission

- Empty and whitespace-only descriptions do not create task entries and do not change the existing list.
- Show feedback that a description is required, associate it with the field, and announce it through a polite live region.
- Keep the invalid field value available so the user can correct it.

## List and State

- Expose tasks as a semantic list in submission order.
- Duplicate descriptions are separate entries.
- Tasks exist in the current page session only and are lost on refresh; there is no server or persistence interface for this feature.
