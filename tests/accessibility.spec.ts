import { test, expect } from '@playwright/test';

test.describe('Acessibilidade e Navegação do Mapa', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080');
  });

  test('deve permitir navegar pelo mapa usando teclado', async ({ page }) => {
    // Rola até o mapa
    const mapa = page.getByLabel('Mapa do mundo para escolher um destino');
    await mapa.scrollIntoViewIfNeeded();

    // Pressiona Tab para focar no primeiro país (EUA geralmente é o primeiro no coords)
    await page.keyboard.press('Tab');
    
    // Verifica se algum elemento do mapa tem o foco
    const hasFocus = await page.evaluate(() => {
      return document.activeElement?.getAttribute('role') === 'button';
    });
    expect(hasFocus).toBe(true);

    // Verifica se a mensagem ARIA está presente
    const ariaLabel = await page.evaluate(() => {
      return document.activeElement?.getAttribute('aria-label');
    });
    expect(ariaLabel).toContain('Viajar para');
  });

  test('deve navegar para a página do país ao pressionar Enter', async ({ page }) => {
    const mapa = page.getByLabel('Mapa do mundo para escolher um destino');
    await mapa.scrollIntoViewIfNeeded();

    // Navega até encontrar o Brasil (ou o primeiro disponível)
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    // Aguarda a animação e navegação
    await page.waitForURL(/\/pais\/.+/);
    expect(page.url()).toContain('/pais/');
  });

  test('deve manter contraste adequado no Hero', async ({ page }) => {
    const title = page.locator('h1');
    const color = await title.evaluate(el => getComputedStyle(el).color);
    // rgb(12, 74, 110) é sky-900, alto contraste com fundo claro
    expect(color).toBe('rgb(12, 74, 110)');
  });
});
