/**
 * Cloudflare Worker entry point for the static Systems Observatory.
 * Assets are immutable build output; the application uses hash-based views,
 * so the platform asset binding is the only request dependency.
 */
export default {
  async fetch(request, environment) {
    return environment.ASSETS.fetch(request);
  },
};
