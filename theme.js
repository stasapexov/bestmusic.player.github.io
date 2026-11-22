(() => {
    const key = 'smoker.theme';
    const colors = { light: '#f5f5f7', dark: '#1a1b1f' };
    const system = matchMedia('(prefers-color-scheme: dark)');
    const option = value => Object.hasOwn(colors, value) ? value : null;
    let selected = null;
    try {
        selected = option(localStorage.getItem(key));
    } catch {
        // The current theme still works when storage is unavailable.
    }

    function applyTheme() {
        const theme = selected || (system.matches ? 'dark' : 'light');
        document.documentElement.dataset.theme = theme;
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', colors[theme]);
        document.querySelectorAll('[data-theme-value]').forEach(button =>
            button.setAttribute('aria-pressed', String(button.dataset.themeValue === theme))
        );
    }

    applyTheme();
    system.addEventListener('change', applyTheme);
    window.addEventListener('storage', event => {
        if (event.key !== key && event.key !== null) return;
        selected = option(event.newValue);
        applyTheme();
    });
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-theme-value]').forEach(button => button.addEventListener('click', () => {
            selected = option(button.dataset.themeValue);
            applyTheme();
            try {
                localStorage.setItem(key, selected);
            } catch {
                // Keep the choice for this visit.
            }
        }));
        applyTheme();
    });
})();
