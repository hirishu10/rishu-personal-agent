import { Chat } from '../components/chat';

export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Personal AI Agent</h1>
      <Chat />
    </main>
  );
}
