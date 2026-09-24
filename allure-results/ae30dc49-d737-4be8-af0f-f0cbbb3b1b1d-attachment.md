# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginapplication.spec.js >> Login to application using POM
- Location: tests/loginapplication.spec.js:6:5

# Error details

```
TypeError: LoginPage.loginToApplication is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic:
        - img "menu"
        - generic [ref=e9]:
          - generic [ref=e10]:
            - text: Learn Automation Courses
            - img "delete" [ref=e11] [cursor=pointer]
          - generic [ref=e12]:
            - link "Home" [ref=e13] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=e15] [cursor=pointer]:
              - /url: /practise
  - generic [ref=e18]:
    - img "Login" [ref=e20]
    - generic [ref=e21]:
      - generic [ref=e23]:
        - heading "Sign In" [level=2] [ref=e24]
        - textbox "Enter Email" [ref=e25]
        - textbox "Enter Password" [ref=e26]
        - button "Sign in" [ref=e27] [cursor=pointer]
        - link "New user? Signup" [ref=e28] [cursor=pointer]:
          - /url: /signup
      - generic [ref=e29]:
        - heading "Connect with us" [level=2] [ref=e30]
        - generic [ref=e31] [cursor=pointer]:
          - link [ref=e32]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=e36]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=e39]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=e42]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=e45]:
            - /url: https://learn-automation/reddit
  - generic [ref=e60]:
    - generic [ref=e61]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e62]
      - heading "©2023 All rights reserved" [level=2] [ref=e63]
    - generic [ref=e64] [cursor=pointer]:
      - link [ref=e65]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e69]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e72]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e75]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | const LoginPage=require("../pages/loginpage");
  3  | 
  4  | 
  5  | 
  6  | test('Login to application using POM',async ({page})=>{
  7  | 
  8  |     await page.goto("https://freelance-learn-automation.vercel.app/login");
  9  | 
  10 |    
  11 |     const loginPage = new  LoginPage (page);
  12 | 
> 13 |     await LoginPage.loginToApplication();
     |                     ^ TypeError: LoginPage.loginToApplication is not a function
  14 |      
  15 | 
  16 | 
  17 | })
```