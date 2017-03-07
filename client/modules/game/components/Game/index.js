// @flow

import React from 'react'
import { pick } from 'ramda'

import SinglePlayer from '../SinglePlayer/container'

export default function Game(props) {
  const singlePlayerProps = pick(['board', 'status', 'resetGame'])

  return (
    <div>
      <SinglePlayer {...singlePlayerProps(props)} />
    </div>
  )
}
