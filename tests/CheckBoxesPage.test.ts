import test, { expect } from '../fixtures/navigationPages';
import { pages } from '../data/pages.json';

test.beforeEach(async ({ homePage }) => {
    await homePage.navigateToPage();
    await homePage.navigateToGivenPage(pages.check_boxes);
});

test('validate check box state after selected', async ({ checkBoxesPage }) => {
    await checkBoxesPage.selectCheckBox('checkbox 1, checkbox 2');
    expect(await checkBoxesPage.getPageTitle()).toBe(pages.check_boxes);
    expect(await checkBoxesPage.getStateOfCheckBox('checkbox 1')).toBeTruthy();
    expect(await checkBoxesPage.getStateOfCheckBox('checkbox 2')).toBeFalsy();
    
});