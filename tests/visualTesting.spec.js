import {test,expect} from '@playwright/test'
import { exitCode } from 'process';


test.beforeEach('Visit page and Load Form', async({page}) => {
    await page.goto('http://localhost:4200/pages/iot-dashboard')
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
    })
    
    test('Input and Radio Fields', async ({page}) => {
    
        const baseForm = page.locator('nb-card',{hasText:"Using the grid"})
        const radio1 = baseForm.getByRole('radio',{name:'Option 1'})
        await radio1.check({force:true})

        await expect(radio1).toHaveScreenshot('homepage.png')
    
    })