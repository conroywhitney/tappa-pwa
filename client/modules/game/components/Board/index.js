// @flow

import React from 'react'

import { SIZE } from '../../../../constants'
import Row from '../Row'

import styles from './styles.scss'

export default function Board({ board, onClick }) {
  const rows = []

  for (let row = 0; row < SIZE; row += 1) {
    rows.push(<Row board={board} onClick={onClick} row={row} />)
  }

  return (
    <div className={styles.container}>
      {rows}
    </div>
  )
}
