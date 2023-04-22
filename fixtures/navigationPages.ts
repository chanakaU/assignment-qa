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
    homePage: async ({ page }) => {
        await (new HomePage(page));
    },
    addRemoveElementsPage: async ({ page }) => {
        await (new AddRemoveElementsPage(page));
    },
    inputPage: async ({ page }, ) => {
        await (new InputPage(page));
    },
    dropDownListPage: async ({ page }, ) => {
        await (new DropDownListPage(page));
    },
    checkBoxesPage: async ({ page }, ) => {
        await (new CheckBoxesPage(page));
    },
    contextMenuPage: async ({ page }, ) => {
        await (new ContextMenuPage(page));
    }
});

export default test;
export const expect = test.expect;
