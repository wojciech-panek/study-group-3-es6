import path from 'path';
import {
  addEnvConfigScriptAlias,
  addHTMLWebpackPlugin,
  addSpritesmithSprite,
  defineGlobalEnvConstants,
  configOutputPath,
  addMainEntryPoint,
  addIndexTemplateLoader,
  addJSONLoader,
  addCommonStaticFilesLoader,
  configPostcss,
  addInlineVendorStylesSupport,
  addInlineSassSupport,
  addBabelSupport,
  addEslint,
  addLoader,
  defineAlias
} from 'apptension-tools';

const phaserModule = path.join(process.cwd(), '/node_modules/phaser/');

export default [
  /**
   * Userland loaders and aliases
   */
  defineAlias('create-reducer', path.join(process.cwd(), 'app/src/utils/createReducer.js')),

  /**
   * Phaser.js
   */
  defineAlias('phaser', path.join(phaserModule, 'build/custom/phaser-split.js')),
  defineAlias('pixi', path.join(phaserModule, 'build/custom/pixi.js')),
  defineAlias('p2', path.join(phaserModule, 'build/custom/p2.js')),
  addLoader({test: /phaser-split\.js$/, loader: 'expose?Phaser'}),
  addLoader({test: /pixi\.js/, loader: 'expose?PIXI'}),
  addLoader({test: /p2\.js/, loader: 'expose?p2'}),

  /**
   * Sprite generation definitions
   */
  addSpritesmithSprite({name: 'mobile'}),
  addSpritesmithSprite({name: 'tablet'}),

  /**
   * Common file loaders
   */
  addJSONLoader,
  addCommonStaticFilesLoader,

  /**
   * Index file generating
   */
  addIndexTemplateLoader,
  addHTMLWebpackPlugin(),

  /**
   * CSS related configuration
   */
  configPostcss,
  addInlineVendorStylesSupport,
  addInlineSassSupport,

  /**
   * Core build configuration
   */
  configOutputPath(),
  addMainEntryPoint,
  addEnvConfigScriptAlias,
  defineGlobalEnvConstants,
  addBabelSupport,
  addEslint
];
