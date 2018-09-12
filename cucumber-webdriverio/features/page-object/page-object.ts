export class Page {

    public goToUrl(url: string) {
        browser.url(url);
    }
    public async findByClass(elementClass: string) {
        browser.waitForVisible("." + elementClass, 10000);
        browser.waitForEnabled("." + elementClass, 10000);
        return await browser.element("." + elementClass);
    }
    public async findByName(elementName: string) {
        browser.waitForVisible('[name="' + elementName + '"]', 10000);
        browser.waitForEnabled('[name="' + elementName + '"]', 10000);
        return await browser.element('[name="' + elementName + '"]');
    }

    public async findById(elementId: string) {
        browser.waitForVisible('#' + elementId + '', 10000);
        browser.waitForEnabled('#' + elementId + '', 10000);
        return await browser.element('#' + elementId + '');
    }

    public async pause(time: number) {
        browser.pause(time)
    }

    public async findByAttribute(attribute: string, value: string) {
        browser.waitForVisible('[' + attribute + '="' + value + '"]', 10000);
        browser.waitForEnabled('[' + attribute + '="' + value + '"]', 10000);
        return await browser.element('[' + attribute + '="' + value + '"]');
    }

    public async findByContent(tag: string, content: string) {
        browser.waitForVisible(tag + '=' + content, 10000);
        browser.waitForEnabled(tag + '=' + content, 10000);
        return await browser.element(tag + '=' + content);
    }

    public async acceptAlert() {
        await browser.alertAccept();
    }
}
