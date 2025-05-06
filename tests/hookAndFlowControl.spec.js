import {expect, test} from '@playwright/test'

test.beforeEach('Check Server is available before start', async ({page}) => {

await page.goto('http://localhost:4200/pages/iot-dashboard')
await expect (page).toHaveTitle('playwright-test-admin Demo Application');
});

test('Visiting homepage Form', async ({page})=>{
    await page.getByText('Forms').click();

})

test.describe.only('Suite 1', () => {
    test.beforeEach('Clicking Charts', async ({page})=>{
        await page.getByText('Charts').first().click();
    
    })

    test('Expanding ECharts', async ({page})=>{
        await page.getByText('Echarts').click();
    
    })
})