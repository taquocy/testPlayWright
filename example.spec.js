import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uda.edu.vn/');
  await page.getByPlaceholder('Email, hoặc điện thoại').click();
  await page.getByPlaceholder('Email, hoặc điện thoại').fill('ytq@donga.edu.vn');
  await page.getByPlaceholder('Email, hoặc điện thoại').press('Enter');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('donga33xvnt');
  await page.getByRole('link', { name: '+ Đăng nhập' }).click();
  await page.locator('#Label1').click();
//   await page.getByText('Tạ Quốc Ý 353 0 DONG A UNIVERSITY Hoạch định công việc - Kế hoạch cá nhân - Kế h')
  expect(page.locator('#Label1').textContent === 'Tạ Quốc Ý')
});