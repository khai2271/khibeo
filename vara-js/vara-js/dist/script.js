var fontSize = 72;
if(window.screen.width < 700)
  fontSize = 32;
else if(window.screen.width < 1200)
  fontSize= 56;
var vara = new Vara(
  "#container", "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Send you! This is Khai",
      y: 150,
      fromCurrentPosition: { y: false },
      duration: 3000
    },
    {
      text: "I just want to say the truth from the bottom of my heart",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000
    },
    {
      text: "Maybe i fall for someone,the first vibrations in my life ",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4500
    },
    {
      text: "Yes, I don't know what that feels like a little bit strange ",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 1000
    },
    {
      text: "And you too, you're so weird",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000
    },
    {
      text: "Or maybe it's because I don't understand you",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 1000
    },
    {
      text: "I'll keep it as a secret",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000
    },
    {
      text: "I'm so coward to say that",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000
    },
    {
      text: "Hi there,",
      y: 150,
      id: "no_erase",
      delay: 2000
    },
    {
      text:
        "This is Khai,who always follow you.",
      y: 50,
      x: 50,
      duration: 4000
    },
    {
      text: "Please give me a signal, I'll come ! ",
      color: "#421e82",
      id: "github"
    }
  ],
  {
    strokeWidth: 2,
    color: "#523c33",
    fontSize: fontSize,
    textAlign: "center"
  }
);
vara.ready(function() {
  var erase = true;
  vara.animationEnd(function(i, o) {
    if (i == "no_erase") erase = false;
    if (erase) {
      o.container.style.transition = "opacity 1s 1s";
      o.container.style.opacity = 0;
    }
  });
  vara.get("github").container.style.cursor = "pointer";
  vara.get("github").container.onclick = function() {
    document.querySelector("#link").click();
  };
});
