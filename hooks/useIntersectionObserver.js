function useIntersectionObserver(
  //   {
  //   root = null,
  //   target,
  //   onIntersect,
  //   threshold = 1.0,
  //   rootMargin = "0px",
  //   enabled = true,
  // }:
  props
) {
  const root = props.root || null;
  const target = props.target || null;
  const onIntersect = props.onIntersect;
  const threshold = props.threshold || 1.0;
  const rootMargin = props.rootMargin || "0px";
  const enabled = props.enabled || true;

  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      }
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [enabled, root, rootMargin, threshold, target, onIntersect]);
}
