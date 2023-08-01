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
      {canLoadMore ? (
        <svg
          className="animate-spin mx-auto h-5 w-5 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        "No more data"
      )}
    </div>
  );
}
