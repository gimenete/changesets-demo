const webhookURL = process.env.WEBHOOK_URL;

export async function sendDiscordNotification(message) {
  const response = await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: message })
  });
  if (!response.ok) {
    console.error(`Failed to send notification: ${response.status} ${response.statusText}`);
  }
}
