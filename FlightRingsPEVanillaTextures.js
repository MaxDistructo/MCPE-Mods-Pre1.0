//Nether Star and Flight Ring Mod//
//***By:MaxDistructo***//
function newLevel() {clientMessage(ChatColor.Red+"Flight Ring Mod By: MaxDistructo Loaded"); }
ModPE.setItem(399,"nether_star",0,"Nether Star",16);
Item.defineArmor(1400,"record_13",0,"Flight Ring:Feather","armor/chain-1.png",1,10000000,ArmorType.chestplate)
Item.defineArmor(1401,"record_13",0,"Leather Plated Flight Ring:Feather","armor/leather-1.png",3,10000000,ArmorType.chestplate)
Item.defineArmor(1402,"record_13",0,"Gold Plated Flight Ring:Feather","armor/gold-1.png",5,10000000,ArmorType.chestplate)
Item.defineArmor(1403,"record_13",0,"Chain Plated Flight Ring:Feather","armor/chain-1.png",5,10000000,ArmorType.chestplate)
Item.defineArmor(1404,"record_13",0,"Iron Plated Flight Ring:Feather","armor/iron-1.png",6,10000000,ArmorType.chestplate)
Item.defineArmor(1405,"record_13",0,"Diamond Plated Flight Ring:Feather","armor/diamond-1.png",8,10000000,ArmorType.chestplate)
Item.defineArmor(1406,"record_13",0,"Flight Ring:Gold","armor/chain-1.png",1,10000000,ArmorType.chestplate)
Item.defineArmor(1407,"record_13",0,"Leather Plated Flight Ring:Gold","armor/leather-1.png",3,10000000,ArmorType.chestplate)
Item.defineArmor(1408,"record_13",0,"Gold Plated Flight Ring:Gold","armor/gold-1.png",5,10000000,ArmorType.chestplate)
Item.defineArmor(1409,"record_13",0,"Chain Plated Flight Ring:Gold","armor/chain-1.png",5,10000000,ArmorType.chestplate)
Item.defineArmor(1410,"record_13",0,"Iron Plated Flight Ring:Gold", "armor/iron-1.png",6,10000000,ArmorType.chestplate)
Item.defineArmor(1411,"record_13",0,"Diamond Plated Flight Ring:Gold","armor/diamond-1.png",8,ArmorType.chestplate)
Item.addShapedRecipe(399,1,0,[" a ","aba"," a "],["a",155,0,"b",264,0]);
Item.addShapedRecipe(1400,1,0,["fif", "dnd", "fif"],["f", 288,0,"i",42,0,"d",264,0,"n",399,0]);
Item.addShapedRecipe(1406,1,0,["fif", "dnd", "fif"],["f", 288,0,"i",42,0,"d",264,0,"n",399,0]);
{if (Player.getArmorSlot(2) == 1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411)
{
Entity.addEffect(getPlayerEnt(),MobEffect.jump,20*20, 0, false, true) 
Player.setCanFly(true)
} 
}
