'use client'
import { useEffect } from "react";

export default function useMobileRedirect(url: string) {
    useEffect(() => {
        const isMobileDevice = () => {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        };

        if (isMobileDevice()) {
            window.location.href = url;
        }
    }, [url])
}