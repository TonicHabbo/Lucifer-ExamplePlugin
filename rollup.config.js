import { terser } from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/ExamplePlugin.ts',
    output: {
        dir: 'output',
        format: 'cjs',
    },
    external: ['lucifer-ts', 'typeorm', 'express'],
    plugins: [
        typescript(),
        terser(),
    ],
};