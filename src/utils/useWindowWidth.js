import { useState, useEffect } from 'react';

const useWindowWidth = () => {
    const hasWindow = typeof window !== 'undefined';
    const [windowWidth, setWindowWidth] = useState(hasWindow ? window.innerWidth : null);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        if (hasWindow) {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    });

    return windowWidth;
}

export default useWindowWidth;