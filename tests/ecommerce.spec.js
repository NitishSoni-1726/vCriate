import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});
test("Product Load Test", async ({ page }) => {
  const filterpane = await page.getByTestId("filter-pane");
  expect(filterpane).not.toBe(null);
  const productListContainer = await page.getByTestId("product-list-container");
  expect(productListContainer).not.toBe(null);
  await page.getByTestId("product-card").first().waitFor();
  const productCount = await page.getByTestId("product-card").count();
  expect(productCount).toBe(58);
});

test("Product Description Load Test", async ({ page }) => {
  await page
    .getByRole("link", {
      name: "... Zipped cardigan By H&M Rs.2,299.00 Rs.919.00 (40% off)  4.1",
    })
    .click();
  const productDescriptionContainer = await page.getByTestId(
    "product-description-container"
  );
  expect(productDescriptionContainer).not.toBe(null);
  const productDescription = await page
    .getByTestId("product-description")
    .waitFor();
  expect(productDescription).not.toBe(null);
});

test("Add To Cart", async ({ page }) => {
  await page
    .getByRole("link", {
      name: "... Zipped cardigan By H&M Rs.2,299.00 Rs.919.00 (40% off)  4.1",
    })
    .click();
  page.getByTestId("product-description-container");
  await page.getByTestId("product-description").waitFor();
  await page.getByTestId("add-to-cart-button").click();
  const cartCount = await page.getByTestId("cart-count");
  expect(cartCount).toHaveText("1");
});

test("Remove From Cart", async ({ page }) => {
  await page
    .getByRole("link", {
      name: "... Zipped cardigan By H&M Rs.2,299.00 Rs.919.00 (40% off)  4.1",
    })
    .click();
  page.getByTestId("product-description-container");
  await page.getByTestId("product-description").waitFor();
  await page.getByTestId("add-to-cart-button").click();
  await page.getByTestId("remove-from-cart-button").click();
  const cartCount = await page.getByTestId("cart-count");
  expect(cartCount).toHaveText("0");
});

test("Cart Display", async ({ page }) => {
  await page.getByTestId("show-cart-button").click();
  const cartPage = page.getByTestId("cart-container");
  expect(cartPage).not.toBe(null);
});

test("Check item Present In Cart", async ({ page }) => {
  await page
    .getByRole("link", {
      name: "... Zipped cardigan By H&M Rs.2,299.00 Rs.919.00 (40% off)  4.1",
    })
    .click();
  page.getByTestId("product-description-container");
  await page.getByTestId("product-description").waitFor();
  await page.getByTestId("add-to-cart-button").click();
  await page.getByTestId("show-cart-button").click();
  const cartItem = page.getByTestId("cart-item");
  expect(cartItem).not.toBe(null);
});

test("Increase Quantity", async ({ page }) => {
  await page
    .getByRole("link", {
      name: "... Zipped cardigan By H&M Rs.2,299.00 Rs.919.00 (40% off)  4.1",
    })
    .click();
  page.getByTestId("product-description-container");
  await page.getByTestId("product-description").waitFor();
  await page.getByTestId("add-to-cart-button").click();
  await page.getByTestId("show-cart-button").click();
  await page.getByTestId("increase-quantity").click();
  const quantityDisplay = await page.getByTestId("quantity-display");
  expect(quantityDisplay).toHaveText("2");
});

test("Decrease Quantity", async ({ page }) => {
  await page
    .getByRole("link", {
      name: "... Zipped cardigan By H&M Rs.2,299.00 Rs.919.00 (40% off)  4.1",
    })
    .click();
  page.getByTestId("product-description-container");
  await page.getByTestId("product-description").waitFor();
  await page.getByTestId("add-to-cart-button").click();
  await page.getByTestId("show-cart-button").click();
  await page.getByTestId("increase-quantity").click();
  await page.getByTestId("decrease-butoon").click();
  const quantityDisplay = await page.getByTestId("quantity-display");
  expect(quantityDisplay).toHaveText("1");
});

test("Delete Item From Cart", async ({ page }) => {
  await page
    .getByRole("link", {
      name: "... Zipped cardigan By H&M Rs.2,299.00 Rs.919.00 (40% off)  4.1",
    })
    .click();
  page.getByTestId("product-description-container");
  await page.getByTestId("product-description").waitFor();
  await page.getByTestId("add-to-cart-button").click();
  await page.getByTestId("show-cart-button").click();
  await page.getByTestId("delete-item-from-cart").click();
  const cartCount = await page.getByTestId("cart-count");
  expect(cartCount).toHaveText("0");
});

test("Check Total Bill Ammount on Quantity Increase", async ({ page }) => {
  await page
    .getByRole("link", {
      name: "... Zipped cardigan By H&M Rs.2,299.00 Rs.919.00 (40% off)  4.1",
    })
    .click();
  page.getByTestId("product-description-container");
  await page.getByTestId("product-description").waitFor();
  await page.getByTestId("add-to-cart-button").click();
  await page.getByTestId("show-cart-button").click();
  await page.getByTestId("increase-quantity").click();
  expect(await page.getByRole("heading", { name: "₹ 1838" }).nth(1)).toHaveText(
    "₹ 1838"
  );
});

test("Check Total Bill Ammount on Quantity Decrease", async ({ page }) => {
  await page
    .getByRole("link", {
      name: "... Zipped cardigan By H&M Rs.2,299.00 Rs.919.00 (40% off)  4.1",
    })
    .click();
  page.getByTestId("product-description-container");
  await page.getByTestId("product-description").waitFor();
  await page.getByTestId("add-to-cart-button").click();
  await page.getByTestId("show-cart-button").click();
  await page.getByTestId("increase-quantity").click();
  await page.getByTestId("decrease-butoon").click();
  const totalAmount = await page.getByRole("heading", { name: "₹ 919" }).nth(1);
  expect(totalAmount).toHaveText("₹ 919");
});
