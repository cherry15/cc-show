import React from 'react'
import './custom-button.css'

export interface IButtonProps {
  onClick(event: React.MouseEvent<HTMLInputElement>): void
  buttonStyle?: 'default' | 'cancel' | 'delete' | 'ok'
  type?: string
  aria?: string
  value?: string
  disabled?: boolean
}

const CustomButton = ({ onClick, buttonStyle = 'default', type = 'button', aria, value, disabled }: IButtonProps) => {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={`button ${buttonStyle}`}
      aria-label={aria}
      disabled={disabled}
    />
  )
}

export default CustomButton
