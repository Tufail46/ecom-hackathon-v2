import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/products",
    "/female",
    "/male",
    "/kids",
    "/api/cart/:path",
    "api/webhooks/:path",
    "/studio/:path*",
  ],
});

export const config = {
  matchers: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/api/cart/:path*",
    "/products/:path*,/studio/:path*",
    "/(api|trpc)(.*)",
  ],
};
