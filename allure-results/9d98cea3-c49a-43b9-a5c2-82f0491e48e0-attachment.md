# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginapplication.spec.js >> Login to application using POM
- Location: tests/loginapplication.spec.js:8:5

# Error details

```
Error: page.click: Test ended.
Call log:
  - waiting for locator('//button[normalize-space()=\'Sign out\']')

```

# Test source

```ts
  1  | class logoutPage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  |         this.menu="//img[@alt='menu']";
  5  |         this.signout="//button[normalize-space()='Sign out']"
  6  | 
  7  |     }
  8  | 
  9  |     async logoutFromApplication(){
  10 |         this.page.click(this.menu);
> 11 |         this.page.click(this.signout)
     |                   ^ Error: page.click: Test ended.
  12 |     }
  13 | }
  14 | 
  15 | module.exports=logoutPage;
```