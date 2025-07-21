# 🍽️ RestaurantApp – Playwright MCP Automated Testing

A test automation project for validating login and logout flows in the [RestaurantAppAngular]([https://github.com/pinakhonmode/AngularRestaurantApp]) repository using **Playwright** and the **Model Context Protocol (MCP)** with **Cursor AI**.

This project leverages Playwright to simulate real user behavior in a browser, and the MCP server enables Cursor (or Claude Desktop) to perform live interaction with your application.

---

## 🔍 What Was Tested

The following user journeys were tested using Cursor AI’s Playwright MCP server:

* ✅ **Login Functionality**
  Verified valid user credentials allow access and redirect to the appropriate home/dashboard page.

* ✅ **Logout Functionality**
  Confirmed user is properly logged out, session cleared, and redirected to the login page.

* ✅ **Page Verification After Login/Logout**
  Ensured the correct UI elements and components are visible after login, and session pages are inaccessible post-logout.

---

## 🎭 What is Playwright?

[Playwright](https://playwright.dev/) is an end-to-end testing library by Microsoft that enables fast, reliable browser automation for Chromium, Firefox, and WebKit. It allows you to test modern web apps across various browsers and OS environments.

---

## ⚙️ Technologies Used

| Tool/Library      | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| **Playwright**    | Browser automation framework for UI testing                            |
| **MCP Server**    | Bridges LLMs like Cursor AI or Claude with real web environments       |
| **Cursor AI**     | AI-powered IDE with live agent support for running and debugging tests |
| **Node.js / NPM** | Environment to install dependencies and run scripts                    |
| **GitHub**        | Version control and CI/CD integration                                  |

---

## 📥 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/pinakhonmode/RestaurantAppAngular

# Navigate into the repo
cd RestaurantAppAngular

# Run the App
ng serve -o
```

---

## 🚀 Running Playwright Tests via MCP Server

To run tests with Cursor AI or Claude Desktop using the Playwright MCP Server:

### 1. Install Playwright MCP Server

https://smithery.ai/server/@executeautomation/playwright-mcp-server

Installation
You can install the package using either npm, mcp-get, or Smithery:

Using npm:

npm install -g @executeautomation/playwright-mcp-server
Using mcp-get:

npx @michaellatman/mcp-get@latest install @executeautomation/playwright-mcp-server
Using Smithery

To install Playwright MCP for Claude Desktop automatically via Smithery:

npx @smithery/cli install @executeautomation/playwright-mcp-server --client claude
Installation in VS Code
Install the Playwright MCP server in VS Code using one of these buttons:

Install in VS Code Install in VS Code Insiders

Alternatively, you can install the Playwright MCP server using the VS Code CLI:

# For VS Code
code --add-mcp '{"name":"playwright","command":"npx","args":["@executeautomation/playwright-mcp-server"]}'
# For VS Code Insiders
code-insiders --add-mcp '{"name":"playwright","command":"npx","args":["@executeautomation/playwright-mcp-server"]}'
After installation, the ExecuteAutomation Playwright MCP server will be available for use with your GitHub Copilot agent in VS Code.

Configuration to use Playwright Server
Here's the Claude Desktop configuration to use the Playwright server:

{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    }
  }
}


### 3. Interact via Cursor AI

Use natural language prompts like:

* *“Test login functionality with valid credentials”*
* *“Check that the logout button works and redirects to login”*

Cursor will automatically generate Playwright tests or execute instructions via MCP.

---

## 📸 Screenshots

Playwright automatically captures screenshots upon failure or step-wise:

* `screenshots/login_success.png` <img width="1280" height="720" alt="dashboard_after_login_final-2025-07-17T21-35-07-124Z" src="https://github.com/user-attachments/assets/0e107b79-ea0c-4692-8590-c005fbcff7d5" />


* `screenshots/logout_redirect.png` <img width="1280" height="720" alt="login_page_after_logout_final-2025-07-17T21-35-10-284Z" src="https://github.com/user-attachments/assets/919fe368-965a-4a47-b534-129f27baf41f" />




---

## ✅ Test Status

| Test Case                         | Status |
| --------------------------------- | ------ |
| Login with valid credentials      | ✅ Pass |
| Redirect after login              | ✅ Pass |
| Logout button redirects correctly | ✅ Pass |
| Prevent access after logout       | ✅ Pass |
  
---

## 📚 Further Reading

* [Playwright Official Docs](https://playwright.dev/docs/intro)
* [MCP Server by ExecuteAutomation](https://executeautomation.github.io/mcp-playwright/)
* [Using Cursor for Testing](https://docs.cursor.so/)

---

## 🙌 Acknowledgements

Thanks to:

* **[Cursor AI](https://cursor.so/)** for intelligent agent-assisted testing
* **[ExecuteAutomation](https://github.com/executeautomation)** for the MCP Playwright Server

Special thanks to ExecuteAutomation for their insightful contributions to the Playwright MCP ecosystem. Their work served as a valuable reference and inspiration while building and testing this project using Cursor AI.

---

# AngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## 🙌 Contributors

This testing setup was developed and maintained by Pinak Honmode.
