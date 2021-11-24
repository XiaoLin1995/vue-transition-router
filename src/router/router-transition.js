function isNull(a) {
  if (a === undefined || a === null) return true;
  return false;
}

export default function transitionRouter(origin, options = {}) {
  const { forwardName = "slide-left", backName = "slide-right" } = options;
  const router = Object.create(origin);
  router.transition = {
    forwardName,
    backName,
    name: "",
    state: "", // back, forward
    historyState: 0,
    isCustomize: false,
    isInit: false,
  };

  const resetState = () => {
    router.transition.name = "";
    router.transition.state = "";
    router.transition.isCustomize = false;
  };

  const setTransitionName = (to, from) => {
    const { forwardName, backName, state, isCustomize } = router.transition;
    if (state === "" || isCustomize) return;
    if (state === "back") {
      router.transition.name = isNull(from.meta.transition)
        ? backName
        : from.meta.transition;
      return;
    }
    router.transition.name = isNull(to.meta.transition)
      ? forwardName
      : to.meta.transition;
  };

  const setHistoryState = () => {
    const { state } = window.history;
    const currentState = (state?.key || state?.position || 0) * 1;
    router.transition.historyState = currentState;
  };

  const getHistoryState = () => {
    const { state } = window.history;
    return (state?.key || state?.position || 0) * 1;
  };

  const customizeTransition = (transition) => {
    if (isNull(transition)) return;
    router.transition.name = transition;
    router.transition.isCustomize = true;
  };

  router.beforeEach((to, from, next) => {
    const { historyState, isInit } = router.transition;
    const state = getHistoryState();
    if (isInit)
      router.transition.state = state < historyState ? "back" : "forward";
    setTransitionName(to, from);
    next();
  });

  router.afterEach(() => {
    if (!router.transition.isInit) router.transition.isInit = true;
    setHistoryState();
    setTimeout(resetState);
  });

  router.push = function (...args) {
    if (typeof args[0] !== "string") customizeTransition(args[0].transition);
    router.transition.state = "forward";
    return origin.push.call(this, ...args)?.catch((err) => err);
  };

  router.replace = function (...args) {
    if (typeof args[0] !== "string") customizeTransition(args[0].transition);
    router.transition.state = "forward";
    return origin.replace.call(this, ...args)?.catch((err) => err);
  };

  router.go = function (n, transition) {
    if (n === 0) return;
    customizeTransition(transition);
    router.transition.state = n > 0 ? "forward" : "back";
    return origin.go.call(this, n);
  };

  router.back = (transition) => {
    router.go(-1, transition);
  };

  router.forward = (transition) => {
    router.go(1, transition);
  };

  return router;
}
