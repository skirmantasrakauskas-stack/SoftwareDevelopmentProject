# Quickstart: Add Tasks Validation

## Prerequisites

- The feature implementation is present in the project root as `index.html`, `styles.css`, and `app.js`.
- A current desktop or mobile browser with JavaScript enabled.
- No backend, database, package installation, or build command is required.

## Run

Open the project's `index.html` in a browser. Keep the browser console visible if checking for runtime errors. The app should load with the task-entry field, Add button, and task list available.

## Acceptance Checks

1. **Add a task**: Enter `Buy milk` and select Add. Expected: exactly one `Buy milk` entry appears without a page refresh.
2. **Preserve earlier tasks**: Add `Call Sam`. Expected: both tasks remain visible in submission order.
3. **Reject empty input**: Submit with the field empty. Expected: no task is added and required-description feedback appears.
4. **Reject whitespace-only input**: Enter spaces and submit. Expected: no task is added, the list is unchanged, and required-description feedback appears.
5. **Normalize padded input**: Enter `  Read book  ` and submit. Expected: one `Read book` entry appears without surrounding spaces.
6. **Allow duplicate descriptions**: Add `Read book` again. Expected: a second distinct list entry appears.
7. **Render input as text**: Submit a description containing markup-like text, such as `<b>Plan</b>`. Expected: the characters are displayed as text and do not create formatted markup or executable behavior.
8. **Keyboard access**: Focus the description field, enter a valid value, and submit with Enter. Expected: one task is added; the form and feedback remain usable without a mouse.
9. **Session-only persistence**: Add a task and refresh the page. Expected: the list is empty after reload, as persistence is out of scope.

## Review

Confirm the visible list and feedback match the expected outcomes, no full-page refresh occurs on valid submission, and no browser-console errors are produced. Check that the field has an accessible label and invalid-input feedback is announced by assistive technology where available.
