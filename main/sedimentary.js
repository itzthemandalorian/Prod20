sedimentary_start_btn.addEventListener("click", (e) => {
  e.stopPropagation();
  sedimentary_popup.style.display = "none";

  let sedimentary_time;
  if (sedimentary_input.value) {
    sedimentary_time = parseInt(sedimentary_input.value);
  } else {
    sedimentary_time = 40;
  }
  const total_seconds = sedimentary_time * 60;
  let total_count = 0;
  let t_seconds_count = 0;
  //disabling the button so it will prevent users from starting multiple sessions
  sedimentary_button.disabled = true;
  let timer = setInterval(() => {
    //stoping the timer
    if (localStorage.getItem("sed_stop") == "true") {
      localStorage.setItem("sed_stop", "false");
      sedimentary_button.disabled = false;
      clearInterval(timer);
    } else {
      console.log("#Surfup #MLH");
    }

    {
      const date = new Date();
      const hrs = date.getHours();

      const wuphours = parseInt(localStorage.getItem("wake_up"));
      const slphours = parseInt(localStorage.getItem("sleep_time"));
      console.log(wuphours, slphours);
      console.log(hrs);

      if (hrs >= wuphours && hrs <= slphours) {
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
      }
    }
  }, 1000);
});
