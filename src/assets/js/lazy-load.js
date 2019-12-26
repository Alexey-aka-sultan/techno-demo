export default {
  bind(el, binding, vnode) {
    function handler(e) {
      const offsetY = binding.arg === undefined ? 0 : binding.arg;

      if (el.getBoundingClientRect().y < window.innerHeight - offsetY) {
        if (binding.value !== undefined) binding.value.show = true;
        window.removeEventListener("scroll", handler);
      }
    }
    window.addEventListener("scroll", handler);
    window.addEventListener("load", handler);
  }
};
