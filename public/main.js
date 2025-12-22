const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const screenTxt = document.getElementById("screen");

noBtn.addEventListener("click", () => {
  screenTxt.innerHTML = "That’s okay. <br> If you change your mind, you can always try again.";
});

yesBtn.addEventListener("click",() => {
  screenTxt.innerHTML = "Nice. <br> You’re early. Let’s understand what you want to build."
  setTimeout(() => {
    window.location.href = "https://forms.gle/QDHCkXPj2ZTrscSw6"
  }, 1200);
});