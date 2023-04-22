import { Page, Locator } from '@playwright/test'

enum PAGES {
    ADD_REMOVE_ELEMENTS_PAGE = "Add/Remove Elements",
    INPUTS_PAGE = "Inputs",
    DROP_DOWN_LIST_PAGE = "Dropdown List",
    CHECKBOXES_PAGE = "Checkboxes",
    CONTEXT_MENU = "Context Menu"
}

export class HomePage {

    readonly page: Page;
    readonly linkAddRemoveElements: Locator;
    readonly linkInput: Locator;
    readonly linkDropDown: Locator;
    readonly linkCheckBoxes: Locator;
    readonly linkContextMenu: Locator;
    static readonly textHeader = '//h1';

    constructor(page: Page) {
        this.page = page;
        this.linkAddRemoveElements = page.locator('//a[@href="/add_remove_elements/"]');
        this.linkInput = page.locator('//a[@href="/inputs"]');
        this.linkDropDown = page.locator('//a[@href="/dropdown"]');
        this.linkCheckBoxes = page.locator('//a[@href="/checkboxes"]');
        this.linkContextMenu = page.locator('//a[@href="/context_menu"]');
    }

    async navigateToPage() {
        await this.page.goto('/');
        await this.page.waitForSelector(HomePage.textHeader);
    }

    async navigateToGivenPage(page: String) {
        switch (page) {
            case (PAGES.ADD_REMOVE_ELEMENTS_PAGE):
                await this.linkAddRemoveElements.click();
                break;
            case (PAGES.CHECKBOXES_PAGE):
                await this.linkCheckBoxes.click();
                break;
            case (PAGES.CONTEXT_MENU):
                await this.linkContextMenu.click();
                break;
            case (PAGES.DROP_DOWN_LIST_PAGE):
                await this.linkDropDown.click();
                break;
            case (PAGES.INPUTS_PAGE):
                await this.linkInput.click();
                break;
        }
    }

    async getPageTitle(): Promise<string> {
        return await this.page.locator(HomePage.textHeader).innerText();
    }
}