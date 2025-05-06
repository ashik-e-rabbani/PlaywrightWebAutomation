import {test} from '@playwright/test'

// const {test} = require('@playwright/test')

test('First test tile',async ({page}) => {

    await page.goto('http://localhost:4200/pages/iot-dashboard');

    await page.getByText('Forms').click();
});

// test.describe('This is a group test', () => {

//     test.beforeEach('Check Server', () => {

//     });

//     test('Test 1',() => {

//     });

//     test('Test 2',() => {

//     });


// });