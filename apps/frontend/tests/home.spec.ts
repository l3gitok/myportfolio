import { test, expect } from '@playwright/test';

test('homepage has correct title and meta tags', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ARCHITECT_CONSOLE \| DevOps Portfolio/);

  // Check for OpenGraph metadata (og:title)
  const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
  expect(ogTitle).toBe('ARCHITECT_CONSOLE | DevOps Portfolio');

  // Check for the Hero image
  const heroImage = page.locator('img[alt="Nguyễn Đức Tuấn - DevOps & Cloud Engineer"]');
  await expect(heroImage).toBeVisible();
});
