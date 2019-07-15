# Your social capital wallet

Next gen blockchain wallet for the ai economy skill coins

## Web wallet setup

```
npm install
```

### Live dev compile & reloads

```
npm run serve
```

### Compiles and minifies for ops

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize Vue configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## For Developers

```yuml
// {type:class}
// {direction:topDown}
// {generate:true}

[note: Frontend Bank Wallet Classes{bg:cornsilk}]
[User]<>1-projects 0..*>[Job]
[User]<>1-services 0..*>[Skill]
[Job]++*-*>[Task]
[Job]-1>[Top Social Solution]
[Job]*-*>[Product|UNSPSC_Code|price()|rc_price()]
[Skill]-1>[Task]
[Skill]*-*>[Product|UNSPSC_Code|price()|rc_price()]
[Category Interest Tag]<->[Product]
[Top Social Solution]^[Social Network]
[Top Social Solution]^[Public]
[note: Top Social Solution = Fair Social Engineered Solution{bg:cornsilk}]
```
