import * as adjective from "./adjective/transform.js";
import * as verb from "./verb/transform.js";
import * as noun from "./noun/transform.js";
import * as nounDetection from "./noun/detect_singular_plural.js";
import * as countableDetection from "./noun/detect_countable.js";
import * as verbsList from "./verb/solve_lookup.js";
import nonCountables from "./noun/list_uncountable.js";

export class Inflectors {
	
	word: string;

	constructor(word: string) {
		this.word = (word||"").toLowerCase();
	}

	public comparative = ():string => adjective.comparative(this.word);
	public superlative = ():string => adjective.superlative(this.word);

	public conjugate = (to:string):string => verb.conjugate(this.word,to);
	public toPresent = ():string => verb.toPresent(this.word);
	public toPast = ():string => verb.toPast(this.word);
	public toPastParticiple = ():string => verb.toPastParticiple(this.word);
	public toPresentS = ():string => verb.toPresentS(this.word);
	public toGerund = ():string => verb.toGerund(this.word);

	public toPlural = ():string => noun.toPlural(this.word);
	public toSingular = ():string => noun.toSingular(this.word);
	public isSingular = ():Boolean => nounDetection.isSingular(this.word);
	public isPlural = ():Boolean => nounDetection.isPlural(this.word);
	public isCountable = ():Boolean => countableDetection.isCountable(this.word);
	public isNotCountable = ():Boolean => countableDetection.isNotCountable(this.word);
}

const infinitives = verbsList.VBP;
export {Inflectors as Inflector, infinitives, nonCountables};