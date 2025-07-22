Here's the reformatted **README** with your request incorporated cleanly, including the new **Cursor AI configuration block** right after the Claude Desktop section:

---

# 🍽️ RestaurantApp – Playwright MCP Automated Testing

A test automation project for validating login and logout flows in the [RestaurantAppAngular](https://github.com/pinakhonmode/AngularRestaurantApp) repository using **Playwright** and the **Model Context Protocol (MCP)** with **Cursor AI**.

This project leverages Playwright to simulate real user behavior in a browser, and the MCP server enables Cursor (or Claude Desktop) to perform live interaction with your application.

---

## 🔍 What Was Tested

The following user journeys were tested using Cursor AI’s Playwright MCP server:

* ✅ **Login Functionality** – Verified valid user credentials allow access and redirect to the appropriate home/dashboard page.
* ✅ **Logout Functionality** – Confirmed user is properly logged out, session cleared, and redirected to the login page.
* ✅ **Page Verification After Login/Logout** – Ensured the correct UI elements and components are visible after login, and session pages are inaccessible post-logout.

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

## 🚀 Playwright MCP Server Setup Guide

To run tests with **Claude Desktop** or **Cursor AI** using the **Playwright MCP Server**, follow the instructions below.

---

### 📦 1. Install Playwright MCP Server

**Official Package:** [`@executeautomation/playwright-mcp-server`](https://smithery.ai/server/@executeautomation/playwright-mcp-server)

You can install the server using any of the following methods:

#### ✅ Using `npm`:

```bash
npm install -g @executeautomation/playwright-mcp-server
```

#### ✅ Using `mcp-get`:

```bash
npx @michaellatman/mcp-get@latest install @executeautomation/playwright-mcp-server
```

#### ✅ Using `Smithery` (recommended for Claude Desktop):

```bash
npx @smithery/cli install @executeautomation/playwright-mcp-server --client claude
```

---

### 💻 2. Install in VS Code

#### VS Code (Standard):

```bash
code --add-mcp '{"name":"playwright","command":"npx","args":["@executeautomation/playwright-mcp-server"]}'
```

#### VS Code Insiders:

```bash
code-insiders --add-mcp '{"name":"playwright","command":"npx","args":["@executeautomation/playwright-mcp-server"]}'
```

---

### ⚙️ 3. Configuration for Claude Desktop

Add the following to your Claude Desktop configuration file:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    }
  }
}
```

---

### 🤖 4. Configuration for Cursor AI

Add this to your **Cursor AI** configuration after the Claude block:

```json
{
  "mcpServers": {
    "playwright-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@smithery/cli@latest",
        "run",
        "@executeautomation/playwright-mcp-server",
        "--key",
        "3a273e31-d5ad-421a-a0d9-33d18b5f8365",
        "--profile",
        "homeless-hornet-qyRXIq"
      ]
    }
  }
}
```

---

### 💬 Interact via Cursor AI

Use natural language prompts like:

* “Test login functionality with valid credentials”
* “Check that the logout button works and redirects to login”

Cursor will automatically generate Playwright tests or execute instructions via MCP.

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

Run `ng generate component component-name` to generate a new component.

## Build

Run `ng build` to build the project.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the e2e tests.

## Further help

To get more help on the Angular CLI use `ng help` or refer to the [CLI Docs](https://angular.dev/tools/cli).

---

## 🙌 Contributors

Developed and maintained by **Pinak Honmode**.

---
