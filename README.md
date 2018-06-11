# Ugly Calculator

As a group, coding individually, we will build out a simple HTML/CSS/JS calculator through a series of steps.  We'll follow along with the steps below and adjust as needed.

## Step 0 - Setup

In this step we'll create our own git repos and add the `README` and `.gitignore` files

  + Create the ugly calculator repo in your github account
  + Clone the repo
  + Update the readme and gitignore files
  + Set up a develop branch and set it to be the primary branch
  + Add branch protections
  + Prepare to do the following steps based inside feature branches based off develop

There is only one rule, until we get to the framework steps, you can not use any external libraries, especially not jquery.

## Step 1 - Basic Ugly Calculator

In this step we'll implement the basic markup and style of the ugly calculator.

  + Create a folder titled `1_basic_ugly_calculator`
  + Create a file inside that folder called `ugly_calculator.html`
  + Edit the HTML file by adding markup and an internal STYLE tag that implements the basic ugly calculator design.


## Step 2 - Functioning Keys

In this step we'll make all the number keys respond to click events and populate the display field.

  + Create a folder titled `2_functioning_keys`
  + Copy the previous `ugly_calculator.html` to the new folder
  + Add a script tag to the page and implement the ability to click the number keys and have them populate the calculator display


## Step 3 - Additional Keys

In this step we'll add the mathematical operation keys to our calculator and set them up to populate the display field as well.

  + Create a folder titled `3_additional_keys`
  + Copy the previous `ugly_calculator.html` to the new folder
  + Add the `+`, `-`, `*`, and `/` keys according to the new mockup
  + Add the appropriate javascript to have them populate the calculator display


## Step 4 - Make it Work

In this step we'll add the ability to make the calculator actually do the job of calculating basic mathematical operations.

  + Create a folder titled `4_make_it_work`
  + Copy the previous `ugly_calculator.html` to the new folder
  + Add the `=` and `C` calculators according to the new mockup
  + Add the ability to complete calculations when clicking the `=` button
  + Add the ability to clear the calculator display and memory when clicking the `C` button
  

## Step 5 - Better Organization

In this step we'll split the file into separate files for better separation.

  + Create a folder titled `5_better_organization`
  + Copy the previous `ugly_calculator.html` to the new folder
  + Extract the CSS into a separate `ugly_calculator.css` file
  + Extract the JS into a separate `ugly_calculator.js` file


## Step 6 - Pretty Calculator

In this step we'll make changes to the CSS and HTML to make our calculator prettier.

  + Create a folder titled `6_pretty_calculator`
  + Copy the previous files to the new folder
  + Rename all files to `pretty_` instead of `ugly_`
  + Alter CSS and HTML as needed to match the new mockup


## Step 7 - Hyperapp Conversion

In this step we will convert the JS to a Hyperapp application.

  + Create a folder titled `7_hyperapp_conversion`
  + Copy the previous files from `6_pretty_calculator` to the new folder
  + Alter the JS and HTML files to utilize hyperapp
  

## Step 8 - Vue Conversion

In this step we will convert the JS to a Vue application.

  + Create a folder titled `8_vue_conversion`
  + Copy the previous files from `6_pretty_calculator` to the new folder
  + Alter the JS and HTML files to utilize vue


## Step 9 - React

In this step we will convert the JS to a React application.

  + Create a folder titled `9_react_conversion`
  + Copy the previous files from `6_pretty_calculator` to the new folder
  + Alter the JS and HTML files to utilize react


## Step 10 - Add Something Interesting

As a team, decide on an additional feature to add to the calculator.

  + Create a folder titled `10_{whatever_feature_you_chose}`
  + As a team, select one of the previous framework conversions to base this step on
  + Add an additional feature like a new operator, a visual change, animation, etc.