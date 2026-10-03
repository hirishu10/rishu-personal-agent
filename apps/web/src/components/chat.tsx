'use client';

import React, { useState } from 'react';
import { sendMessage } from '../lib/api';

export function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await sendMessage(input);
      setMessages((prev) => [...prev, { role: 'assistant', content: res.response }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Error communicating with agent backend.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ minHeight: '200px', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: '0.5rem' }}>
            <strong>{m.role}: </strong> {m.content}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <input
          style={{ flex: 1, padding: '0.5rem' }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your agent..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} disabled={loading} style={{ padding: '0.5rem 1rem' }}>
          Send
        </button>
      </div>
    </div>
  );
}
