import { Locator, Page } from "@playwright/test";

export class ContextMenuPage {

    readonly page: Page;
    readonly eleBox: Locator;
    static readonly textHeader = '//h3';

    constructor(page: Page) {
        this.page = page;
        this.eleBox = this.page.locator('//div[@id="hot-spot"]');
    }

    async rightClickAndGetAlertMessage(): Promise<string> {
        let message = '';
        this.page.on('dialog', dialog => {
            message = dialog.message();
            dialog.accept();
        });
        await this.eleBox.click({ button: "right" });
        return message;
    }

    async getPageTitle(): Promise<string> {
        return await this.page.locator(ContextMenuPage.textHeader).innerText();
    }
}