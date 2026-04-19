// priority: 0

ServerEvents.recipes(event => {
  // first recipe test - rotten flesh x4 to leather x1
  
  event.shapeless('minecraft:leather', [
    '4x minecraft:rotten_flesh'
  ]).id('drxmc:test/leather_from_rotten_flesh')
})
