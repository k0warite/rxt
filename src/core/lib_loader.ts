import { readdir, stat } from 'fs/promises';
import { Lib } from '../../types/index';

export async function libLoader(): Promise<Array<Lib>> {
    const lib: Array<Lib> = [];

    for (const content of (await readdir('./lib/'))) {
        if ((await stat(`./lib/${content}`)).isDirectory()) {
            for (const _content of (await readdir(`./lib/${content}/`))) {
                const mod: { [key: string]: CallableFunction } = await import(`../../lib/${content}/${_content}`);

                for (const fn in mod) {
                    lib.push({
                        name: `${content}::${_content.split('.').shift()}::${mod[fn].name}`,
                        fn: mod[fn],
                        type: 'js'
                    });
                }
            }
        }

        else {
            const mod: { [key: string]: CallableFunction } = await import(`../../lib/${content}`);

            for (const fn in mod) {
                lib.push({
                    name: `${content.split('.').shift()}::${mod[fn].name}`,
                    fn: mod[fn],
                    type: 'js'
                });
            }
        }
    }

    return lib;
}