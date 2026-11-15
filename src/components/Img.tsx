import { useState, type ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  /** Set for above-the-fold images so they aren't lazy-loaded. */
  priority?: boolean;
  wrapperClassName?: string;
};

/**
 * Image with a lightweight shimmer skeleton so below-the-fold content
 * never renders as an empty box while the file streams in.
 */
export default function Img({
  priority = false,
  className = "",
  wrapperClassName = "",
  alt = "",
  onLoad,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <span className={`relative block overflow-hidden ${wrapperClassName}`}>
      {!loaded && <span aria-hidden="true" className="skeleton absolute inset-0" />}
      <img
        {...rest}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
}
