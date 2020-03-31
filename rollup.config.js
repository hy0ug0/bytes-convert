import { terser } from 'rollup-plugin-terser';
import ts from '@wessberg/rollup-plugin-ts';

export default {
    input: 'src/main.ts',
    output: [
        {
            file: 'build/cjs/bundle-cjs.js',
            format: 'cjs',
        },
        {
            file: 'build/es/bundle-es.js',
            format: 'es',
        },
        {
            file: 'build/amd/bundle-amd.js',
            format: 'amd',
        },
        {
            file: 'build/umd/bundle-umd.js',
            format: 'umd',
            name: 'convertBytes',
        },
        {
            file: 'build/system/bundle-system.js',
            format: 'system',
        },
        {
            file: 'build/iife/bundle-iife.js',
            format: 'iife',
            name: 'convertBytes',
        },
    ],
    plugins: [
        ts({
            browserslist: ['last 1 version', '> 1%'],
        }),
        terser(),
    ],
};
