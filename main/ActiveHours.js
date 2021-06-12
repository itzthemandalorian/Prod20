settings_close_btn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (wake_up_time.value.split(":")[0]) {
    localStorage.setItem("wake_up", wake_up_time.value.split(":")[0]);
    console.log("wake up time updated");
  }

  if (sleep_time.value.split(":")[0]) {
    localStorage.setItem("sleep_time", sleep_time.value.split(":")[0]);
    console.log("sleep time updated");
  }
});

/* setInterval(() => {
  {
    const date = new Date();
    const hrs = date.getHours();

    const wuphours = parseInt(localStorage.getItem("wake_up"));
    const slphours = parseInt(localStorage.getItem("sleep_time"));
    console.log(wuphours, slphours);
    console.log(hrs);

    if (hrs >= wuphours && hrs <=slphours ) {
      console.log('yesss');
    }
  }
}, 1000);
 */