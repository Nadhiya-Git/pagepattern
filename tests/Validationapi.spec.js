const { test, expect } = require('@playwright/test');

// Your working data structure needed by your frontend UI to stop loading
const workingPayload = {
  "entityAction": { "childEntity": "string", "childPCId": 0, "parentEntity": "string", "parentPCId": 0 },
  "actionValue": "Success",
  "entityInstanceId": "",
  "entityPCId": "2629",
  "entityType": "Landing",
  "joinBusinessId": null,
  "parentEntityPCId": 0,
  "serviceRequestId": 0,
  "businessEntityInstanceId": null,
  "lazyLoadFlag": false,
  "jeopardyFlag": false,
  "myOfferingFlag": "",
  "renew": false,
  "bid": "",
  "businessEntityPCId": 0,
  "category": "retrieve",
  "hierarchyId": "",
  "subType": "",
  "parentRecentId": "",
  "userProfile": {
    "channelType": "", "systemLocale": "", "userGroupName": "", "userName": "LakshmiPriya",
    "userTimeZone": "IST", "userLocale": "en_US", "userId": "2615575", "firstName": "Lakshmi",
    "lastName": "Jayachandran", "email": "LakshmiPriya.J@excelacom.in", "csUserId": "2615575",
    "tenantId": "", "subTenantId": "null", "group": ["1710623"]
  }
};

test("UI Interception - Fetch and Fulfill Response Data", async ({ page }) => {

  // 1. Intercept the network call BEFORE making any UI moves
  await page.route("https://dev-demo-g7-product.excelacom.in/centuryServiceAPI/v1/getEntityDetails", async (route) => {
    console.log("-> Intercepting endpoint. Fetching live response from backend...");
    
    // Fetch the real network transaction context
    const response = await page.request.fetch(route.request());
    console.log(response.status());
    // Fulfill using the correct spelling of 'fulfill' and assigning data to the 'json' property
    await route.fulfill({
      response,                   // Maintains real headers/status codes
      contentType: 'application/json',
      json: workingPayload        // Feeds your frontend the mock data object it requires
    });
  });

  // 2. Navigate to your frontend login screen
  await page.goto("https://dev-demo-g7-product.excelacom.in/Businessapp");
console.log("Application navgated sucessfully");
  // 3. Fill in credentials and click submit
  await page.locator("#username").fill("lakshmipriya");
  await page.locator("#password").fill("welcome123");
  
  // 4. Submit the form
  await page.locator("#submitBtn").click();

  // Give the UI 6 seconds to complete loading using the injected data stream
  await page.waitForTimeout(6000);
});