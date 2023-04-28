const scrollElements = [];

const scrollTo = (el, home) => {
  const cords = scrollElements.find((block) => block.name === el)?.cords;
  window.scrollTo({
    top: home ? 0 : cords.top - 60,
    left: 0,
    behavior: "smooth",
  });
};

export default {
  inserted: function (el, binding) {
    if (binding.arg) {
      el.addEventListener(
        "click",
        scrollTo.bind(null, binding.value, binding.value === "home")
      );
      return;
    }

    scrollElements.push({
      name: binding.value,
      cords: el.getBoundingClientRect(),
    });
  },
};
