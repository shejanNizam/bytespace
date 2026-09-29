// ---------------------------------------------------------------------------
// Pure frontend configuration (No backend connection required).
//
// All variables have safe defaults so ByteSpace deploys and runs on Vercel
// without requiring ANY environment variables in your Vercel settings.
// ---------------------------------------------------------------------------

export const env = {
  /** API URL (optional placeholder for frontend-only mode). */
  API_URL: process.env.NEXT_PUBLIC_API_URL || "",
  /** Image CDN URL (optional placeholder). */
  IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL || "",
  /** Google OAuth Client ID (optional placeholder). */
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
} as const;
