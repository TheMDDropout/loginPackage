# Login Screen
### What is this?
[npm Link](https://www.npmjs.com/package/loginpackage-themddropout)
This is a personal practice module which creates a user login/signup page. 

The module includes a user login page, which accepts email/password, a sign-in with Google option, and a "demo" button option. 
Selecting the sign up button will open the sign up panel, which requires an email and password. The signup form inplments client-side Javascript form validation with easilty customizable password security options. 

### Installation 
Make sure you're using a module bundler, such as Webpack. 

`npm i loginpackage-themddropout --save`

Then...
```
import {loginPackageTheMDDropout} from "loginpackage-themddropout"

loginPackageTheMDDropout.createSignInContainer();
```
CSS style sheets and required images are included as seperate files within the loginpackage module. Copy these over your working directory. 

### Options
The imported function accepts four arguments. The default argument settings will:
 * append the login module onto the document body
 * include a default company logo
 * display initial title text "Welcome Back!"
 * set required password to level 5 (see below)
```
loginPackageTheMDDropout.createSignInContainer(
    "", //allows users to define which element to append the login screen into
    "", //accepts a string defining the path to a desired logo
    "", //accepts a string defining the title text of the log-in screen
    ""  //accepts an integer (1-5) selecting level of password security
);
```
### Password security levels
By default, the requirement for new signup passwords is set to 5: 
 * 1: Minimum eight characters, at least one letter and one number
 * 2: Minimum eight characters, at least one letter, one number and one special character
 * 3: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
 * 4: Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
 * 5: Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character
 * Users can also define their own RegEx criteria 

 ### Example: 
 ```
loginPackageTheMDDropout.createSignInContainer(
    "", 
    "/images/companylogo.svg", 
    "Welcome to Example Company", 
    4 
);
```
In the above example, the login module is appended onto the document body. A company logo will be displayed at the top of the module. A title of "Welcome to Example Company" will display below the logo. New users will be required to use passwords of security level 4 (Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character).
