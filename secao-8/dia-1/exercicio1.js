const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damDragon = () => {
  const randomDamage = Math.floor(Math.random() * (dragon.strength + 1));
  return randomDamage < 15 ? 15 : randomDamage;
}
const damWarrior = () =>{
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const randomDamage = Math.floor(Math.random() * (maxDamage + 1));
  return randomDamage > warrior.strength ? randomDamage : warrior.strength;
}
const damMage = () => {
  const randomDamage = Math.floor(Math.random() * (mage.intelligence * 2));
  if(mage.mana <= 15) return console.log('Não possui mana suficiente');
  return randomDamage < mage.intelligence ? mage.intelligence : randomDamage
}
const mMTurn = () => {
  mage.mana - 15
}

const gameActions = {

};