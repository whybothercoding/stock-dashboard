// Lightweight runtime diagnostics for local profiling
(function () {
    if ('PerformanceObserver' in window) {
        try {
            const longTaskObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.duration > 50) {
                        // eslint-disable-next-line no-console
                        console.warn('[Perf] Long task >50ms', entry);
                    }
                }
            });
            longTaskObserver.observe({ type: 'longtask', buffered: true });
        } catch (e) {}
    }

    // rAF scheduler utility to batch visual updates
    let rafId = 0;
    window.scheduleFrame = function scheduleFrame(callback) {
        if (!rafId) {
            rafId = requestAnimationFrame(() => {
                rafId = 0;
                try { callback(); } catch (e) {}
            });
        }
    };

    // Basic throttle and debounce utilities
    window.throttle = function throttle(fn, wait = 150) {
        let last = 0, timeout;
        return function (...args) {
            const now = Date.now();
            const remaining = wait - (now - last);
            if (remaining <= 0) {
                last = now;
                fn.apply(this, args);
            } else if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    last = Date.now();
                    fn.apply(this, args);
                }, remaining);
            }
        };
    };

    window.debounce = function debounce(fn, wait = 200) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn.apply(this, args), wait);
        };
    };
})();


