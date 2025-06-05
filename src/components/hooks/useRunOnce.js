import { useEffect, useRef } from "react";

export default function useRunOnce(effect) {
    const hasRun = useRef(false);

    useEffect(() => {
        if (!hasRun.current) {
            effect();
            hasRun.current = true;
        }
    }, []);
}
