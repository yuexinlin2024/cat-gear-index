const tokenUrl = "https://github.com/login/oauth/access_token";

function html(payload) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Authorizing GitHub</title>
  </head>
  <body>
    <script>
      (function () {
        function receiveMessage(event) {
          if (event.origin !== window.location.origin) return;
          window.opener.postMessage(
            'authorization:github:success:' + JSON.stringify(${JSON.stringify(payload)}),
            event.origin
          );
          window.removeEventListener('message', receiveMessage, false);
          window.close();
        }

        window.addEventListener('message', receiveMessage, false);

        if (window.opener) {
          window.opener.postMessage('authorizing:github', window.location.origin);
        }
      })();
    </script>
    <p>Authentication complete. You can close this window.</p>
  </body>
</html>`;
}

export async function onRequestGet({ request, env }) {
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!clientId || !clientSecret) {
    return new Response("Missing GitHub OAuth environment variables", { status: 500 });
  }

  if (!code) {
    return new Response("Missing GitHub OAuth code", { status: 400 });
  }

  const tokenResponse = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "catgearindex-decap-cms"
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code
    })
  });

  const token = await tokenResponse.json();

  if (!token.access_token) {
    return new Response(JSON.stringify(token), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  return new Response(
    html({
      token: token.access_token
    }),
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8"
      }
    }
  );
}
