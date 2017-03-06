export const DIFFICULTY = {
  min: 1000,
  max: 4000
}

export const PLAYERS = {
  blank: -1,
  me: 0,
  opponent: 1
}

export const STATUS = {
  inProgress: 'inProgress',
  lost: 'lost',
  won: 'won'
}

export const COUNTDOWN = {
  min: 0,
  max: 10000
}

export const WIDTH = 800

export const SIZE = 4

export const QTY = SIZE * SIZE

export const CELL_PERCENT = 1 / SIZE

export const CELL_SIZE = Math.floor(WIDTH * CELL_PERCENT)

export const CELL_PADDING = Math.floor(CELL_SIZE * 0.05)

export const BORDER_RADIUS = CELL_PADDING * 2

export const TILE_SIZE = CELL_SIZE - CELL_PADDING * 2
