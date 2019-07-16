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

### Frontend Classes (yUML test)

![](http://yuml.me/diagram/scruffy/class/[User]<>1-projects 0.._>[Job] 'yUML')
![](http://yuml.me/diagram/scruffy/class/[User]<>1-services 0.._>[Skill] 'yUML')
![](http://yuml.me/diagram/scruffy/class/[Job]++*-*>[Task] 'yUML')
![](http://yuml.me/diagram/scruffy/class/[Job]-1>[Top Social Solution] 'yUML')
![](<http://yuml.me/diagram/scruffy/class/[Job]*-*>[Product|UNSPSC_Code|price()|rc_price()]> 'yUML')
![](http://yuml.me/diagram/scruffy/class/[Skill]-1>[Task] 'yUML')
![](<http://yuml.me/diagram/scruffy/class/[Skill]*-*>[Product|UNSPSC_Code|price()|rc_price()]> 'yUML')
![](http://yuml.me/diagram/scruffy/class/[Category Interest Tag]<->[Product] 'yUML')
![](http://yuml.me/diagram/scruffy/class/[Top Social Solution]^[Social Network] 'yUML')
![](http://yuml.me/diagram/scruffy/class/[Top Social Solution]^[Public] 'yUML')
