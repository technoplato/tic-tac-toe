### Demo
![renameme](https://user-images.githubusercontent.com/6922904/94445492-7a531a00-0175-11eb-9828-f4979ae930e0.gif)

### Clown Version (styling didn't translate well from Native --> Expo Web)
[Play on Web Now!](https://zealous-wright-c508cd.netlify.app/)

### Run

```
git clone https://github.com/technoplato/tic-tac-toe.git
cd tic-tac-toe
yarn
yarn start
```

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
- Functional styling on web (web link ~removed as currently unusable~ added back for comical effect)
- Could memoize `Square` component to avoid rerenders on each selection.
- Could be slightly more performant and flexible in determining winner. If this game was much more graphics intensive, perhaps that would be something to consider. This algorithm currently only works for 3x3 boards.  
- Remove hard coded height for board and resolve bug where board would grow by a few pixels as Squares were filled
