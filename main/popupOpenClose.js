//openeing twenty pop up
twenty_button.addEventListener("click", (e) => {
  e.stopPropagation(), (twenty_popup.style.display = "block");
});

//closing twenty pop up
twenty_close_popup.addEventListener("click", (e) => {
  e.stopPropagation(), (twenty_popup.style.display = "none");
});

//opening sedimentary pop up
sedimentary_button.addEventListener("click", (e) => {
  e.stopPropagation(), (sedimentary_popup.style.display = "block");
});

//closing sedimentary pop up

sedimentary_close_popup.addEventListener("click", (e) => {
  e.stopPropagation(), (sedimentary_popup.style.display = "none");
});

//opening pomodoro pop up
pomodoro_button.addEventListener("click", (e) => {
  e.stopPropagation(), (pomodoro_popup.style.display = "block");
});

//closing pomodoro pop up

pomodoro_close_popup.addEventListener("click", (e) => {
  e.stopPropagation(), (pomodoro_popup.style.display = "none");
});
