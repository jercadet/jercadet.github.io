import { pageTitleType } from "./types"

// adds my name to the end of a page title so it shows in the browser tab
export function setDocTitle(page: string) {
    const newTitle: pageTitleType = {
        title: page,
        fullTitle: `${page} - Jeremiah Cadet`
    }
    return newTitle;
}

// gets the current document title
export function getDocTitle() {
    const fullTitle = document.title;
    const title = fullTitle.split('-');
    if (title.length > 0) {
        return title[0].trim();
    }
    return '';
}
