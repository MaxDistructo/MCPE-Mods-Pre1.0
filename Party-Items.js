//Party Items//
//By: MaxDistructo//
//198-242 is block openings//

var setItem =  ModPE.setItem
var setCraft =  Item.addShapedRecipe
var setBlock = Block.defineBlock
var setArmor = Entity.setArmor
var setExplosion = Block.setExplosionResistance
var setRedstone = Block.setRedstoneConsumer //Block.setRedstoneConsumer(Block ID, True/False)
var setLight = Block.setLightLevel

setBlock(208,"Party Floor (Black)",[["reactor_core",2],["wool", 15],["reactor_core",2],["reactor_core",2], ["reactor_core",2], ["reactor_core",2]],198,true,0)
setBlock(199,"Party Floor (White)",[["reactor_core",2],["wool", 0],["reactor_core",2],["reactor_core",2], ["reactor_core",2], ["reactor_core",2]],198,true,0)
setBlock(200,"Party Floor (Blue)",[["reactor_core",2],["wool", 11],["reactor_core",2],["reactor_core",2], ["reactor_core",2], ["reactor_core",2]],198,true,0)
setBlock(201,"Party Floor (Light Blue)",[["reactor_core",2],["wool", 3],["reactor_core",2],["reactor_core",2], ["reactor_core",2], ["reactor_core",2]],198,true,0)
setBlock(201,"Party Floor (Magenta)",[["reactor_core",2],["wool", 2],["reactor_core",2],["reactor_core",2], ["reactor_core",2], ["reactor_core",2]],198,true,0)
setBlock(202,"Party Floor (Purple)",[["reactor_core",2],["wool", 10],["reactor_core",2],["reactor_core",2], ["reactor_core",2], ["reactor_core",2]],198,true,0)
setBlock(203,"Party Floor (Red)",[["reactor_core",2],["wool", 14],["reactor_core",2],["reactor_core",2], ["reactor_core",2], ["reactor_core",2]],198,true,0)
setBlock(204,"Party Floor (Pink)",[["reactor_core",2],["wool", 6],["reactor_core",2],["reactor_core",2], ["reactor_core",2], ["reactor_core",2]],198,true,0)
setBlock(205,"Party Floor (Orange)",[["reactor_core",2],["wool", 1],["reactor_core",2],["reactor_core",2], ["reactor_core",2], ["reactor_core",2]],198,true,0)
setBlock(206,"Party Floor (Yellow)",[["reactor_core",2],["wool", 4],["reactor_core",2],["reactor_core",2], ["reactor_core",2], ["reactor_core",2]],198,true,0)
setBlock(207,"Party Floor (Lime Green)",[["reactor_core",2],["wool", 5],["reactor_core",2],["reactor_core",2], ["reactor_core",2], ["reactor_core",2]],198,true,0)

setRedstone(208,true)
setRedstone(199,true)
setRedstone(200,true)
setRedstone(201,true)
setRedstone(202,true)
setRedstone(203,true)
setRedstone(204,true)
setRedstone(205,true)
setRedstone(206,true)
setRedstone(207,true)

setLight(199,15)
setLight(200,15)
setLight(201,15)
setLight(202,15)
setLight(203,15)
setLight(204,15)
setLight(205,15)
setLight(206,15)
setLight(207,15)
setLight(208,15)

function redstoneUpdateHook(x,y,z,newCurrent,boolean,blockId,blockData){
  if(newCurrent=true&&blockId=208)
  var newId= function getRandomArbitrary(198, 207) {
  return Math.random() * 9 + 198;
}
  Level.setTile(x,y,z,newId,0)
}
