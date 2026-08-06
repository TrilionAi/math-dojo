import type { Belt } from "../types";
import { ninjaWhiteBelt } from "./ninja/white";
import { ninjaBlueBelt } from "./ninja/blue";
import { ninjaPurpleBelt } from "./ninja/purple";
import { ninjaBrownBelt } from "./ninja/brown";

/** The Ninja journey: the same belts, refought as fixed word problems. Each
 * belt unlocks when its normal counterpart is earned (White Ninja is free
 * from the start, as a taste of the mode). */
export const ninjaBelts: Belt[] = [ninjaWhiteBelt, ninjaBlueBelt, ninjaPurpleBelt, ninjaBrownBelt];
