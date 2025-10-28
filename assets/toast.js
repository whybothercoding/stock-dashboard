// Centralized toast messaging
(function () {
    const containerId = 'toast-container';

    function ensureContainer() {
        let container = document.getElementById(containerId);
        if (!container) {
            container = document.createElement('div');
            container.id = containerId;
            container.style.position = 'fixed';
            container.style.top = '16px';
            container.style.right = '16px';
            container.style.zIndex = '9999';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.gap = '8px';
            document.body.appendChild(container);
        }
        return container;
    }

    function classNamesFor(type) {
        switch (type) {
            case 'success': return ['bg-emerald-50','text-emerald-700','border-emerald-200'];
            case 'warning': return ['bg-amber-50','text-amber-700','border-amber-200'];
            case 'error': return ['bg-rose-50','text-rose-700','border-rose-200'];
            default: return ['bg-indigo-50','text-indigo-700','border-indigo-200'];
        }
    }

    window.showToast = function showToast(type, message, timeoutMs = 3000) {
        const container = ensureContainer();
        const toast = document.createElement('div');
        const classes = classNamesFor(type);
        toast.className = `${classes.join(' ')} border px-4 py-3 rounded-lg shadow-sm`;
        toast.textContent = message;
        toast.style.willChange = 'transform, opacity';
        toast.style.transform = 'translateY(-6px)';
        toast.style.opacity = '0';
        container.appendChild(toast);
        requestAnimationFrame(() => {
            toast.style.transition = 'transform 150ms ease, opacity 150ms ease';
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
        });
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-6px)';
            setTimeout(() => toast.remove(), 180);
        }, timeoutMs);
    }
})();


