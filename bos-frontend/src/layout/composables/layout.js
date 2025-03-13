const layoutConfig = reactive({
    preset: 'Aura',
    primary: 'emerald',
    surface: null,
    menuMode: 'static',
    darkTheme: false,
    menuHoverActive: false,
    activeMenuItem: null
});

const layoutState = reactive({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
    activeMenuItem: null
});

export function useLayout() {
    const setActiveMenuItem = (item) => {
        layoutState.activeMenuItem = item.value || item;
    };

    const toggleDarkMode = (dark) => {
        if (dark) {
            layoutConfig.darkTheme = true;
            localStorage.setItem('mode', 'dark');
        } else {
            layoutConfig.darkTheme = false;
            localStorage.setItem('mode', 'light');
        }
        document.documentElement.classList.toggle('app-dark');
        localStorage.setItem('theme', document.documentElement.classList);
    };

    const toggleMenu = () => {
        if (layoutConfig.menuMode === 'overlay') {
            layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
        }

        if (window.innerWidth > 991) {
            layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
        } else {
            layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
        }
    };

    const checkDarkMode = () => {
        if (localStorage.getItem('mode') === 'dark') {
            layoutConfig.darkTheme = true;
            document.documentElement.classList = localStorage.getItem('theme');
        }
    };

    const isSidebarActive = computed(() => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive);

    const isDarkTheme = computed(() => layoutConfig.darkTheme);

    const getPrimary = computed(() => layoutConfig.primary);

    const getSurface = computed(() => layoutConfig.surface);

    return {
        layoutConfig,
        layoutState,
        toggleMenu,
        isSidebarActive,
        isDarkTheme,
        getPrimary,
        getSurface,
        setActiveMenuItem,
        toggleDarkMode,
        checkDarkMode
    };
}
