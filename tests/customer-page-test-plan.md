# Customer Page Test Plan

## Application Overview

Test the Businessapp Customer 360 module, login workflow, Customer sub-tab navigation, and add new customer functionality.

## Test Scenarios

### 1. Customer Page Workflows

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login and navigate to Customer page

**File:** `tests/customer-page-test-plan.md`

**Steps:**
  1. -
    - expect: The login page loads at https://dev-demo-g7-product.excelacom.in/Businessapp
    - expect: Username and Password fields are visible
    - expect: LOGIN button is visible
  2. Enter username lakshmipriya and password welcome123
    - expect: Credentials are accepted by the login form
  3. Click the LOGIN button
    - expect: The app navigates to the dashboard
    - expect: Customer 360 module tile or tab is visible
    - expect: The Customer 360 top-level module is active
  4. Open the Customer 360 module and select the Customer sub-tab
    - expect: The Customer sub-tab is displayed
    - expect: Customer page content or summary cards are visible
    - expect: Customer-related metrics and customer list area appear

#### 1.2. Add a new customer - happy path

**File:** `tests/customer-page-test-plan.md`

**Steps:**
  1. -
    - expect: The user is on the Customer page within Customer 360
  2. Click Add New Customer or Create Customer
    - expect: The Add Customer form or dialog is displayed
  3. Fill in required fields with valid values, such as Customer Name, Email, Phone, Address, and Customer Type
    - expect: Each field accepts valid input
    - expect: No validation error is shown
  4. Submit the add customer form
    - expect: A success confirmation message appears
    - expect: The new customer is added to the customer list
    - expect: The new customer can be found by name in the customer list

#### 1.3. Customer creation validation

**File:** `tests/customer-page-test-plan.md`

**Steps:**
  1. -
    - expect: The Add Customer form is accessible
  2. Leave required fields blank and submit the form
    - expect: Validation messages appear for each mandatory field
    - expect: The customer is not created
  3. Enter an invalid email format and submit
    - expect: A validation error appears for the email field
    - expect: The form prevents submission
  4. Enter an invalid phone number and submit
    - expect: A validation error appears for the phone field if format rules exist
    - expect: The form prevents submission

#### 1.4. Cancel add customer

**File:** `tests/customer-page-test-plan.md`

**Steps:**
  1. -
    - expect: The Add Customer form is displayed
  2. Click the cancel or close button without saving
    - expect: The form closes
    - expect: No new customer is created
    - expect: The user returns to the Customer page

#### 1.5. Search and verify created customer

**File:** `tests/customer-page-test-plan.md`

**Steps:**
  1. -
    - expect: The customer list view is visible on the Customer page
  2. Search for the newly created customer by name or identifier
    - expect: The search returns the new customer record
    - expect: Correct customer details appear in the results
  3. Open the customer record if possible
    - expect: The customer details view opens
    - expect: Customer information matches the submitted data
