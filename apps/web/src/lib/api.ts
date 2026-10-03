const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function sendMessage(prompt: string) {
  const res = await fetch(`${API_URL}/agent/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.statusText}`);
  }

  return res.json();
}
