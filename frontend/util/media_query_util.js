import { useLayoutEffect, useState } from "react"

const useMediaQuery = (query, defaultMatches = window.matchMedia(query)) => {
    const [matches, setMatches] = useState(defaultMatches);

    useLayoutEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) setMatches(media.matches)

        const listener = e => setMatches(media.matches);
        media.addListener(listener);

        return () => media.removeListener(listener)
    }, [matches]);
    return matches
};

export default useMediaQuery;