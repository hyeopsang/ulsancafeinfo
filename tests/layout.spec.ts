import { test, expect } from '@playwright/test';

test.describe('App Layout', () => {
  test('헤더와 바텀 네비게이션이 렌더링된다', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('banner')).toBeVisible();

    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('바텀 네비게이션 클릭 시 페이지 이동한다', async ({ page }) => {
    await page.goto('/');

    await page.getByText('지도').click();
    await expect(page).toHaveURL('/map');

    await page.getByText('행사').click();
    await expect(page).toHaveURL('/events');

    await page.getByText('마이페이지').click();
    await expect(page).toHaveURL('/mypage');
  });

  test('현재 경로에 따라 활성 탭이 표시된다', async ({ page }) => {
    await page.goto('/map');

    const activeTab = page.getByText('지도');
    await expect(activeTab).toHaveClass(/text-main/);
  });
});
