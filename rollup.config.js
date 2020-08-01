import typescript from "rollup-plugin-typescript2";
import alias from '@rollup/plugin-alias';
import scss from 'rollup-plugin-scss';
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require("typescript")
      }),
      alias({
        entries: {
          '@Components': __dirname + '/src/components',
          '@Utils': __dirname + '/src/_utils'
        }
      }),
      scss({
        output: 'dist/control-ui.css'
      })
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ]
  },
  // {
  //   input: "src/entry.ts",
  //   plugins: [
  //     scss()
  //   ],
  //   output: 'control-ui.css'
  // }
];
