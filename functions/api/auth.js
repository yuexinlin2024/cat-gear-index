const authorizeUrl = "https://github.com/login/oauth/authorize";

export async function onRequestGet({ request, env }) {
  const clientId = env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response("Missing GITHUB_CLIENT_ID", { status: 500 });
  }

  const url = new URL(request.url);
  const scope = url.searchParams.get("scope") || "repo";
  const state = crypto.randomUUID();
  const redirectUri = `${url.origin}/api/callback`;
  const target = new URL(authorizeUrl);

  target.searchParams.set("client_id", clientId);
  target.searchParams.set("redirect_uri", redirectUri);
  target.searchParams.set("scope", scope);
  target.searchParams.set("state", state);

  return Response.redirect(target.toString(), 302);
}
