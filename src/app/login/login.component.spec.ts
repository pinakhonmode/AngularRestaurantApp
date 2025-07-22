import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// PlaywrightMCP automation for login/logout flow
// This is a pseudo-code block for PlaywrightMCP, not a Jasmine/Karma test
// To run with PlaywrightMCP, save as a .mcp.ts file if needed, or use as a reference for your Playwright test runner

import { test, expect } from '@playwright/test';

test('Login and logout flow for Marvellous Restaurant Record App', async ({ page }) => {
  // Navigate to login page
  await page.goto('http://localhost:4200/login');
  // Check if login page is visible
  await expect(page.locator('input[formcontrolname="email"]')).toBeVisible();
  await expect(page.locator('input[formcontrolname="password"]')).toBeVisible();
  // Fill in credentials
  await page.fill('input[formcontrolname="email"]', 'pinak.honmode2602@gmail.com');
  await page.fill('input[formcontrolname="password"]', 'password123');
  // Click login button
  await page.click('button[type="submit"]');
  // Wait for dashboard/main page to load
  await expect(page.locator('text=Marvellous Restaurant Record App')).toBeVisible();
  // Click logout button (adjust selector as needed)
  await page.click('button:has-text("Logout")');
  // Check if redirected to login page
  await expect(page.locator('input[formcontrolname="email"]')).toBeVisible();
});
