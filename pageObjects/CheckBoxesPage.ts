import { Locator, Page } from '@playwright/test'

enum CHECKBOXOPTIONS {
    checkbox1 = "checkbox1",
    checkbox2 = "checkbox2"
}

export class CheckBoxesPage {

    readonly page: Page;
    readonly checkboxOptions: Locator;
    static readonly textHeader = '//h3';

    constructor(page: Page) {
        this.page = page;
        this.checkboxOptions = this.page.locator('//form[@id="checkboxes"]/input');
    }

    async selectCheckBox(checkBoxOptions: string) {
        const options: string[] = checkBoxOptions.replace(/\s/g, '').toLocaleLowerCase().split(',');

        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            if (option == CHECKBOXOPTIONS.checkbox1) {
                await this.checkboxOptions.nth(0).click();
            } else if(option == CHECKBOXOPTIONS.checkbox2) {
                await this.checkboxOptions.nth(1).click();
            }
        }
    }

    async getStateOfCheckBox(checkBoxOption: string) {
        const option = checkBoxOption.replace(/\s/g, '').toLocaleLowerCase();

        switch (option) {
            case (CHECKBOXOPTIONS.checkbox1):
                return await this.checkboxOptions.nth(0).isChecked();
            case (CHECKBOXOPTIONS.checkbox2):
                return await this.checkboxOptions.nth(1).isChecked();
        }
    }

    async getPageTitle(): Promise<string> {
        return await this.page.locator(CheckBoxesPage.textHeader).innerText();
    }
}