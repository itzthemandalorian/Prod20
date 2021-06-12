
setInterval(() => {
    const date=new Date();
    const min=date.getMinutes();
    const hrs=date.getHours()
    t_container.textContent=`${hrs}:${min}`
}, 1000);