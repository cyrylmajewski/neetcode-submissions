class BrowserLink {
    url: string;
    prev: BrowserLink | null;
    next: BrowserLink | null;

    constructor(url: string) {
        this.url = url;
        this.prev = null;
        this.next = null;
    }
}

class BrowserHistory {
    head = new BrowserLink('/')
    tail = new BrowserLink('/')
    size = 0
    currentPageLink: BrowserLink | null;
    currentPage = null;

    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        const page = new BrowserLink(homepage);

        this.head.next = page;
        this.tail.prev = page;
        page.prev = this.head;
        page.next = this.tail;
        this.size++;
        this.currentPageLink = page;
        this.currentPage = 0;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url: string) {
        const page = new BrowserLink(url);
        if (this.currentPage === this.size - 1) {
            this.currentPage++;
            this.size++;
            this.currentPageLink.next = page;
            this.tail.prev = page;
            page.next = this.tail;
            page.prev = this.currentPageLink;
            this.currentPageLink = page;
            return
        }

        this.currentPageLink.next = page
        this.tail.prev = page
        page.next = this.tail;
        page.prev = this.currentPageLink;
        this.currentPage++;
        this.size = this.currentPage + 1
        this.currentPageLink = page;
    }
    //         0,            _1_,            2,             3
    // [_____ ,"google.com", "facebook.com", "youtube.com", "neetcode.com", _____]

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        if (steps > this.currentPage) {
            this.currentPageLink = this.head.next;
            this.currentPage = 0;
            return this.currentPageLink.url;
        }

        let i = 0;

        while (i !== steps) {
            this.currentPageLink = this.currentPageLink.prev;
            this.currentPage--;
            i++
        }

        return this.currentPageLink.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        if (steps > this.size - this.currentPage - 1) {
            this.currentPageLink = this.tail.prev;
            this.currentPage = this.size - 1;
            return this.currentPageLink.url
        }

        let i = 0;

        while (i !== steps) {
            this.currentPageLink = this.currentPageLink.next;
            this.currentPage++;
            i++;
        }

        return this.currentPageLink.url;
    }
}
