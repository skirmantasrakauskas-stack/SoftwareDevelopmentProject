---
description: "Task list for the Add Tasks feature"
---

# Tasks: Add Tasks

**Input**: Design documents from `/specs/001-add-tasks/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/ui.md`, `quickstart.md`

**Tests**: Manual browser validation tasks are included because testing was requested. The repository has no automated test framework.

**Organization**: Tasks are grouped by user story to support incremental implementation and verification.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Tasks can run in parallel because they touch different files and have no incomplete dependencies.
- **[Story]**: User story from `spec.md` (`US1` or `US2`).
- Every task names the exact implementation or validation file path.

## Phase 1: Setup

**Purpose**: Create the planned static application entry points.

- [X] T001 Create the root-level `index.html`, `styles.css`, and `app.js` files and link the stylesheet and script from `index.html`.

---
## Phase 2: Foundational

**Purpose**: Establish shared accessible form structure and baseline presentation before either story.

- [X] T002 [P] Add the labeled task form, description input, Add submit button, and empty polite feedback region to `index.html`; assign the IDs `task-form`, `task-description`, and `task-feedback` and associate the message region with the input.
- [X] T003 [P] Add responsive base layout and form styling in `styles.css` for narrow and wide browser viewports.

**Checkpoint**: The static page loads with an accessible task-entry form and no build or backend setup.

---

## Phase 3: User Story 1 - Add a task (Priority: P1)

**Goal**: A user submits a non-empty description and sees one new task in the list immediately while existing tasks remain.

**Independent Test**: Open `index.html`, submit a non-empty description, and verify the task appears without a page refresh; then add another task and verify both remain in submission order.

### Implementation for User Story 1

- [X] T004 [P] [US1] Add a task-list heading and semantic `ul` with ID `task-list` to `index.html`.
- [X] T005 [P] [US1] Implement the in-memory ordered Task collection, session-local numeric IDs, form submission handling, and text-only rendering into `#task-list` in `app.js`; append one trimmed non-empty description, preserve existing tasks, prevent page navigation, and clear the input after success.
- [X] T006 [US1] Run the add, preserve-existing-tasks, duplicate-description, and no-refresh checks from `specs/001-add-tasks/quickstart.md` against `index.html` and `app.js`.

**Checkpoint**: User Story 1 works independently for valid task descriptions. Blank input must not create a task; User Story 2 adds visible validation feedback.

---

## Phase 4: User Story 2 - Prevent blank tasks (Priority: P1)

**Goal**: Empty or whitespace-only submissions leave the list unchanged and tell the user a description is required.

**Independent Test**: With the form and list available, submit an empty value and a whitespace-only value; verify that neither creates a task and required-description feedback is visible and announced.

### Implementation for User Story 2

- [X] T007 [P] [US2] Add visible styling for the required-description feedback state in `styles.css` while retaining readable contrast and responsive layout.
- [X] T008 [P] [US2] Extend submission validation in `app.js` to trim input, reject empty normalized values, show the required-description message in `#task-feedback`, preserve the invalid field value, and leave task state and the list unchanged.
- [X] T009 [US2] Run the empty, whitespace-only, padded-valid-input, and unchanged-list checks from `specs/001-add-tasks/quickstart.md` against `app.js` and `index.html`.

**Checkpoint**: Both P1 stories pass their independent acceptance checks.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Verify security, accessibility, responsive behavior, and user-facing documentation across both stories.

- [X] T010 [P] Verify markup-looking task descriptions render as literal text, not interpreted markup, using the scenario in `specs/001-add-tasks/quickstart.md` and the renderer in `app.js`.
- [X] T011 [P] Verify keyboard submission, the programmatic input label, announced validation feedback, and narrow-viewport usability using `specs/001-add-tasks/quickstart.md`, `index.html`, and `styles.css`.
- [X] T012 [P] Update `README.md` with the application's purpose, how to open `index.html`, and the session-only task-storage behavior.
- [X] T013 Run all acceptance checks in `specs/001-add-tasks/quickstart.md` against the completed `index.html`, `styles.css`, and `app.js` and resolve any failures before handoff.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; creates the three static entry files.
- **Foundational (Phase 2)**: Depends on T001; T002 and T003 can proceed in parallel.
- **User Story 1 (Phase 3)**: Depends on the foundation. T004 and T005 can proceed in parallel because T004 specifies `#task-list`, T002 specifies the form/input IDs, and the tasks modify different files; T006 follows both.
- **User Story 2 (Phase 4)**: Depends on User Story 1 because it extends the shared submission flow. T007 and T008 can proceed in parallel; T009 follows both.
- **Polish (Phase 5)**: Depends on both user stories. T010, T011, and T012 can proceed in parallel; T013 is the final full-feature check.

### User Story Dependencies

- **US1 (P1)**: Starts after the shared form foundation; no dependency on another story.
- **US2 (P1)**: Starts after US1 because blank rejection and feedback extend its existing form submission handler.

### Dependency Graph

```text
T001
  ├── T002 ──┐
  └── T003 ──┴── T004 + T005 (US1, parallel) ── T006
                                                │
                          T007 + T008 (US2, parallel)
                                                │
                                               T009
                                                │
                    T010 + T011 + T012 (parallel)
                                                │
                                               T013
```

### Parallel Execution Examples

**User Story 1**: After T001-T003, work on T004 (`index.html`) and T005 (`app.js`) in parallel using the `#task-list` selector specified in T004. Run T006 after both are complete.

**User Story 2**: After US1 passes, work on T007 (`styles.css`) and T008 (`app.js`) in parallel. Run T009 after both are complete.

**Polish**: After both stories pass, T010, T011, and T012 can proceed in parallel; run T013 after they finish.

## Implementation Strategy

### MVP First (User Story 1)

1. Complete T001-T003 to establish the static page and accessible form.
2. Complete T004-T005 and validate the valid-add flow with T006.
3. User Story 1 is the smallest demonstrable MVP; finish User Story 2 before considering the feature complete because blank-task rejection is also a P1 requirement.

### Incremental Delivery

1. Deliver the static form and page foundation.
2. Add and verify the valid task flow independently.
3. Add blank-input feedback and verify it without regressing valid submission.
4. Complete cross-cutting checks and update the README.

### Notes

- Manual browser scenarios are used because there is no test framework or package setup in the repository.
- Tasks tagged `[P]` use separate files and have no dependency on one another within their stated phase.
- User Story 2 intentionally follows User Story 1 because both share one submission handler.
- Do not add persistence, task editing/completion, or other out-of-scope behavior while implementing these tasks.

## Phase 6: Convergence

- [X] T014 Remove the stray patch-instruction line from `specs/001-add-tasks/tasks.md` while preserving all existing task entries per task-artifact format (partial).
- [X] T015 Review and justify or remove the unrequested DAYMARK branding, tagline, and decorative background in `index.html` and `styles.css` per plan: project scope (unrequested).
