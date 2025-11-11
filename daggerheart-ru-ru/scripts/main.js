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
      if (!Array.isArray(origItems) || !transItems) {
        return origItems;
      }
      for (const item of origItems) {
        if (!item) continue;
        const translation = transItems[item._id];
        if (!translation) continue;
        if (translation.name) {
          item.name = translation.name;
        }
        if (!item.system) continue;
        const desc = translation.description;
        if (desc) {
          item.system.description = desc;
          if (item.system.actions) {
            for (const actionId of Object.keys(item.system.actions)) {
              const action = item.system.actions[actionId];
              if (action) action.description = desc;
            }
          }
        }
      }
      return origItems;
    },

    // Подменяет описания action-узлов переводами из JSON (строковый формат).
    "toActions": (origActions, transActions) => {
      if (!origActions || !transActions) {
        return origActions;
      }
      for (const actionId of Object.keys(origActions)) {
        const translated = transActions[actionId];
        if (!translated) continue;
        const action = origActions[actionId];
        if (!action) continue;
        if (typeof translated === "string") {
          action.description = translated;
        } else if (typeof translated === "object") {
          const { name, description } = translated;
          if (name) action.name = name;
          if (description) action.description = description;
        }
      }
      return origActions;
    },

    // Поддерживает объектную структуру action-переводов с полями name/description.
    "toActionsObj": (origActions, transActions) => {
      if (!origActions || !transActions) {
        return origActions;
      }
      for (const actionId of Object.keys(origActions)) {
        const translated = transActions[actionId];
        if (!translated) continue;
        const action = origActions[actionId];
        if (!action) continue;
        if (typeof translated === "string") {
          action.description = translated;
        } else if (typeof translated === "object") {
          const { name, description } = translated;
          if (name) action.name = name;
          if (description) action.description = description;
        }
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
