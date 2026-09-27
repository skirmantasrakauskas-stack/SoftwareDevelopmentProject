# Data Model: Add Tasks

## Task

A task is one entry in the visible To-Do list.

| Field | Type | Rules |
|---|---|---|
| `id` | Number | Unique within the current page session; used to identify the entry during rendering. |
| `description` | String | Required; trimmed; must contain at least one non-whitespace character. |

## Collection and Relationships

- The page maintains an ordered collection of tasks in memory.
- Each task is independent; duplicate descriptions are allowed.
- The collection order is the order in which valid tasks were submitted.
- The rendered list is a view of the collection; one accepted submission creates one task and one corresponding list entry.

## Validation Rules

1. Trim leading and trailing whitespace from the submitted description.
2. If the trimmed value is empty, do not create a task or change the collection.
3. Store and display the trimmed description for an accepted task.
4. Treat descriptions as text, not markup.

## State Transitions

- **No change**: Empty or whitespace-only submission leaves the collection and list unchanged and presents required-description feedback.
- **Added**: Non-empty submission creates a task, appends it to the collection, and updates the visible list immediately.
- **Page refresh**: In-memory task state is reset. Persistence is outside this feature's scope.
