import { WheelEvent } from "react";

export function handleHorizontalWheelScroll(e: WheelEvent<HTMLDivElement>) {
    const container = e.currentTarget as HTMLDivElement;
    if (e.deltaY !== 0 && container) {
        // e.stopPropagation();
        container.scrollLeft += e.deltaY;
    }
}
