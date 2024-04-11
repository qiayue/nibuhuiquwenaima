import React from 'react'
import Link from 'next/link'
import { SiDiscord, SiGithub, SiTwitter } from 'react-icons/si'
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end">
        <a href="https://nibuhuiquwenaima.com/" title="你不会去问AI吗？">你不会去问AI吗？</a> <a href="https://nibuhuiquwenaima.com/" title="你不会问AI吗？">NiBuHuiWenAIMa.com</a>
      </div>
    </footer>
  )
}

export default Footer
