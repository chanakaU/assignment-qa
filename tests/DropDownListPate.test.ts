import test, { expect } from '../fixtures/navigationPages'
import { pages } from '../data/pages.json';

test.beforeEach(async ({ homePage }) => {
    await homePage.navigateToPage();
    await homePage.navigateToGivenPage(pages.drop_down_list);
});

test('validate select an option form the dropdown', async ({ dropDownListPage }) => {
    await dropDownListPage.selectAnOption('Option 2');
    expect(await dropDownListPage.getPageTitle()).toBe(pages.drop_down_list);
    expect(await dropDownListPage.validateSelectedOption()).toBe('Option 2');
});

test('validate update selected option form the dropdown', async ({ dropDownListPage }) => {
    await dropDownListPage.selectAnOption('Option 2');
    expect(await dropDownListPage.validateSelectedOption()).toBe('Option 2');
    await dropDownListPage.selectAnOption('Option 1');
    expect(await dropDownListPage.validateSelectedOption()).toBe('Option 1');
});