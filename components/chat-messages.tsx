import { useUIState } from 'ai/rsc'
import type { AI } from '@/app/action'

export function ChatMessages() {
  const [messages, setMessages] = useUIState<typeof AI>()

  return (
    <>
      {messages.map((message: { id: number; component: React.ReactNode }) => (
        <div key={message.id} id="message-box"><div id="site-logo2"></div>{message.component}</div>
      ))}
    </>
  )
}
