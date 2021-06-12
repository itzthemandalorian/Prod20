sedimentary_start_btn.addEventListener("click", (e) => {
  e.stopPropagation();
  sedimentary_popup.style.display = "none";

  let sedimentary_time;
  if (sedimentary_input.value) {
    sedimentary_time = parseInt(sedimentary_input.value);
  } else {
    sedimentary_time = 40;
  }
  const total_seconds = sedimentary_time * 10;
  let total_count = 0;
  let t_seconds_count = 0;
  //disabling the button so it will prevent users from starting multiple sessions
  sedimentary_button.disabled = true;
  let timer = setInterval(() => {
    console.log("working");
    if (total_count >= total_seconds) {
      const percentage = (t_seconds_count / 300) * 100;
      sedimentary_progressbar.style.width = `${percentage}%`;
      if (t_seconds_count >= 301) {
        total_count = 0;
        t_seconds_count = 0;
        break_popup_sedimentary.style.display = "none";
      } else {
        t_seconds_count++;
        break_popup_sedimentary.style.display = "block";
      }
    } else {
      total_count++;
    }
  }, 1000);
});
