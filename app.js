"use strict";

const taskForm = document.querySelector("#task-form");
const taskDescriptionInput = document.querySelector("#task-description");
const taskFeedback = document.querySelector("#task-feedback");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const paymentDemoButton = document.querySelector("#payment-demo-open");
const paymentDialog = document.querySelector("#payment-dialog");
const paymentButton = document.querySelector("#payment-pay");
const paymentCloseButton = document.querySelector("#payment-close");
const paymentStatus = document.querySelector("#payment-status");

const tasks = [];
let nextTaskId = 1;
let paymentState = "closed";
let paymentTimer = null;

taskForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const description = taskDescriptionInput.value.trim();
	if (description === "") {
		taskFeedback.textContent = "Enter a task description.";
		taskFeedback.hidden = false;
		taskDescriptionInput.setAttribute("aria-invalid", "true");
		return;
	}
	taskFeedback.textContent = "";
	taskFeedback.hidden = true;
	taskDescriptionInput.removeAttribute("aria-invalid");

	const task = {
		id: nextTaskId,
		description,
	};
	nextTaskId += 1;
	tasks.push(task);

	const taskItem = document.createElement("li");
	taskItem.className = "task-item";
	taskItem.dataset.taskId = String(task.id);
	taskItem.textContent = task.description;
	taskList.append(taskItem);

	emptyState.hidden = true;
	taskDescriptionInput.value = "";
});

paymentDemoButton.addEventListener("click", () => {
	resetPaymentDemo();
	paymentState = "confirmation";
	paymentDialog.showModal();
});

paymentButton.addEventListener("click", () => {
	if (paymentState !== "confirmation") {
		return;
	}

	paymentState = "processing";
	paymentButton.disabled = true;
	paymentCloseButton.disabled = true;
	paymentStatus.textContent = "Processing demo payment...";
	paymentStatus.hidden = false;

	paymentTimer = window.setTimeout(() => {
		if (paymentDialog.open) {
			paymentDialog.close();
		}
	}, 1000);
});

paymentCloseButton.addEventListener("click", () => {
	if (paymentState === "confirmation") {
		paymentDialog.close();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key !== "Escape" || !paymentDialog.open) {
		return;
	}

	event.preventDefault();
	if (paymentState === "confirmation") {
		paymentDialog.close();
	}
});

paymentDialog.addEventListener("cancel", (event) => {
	if (paymentState === "processing") {
		event.preventDefault();
	}
});

paymentDialog.addEventListener("close", () => {
	if (!paymentDialog.open) {
		resetPaymentDemo();
	}
});

function resetPaymentDemo() {
	if (paymentTimer !== null) {
		window.clearTimeout(paymentTimer);
		paymentTimer = null;
	}

	paymentState = "closed";
	paymentButton.disabled = false;
	paymentCloseButton.disabled = false;
	paymentStatus.textContent = "";
	paymentStatus.hidden = true;
}