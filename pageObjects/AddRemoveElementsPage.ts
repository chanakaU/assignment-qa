import { Locator, Page } from '@playwright/test';

export class AddRemoveElementsPage {

    readonly page: Page;
    readonly buttonAddElement: Locator;
    static readonly textHeader = '//h3';
    static readonly buttonDeleteElement = '//button[text()="Delete"]';

    constructor(page: Page) {
        this.page = page;
        this.buttonAddElement = page.locator('//button[text()="Add Element"]');
    }

    async clickToAddElement(numberOfElements: number) {
        for (let i = 0; i < numberOfElements; i++) {
            await this.buttonAddElement.click();
        }
    }

    async removeAddedElement(removeElelemtCount: number) {
        for (let i = 0; i < removeElelemtCount; i++) {
            await this.page.locator(AddRemoveElementsPage.buttonDeleteElement).last().click();
        }
    }

    async getDeleteElementCount() {
        await this.page.waitForSelector(AddRemoveElementsPage.buttonDeleteElement);
        const eleCount = await this.page.locator(AddRemoveElementsPage.buttonDeleteElement).count();
        return eleCount;
    }

    async getPageTitle(): Promise<string> {
        return await this.page.locator(AddRemoveElementsPage.textHeader).innerText();
    }
}