import React from 'react'

export default function Header({ title, desc }) {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__desc">{desc}</p>
    </header>
  )
}
