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

### Frontend Classes (yUML test - to replace with image)

// {direction:topDown}

![](http://yuml.me/diagram/scruffy/class/[User]<>1-projects0.._>[Job] 'yUML')

![](http://yuml.me/diagram/scruffy/class/[User]<>1-services0.._>[Skill] 'yUML')

![](http://yuml.me/diagram/scruffy/class/[Job]++*-*>[Task] 'yUML')

![](http://yuml.me/diagram/scruffy/class/[Job]-1>[TopSolution] 'yUML')

![](http://yuml.me/diagram/scruffy/class/[Job]<-1>[Product] 'yUML')

![](http://yuml.me/diagram/scruffy/class/[Skill]-1>[Task] 'yUML')

![](http://yuml.me/diagram/scruffy/class/[InterestTag]<->[Product] 'yUML')

![](http://yuml.me/diagram/scruffy/class/[TopSolution]^[SocialNetwork] 'yUML')

![](http://yuml.me/diagram/scruffy/class/[TopSolution]^[Public] 'yUML')
