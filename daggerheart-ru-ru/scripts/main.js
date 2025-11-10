// Регистрируем модуль перевода и все кастомные конвертеры после инициализации Babele.
Hooks.once('babele.init', (babele) => {
  babele.register({
    module: 'daggerheart-ru-ru',
    lang: 'ru',
    dir: 'translations'
  });

  Babele.get().registerConverters({
    // Переносит имена/описания предметов противника и проставляет описания действиям.
    "toAdversariesItems": (origItems, transItems) => {
      for (item of origItems) {
        id = item._id;
        if (id in transItems){
          item.name = transItems[id]?.name;
          item.system.description = transItems[id]?.description;

          // actions if exist
          for (actionId in item.system.actions){
            item.system.actions[actionId].description = transItems[id]?.description;
          }
        }
      }
      return origItems;
    },

    // Подменяет описания action-узлов переводами из JSON.
    "toActions": (origActions, transActions) => {
      for (actionId in origActions) {
        origActions[actionId]["description"] = transActions[actionId];
      }
      return origActions;
    },

    // Проставляет список преимуществ звероформы в value поля объекта по порядку.
    "toAdvantageList": (origObj, values) => {
      if (!Array.isArray(values)) {
        return origObj;
      }
      let index = 0;
      for (const id of Object.keys(origObj)) {
        const node = origObj[id];
        if (!node || typeof node.value !== "string") continue;
        const replacement = values[index];
        if (typeof replacement === "string" && replacement.trim()) {
          node.value = replacement.trim();
        }
        index += 1;
      }
      return origObj;
    }
  });
});
