import test, { expect } from '../fixtures/navigationPages';
import { pages } from '../data/pages.json';

test.beforeEach(async ({ homePage }) => {
    await homePage.navigateToPage();
    await homePage.navigateToGivenPage(pages.add_remove_elements);
});

test('validate the add element', async ({ addRemoveElementsPage }) => {
    await addRemoveElementsPage.clickToAddElement(1);
    expect(await addRemoveElementsPage.getPageTitle()).toBe(pages.add_remove_elements);
    expect(await addRemoveElementsPage.getDeleteElementCount()).toBe(1);
});

test('validate the remove element', async ({ addRemoveElementsPage }) => {
    await addRemoveElementsPage.clickToAddElement(4);
    expect(await addRemoveElementsPage.getDeleteElementCount()).toBe(4);
    await addRemoveElementsPage.removeAddedElement(2);
    expect(await addRemoveElementsPage.getDeleteElementCount()).toBe(2);
});