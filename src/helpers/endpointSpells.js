// //endpointHelpers.js
function CheckSpell(spell) {
    if (!spell || typeof spell !== 'object') {
      return false;
    }
  
    const {
      spell_name,
      school_of_magic,
      spell_level,
      components
    } = spell;
  
    if (!CheckSpellName(spell_name)) {
      return false;
    }
  
    if (!school_of_magic || typeof school_of_magic !== 'string') {
      return false;
    }
  
    if (!spell_level || typeof spell_level !== 'number') {
      return false;
    }
  
    if (!components || typeof components !== 'string') {
      return false;
    }

    return true;
  }
  
  function CheckSpellName(name) {
    if (name == null || 
      name.length <= 1 || 
      typeof(name) != "string" || 
      name.length > 20
    ) {
      return false;
    }
    return true;
  }
  
  module.exports = {
    CheckSpell,
    CheckSpellName
  };
  