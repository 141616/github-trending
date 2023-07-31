function MyIcon(props) {
  return (
    <svg className={`icon ${props.className}`} aria-hidden="true">
      {/* <use xlink="#icon-star"></use> */}
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  );
}
