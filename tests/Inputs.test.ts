import test, { expect } from '../fixtures/navigationPages';
import { pages } from '../data/pages.json';

test.beforeEach(async ({ homePage }) => {
    await homePage.navigateToPage();
    await homePage.navigateToGivenPage(pages.inputs);
});

test('validate the number input to feild with number value', async ({ inputPage }) => {
    await inputPage.enterValue('1');
    expect(await inputPage.getPageTitle()).toBe(pages.inputs);
    expect(await inputPage.getEnteredValue()).toBe('1');
});

test('validate the number increment of the feild by up arrow', async ({ inputPage }) => {
    await inputPage.enterValue('1');
    await inputPage.incrementNumber(2);
    expect(await inputPage.getEnteredValue()).toBe('3');
});

test('validate the number decrement of the feild by down arrow', async ({ inputPage }) => {
    await inputPage.enterValue('4');
    await inputPage.decrementNumber(2);
    expect(await inputPage.getEnteredValue()).toBe('2');
});

test('validate the input to feild with character', async ({ inputPage }) => {
    await inputPage.enterValue('a');
    expect(await inputPage.getEnteredValue()).toBe('');
});