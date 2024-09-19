// A type to store the name of a page and the full title of what's displayed in the browser tab
export type pageTitleType = {
    title: string;
    fullTitle: string;
};

// Images are stored as a list of 2-element lists [image url, image alt]
export type ImageLinks = {
    url: string;
    alt: string;
}

// A type to store name, body text, and possibly image urls/alts of experiences
export type Bodies = {
    id: string;
    body: JSX.Element;
    images?: ImageLinks[]
}
