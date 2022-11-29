const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the {string} page", async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

//login.js
When("I login with {word} and {word}", async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then("I should see a flash message saying {string}", async (message) => {
    const elem = await $('#flash');
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});

// hovers.js
When("I hover over a {}", async(div) => {
    let fullXpath = await $('#content > div > div:nth-child(3) > img'); 
    await fullXpath.moveTo();
});

Then("I should be able to see a {string}", async(details) => {
    const element = await $('#content > div > div:nth-child(3) > div > h5');
    await expect($('#content > div > div:nth-child(3) > div > h5')).toBeExisting();
    await expect($('#content > div > div:nth-child(3) > div > h5')).toHaveTextContaining(details);

});

// key_presses.js

When("I type a {string}", async(key) => {
    browser.keys(key);
});

Then("I should see a {string}", async(message) => {
    let element = await $('#result');
    await expect(element).toHaveTextContaining(message);
});

// checkboxes.js

When("I click on a {}", async(checkboxes) => {
    let fullXpath = await $('#checkboxes > input[type=checkbox]:nth-child(1)');
    fullXpath.click();
});

Then("I should be able to see whether it is {}", async(checkbox) => {
    let fullXpath = await $('#checkboxes > input[type=checkbox]:nth-child(1)');
    await expect(fullXpath).toBeChecked();
});

//add_remove_elements_add&delete.js

When("I click on {string}", async(add_element) => {
    let fullXpath = await $('//*[@id="content"]/div/button');
    await fullXpath.click();
});

Then("I should be able to click on a {string} button", async(delete_element) => {
    let deleteXpath = await $('//*[@id="elements"]/button');
    await expect(deleteXpath).toBeExisting();
    await deleteXpath.click();
});