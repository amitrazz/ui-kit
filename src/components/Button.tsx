import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      {children}
    </Button>
  )
}
