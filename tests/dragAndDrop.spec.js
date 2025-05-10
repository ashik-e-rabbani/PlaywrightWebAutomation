import {test,expect} from '@playwright/test'


test('Drag and drop', async ({page}) => {
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')


        // will look for iframe inside the rel title elemnt
        // const frame = page.getByRole('tab', { name: 'Photo Manager' })
        const itemToDrop = page.locator('.demo-frame').first().contentFrame().getByRole('heading', { name: 'High Tatras', exact: true })
        const droppingPlace = page.locator('.demo-frame').first().contentFrame().locator('#trash')
        // 
        // await itemToDrop.click()
        // await droppingPlace.click()

        // await itemToDrop.dragTo(droppingPlace)

        await itemToDrop.hover()
        await page.mouse.down()
        await droppingPlace.hover()
        await page.mouse.up()
        await page.waitForTimeout(3000)

})