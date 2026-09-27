# Data Model: Google Pay Meme Payment

## Payment Demo State

This entity represents temporary interface state only. It is not a payment or transaction record.

| Field | Type | Rules |
|---|---|---|
| `status` | String | One of `confirmation` or `processing`; reset when the dialog closes or is opened again. |
| `amount` | Display value | Fixed at €1.00; not used to request or transfer money. |
| `timer` | Browser timer handle | Exists only while processing; cleared when the simulation finishes or is otherwise reset. |

## State Transitions

- **Closed -> confirmation**: User activates the visible demo button; show the fixed amount, simulation notice, Pay, and Close controls.
- **Confirmation -> processing**: User selects Pay; show loading feedback and prevent a second Pay activation.
- **Confirmation -> closed**: User selects Close or presses Escape; no task or payment state is changed.
- **Processing -> closed**: After approximately one second, close the dialog and clear transient state automatically.
- **Reopen**: A new interaction always starts in confirmation state.

## Data Boundaries

- The payment demo stores no credentials, account identifiers, transaction IDs, or payment history.
- It performs no persistence and sends no network requests.
- Existing To-Do task data is separate and remains unchanged by every demo transition.
