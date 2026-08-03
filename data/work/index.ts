import type { WorkProject } from "@/types/work";
import { sw01 } from "./sw01-afm";
import { sw02 } from "./sw02-biosensors";
import { sw03 } from "./sw03-thermoelectric";
import { sw04 } from "./sw04-characterisation";
import { sw05 } from "./sw05-membranes";
import { sw06 } from "./sw06-data-software";

export const workProjects: WorkProject[] = [sw01, sw02, sw03, sw04, sw05, sw06].sort((a, b) => a.order - b.order);

export const workBySlug = new Map(workProjects.map((project) => [project.slug, project]));

export const legacyWorkRedirects: Record<string, string> = {
  "afm-force-curve-analysis": "afm-nanomechanics-extremotolerant-bacteria",
  "materials-characterization-rd": "advanced-materials-characterisation",
  "thermoelectric-materials": "thermoelectric-materials-metrology",
  "mixed-matrix-membranes": "mixed-matrix-membranes-gas-separation",
  "analytics-training-projects": "independent-data-software-projects"
};
