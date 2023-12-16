export async function loadFonts() {
  const webFontLoader = await import("webfontloader");

  webFontLoader.load({
    custom: {
      families: ["Pretendard"],
      urls: ["https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"],
    },
  });
}
