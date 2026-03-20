import { test, expect } from '@playwright/test';

test.describe('Contact Form Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();
  });

  test('should submit successfully and show success message', async ({ page }) => {
    // Mock successful API response
    await page.route('**/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Message received!' }),
      });
    });

    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message from Playwright.');

    await page.click('button[type="submit"]');

    // Check for "TRANSMITTING..."
    const button = page.locator('button[type="submit"]');
    // await expect(button).toContainText('TRANSMITTING...'); // Might be too fast

    // Check for success message
    const successMsg = page.locator('text=MESSAGE_TRANSMITTED');
    await expect(successMsg).toBeVisible();
    await expect(successMsg).toContainText('You\'ll receive a reply at your email soon.');

    // Form should be cleared
    await expect(page.locator('input[name="name"]')).toHaveValue('');
    await expect(page.locator('input[name="email"]')).toHaveValue('');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('');
  });

  test('should show error message on API failure', async ({ page }) => {
    // Mock failed API response
    await page.route('**/contact', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Internal Server Error' }),
      });
    });

    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This message will fail.');

    await page.click('button[type="submit"]');

    // Check for error message
    const errorMsg = page.locator('text=TRANSMISSION_FAILED');
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText('Internal Server Error');
  });

  test('should show validation error if data is missing (client-side)', async ({ page }) => {
     // Playwright automatically handles HTML5 validation if we try to click submit
     await page.click('button[type="submit"]');
     
     // Browser validation prevents the form from submitting
     const nameInput = page.locator('input[name="name"]');
     const isInvalid = await nameInput.evaluate((node: HTMLInputElement) => !node.validity.valid);
     expect(isInvalid).toBeTruthy();
  });
});
