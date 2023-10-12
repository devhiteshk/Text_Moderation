export declare class Filter {
    list: string[];
    exclude: string[];
    splitRegex: RegExp;
    placeHolder: string;
    regex: RegExp;
    replaceRegex: RegExp;
    /**
     * Filter constructor.
     * @constructor
     * @param {object} options - Filter instance options
     * @param {boolean} options.emptyList - Instantiate filter with no blacklist
     * @param {array} options.list - Instantiate filter with a custom list
     * @param {string} options.placeHolder - Character used to replace profane words.
     * @param {string} options.regex - Regular expression used to sanitize words before comparing them to the blacklist.
     * @param {string} options.replaceRegex - Regular expression used to replace profane words with placeHolder.
     * @param {string} options.splitRegex - Regular expression used to split a string into words.
     */
    constructor(options?: {
        emptyList?: boolean;
        list?: string[];
        exclude?: string[];
        placeHolder?: string;
        regex?: RegExp;
        replaceRegex?: RegExp;
        splitRegex?: RegExp;
    });
    /**
     * Determine if a string contains profane language.
     * @param {string} string - String to evaluate for profanity.
     */
    isProfane(string: string): boolean;
    /**
     * Replace a word with placeHolder characters;
     * @param {string} string - String to replace.
     */
    replaceWord(string: string): string;
    /**
     * Evaluate a string for profanity and return an edited version.
     * @param {string} string - Sentence to filter.
     */
    clean(string: string): string;
    /**
     * Add word(s) to blacklist filter / remove words from whitelist filter
     * @param {...string} words - Word(s) to add to the blacklist
     */
    addWords(...words: string[]): void;
    /**
     * Add words to whitelist filter
     * @param {...string} words - Word(s) to add to the whitelist.
     */
    removeWords(...words: string[]): void;
}
