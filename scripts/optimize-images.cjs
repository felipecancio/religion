const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imagesRoot = path.join(__dirname, "..", "public", "images");

function sourcesIn(dir) {
  return fs
    .readdirSync(dir)
    .filter((name) => {
      const ext = path.extname(name).toLowerCase();
      if (![".png", ".jpg", ".jpeg"].includes(ext)) return false;
      if (/^mockup/i.test(name)) return false;
      return fs.statSync(path.join(dir, name)).isFile();
    })
    .sort((a, b) =>
      a.localeCompare(b, "en", { numeric: true, sensitivity: "base" })
    );
}

async function toWebp(input, output, width, quality, alpha = false) {
  await fs.promises.mkdir(path.dirname(output), { recursive: true });
  const before = fs.statSync(input).size;
  await sharp(input, { limitInputPixels: false, sequentialRead: true })
    .rotate()
    .resize({ width, withoutEnlargement: true, fit: "inside" })
    .webp({
      quality,
      effort: 6,
      smartSubsample: true,
      alphaQuality: alpha ? 100 : 80,
    })
    .toFile(output);
  const after = fs.statSync(output).size;
  console.log(
    `${path.basename(input)} ${(before / 1024).toFixed(0)}KB -> ${path.relative(imagesRoot, output)} ${(after / 1024).toFixed(0)}KB`
  );
}

async function numbered(dir, outDir, width, quality) {
  const files = sourcesIn(dir);
  for (let i = 0; i < files.length; i++) {
    const id = i + 1;
    console.log(`#${id} <= ${path.relative(imagesRoot, path.join(dir, files[i]))}`);
    await toWebp(
      path.join(dir, files[i]),
      path.join(outDir, `${id}.webp`),
      width,
      quality
    );
  }
  return files.length;
}

async function buildOg() {
  const mockup = await sharp(path.join(imagesRoot, "mockup-hero.png"), {
    limitInputPixels: false,
  })
    .resize({ height: 560, fit: "inside" })
    .toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 10, g: 10, b: 10, alpha: 1 },
    },
  })
    .composite([{ input: mockup, gravity: "centre" }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(imagesRoot, "..", "og.jpg"));

  console.log("og.jpg written");
}

(async () => {
  sharp.cache(false);
  const main = await numbered(imagesRoot, imagesRoot, 900, 78);
  const row2 = await numbered(
    path.join(imagesRoot, "row2"),
    path.join(imagesRoot, "row2"),
    900,
    78
  );
  const exclusive = await numbered(
    path.join(imagesRoot, "exclusive"),
    path.join(imagesRoot, "exclusive"),
    900,
    78
  );
  const santa = await numbered(
    path.join(imagesRoot, "santa ceia"),
    path.join(imagesRoot, "santa-ceia"),
    1400,
    78
  );

  for (const name of ["mockup.png", "mockup-hero.png"]) {
    await toWebp(
      path.join(imagesRoot, name),
      path.join(imagesRoot, name.replace(/\.png$/i, ".webp")),
      1200,
      82,
      true
    );
  }

  await buildOg();
  console.log(
    JSON.stringify({ main, row2, exclusive, santa }, null, 2)
  );
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
