import {test, expect} from '@playwright/test'
import { config } from 'process';

test.beforeEach('Goto URL', async ({page}) => {
    await page.goto('http://uitestingplayground.com/ajax')
    });

test('Auto waiting', async({page}) => {

    // some method like click(),tap,dbclick() automatically waits for the specified time
    // await page.locator('button#ajaxButton').click()
    // const defferedText = await page.locator('p.bg-success').textContent()
    //  expect(defferedText).toContain('Data loaded with AJAX get request.')

     // wait for elemnt to be attached
     await page.locator('button#ajaxButton').click()
     await page.locator('p.bg-success').waitFor({state:"attachted"})

     const defferedTextisVisible = page.locator('p.bg-success').textContent()
     expect(defferedTextisVisible).toContain('Data loaded with AJAX get request.')

     // we can wait for API response , front end to make an api request.
      
})

test.describe('Timeouts', () => {
    test.setTimeout(60000);
    test.slow() // it will slow the each command execution by 3 times of testTimeout

    test('Action timeout', async ({page}) => {
        await page.click('button#submit', { timeout: 5000 }); // 5 seconds

        // corresponding config playwright.config.js
        // use: {
        //     actionTimeout: 5000
        //   }
          

    })


    test('Expect timeout', async ({page}) => {
        await expect(page.locator('.loading')).toBeHidden({ timeout: 10000 });
          

    })


    test('Navigation timeout', async ({page}) => {
        await page.goto('https://example.com', { timeout: 10000 });


    })

})