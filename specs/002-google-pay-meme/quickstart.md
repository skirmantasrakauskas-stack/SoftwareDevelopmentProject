# Quickstart: Google Pay Meme Payment Validation

## Prerequisites

- The feature implementation is present in the existing root-level `index.html`, `styles.css`, and `app.js` files.
- A current desktop or mobile browser with JavaScript enabled.
- No installation, backend, database, API keys, payment provider account, or network service is required.

## Run

Open the project's `index.html` in a browser. Keep the browser console visible if checking for runtime errors. Confirm that the existing task form works before starting the demo.

## Acceptance Checks

1. **Launcher and initial dialog**: Activate the visible payment-demo control. Expected: a modal opens with a clear simulation/no-charge notice, €1.00, Pay, and Close.
2. **Dismiss with Close**: Close the dialog without selecting Pay. Expected: it closes without a loading state and the task list is unchanged.
3. **Dismiss with Escape**: Reopen the dialog and press Escape before processing. Expected: it closes and the task list remains unchanged.
4. **Processing feedback**: Reopen and select Pay. Expected: a loading/status message appears and Pay cannot start a second simulation.
5. **Automatic completion**: Wait without interacting. Expected: within two seconds the loading state and dialog close automatically.
6. **No real payment**: Complete the demo. Expected: no payment credentials are requested, no payment-success claim is shown, and no external payment interaction or charge occurs.
7. **Reset on reopen**: Start the demo again after completion. Expected: the dialog returns to its initial confirmation state.
8. **To-Do regression**: Add a task before the demo, then open, dismiss, and complete the demo; add another task afterward. Expected: the original task remains unchanged and the new task is added normally.
9. **Responsive layout**: Repeat the confirmation and loading checks at a narrow mobile viewport. Expected: amount, simulation notice, and controls remain visible and operable without horizontal overflow.

## Review

Confirm that the dialog is keyboard accessible, that processing feedback is announced, and that the visual treatment is clearly a fictional wallet-style joke rather than a real Google Pay checkout. Confirm there are no external payment requests and no browser-console errors.
