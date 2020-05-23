import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
} from "react-virtualized";
import ImageMeasurer from "react-virtualized-image-measurer";

export default (list) => {
  // Array of images with captions
  //const list = [{image: 'http://...', title: 'Foo'}];

  // We need to make sure images are loaded from scratch every time for this demo
  const noCacheList = list.map((item, index) => ({
    title: index + ". " + item.title,
    image: item.image + (item.image ? "?noCache=" + Math.random() : ""),
  }));
  const keyMapper = (item, index) => item.image || index;

  const columnWidth = 210;
  const defaultHeight = 260;
  const defaultWidth = columnWidth;
  // Our masonry layout will use 3 columns with a 10px gutter between
  const cellPositionerConfig = {
    cellMeasurerCache: cache,
    columnCount: 3,
    columnWidth,
    spacer: 10,
  };

  const cellPositioner = createMasonryCellPositioner(cellPositionerConfig);

  const MasonryComponent = ({ itemsWithSizes, setRef }) => {
    const cellRenderer = ({ index, key, parent, style }) => {
      const { item, size } = itemsWithSizes[index];
      const height = columnWidth * (size.height / size.width) || defaultHeight;

      return (
        <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
          <div className="card-container">
            <div>{item.name}</div>
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                style={{
                  height: height,
                  width: columnWidth,
                  display: "block",
                }}
              />
            )}
          </div>
        </CellMeasurer>
      );
    };

    return (
      <Masonry
        cellCount={itemsWithSizes.length}
        cellMeasurerCache={cache}
        cellPositioner={cellPositioner}
        cellRenderer={cellRenderer}
        height={600}
        width={800}
        keyMapper={keyMapper}
        ref={setRef}
      />
    );
  };
};

export default function virtualized() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("products"));
  }, []);
  return <div></div>;
}
