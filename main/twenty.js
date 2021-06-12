twenty_start_btn.addEventListener("click", (e) => {
    e.stopPropagation();
    twenty_popup.style.display = "none";
    //assigning proper time depending on user input
    let twenty_time;
    if (twenty_input.value) {
      twenty_time = parseInt(twenty_input.value);
    } else {
      twenty_time = 20;
    }
    /* console.log(twenty_time) */
    const total_seconds = twenty_time * 60;
    let total_count = 0;
    let t_seconds_count = 0;
  
    //disabling the button so it will prevent users from starting multiple sessions
    twenty_button.disabled = true;
    let timer = setInterval(() => {

      if (localStorage.getItem("twe_stop") == "true") {
        localStorage.setItem("twe_stop", "false");
        twenty_button.disabled = false;
        clearInterval(timer);
      } else {
        console.log("#Surfup #MLH");
      }

      console.log("working");
      if (total_count >= total_seconds) {
        const percentage = (t_seconds_count / 20) * 100;
        twenty_progressbar.style.width = `${percentage}%`;
        if (t_seconds_count >= 21) {
          total_count = 0;
          t_seconds_count = 0;
          break_popup_twenty.style.display = "none";
        } else {
          t_seconds_count++;
          break_popup_twenty.style.display = "block";
        }
      } else {
        total_count++;
      }
    }, 1000);
  });
