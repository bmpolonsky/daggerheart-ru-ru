# Collaborative Brief

## Initial Task
- Integrate high-quality Russian translations into existing Foundry module without changing structure.

## Feedback & Translation Constraints
1. Remove extra «+2/+3» etc. from experience names; UI already shows bonuses.
2. Strip `<a href>` and markdown `[]()` links from all texts.
3. Beastforms should not gain new descriptions beyond those used in the interface.
4. Preserve original item IDs (no article/case changes) for class equipment.
5. Provide alias handling for Camaraderie/Comaraderie and Partner(s)-in-Arms typos.
6. Map Elundrian Chain Mail ↔ Elundrian Chain Armor for Foundry compatibility.
7. Translate and format Bare Bones armor manually; ability must still map from API.
8. Ensure starting equipment overrides (rope, torch, supplies) are script-driven.
9. Weaponized wheelchairs and similar items should list feature text (not base stats).
10. Restore domain card actions instead of deleting them during updates.
11. Make sure adversary items align with ru features (fallback to ordering when IDs differ).

## Automation Requirements
- Script must be self-sufficient: clear tmp cache, download endpoints via `?lang=ru`, update translations, report missing entries.
- Always run/validate the script per iteration and inspect for blind spots.
- Maintain CLASS_ITEM overrides in code (reflect current translations).
- Flag remaining English strings from API and handle them appropriately.
- Remove redundant alias checks to avoid double processing.
- Prefer Node.js implementation for the automation script (legacy Python optional).
- Store API cache as `tmp_data/<endpoint>.json` fetched via `?lang=ru` only (no `.en`).
- Current JSON files were rolled back; next commits must rely on the updated automation.

## Outstanding Tasks
1. Finalize the Node.js automation script per above requirements.
2. Run the script end-to-end, validate diffs, and adjust logic as needed.
3. Confirm all overrides/aliases (Camaraderie, Partner-in-Arms, Elundrian armor, etc.) are handled inside the script.
4. Ensure all translation tweaks (experience bonuses, beastform descriptions, domain actions, adversary items, etc.) are preserved in the automated output.
