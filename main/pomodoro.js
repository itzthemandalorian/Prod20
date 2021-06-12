pomodoro_start_btn.addEventListener("click", (e) => {
  e.stopPropagation();

  const session_time = pomodoro_s_input.value;
  const break_time = pomodoro_b_input.value;
  if (!session_time && !break_time) {
    console.log("please fill all the inputs before starting");
  } else {
    pomodoro_popup.style.display = "none";
    const session_time_in_seconds = session_time * 60;
    const break_time_in_seconds = break_time * 60;

    let session_count = 0;
    let break_count = 0;

    let timer = setInterval(() => {
      if (session_count >= session_time_in_seconds) {
        const percentage = (break_count / break_time_in_seconds) * 100;
        pomodoro_progressbar.style.width = `${percentage}%`;
        if (break_count >= break_time_in_seconds + 1) {
          session_count = 0;
          break_count = 0;
          break_popup_pomodoro.style.display = "none";
        } else {
          break_count++;
          break_popup_pomodoro.style.display = "block";
        }
      } else {
        session_count++;
      }
    }, 1000);
  }
});
