import {useMemo} from "react";


export const BlogPageMessages = {
    title: "Die schönsten Strände für deine Flitterwochen",
}

export const useBlogPageMessages = () => {
    return useMemo(() => BlogPageMessages, []);
}