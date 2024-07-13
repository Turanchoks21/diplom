import React, { useState, useEffect, useRef } from "react";

function VirtualScroll({
  children,
  itemCount,
  viewportHeight,
  rowHeight,
  nodePadding = 0,
  itemHeight,
}) {
  const [scrollTop, setScrollTop] = useState(0);
  const viewportRef = useRef(null);

  const totalContentHeight = itemCount * rowHeight;

  let startNode = Math.floor(scrollTop / rowHeight) - nodePadding;
  startNode = Math.max(0, startNode);

  let visibleNodesCount =
    Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding;
  visibleNodesCount = Math.min(itemCount - startNode, visibleNodesCount);

  const offsetY = startNode * rowHeight;

  const visibleChildren = children.slice(
    startNode,
    startNode + visibleNodesCount
  );

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport) {
      viewport.addEventListener("scroll", handleScroll);
      return () => {
        viewport.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div ref={viewportRef} className="h-[400px] overflow-auto px-4">
      <div className="relative" style={{ height: totalContentHeight }}>
        <div
          className="absolute w-full"
          style={{ transform: `translateY(${offsetY}px)` }}
        >
          {visibleChildren.map((child, index) => (
            <div key={startNode + index} className={itemHeight}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VirtualScroll;
