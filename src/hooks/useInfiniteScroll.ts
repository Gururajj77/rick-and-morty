import { InfiniteQueryObserverResult } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

const useInfiniteScroll = (fetchNextPage: () => Promise<InfiniteQueryObserverResult<unknown, unknown>>,
    hasNextPage: boolean | undefined) => {

    const loader = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1.0 }
        );

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => observer.disconnect();
    }, [fetchNextPage, hasNextPage]);

    return loader;
};

export default useInfiniteScroll;
