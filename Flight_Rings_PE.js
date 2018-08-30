//Nether Star and Flight Ring Mod//
//***By:MaxDistructo***//
function newLevel() { clientMessage(ChatColor.Red+"Flight Ring Mod By: MaxDistructo Loaded"); }
ModPE.setItem(399,"nether_star",0,"Nether Star",16);
Item.defineArmor(1400,"flight_ring_feather",0,"Flight Ring:Feather","mob/flight_ring_feather_armor.png",1,10000000,ArmorType.chestplate)
Item.defineArmor(1401,"flight_ring_feather_leather",0,"Leather Plated Flight Ring:Feather","mob/flight_ring_feather_leather.png",3,10000000,ArmorType.chestplate)
Item.defineArmor(1402,"flight_ring_feather_gold",0,"Gold Plated Flight Ring:Feather","mob/flight_ring_feather_gold.png",5,10000000,ArmorType.chestplate)
Item.defineArmor(1403,"flight_ring_feather_chain",0,"Chain Plated Flight Ring:Feather","mob/flight_ring_feather_chain.png",5,10000000,ArmorType.chestplate)
Item.defineArmor(1404,"flight_ring_feather_iron",0,"Iron Plated Flight Ring:Feather","mob/flight_ring_feather_iron.png",6,10000000,ArmorType.chestplate)
Item.defineArmor(1405,"flight_ring_feather_diamond",0,"Diamond Plated Flight Ring:Feather","mob/flight_ring_feather_diamond.png",8,10000000,ArmorType.chestplate)
Item.defineArmor(1406,"flight_ring_gold",0,"Flight Ring:Gold","mob/flight_ring_gold_armor.png",1,10000000,ArmorType.chestplate)
Item.defineArmor(1407,"flight_ring_gold_leather",0,"Leather Plated Flight Ring:Gold","mob/flight_ring_gold_leather",3,10000000,ArmorType.chestplate)
Item.defineArmor(1408,"flight_ring_gold_gold",0,"Gold Plated Flight Ring:Gold","mob/flight_ring_gold_gold.png",5,10000000,ArmorType.chestplate)
Item.defineArmor(1409,"flight_ring_gold_chain",0,"Chain Plated Flight Ring:Gold","mob/flight_ring_gold_chain.png",5,10000000,ArmorType.chestplate)
Item.defineArmor(1410,"flight_ring_gold_iron",0,"Iron Plated Flight Ring:Gold", "mob/flight_ring_gold_iron.png",6,10000000,ArmorType.chestplate)
Item.defineArmor(1411,"flight_ring_gold_diamond",0,"Diamond Plated Flight Ring:Gold","mob/flight_ring_gold_diamond.png",8,ArmorType.chestplate)
Item.addShapedRecipe(399,1,0,[" a ","aba"," a "],["a",155,0,"b",264,0]);
Item.addShapedRecipe(1400,1,0,["fif", "dnd", "fif"],["f", 288,0,"i",42,0,"d",264,0,"n",399,0]);
Item.addShapedRecipe(1406,1,0,["fif", "dnd", "fif"],["f", 288,0,"i",42,0,"d",264,0,"n",399,0])
{if (Player.getArmorSlot(2) == 1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411)
{
Entity.addEffect(getPlayerEnt(), MobEffect.jump, 500000*20, 0, false, true) 
Player.setCanFly(true)}}

