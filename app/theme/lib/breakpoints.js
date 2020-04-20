const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletP: '768px',
    tabletL: '1024px',
    laptop: '1280px',
    laptopL: '1440px',
    desktop: '2560px'
}

const deviceBreakpoints = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tabletP: `(min-width: ${size.tabletP})`,
    tabletL: `(min-width: ${size.tabletL})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export default { deviceBreakpoints, size };