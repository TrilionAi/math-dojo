export const SITE_URL = "https://playmathdojo.com";

export type ShareOutcome = "shared" | "copied" | "failed";

/** Shares text via the native share sheet when available (mobile), falling back
 * to copying "text + url" to the clipboard (desktop). */
export async function shareText(text: string): Promise<ShareOutcome> {
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({ text, url: SITE_URL });
      return "shared";
    } catch {
      // user closed the sheet, or share failed — fall through to clipboard
    }
  }
  try {
    await navigator.clipboard.writeText(`${text} ${SITE_URL}`);
    return "copied";
  } catch {
    return "failed";
  }
}

/** Shares a PNG file (e.g. the certificate) natively when the platform supports
 * sharing files; falls back to sharing/copying the text alone. */
export async function shareImage(blob: Blob, filename: string, text: string): Promise<ShareOutcome> {
  const file = new File([blob], filename, { type: "image/png" });
  if (typeof navigator !== "undefined" && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], text, url: SITE_URL });
      return "shared";
    } catch {
      // fall through
    }
  }
  return shareText(text);
}
