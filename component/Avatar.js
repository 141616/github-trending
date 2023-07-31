function generateSrcset(url) {
  const sm = `${url}&s=100 640w`;
  const md = `${url}&s=120 768w`;
  const lg = `${url}&s=160 1024w`;
  const xl = `${url}&s=200 1280w`;
  const xl2 = `${url}&s=400 1536w`;
  return `${sm}, ${md}, ${lg}, ${xl}, ${xl2}`;
}

function Avatar(props) {
  const url = props.url;
  const srcset = generateSrcset(url);

  const ref = React.useRef(null);
  // 懒加载：进入视窗后加载图片
  useIntersectionObserver({
    target: ref,
    onIntersect: () => {
      if (ref.current) {
        ref.current.src = url;
        ref.current.srcset = srcset;
      }
    },
  });

  return (
    <img
      ref={ref}
      width="100"
      height="100"
      style={{ width: "60%", height: "auto" }}
      className="mx-auto"
    />
  );
}
