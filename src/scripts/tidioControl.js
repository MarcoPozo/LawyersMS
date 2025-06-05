window.tidioChatApi = window.tidioChatApi || {};

document.addEventListener("tidioChat-ready", function () {
  function hideTidioOnMobile() {
    if (window.innerWidth < 768) {
      window.tidioChatApi.hide();
    } else {
      window.tidioChatApi.show();
    }
  }

  hideTidioOnMobile();
  window.addEventListener("resize", hideTidioOnMobile);
});
