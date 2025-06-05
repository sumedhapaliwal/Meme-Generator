export function updateMemeInCSS(meme) {
    document.documentElement.style.setProperty('--memewidth', `${meme.width}`);
    document.documentElement.style.setProperty('--memeheight', `${meme.height}`);
    document.documentElement.style.setProperty('--memeurl', `url(${meme.url})`);
}