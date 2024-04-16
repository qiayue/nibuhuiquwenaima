import React from 'react'
import Link from 'next/link'
import { SiDiscord, SiGithub, SiTwitter } from 'react-icons/si'
import { Button } from './ui/button'
import { GoogleAnalytics } from '@next/third-parties/google'

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-1 md:p-2 fixed bottom-0 right-0 backdrop-blur">
      <div className="flex justify-center">
        <a href="https://nibuhuiquwenaima.com/" title="你不会去问AI吗？">你不会去问AI吗？</a> <a href="https://nibuhuiquwenaima.com/" title="你不会问AI吗？">NiBuHuiWenAIMa.com</a>
      </div>
      <div style="display:none">
        <GoogleAnalytics gaId="G-WZ5JYPR2MB" />
      </div>
    </footer>
  )
}

export default Footer
