import React, { useState, CSSProperties, } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

export default function ScrollingList() {
    type Item = { [key: number]: boolean }

    const LOADING = true;
    const itemStatusMap: Item = {};

    const [itemCount, setItemCount] = useState(100);
    const isItemLoaded = (index: number) => itemStatusMap[index];
    const loadMoreItems = (startIndex: number, stopIndex: number) => {
        if (stopIndex + 10 >= itemCount) {
            const step = stopIndex - startIndex;
            setItemCount(itemCount + step);
        }
        console.log('itemCount', itemCount)
        for (let index = startIndex; index <= stopIndex; index++) {
            itemStatusMap[index] = LOADING;
        }
        return new Promise(resolve =>
            setTimeout(() => {
                for (let index = startIndex; index <= stopIndex; index++) {
                    itemStatusMap[index] = !LOADING;
                }
                resolve();
            }, 1000)
        );
    };

    const Row = ({ index, style }: { index: number, style: CSSProperties }) => {
        return itemStatusMap[index] === LOADING
            ? (<div className="ListItem" style={style}>Loading ...</div>)
            : (<div className="ListItem" style={style}>Row #{index}</div>
            );
    };

    return (
        <>
            <h3>Infinit scroll (stable FPS rate)</h3>
            <div className="App-Scroll">
                <InfiniteLoader
                    isItemLoaded={isItemLoaded}
                    itemCount={itemCount}
                    loadMoreItems={loadMoreItems}
                >
                    {({ onItemsRendered, ref }) => (
                        <List
                            className="List"
                            height={300}
                            itemCount={itemCount}
                            itemSize={40}
                            onItemsRendered={onItemsRendered}
                            ref={ref}
                            width={600}
                        >
                            {Row}
                        </List>
                    )}
                </InfiniteLoader>
            </div>
        </>
    );
}