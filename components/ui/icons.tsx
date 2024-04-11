'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      version="1.1" 
      role="img"
      viewBox="0.00 0.00 200.00 200.00"
      className={cn('h-4 w-4', className)}
      {...props}
    >
    <path fill="#bc3d5e" d="
      M 52.76 160.99
      A 0.33 0.33 0.0 0 0 52.80 160.45
      C 19.86 133.07 13.99 84.34 41.48 50.89
      C 62.19 25.68 95.19 15.94 126.33 25.94
      C 151.52 34.03 171.45 55.52 177.64 81.27
      C 188.39 126.00 158.91 170.73 112.96 177.13
      Q 106.21 178.07 93.24 178.02
      Q 58.26 177.89 25.42 177.97
      Q 23.98 177.97 25.22 177.24
      L 52.76 160.99
      Z
      M 106.61 107.10
      C 129.59 100.59 134.14 70.37 113.16 58.22
      C 103.48 52.62 91.33 53.82 82.74 61.05
      Q 74.90 67.64 73.44 78.75
      C 72.01 89.64 85.34 89.97 85.46 80.99
      C 85.68 64.63 109.14 61.38 113.90 77.10
      C 116.88 86.96 109.71 95.47 99.72 95.94
      C 96.39 96.10 93.96 98.72 93.97 102.04
      Q 93.99 111.32 93.96 120.18
      C 93.93 128.29 106.17 128.37 106.05 119.78
      Q 105.97 113.31 106.03 107.86
      Q 106.03 107.27 106.61 107.10
      Z
      M 106.24 139.04
      A 6.24 6.24 0.0 0 0 100.00 132.80
      A 6.24 6.24 0.0 0 0 93.76 139.04
      A 6.24 6.24 0.0 0 0 100.00 145.28
      A 6.24 6.24 0.0 0 0 106.24 139.04
      Z"
    />
    </svg>
  )
}

export { IconLogo }
