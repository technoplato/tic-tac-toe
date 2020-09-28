### Demo

### Run

Clone Repo
`yarn`
`yarn start`

### Assumptions / Constraints

I tried to avoid making any unnecessary assumptions other than following the standard rules of Tic Tac Toe. 

The constraints of the application in its current state are that gameplay is local multiplayer only. The code was written in a wy that will allow for these constraints to be lifted fairly easily in the future.

### Fun Potential Stretch Goals

- Add Multiplayer Support with Firebase
- Allow user to play on arbitrarily sized board
- Nice animations and styling
- Add local single player

### Areas for Improvement / Known Issues

- Get rid of all magic numbers
- Functional styling on web (web link removed as currently unusable)
- Could memoize `Square` component to avoid rerenders on each selection.
- Could be slightly more performant and flexible in determining winner. If this game was much more graphics intensive, perhaps that would be something to consider. This algorithm currently only works for 3x3 boards.  
- Remove hard coded height for board and resolve bug where board would grow by a few pixels as Squares were filled
