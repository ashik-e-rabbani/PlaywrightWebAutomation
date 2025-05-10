import {expect, test} from '@playwright/test'


test.beforeEach('Check Server is available before start', async ({page}) => {

await page.goto('http://localhost:4200/pages/iot-dashboard')
await page.getByText('Forms').click();
await page.getByText('Form Layouts').click();
});

test('Locators', async ({page}) => {
    // by tag
    page.locator('input')

    //by id
    page.locator('#inputEmail')

    // by class
    page.locator('.shape-rectangle')

    //by attribute
    page.locator('[placeholder="Email]') 

    // by class value (full)
    page.locator('.shape-rectangle')

    // combine different locator (just for individual attribute use [])
    page.locator('input[placeholder="Email].shape-rectangle[nbinput]')

    //X-path
    page.locator('//*[@id="inputEmail"]')

    // partial text match
    page.locator(':text("Using")')

        // Exact text match
    page.locator(':text-is("Using the Grid")')




})

test('User Facing locators (View from user end)', async ({page}) => {
    await page.getByRole('textbox',{name:"Email"}).first().click();
    await page.getByRole('button',{name:"Sign In"}).first().click();

    await page.getByLabel('Email').first().click();

    await page.getByPlaceholder('Jane Doe').click()

    await page.getByText('Submit').click()

    await page.getByTitle('IoT Dashboard').click()

    // id defined by ourself custom attribute( data-testid) we can override it in config of playwright
    await page.getByTestId('SignIn').click()

})

test('Locating child/nested elements', async ({page}) => {
    // chaining locators one by one  
    await page.locator('nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 1")').click()

    await page.locator('nb-card').nth(1).getByRole('button').click();
})

test('Locating parent elemnts', async ({page}) => {
    // chaining locators one by one  

})

test('Resusing locators', async ({page}) => {
  
    const basicForm = page.locator('nb-card',{hasText:'Basic Form'})


     await basicForm.locator('[placeholder="Email"]').fill('admin@google.com')
     await basicForm.locator('input[placeholder="Password"]').fill('admin123')
     await basicForm.getByRole('button',{hasText:"Submit"}).click()
})

test('Extracting values from elements', async ({page}) => {
    const basicForm = page.locator('nb-card',{hasText:'Basic Form'})
    await basicForm.locator('[placeholder="Email"]').fill('admin@google.com')

    const buttonText = await basicForm.locator('button').textContent()
    expect(buttonText).toEqual('Submit')

    // multiple text values under a tag; and return array
    const allRadioBtnTexts = await page.locator('nb-radio').allTextContents()
    expect(allRadioBtnTexts).toContain('Option 2')

    //get input field text
    const inputValue = await basicForm.locator('[placeholder="Email"]').inputValue()
    expect(inputValue).toEqual('admin@google.com')


    //get attributes field text
    const attributeValue = await basicForm.getByRole('textbox', {name:"Email"}).getAttribute('placeholder')
    expect(attributeValue).toEqual('Email')

})

test('Assertions', async({page})=>{
    const basicForm = page.locator('nb-card',{hasText:'Basic Form'})
        //generic
        const buttonText = await basicForm.locator('button').textContent()
        expect(buttonText).toEqual('Submit')

        //locators level
        const buttonAsLocator =  basicForm.locator('button')
        await expect(buttonAsLocator).toHaveText("Submit")

        // soft assertion (if fails it will still continue to next step)
        await expect.soft(buttonAsLocator).toHaveText("Submit3")
        await buttonAsLocator.click()
         

})