import { Locator, Page } from "@playwright/test";

export class InputPage {

    readonly page: Page;
    readonly textInput: Locator;
    static readonly textHeader = '//h3';

    constructor(page: Page) {
        this.page = page;
        this.textInput = page.locator('//input[@type="number"]');
    }

    async enterValue(inputValue: string) {
        await this.textInput.type(inputValue);
    }

    async incrementNumber(numberOfArrowUp: number) {
        for (let i = 0; i < numberOfArrowUp; i++) {
            await this.textInput.press('ArrowUp');
        }
    }

    async decrementNumber(numberOfArrowUp: number) {
        for (let i = 0; i < numberOfArrowUp; i++) {
            await this.textInput.press('ArrowDown');
        }
    }

    async getEnteredValue(): Promise<any> {
       return await this.textInput.inputValue();
    }

    async getPageTitle(): Promise<string> {
        return await this.page.locator(InputPage.textHeader).innerText();
    }
}