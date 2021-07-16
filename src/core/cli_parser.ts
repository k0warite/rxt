import parse from 'command-line-args';

export function cliParser(option: Array<parse.OptionDefinition>) {
    return parse(option);
}