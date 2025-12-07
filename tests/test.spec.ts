import { expect, test } from "@playwright/test";

test("Hlavní stránka", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle("Angelas Cakes");
});
