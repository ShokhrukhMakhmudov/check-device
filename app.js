const text = document.getElementById("text");
const device = document.getElementById("device");
const user = document.getElementById("user");

function getDeviceInfo() {
  const userAgent = navigator.userAgent;
  const userAgentData = navigator.userAgentData;

  const platform = navigator.platform; // Операционная система
  const screenWidth = window.screen.width; // Ширина экрана
  const screenHeight = window.screen.height; // Высота экрана
  const deviceType = /Mobi|Android/i.test(userAgent)
    ? "Мобильное устройство"
    : "Десктоп";

  console.log(navigator);
  if ("connection" in navigator) {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    console.log("Тип сети:", connection.effectiveType); // Тип сети: 'wifi', '4g', '3g', '2g', 'slow-2g'
    console.log(
      "Максимальная пропускная способность:",
      connection.downlink,
      "Mbps"
    );
    text.innerText = `${connection.effectiveType} - ${connection.downlink}Mbps`;
    device.innerText = `${userAgent}`;
    userAgentData.brands = userAgentData.brands.join(", ");
    console.log(userAgentData.toJSON());
  }
}

getDeviceInfo();
function isBot() {
  const isWebGLAvailable = !!window.WebGLRenderingContext;
  const isAudioContextAvailable = !!window.AudioContext;

  if (!isWebGLAvailable || !isAudioContextAvailable) {
    user.innerText =
      "Определён бот (отсутствуют функции WebGL или AudioContext).";
  } else {
    user.innerText = "Реальный пользователь.";
  }
}

isBot();
