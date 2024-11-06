import { useEffect, useState, useRef } from "react";

export function useInView() {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const observer = new IntersectionObserver(
                ([entry]) => setIsInView(entry.isIntersecting),
                { threshold: 0.1 }
            );

            if (ref.current) observer.observe(ref.current);
            return () => observer.disconnect();
        }
    }, []);

    return [ref, isInView];
}
