import * as countableDetection from "./detect_countable.js";
import * as patternReconginition from "./regexps_detection.js";
import * as exceptions from "./list_exceptions.js";

function isSingular(input: string): Boolean {
	input = input.split(/\W/)[0].toLowerCase().trim();
	// dictionary detections
	if (countableDetection.isNotCountable(input)) return true;
	else if (exceptions.singular2plural[input]) return true;
	else if (exceptions.plural2singular[input]) return false;
	// pattern detection
	for (let i = 0; i < patternReconginition.singularPatterns.length; i++) {
		if (patternReconginition.singularPatterns[i].test(input)) return true;
	}
	for (let i = 0; i < patternReconginition.pluralPatterns.length; i++) {
		if (patternReconginition.pluralPatterns[i].test(input)) return false;
	}
	return true;
}

function isPlural(input: string): Boolean {
	input = input.split(/\W/)[0].toLowerCase().trim();
	// dictionary detections
	if (countableDetection.isNotCountable(input)) return true;
	return !isSingular(input);
}

export { isSingular, isPlural };

