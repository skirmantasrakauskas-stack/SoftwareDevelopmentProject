# User Interface Contract: Google Pay Meme Payment

## Launcher

- Show a visible, keyboard-operable control on the existing To-Do page to start the payment demo.
- The control is separate from task submission and does not add or alter a task.

## Confirmation Dialog

- Open a modal confirmation view when the launcher is activated.
- Show the fixed amount **€1.00**, a Pay control, and a Close control.
- Clearly display that this is a simulation and no payment will be made.
- Use a familiar wallet-style layout without official Google Pay logos or wording that implies affiliation or an actual checkout.
- Provide an accessible dialog name and support Escape dismissal before processing begins.

## Processing and Completion

- Selecting Pay changes the dialog to a visible loading/status state.
- Disable Pay while processing so repeated activation cannot start overlapping simulations.
- Close the dialog automatically after approximately one second and no later than two seconds under normal browser scheduling.
- Do not ask for payment details, represent a successful real payment, or contact any payment service.
- On reopening, show the confirmation state rather than a stale loading state.

## Existing To-Do Behavior

- Opening, dismissing, and completing the demo do not add, remove, reorder, or edit tasks.
- After the dialog closes, the existing task-entry workflow remains usable.
