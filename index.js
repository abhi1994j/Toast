const horizontal = document.querySelector('#horizontal');
const vertical = document.querySelector("#vertical");
const statusmsg = document.querySelector("#status");
const message = document.querySelector("#message");
const duration = document.querySelector("#duration");
const durationOutput = document.querySelector("#duration-output");
console.log(horizontal.value, vertical.value, statusmsg.value, message);

const btn = document.querySelector("button");

duration.addEventListener("change", (e) => {
  durationOutput.textContent = e.target.value ;
});
btn.addEventListener("click", () => {
    const toastObj = {
        horizontal: horizontal.value,
        vertical: vertical.value,
        statusmsg: statusmsg.value,
        message: message.value == "" ? "This is a toast message!" : message.value,
        duration: duration
    }
    console.log(horizontal.value, vertical.value, statusmsg.value, message.value, duration.value);
    toast(toastObj);
});
function toast(toastObj) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    if (toastObj?.statusmsg === "success") {
        toast.style.backgroundColor = "#ecfdf3";
        toast.style.color = "green";
    }
    else if (toastObj?.statusmsg === "error") {
        toast.style.backgroundColor = "#fff0f0";
        toast.style.color = "red";
    }
    else if (toastObj?.statusmsg === "warning") {
        toast.style.backgroundColor = "#fffcf0";
        toast.style.color = "orange";
    }
    else if (toastObj?.statusmsg === "info") {
        toast.style.backgroundColor = "#f0f8ff";
        toast.style.color = "blue";
    }
    else {
        toast.style.backgroundColor = "white";
        toast.style.color = "black";
    }
    toast.style.position = "fixed";
    if(toastObj?.horizontal === "left" && toastObj?.vertical === "top"){
        toast.style.left = "1em";
        toast.style.top = "1em";
    }
    else if(toastObj?.horizontal === "right" && toastObj?.vertical === "top"){
        toast.style.right = "1em";
        toast.style.top = "1em";
    }
    else if(toastObj?.horizontal === "left" && toastObj?.vertical === "bottom"){
        toast.style.left = "1em";
        toast.style.bottom = "1em";
    }
    else if(toastObj?.horizontal === "right" && toastObj?.vertical === "bottom"){
        toast.style.right = "1em";
        toast.style.bottom = "1em";
    }
    // toast.style.top = toastObj?.vertical + "%";
    // toast.style.left = toastObj?.horizontal + "%";
    // toast.style.transform = "translate(-50%, -50%)";
    toast.style.padding = "1rem 2rem";
    toast.style.boxShadow = "4px 6px 10px  rgba(117, 112, 112, 0.1)";
    toast.style.width = "300px";
    toast.style.borderRadius = "0.5rem";
    toast.textContent = toastObj?.message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast();
    }, duration);
}
 