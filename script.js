const chatid = "-1001600523206",
  token = "5638560492:AAGuWKzAUPplAAwTtvGiH5Vjel00MctVhYw",
  input = document.querySelector("input"),
  btn = document.querySelector(".btn"),
  a = document.querySelector("a");

btn.addEventListener("click", () => {
  if (input.value.length === 0) {
    alert("Сообщение не может быть пустым");
  } else {
    otpravka(token, input.value, chatid);
    a.style.cssText = "opacity: 1;";
    input.value = '';
  }
});

function otpravka(token, text, chatid) {
  let z = $.ajax({
    type: "POST",
    url:
      "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatid,
    data: "parse_mode=HTML&text=" + encodeURIComponent(text),
  });
}

// otpravka(token, "акмаль гей", chatid);
