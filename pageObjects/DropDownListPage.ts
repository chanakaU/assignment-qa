import { Page, Locator } from "@playwright/test";

export class DropDownListPage {

    readonly page: Page;
    readonly dropDownOptions: Locator;
    static readonly textHeader = '//h3';
    static readonly optionSelected = '//option[@selected="selected"]';

    constructor(page: Page) {
        this.page = page;
        this.dropDownOptions = this.page.locator('#dropdown');
    }

    async selectAnOption(option: string) {
        await this.dropDownOptions.selectOption(option);
    }

    async validateSelectedOption(): Promise<any> {
        return await this.page.locator(DropDownListPage.optionSelected).innerText();
    }

    async getPageTitle(): Promise<string> {
        return await this.page.locator(DropDownListPage.textHeader).innerText();
    }
}