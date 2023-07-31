function InfinityLoad(props) {
  const total = props.total;
  const current = props.current;

  const canLoadMore = total > current && current > 0;
  const ref = React.useRef(null);
  useIntersectionObserver({
    target: ref,
    onIntersect: () => {
      if (ref.current && canLoadMore) {
        props.onLoadMore();
      }
    },
  });

  return (
    <div ref={ref} className="text-center text-sm my-4 text-slate-500">
      {canLoadMore ? "Loading..." : "No more data"}
    </div>
  );
}
