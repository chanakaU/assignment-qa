import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pageObjects/HomePage';
import { AddRemoveElementsPage } from '../pageObjects/AddRemoveElementsPage';
import { InputPage } from '../pageObjects/InputPage';
import { DropDownListPage } from '../pageObjects/DropDownListPage';
import { CheckBoxesPage } from '../pageObjects/CheckBoxesPage';
import { ContextMenuPage } from '../pageObjects/ContextMenu';

const test = baseTest.extend<{
    homePage: HomePage;
    addRemoveElementsPage: AddRemoveElementsPage;
    inputPage: InputPage;
    dropDownListPage: DropDownListPage;
    checkBoxesPage: CheckBoxesPage;
    contextMenuPage: ContextMenuPage;
}>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    addRemoveElementsPage: async ({ page }, use) => {
        await use(new AddRemoveElementsPage(page));
    },
    inputPage: async ({ page }, use) => {
        await use(new InputPage(page));
    },
    dropDownListPage: async ({ page }, use) => {
        await use(new DropDownListPage(page));
    },
    checkBoxesPage: async ({ page }, use) => {
        await use(new CheckBoxesPage(page));
    },
    contextMenuPage: async ({ page }, use) => {
        await use(new ContextMenuPage(page));
    }
});

export default test;
export const expect = test.expect;
