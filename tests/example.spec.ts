import { test, expect, request, chromium } from '@playwright/test';
import { stat } from 'fs';


test('Test Network interception', async () => {
  const browser = await chromium.launch();

const context = await browser.newContext(); // new browser context
const page = await context.newPage();
  // Handle new tabs
  // await page.goto("https://testautomationpractice.blogspot.com/");
  // const [newPage] = await Promise.all([
  //   page.waitForEvent("popup"),
  //   page.getByRole("button", { name: "New Tab" }).click(),
  // ]);
  // await expect(newPage).toHaveURL("chrome-error://chromewebdata/");
 //handle the dropdown
    // await page.goto("http://www.tizag.com/htmlT/htmlselect.php");
    // await page.waitForTimeout(2000);
    // await page.selectOption('select', {value: 'CA'});
    // await page.waitForTimeout(2000);

    // Handle the broken links
    // await page.goto("https://testautomationpractice.blogspot.com/")
    // const apiContext = await request.newContext();
    // const links = await page.locator("//div[@id='broken-links']//a").all();
 
    //  for (const link of links) {
    //   const href = await link.getAttribute('href');
    //   if (href) {
    //     const response = await apiContext.get(href);
    //     expect(response.ok()).toBeTruthy();
    //   }
    // }

    // handle dynamic webtable
    // await page.goto("https://practice.expandtesting.com/dynamic-table#google_vignette");
    // const rowCount = await page.locator("//tbody/tr").count();
    // console.log(rowCount);
    // const colCount = await page.locator("//tbody/tr[1]/td").count();
    // console.log(colCount);
    // const textData = await page.locator("//tbody/tr/td").allInnerTexts();
    // console.log(textData);
    // for(const data of textData){
    //   console.log(data);
    // }

      // handle the slider 
      // await  page.goto("https://testautomationpractice.blogspot.com/");
      // let slider = page.locator("//div[@id='HTML7']//span[1]");
      // const boundingBox = await slider.boundingBox();
      // if(boundingBox){
      //   const startX = boundingBox.x + boundingBox.width/2;
      //   const startY = boundingBox.x + boundingBox.width/2;
      //   await page.mouse.move(startX, startY);
      //   await page.mouse.down();
      //   await page.mouse.move(startX + 200, startY);
      //   await page.mouse.down();
        
      // }
      //hi this is added by original developer
  Hello there *********
      // handle drag n drop
      // await page.goto("https://testautomationpractice.blogspot.com/");
      // let draggable = page.locator("//div[@id='draggable']");
      // let droppable = page.locator("//div[@id='droppable']");
      // let dropableBox = await droppable.boundingBox();
      // let draggableBox = await droppable.boundingBox();
      // if(dropableBox && draggableBox){
      //   page.mouse.move(
      //     dropableBox.x + dropableBox.width / 2,
      //     dropableBox.y + dropableBox.height / 2
      //   );
      //   page.mouse.down();
      //   page.mouse.move(
      //     dropableBox.x + dropableBox.width / 2,
      //     dropableBox.y + dropableBox.height / 2
      //   );
      //   page.mouse.up();
      // }

      // test("API test", async()=>{
      //   const apiContext = await request.newContext();
      //   const response = await apiContext.get("https://jsonplaceholder.typicode.com/posts");
      //   const data = await response.json();
      //   console.log(data);
      //   expect(response.ok()).toBeTruthy();
      // })
      await page.goto("https://testautomationpractice.blogspot.com/");
    //   let block = page.locator("//nav[@aria-label='Top languages']");
    //   let links = await block.locator("//a").all();
      
    //  for(const link of links){
    //    console.log(await link.getAttribute('href'));
    //  }
    //  await page.locator('#searchLanguage').selectOption("az");
    //  console.log(await page.locator('#searchLanguage').textContent());
     //await page.pause();

      // let block = page.locator('#broken-links');
      // let links = await block.locator("//a").all();
      
      // const apiContext = await request.newContext();
      // for(let link of links){
      //   let href = await link.getAttribute('href')
      //   console.log(href);
      //   if(href){
      //     const response = await apiContext.get(href);
      //     expect(response.ok()).toBeTruthy();
      //   }
      
      // }
      // mock api using page.route
      
      

      
});