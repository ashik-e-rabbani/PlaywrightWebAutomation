import {test,expect} from '@playwright/test'


test.beforeEach('Visit page and Load Form', async({page}) => {
await page.goto('http://localhost:4200/pages/iot-dashboard')
await page.getByText('Forms').click();
await page.getByText('Form Layouts').click();
})

test('Input and Radio Fields', async ({page}) => {

    const baseForm = page.locator('nb-card',{hasText:"Using the grid"})
    const emailInput = baseForm.locator('#inputEmail1');
    await emailInput.fill('abc@gmail.com');
    await emailInput.clear()
    await emailInput.pressSequentially('abc3@gmail.com')
    await emailInput.clear()
    // await emailInput.pressSequentially('abc3@gmail.com',{delay:500})

    const radio1 = baseForm.getByRole('radio',{name:'Option 1'})
    await radio1.check({force:true})

})

test('Checkbox', async ({page}) => {

    const baseForm = page.locator('nb-card',{hasText:"Basic form"})
    const checkbox = baseForm.getByRole('checkbox');
    await checkbox.check({force:true})
    await checkbox.uncheck({force:true})

})

//list and list item

test('Tooltip', async ({page}) => {

    await page.getByText('Modal & Overlays').click();
    await page.getByText('Tooltip').click();

    const baseCard = page.locator('nb-card',{hasText:"Tooltip Placements"})
    const topTooltip = baseCard.getByRole('button',{name:"Top"});
    await topTooltip.hover()

    const TooltipMessage = await page.locator('nb-tooltip').textContent()
    expect(TooltipMessage).toEqual('This is a tooltip')

})

test('dialog box', async ({page}) => {

    await page.getByText('Tables & Data').click();
    await page.getByText('Smart Table').click();

    page.on('dialog',dialog =>{
        dialog.accept()
    })

    // name filter is used inside getByRole()
    // hasText used in locator
    await page.getByRole('table').locator('tr', {hasText:"mdo@gmail.com"}).locator('.nb-trash').click()

})

// Todo tables 

test('date picker', async ({page}) => {

    await page.getByText('Forms').click();
    await page.getByText('Datepicker').click();
    await page.getByPlaceholder('Form Picker').click();

    await page.locator('[class="day-cell ng-star-inserted"]').getByText('14').click()

})

// Todo Date Picker 2

// Todo Sliders

test('Slider', async ({page}) => {

    //by updating the attribute

    await page.getByText('IoT Dashboard').click();

    const tempGauge = page.locator('ngx-temperature-dragger').filter({ hasText: 'Celsius' }).locator('circle')
    await tempGauge.evaluate(node => {
        node.setAttribute('cx','262.29')
        node.setAttribute('cy','93.053')
    })

    tempGauge.click()

    //Todo using actual mouse movement with x,y coordinates

})