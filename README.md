# To-Do Web Application

A small, browser-only To-Do application built with HTML, CSS, and JavaScript. It lets users add
tasks and includes a fictional €1.00 payment-popup interaction as a visual joke. The payment demo
does not process a payment.

## Run the App

Open `index.html` in a current desktop or mobile browser with JavaScript enabled. There is no
installation or build step, and the app does not require a backend, database, or network service.

## Features

### Add Tasks

- Enter a task description and select **Add**, or submit the form with Enter.
- A valid task appears in the list immediately without refreshing the page.
- Empty and whitespace-only descriptions are rejected with a message. Surrounding whitespace is
	removed from accepted descriptions.
- Duplicate descriptions are allowed as separate tasks.
- Tasks remain in memory for the current page session. Refreshing the page clears the list.

### Payment Meme Demo

- Select **Try the €1 payment demo** to open the wallet-style confirmation popup.
- The popup displays **€1.00**, a **Pay** button, and a clear notice that the interaction is a
	simulation and no money will be charged.
- Select **Close** or press Escape to dismiss it before processing.
- Select **Pay** to show a short simulated loading state. The popup closes automatically after
	about one second.
- Opening, dismissing, or completing the demo does not change the task list.

This is only a simulated/meme payment interface. It does not charge real money, collect payment
credentials, communicate with Google Pay, or make external payment requests. Real payment
processing and Google Pay API integration are explicitly out of scope.

## Project Files

- `index.html` contains the task interface and payment demo dialog.
- `styles.css` provides the page, task-list, and responsive dialog presentation.
- `app.js` handles task entry and the temporary payment-demo interaction.
- `specs/001-add-tasks/` contains the Add Tasks specification and design artifacts.
- `specs/002-google-pay-meme/` contains the payment-demo specification, plan, UI contract, data
	model, validation guide, and implementation tasks.

The implementation uses standard browser features only and has no third-party runtime dependencies.