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

### Frontend Classes (yuml)

```yuml
// {type:class}
// {direction:topDown}
// {generate:true}

[note: Frontend Bank Wallet Classes{bg:cornsilk}]
[User]<&gt;1-projects 0..*&gt;[Job]
[User]<&gt;1-services 0..*&gt;[Skill]
[Job]++*-*&gt;[Task]
[Job]-1&gt;[Top Social Solution]
[Job]*-*&gt;[Product|UNSPSC_Code|price()|rc_price()]
[Skill]-1&gt;[Task]
[Skill]*-*&gt;[Product|UNSPSC_Code|price()|rc_price()]
[Category Interest Tag]<-&gt;[Product]
[Top Social Solution]^[Social Network]
[Top Social Solution]^[Public]
[note: Top Social Solution = Fair Social Engineered Solution{bg:cornsilk}]
```
