Feature('login');

Scenario('test something', ({ I }) => {
   I.amOnPage("/");
   I.click("Login");
   I.fillField('UserName', "admin");
   I.fillField('Password',"password");
   I.click("input[value='Log in']")
   I.see("Employee Details");
   I.see("Log off");
   I.dontSee("Login");
});
