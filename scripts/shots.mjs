import { chromium } from "playwright";

const shots = [
  { url: "https://weforgedigitalai.com", out: "public/work/forge-digital.jpg" },
  { url: "https://coeurdamourcare.com", out: "public/work/coeur-damour.jpg" },
  { url: "https://aphanisolutions.com", out: "public/work/aphani-solutions.jpg" },
];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 2,
});

for (const { url, out } of shots) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
  } catch {
    await page.waitForTimeout(3000);
  }
  await page.waitForTimeout(2500); // let hero animations settle
  await page.screenshot({ path: out, type: "jpeg", quality: 82 });
  console.log("saved", out);
  await page.close();
}

await browser.close();
