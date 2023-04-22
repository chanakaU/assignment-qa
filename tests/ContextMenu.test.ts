import test, { expect } from '../fixtures/navigationPages';
import { pages } from '../data/pages.json';

test.beforeEach(async ({ homePage }) => {
    await homePage.navigateToPage();
    await homePage.navigateToGivenPage(pages.context_menu);
});


test('validate context menu alert message', async ({ contextMenuPage }) => {
    expect(await contextMenuPage.getPageTitle()).toBe(pages.context_menu);
    expect(await contextMenuPage.rightClickAndGetAlertMessage()).toBe('You selected a context menu');
});