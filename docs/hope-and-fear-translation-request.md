# Запрос по синхронизации Hope & Fear

Привет! Мы обновляем модуль русской локализации Foundryborne до версии 2.9.1 и сверили официальный состав паков с живым API `daggerheart.su` 3 сентября 2026 года.

Переводы классов, подклассов, родословных, сообществ, доменов, трансформаций и звериных форм уже доступны через API. Ниже перечислен контент Foundryborne 2.9.1, которого в API пока нет и для которого нам нужны русские названия и тексты.

## Отдельно: источники карт домена

Все 21 карта домена Ужаса уже имеет актуальный русский текст, но в API всё ещё помечена источником `playtest-the-void`. Просим перевести их на актуальный источник Hope & Fear:

```text
voice-of-dread
umbral-veil
blighting-strike
hideous-retribution
siphon-essence
terrify
shared-trauma
withering-affliction
summon-horror
spectral-mist
dire-strike
wailing-leap
nether-flames
dread-touched
wall-of-hunger
dark-army
eldritch-flesh
savor-the-anguish
damnation
avatar-of-malice
invoke-torment
```

## Исправления в уже доступных переводах

В переводах Hope & Fear, которые API уже возвращает, есть несколько расхождений с прежними названиями и принятой терминологией модуля. Просим проверить и при необходимости обновить их на сайте:

```text
Eye of the Storm: Око бури → Глаз бури
Blighting Strike: Иссушающий удар → Увядающий удар
Damnation: Проклятие → Ужасная кара
Eldritch Flesh: Потусторонняя плоть → Потусторонняя форма
Hideous Retribution: Безобразное возмездие → Безобразная кара
Invoke Torment: Истязание → Призыв терзаний
Diminish My Foes: Ослабь моих недругов → Ослабить моих недругов
Pummeljoy: Наслаждение избиением → Ударное наслаждение
```

Также в следующих текстах потерялась `ё`, изменился регистр или используется не наша форма термина дистанции:

```text
Flicker Step, Hex, Witch's Charm, Close-Knit, Blighting Strike, Damnation,
Summon Horror, Wall of Hunger: Далекой → Далёкой

Gale Force, Ire of Pale Light, Menacing Reach:
Очень Далекой / Очень Далеко → Очень далёкой / Очень далеко

Eye of the Storm, Savor the Anguish, Crushing, Death Strike, Not Done Yet,
Patron's Fury, Patron's Mantle, Rugged: Тяжелый → Тяжёлый

Lunar Phases: Легкий → Лёгкий; шестерку → шестёрку
Draining Bane: Истощенным / Истощенной → Истощённым / Истощённой
Spectral Mist: твердые / пройдет → твёрдые / пройдёт
Gale Force: перенесет → перенесёт
Focus Cannon: Дальней дистанции → Далёкой дистанции
Marked for Death: побежден → побеждён
Terrify, Wall of Hunger, Stance Fighter: ее → её
```

В русских названиях также нужен обычный регистр: `Вошёл — вышел`, `Я и есть оружие`, `Метка смерти`, `Дар покровителя`, `Очарование ведьмы`, `Гильдия отравителей`, `Затронутый ужасом`. Ещё несколько названий требуют `ё`: `Сплочённые`, `Тёмная эгида`, `Надёжная`, `Окружён`.

## Противники: отсутствуют 135

```text
Ahuizotl
Archmage
Atototl
Banshee
Basilisk
Berserker Alpha
Berserker Initiate
Bugboar
Catrin
Centaur Warden
Cephilith Abomination
Cephilith Hatchling
Cephilith Novitiate
Cephilith Priest
Cephilith Titan
Chicken-foot Hut
Chimera
Cipactli
Cloud Titan
Common Ruffian
Crimson Lepus
Cryptimoth
Cursed Merfolk
Darkweave Crawler
Darkweave Queen
Darkweave Spinner
Darkweave Swarmlings
Deep Dweller
Demon Lord Berzug
Dire Pangolati
Doppelhound
Dragon Knight
Dragon Mother Mitera
Drake
Dullahan
Elephant
Elk
Entombed Cat Beast
Entombed Elite Guard
Entombed Empress
Entombed Necropriest
Entombed Skin Beetles
Entombed Stonemason
Falcon
Fellmounted Shadow King
Fire Titan Warlord
Fire Titan
Flock Of Feather Fiends
Fowlbear
Frost Titan
Fungispunj Sporeling
Fungispunj Sporophore
Gargantuan Sea Turtle
Gargantuan War Machine
Gargoyle
Ghastly Legion
Giant Octopus
Gobstalker
Griffin
Grimmling Warband
Guahalan Alebrujo
Guahalan Fang Lord
Guahalan Shifter
Guahalan Spirit Beast
Guahalan Spirit Singer
Hallowed Choir
Harbinger Of Death
Harbinger Of Famine
Harbinger Of Pestilence
Harbinger Of War
Harpy
Hill Titan
Hive Walker
Jack-o'-lantern
Kelpie
Lamia
Lamplight Beguiler
Landshark
Landshark Behemoth
Manticore
Masque Muerte
Mechanorb
Mountain Troll
Night Children
Octopus
Owl Witch
Pain Priest
Panther
Phantom
Phoenix
Plesiosaurus
Poltergeist
Rabble Mawb
Ravenous Mockery
Redcap Biters
Redcap Breaker
Redcap Butcher
Redcap Candlemaker
Redcap Skinner
Roc
Ruby Dragon
Rugaru
Rust Eater
Sandwyrm
Sawtoothed Gillbeast
Scarecrow
Severed Shadow
Shapeshifting Fiend
Shapeshifting Fiend Revealed
Soul-shattered Mage
Spellbound Armor
Sprite
Stone Titan
Storm Titan
Supreme Demiurge Adonix
Temporal Enforcer
Triceratops
Tyrannosaurus
Unicorn
Urco
Valdenhax
Vampire Bat Swarm
Vampire Lord
Viper
Viscera Sucker
Water Mother
Waxwork Creation
Whisper Wraith
Will-o'-the-wisps
Wyrmfiend
Wyrmlings
Wyvern
Xero The Castle Killer
Young Fire Dragon
Yufo
```

В API при этом остаются 10 противников, которых уже нет в официальном паке 2.9.1; возможно, их нужно пометить как устаревших или перенести в другой источник:

```text
Briarwhip
Forest Druid
Village Elder
Glitterwyrm
Icewaste Hunter
Malefacted Giant
Covetous Miners
Dire Wight
Idolizing Imp
Bladedance Jester
```

## Окружения: отсутствуют 28

```text
Abandoned Mine
Alchemist's Abandoned Workshop
Archmage's Tower
Astral Realm
Beach Day
Convergence, The City Of Portals
Corrupted Swamp
Crystal Wasteland
Cursed Graveyard
Deadly Dungeon
Dragon's Lair
Duel
Grand Feast
Heist
Hold The Line
Local Festival
Masquerade Ball
Megastorm
Moon Kingdom
Ocean Voyage
Raiding Party
Realm Of The Dead
Sunken Citadel
Time Court
Upscale Casino
Vast Desert
Volcanic Eruption
Witch's Hut
```

## Перенесённый контент The Void, для которого нужен актуальный текст

Для следующих 16 противников и 4 окружений у нас есть старый русский текст The Void, перепривязанный к новым ID. Однако механика Hope & Fear местами изменилась, поэтому просим актуальные переводы целиком, а не только подтверждение старых формулировок.

```text
Cephilith Priest
Chimera
Doppelhound
Dragon Knight
Fellmounted Shadow King
Gargoyle
Gobstalker
Hallowed Choir
Lamplight Beguiler
Mountain Troll
Owl Witch
Rabble Mawb
Redcap Butcher
Redcap Candlemaker
Whisper Wraith
Xero The Castle Killer

Convergence, The City Of Portals
Crystal Wasteland
Grand Feast
Heist
```

Внутри них точно нет старого перевода для следующих новых или переработанных свойств:

```text
Comeback
Fellmount
Unliving
Petrifying Slash
Tentacle Rays
Leech Lick
Gulp
Voice Mimicry
Greater Specter
```

## Оружие: отсутствует 120

```text
Adder's Fang
Advanced Arcane Rifle
Advanced Brass Knuckles
Advanced Brightsword
Advanced Casting Dagger
Advanced Enchanted Chakram
Advanced Fighting Cloak
Advanced Focus Runes
Advanced Hatchet
Advanced Katana
Advanced Offhand Brass Knuckles
Advanced Rope Dart
Advanced Rune Shield
Advanced Runelock Pistol
Advanced Scimitar
Advanced Shadowblade
Advanced Throwing Knives
Advanced Twisted Dagger
Advanced Whipsword
Arc Wand
Arcane Rifle
Arquebus
Bec de Corbin
Black Powder Serpentine
Blackblood Tendril
Bladed Fan
Bladed Star
Blitz Hammer
Brass Knuckles
Brightsword
Cane Sword
Casting Dagger
Chained Scythe
Clockwork Crossbow
Collapsible Baton
Crystal Spear
Cyrurgien's Scalpel
Demon's Edge
Displacement Razor
Echo Blade
Eldritch Vambrace
Enchanted Chakram
Enchanted Lute
Enchanted Shillelagh
Ethereal Zweihänder
Fighting Cloak
Focus Runes
Fury Gem
Gravity Arbalest
Gunblade
Hatchet
Improved Arcane Rifle
Improved Brass Knuckles
Improved Brightsword
Improved Casting Dagger
Improved Enchanted Chakram
Improved Fighting Cloak
Improved Focus Runes
Improved Hatchet
Improved Katana
Improved Offhand Brass Knuckles
Improved Rope Dart
Improved Rune Shield
Improved Runelock Pistol
Improved Scimitar
Improved Shadowblade
Improved Throwing Knives
Improved Twisted Dagger
Improved Whipsword
Infinite Staff
Javelins
Katana
Lance
Legendary Arcane Rifle
Legendary Brass Knuckles
Legendary Brightsword
Legendary Casting Dagger
Legendary Enchanted Chakram
Legendary Fighting Cloak
Legendary Focus Runes
Legendary Hatchet
Legendary Katana
Legendary Offhand Brass Knuckles
Legendary Rope Dart
Legendary Rune Shield
Legendary Runelock Pistol
Legendary Scimitar
Legendary Shadowblade
Legendary Throwing Knives
Legendary Twisted Dagger
Legendary Whipsword
Möbius Orb
Offhand Brass Knuckles
Platinum Estoc
Razor Wire
Rime Scepter
Rocket Maul
Rope Dart
Rune Shield
Runelock Pistol
Scimitar
Segmented Staff
Severed Dragon Claw
Shadowblade
Singing Sword
Soldier's Pike
Soul Chain
Spellbound Bangles
Splintershaft Bow
Staff of Augma
Starmetal Blade
Storm God's Greataxe
Throwing Knives
Tinker's Hammer
Twisted Dagger
Void Needle
Vorpal Shard
War Dart
War Pick
Whipsword
```

## Броня: отсутствует 35

```text
Advanced Banded Armor
Advanced Brigandine Armor
Advanced Mage Robes
Advanced Scale Mail Armor
Astral Raiment
Banded Armor
Bloodstone Plate Armor
Brigandine Armor
Circle-Forged Dreadplate
Cloverweave Cloak
Darkweave Shroud
Deep-Forged Coral Armor
Enchanter's Robes
Gilded Sunplate
Godbound Laminar
Granminster's Finery
Hallowed Heroplate
Hawkguard's Mantle
Improved Banded Armor
Improved Brigandine Armor
Improved Mage Robes
Improved Scale Mail Armor
Legendary Banded Armor
Legendary Brigandine Armor
Legendary Mage Robes
Legendary Scale Mail Armor
Mage Robes
Resonant Harness
Rune-Forged Exosuit
Scale Mail Armor
Skywarden's Lamellar
Spidersilk Tunic
Stormthread Habit
Trollhide Cuirass
Wyrdwood Splint Armor
```

## Предметы: отсутствует 61

```text
Augur's Relic
Ball Bearings
Blackwing Quill
Boots of Supple Mystique
Box of Dragon Dust
Brooch
Caltrops
Cheater's Coin
Collapsible Pole
Collar of Ascendancy
Communion Relic
Crucible Frames
Dagginae's Obsidian Slate
Eclipse Coin
Elven Spyglass
Enchanter's Loupe
Escher's Mirrorball
Force Disc
Furball Bag
Gadiman's Backpack
Ghoulskin Gloves
Gloves of Alacrity
Gourmet Granules
Grapnel
Gravewarden's Bell
Hero's Helm
Hollowbark Horn
Insomniac's Periapt
Iron Dagger Pendant
Iron Veil
Kingfisher's Net
Knockback Bracelets
Loaded Dice
Mandragorian Torch
Map of Revelation
Molepaw Mittens
Namer's Oracle
Nighthawker's Ring
Phobophage's Circlet
Portal Frames
Quillshawl
Reliquary of the Sightless Saint
Returning Ring
Rings of Alliance
Rings of Camaraderie
Rings of Friendship
Self-Tying Rope
Silee's Folding Knife
Sorcerer's Hat
Soul-Twin Circlets
Temporal Sanctuary
Thief's Compass
Timekeeper's Pendant
Titan's Girdle
Traveler's Bell
Two-Faced Aegis Brooch
Warp Pendant
Whisperstep Anklet
Wildrider's Saddle
Windup Toy
Zephyr's Jar
```

## Расходники: отсутствует 61

```text
Arcticite Shard
Berserker's Brew
Bundle of Spiderlegs
Cacophonous Concoction
Chimeric Saliva
Ciscan Fog Bottle
Cockerel Claw Tea
Concoction
Cupbearer's Bezoar
Deathseer's Powder
Demiurge's Draught
Displacement Token
Drakemantle
Emberite Shard
Featherstep Potion
Formoid Serum
Fulgurite Shard
Gambler's Fallacy
Glowmoss Mushroom
Godling's Pomelo
Gossip Flower
Gravity Bomb
Green Ooze Oil
Instant Camp
Invisibility Potion
Iridian Dust
Lionheart Tonic
Lyrebird Lozenge
Magic-User's Malison
Mask of the Echoed Self
Mesmer's Tonic
Midas Flask
Mnemonic Potion
Moonlight Orb
Mossmantle Potion
Necroprancer's Bell
Night Hag's Dust
Nightmare Mead
Packet of Space Dust
Phial of Deep Ink
Pipeweed
Potion of Vigilance
Psychopomp's Shroud
Quintessential Severant
Red Ooze Oil
Salamander Salve
Self-Sewing Thread
Slayer's Salt
Snakeskin Spirit
Snapthorn Seed
Sprite Bottle
Staff of Reversal
Stake of Abjuration
Steelskin Salve
Stonemason's Fortune
Sunlight Orb
Tears of the Undying Hero
Verglasian Seed
Vial of Featherfall
Warding Candle
Yakamel Milk
```

Итого в живом API отсутствуют 440 сущностей из актуальных официальных паков Foundryborne 2.9.1: 135 противников, 28 окружений, 120 единиц оружия, 35 комплектов брони, 61 предмет и 61 расходник.
