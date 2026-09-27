<!--
Sync Impact Report
Version change: Unversioned scaffold -> 1.0.0 (initial adoption)
Modified principles: Template placeholders -> I. Specification-First; II. Student Ownership of Work;
	III. Incremental, Verified Delivery; IV. Clear and Accessible Web Standards;
	V. Traceable Decisions and Commits
Added sections: Additional Constraints; Development Workflow
Removed sections: None
Follow-up TODOs: None
-->
# Course Web Application Constitution

## Core Principles

### I. Specification-First
Define each feature's user-facing behavior and acceptance criteria in a specification before
implementation. Keep the plan aligned with the specification, and update both when requirements
change. This makes scope and completion criteria explicit.

### II. Student Ownership of Work
AI tools MAY support planning, coding, and review. Students MUST understand, validate, and be able
to explain all submitted work, and remain accountable for its correctness and compliance with
course rules.

### III. Incremental, Verified Delivery
Implement one coherent feature slice at a time. Keep the application runnable, and verify each
slice in the browser with relevant checks before building on it. This limits debugging scope and
makes progress demonstrable.

### IV. Clear and Accessible Web Standards
Use semantic HTML for content, CSS for presentation, and JavaScript for behavior. Build responsive
pages with accessible content and controls. Keep code readable and avoid dependencies that do not
serve a stated need.

### V. Traceable Decisions and Commits
Make focused Git commits with messages that describe the change. Record important design and
technical decisions in the project documentation so their rationale remains reviewable.

## Additional Constraints

The application MUST use HTML, CSS, and JavaScript. Prefer standard browser capabilities and keep
the implementation proportionate to the course project's scope. Course and instructor requirements
take precedence when they are stricter than this constitution.

## Development Workflow

1. Specify feature behavior and acceptance criteria.
2. Plan the implementation and record important decisions.
3. Implement and verify features incrementally; keep the specification and documentation current.
4. Review the finished work against its acceptance criteria and this constitution before submission.

## Governance

This constitution governs project development practices. Amendments MUST state the reason for the
change, be agreed by the project team, and update the version and amendment date. Use semantic
versioning: MAJOR for incompatible governance changes, MINOR for new or materially expanded
principles, and PATCH for clarifications that do not change obligations. Review compliance during
feature checks and again before submission; document any justified exception. Course and instructor
requirements remain authoritative.

**Version**: 1.0.0 | **Ratified**: 2026-09-27 | **Last Amended**: 2026-09-27
