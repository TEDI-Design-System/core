# [2.0.0](https://github.com/TEDI-Design-System/core/compare/core-1.15.5...core-2.0.0) (2025-10-10)


### Bug Fixes

* **accordion:** fix conditionally rendered item collapse [#1040](https://github.com/TEDI-Design-System/core/issues/1040) ([#1043](https://github.com/TEDI-Design-System/core/issues/1043)) ([245b2d4](https://github.com/TEDI-Design-System/core/commit/245b2d4fdd367b814b5adabf699914783d7e7bef))
* **alert,toast:** enhance accessibility, add titleElement prop to override default heading element, better Toast stories, add documentation [#1009](https://github.com/TEDI-Design-System/core/issues/1009) ([#1126](https://github.com/TEDI-Design-System/core/issues/1126)) ([f922907](https://github.com/TEDI-Design-System/core/commit/f92290772259b8b3ff19a2cc5a1f1d9e9b24d610))
* **button-group:** ensure aria-label is always announced for groups and fix focus styles [#999](https://github.com/TEDI-Design-System/core/issues/999) ([#1027](https://github.com/TEDI-Design-System/core/issues/1027)) ([bf1ba29](https://github.com/TEDI-Design-System/core/commit/bf1ba29dfd29e1b7dab5ea20331ef17f52716cf4))
* **button:** consolidate loading spinner position for accessibility [#997](https://github.com/TEDI-Design-System/core/issues/997) ([#1025](https://github.com/TEDI-Design-System/core/issues/1025)) ([2cfd9cd](https://github.com/TEDI-Design-System/core/commit/2cfd9cd544fc274b4e13bbf7d63ce629c043a844))
* **choice-group:** improve focus-visible, fix broken interractions [#877](https://github.com/TEDI-Design-System/core/issues/877) ([#1085](https://github.com/TEDI-Design-System/core/issues/1085)) ([db901b7](https://github.com/TEDI-Design-System/core/commit/db901b7777df34c873ca5ad1829dbdf68480a162))
* **collapse:** prevent title from being included in button accessible name [#1002](https://github.com/TEDI-Design-System/core/issues/1002) ([#1028](https://github.com/TEDI-Design-System/core/issues/1028)) ([b9e4282](https://github.com/TEDI-Design-System/core/commit/b9e4282493f01d0f03ba861280cf97f79c294b5c))
* **file-dropzone:** add missing value accessor provider [#860](https://github.com/TEDI-Design-System/core/issues/860) ([2565eab](https://github.com/TEDI-Design-System/core/commit/2565eab749127c3da0b4af9df8f69c23c40b54cb))
* **file-dropzone:** add variable to override error behaviour [#860](https://github.com/TEDI-Design-System/core/issues/860) ([40dc163](https://github.com/TEDI-Design-System/core/commit/40dc163ac7dcc2f257eeab5c3e08620ec817aede))
* **file-dropzone:** better error message [#860](https://github.com/TEDI-Design-System/core/issues/860) ([90638d8](https://github.com/TEDI-Design-System/core/commit/90638d8177485e52a0f8b0a1f61e9f53ab52fb12))
* **file-dropzone:** fix controls on file-dropzone, fix first file validation display [#860](https://github.com/TEDI-Design-System/core/issues/860) ([d86a5d4](https://github.com/TEDI-Design-System/core/commit/d86a5d40bf9cf0e5448210b78ca599722c65efeb))
* **file-dropzone:** remove duplicate multiple input [#860](https://github.com/TEDI-Design-System/core/issues/860) ([#1106](https://github.com/TEDI-Design-System/core/issues/1106)) ([c7fbaad](https://github.com/TEDI-Design-System/core/commit/c7fbaadecddeb79a9c40420ee5fb7818e8126ef5))
* **file-upload:** enhance useFileUpload hook with controlled state management [#1021](https://github.com/TEDI-Design-System/core/issues/1021) ([#1088](https://github.com/TEDI-Design-System/core/issues/1088)) ([9d14a3d](https://github.com/TEDI-Design-System/core/commit/9d14a3dd70526eeac26dbdf00a571fd3bca0a356))
* **floating-button:** prevent text overflow with text-wrap for WCAG compliance [#1001](https://github.com/TEDI-Design-System/core/issues/1001) ([#1030](https://github.com/TEDI-Design-System/core/issues/1030)) ([b7cb8f8](https://github.com/TEDI-Design-System/core/commit/b7cb8f85e76379e9efe269bf07f04776cdaae177))
* **header-profile:** add translation [#1074](https://github.com/TEDI-Design-System/core/issues/1074) ([#1075](https://github.com/TEDI-Design-System/core/issues/1075)) ([ce7d536](https://github.com/TEDI-Design-System/core/commit/ce7d536a797633b12ce52324baf3cb358368bbc0))
* **input-group:** do not generate a new id each render [#240](https://github.com/TEDI-Design-System/core/issues/240) ([8cbf5c7](https://github.com/TEDI-Design-System/core/commit/8cbf5c7d108cfb95b10571a46b5251d9eedafe65))
* **input-group:** fix incorrect edge rounding if only one suffix/affix is active [#240](https://github.com/TEDI-Design-System/core/issues/240) ([e0ef8f9](https://github.com/TEDI-Design-System/core/commit/e0ef8f922d487cc171a02826f65dc60b9a2b29f6))
* **input-group:** fix select styles changing breaking [#240](https://github.com/TEDI-Design-System/core/issues/240) ([3d5c406](https://github.com/TEDI-Design-System/core/commit/3d5c406cc59ec5017965800af83fd6bc859d9098))
* **input-group:** remove a style change moving the arrow to the right [#240](https://github.com/TEDI-Design-System/core/issues/240) ([26e9c1f](https://github.com/TEDI-Design-System/core/commit/26e9c1f1368cbf2b67e702aee7aacd2eb97937f3))
* **input-group:** use indexId import instead [#240](https://github.com/TEDI-Design-System/core/issues/240) ([e55fa05](https://github.com/TEDI-Design-System/core/commit/e55fa055a35f23fed23ded9151e87be1c4863d5d))
* **list:** fix ordered list for screen readers, fix noStyle indendation [#992](https://github.com/TEDI-Design-System/core/issues/992) ([#1024](https://github.com/TEDI-Design-System/core/issues/1024)) ([a381e67](https://github.com/TEDI-Design-System/core/commit/a381e67bdd1282ca019362e653f3041201594e4a))
* **numberfield:** fix wcag 9.4.1.2 and 9.4.1.3 criterias [#1012](https://github.com/TEDI-Design-System/core/issues/1012) ([#1082](https://github.com/TEDI-Design-System/core/issues/1082)) ([0fe7758](https://github.com/TEDI-Design-System/core/commit/0fe775823ea82be1039f8f53bd9d5f284417f845))
* **select:** fix label and placeholder accessibility [#1014](https://github.com/TEDI-Design-System/core/issues/1014) ([#1130](https://github.com/TEDI-Design-System/core/issues/1130)) ([649b52b](https://github.com/TEDI-Design-System/core/commit/649b52b8b221293c7a9d5ad26695b4777e1bb94e))
* **select:** fix placeholder placement on single value input [#695](https://github.com/TEDI-Design-System/core/issues/695) ([#1092](https://github.com/TEDI-Design-System/core/issues/1092)) ([0f7cc51](https://github.com/TEDI-Design-System/core/commit/0f7cc5106f6919e9741d9daa3d3f4128f4778e0c))
* **select:** prevent backspace from deleting non-removable tags [#1078](https://github.com/TEDI-Design-System/core/issues/1078) ([#1083](https://github.com/TEDI-Design-System/core/issues/1083)) ([33dfc54](https://github.com/TEDI-Design-System/core/commit/33dfc5453ec01311a3c8e39f9d29ba53903ac5c2))
* **separator:** fix stories for 9.1.4.10 criteria [#1007](https://github.com/TEDI-Design-System/core/issues/1007) ([#1125](https://github.com/TEDI-Design-System/core/issues/1125)) ([80d9ac8](https://github.com/TEDI-Design-System/core/commit/80d9ac82ebb75418e1f2debd236b3ad5cedbf1d6))
* **sidenav:** add classname support to sidenav-mobile component [#936](https://github.com/TEDI-Design-System/core/issues/936) ([#1091](https://github.com/TEDI-Design-System/core/issues/1091)) ([d2b9d3b](https://github.com/TEDI-Design-System/core/commit/d2b9d3b2c7d2f2c9820ca5490048f60ea655541c))
* **sidenav:** pass id to sidenav-mobile [#935](https://github.com/TEDI-Design-System/core/issues/935) ([#1090](https://github.com/TEDI-Design-System/core/issues/1090)) ([20faf2b](https://github.com/TEDI-Design-System/core/commit/20faf2b695ea575e9d5cc5d7c22954bc6e97af12))
* **sidenav:** prevent ghost-click on touch ([#1051](https://github.com/TEDI-Design-System/core/issues/1051)) ([3f4e45a](https://github.com/TEDI-Design-System/core/commit/3f4e45a00e59621ce51f3b886d8fe979b71e1f81)), closes [#937](https://github.com/TEDI-Design-System/core/issues/937)
* **skeleton:** screen reader wcag fixes [#1004](https://github.com/TEDI-Design-System/core/issues/1004) ([#1080](https://github.com/TEDI-Design-System/core/issues/1080)) ([1fba7c9](https://github.com/TEDI-Design-System/core/commit/1fba7c9a29ad4cbe5af92ba52a7727b2381349f1))
* **spinner:** fix screen reader announcements, fix tests for spinner and tag [#1003](https://github.com/TEDI-Design-System/core/issues/1003) ([#1079](https://github.com/TEDI-Design-System/core/issues/1079)) ([1d674a3](https://github.com/TEDI-Design-System/core/commit/1d674a32bfcf78513e0484bef530cfd6992dce2b))
* **status-badge-no-status:** add missing support for status badge without indicator ([#980](https://github.com/TEDI-Design-System/core/issues/980)) ([0fba146](https://github.com/TEDI-Design-System/core/commit/0fba1461ee1e0c3417f4aaf7915e95ca315b3555)), closes [#814](https://github.com/TEDI-Design-System/core/issues/814) [#814](https://github.com/TEDI-Design-System/core/issues/814) [#814](https://github.com/TEDI-Design-System/core/issues/814) [#814](https://github.com/TEDI-Design-System/core/issues/814) [#814](https://github.com/TEDI-Design-System/core/issues/814) [#814](https://github.com/TEDI-Design-System/core/issues/814) [#814](https://github.com/TEDI-Design-System/core/issues/814)
* **storybook:** fix storybook stories and structure [#987](https://github.com/TEDI-Design-System/core/issues/987) ([#1029](https://github.com/TEDI-Design-System/core/issues/1029)) ([db691f1](https://github.com/TEDI-Design-System/core/commit/db691f1610e6d3122412539beae557122d2a84a9))
* **textfield:** fix input param passing [#1132](https://github.com/TEDI-Design-System/core/issues/1132) ([#1166](https://github.com/TEDI-Design-System/core/issues/1166)) ([6380a9a](https://github.com/TEDI-Design-System/core/commit/6380a9a82637ea360c4d0622799cc7591ef3486d))
* **textfield:** wcag disabled and label fixes [#1010](https://github.com/TEDI-Design-System/core/issues/1010) ([#1081](https://github.com/TEDI-Design-System/core/issues/1081)) ([a6b43da](https://github.com/TEDI-Design-System/core/commit/a6b43daf4762325df0152031e865bfd37d151810))
* **tooltip,popover:** fix focus trap on tab targeting [#964](https://github.com/TEDI-Design-System/core/issues/964) ([#1089](https://github.com/TEDI-Design-System/core/issues/1089)) ([d91584d](https://github.com/TEDI-Design-System/core/commit/d91584d2faa87003bc332a1579eb7dd25b0fdd10))


### Code Refactoring

* **core:** move Core to standalone repo [#22](https://github.com/TEDI-Design-System/core/issues/22) ([d12d220](https://github.com/TEDI-Design-System/core/commit/d12d220e1aa6a71461d57c13849c0fd7b6ad6266))


### Features

* **file-dropzone:** add slots for feedback, change around inputs, new story [#860](https://github.com/TEDI-Design-System/core/issues/860) ([5c920a1](https://github.com/TEDI-Design-System/core/commit/5c920a1bd32dda4bb2f9898742db70dda2b5414c))
* **file-dropzone:** add toggle for SI and IEC standards of showing filesize fix filesize [#860](https://github.com/TEDI-Design-System/core/issues/860) ([162cae1](https://github.com/TEDI-Design-System/core/commit/162cae130dabd4c9967165331d46c3fe36512a84))
* **right-panel:** make close button configurable and removable ([#1050](https://github.com/TEDI-Design-System/core/issues/1050)) ([6e6b23a](https://github.com/TEDI-Design-System/core/commit/6e6b23a5d1c5f62206b241b733b9badfd0a6b73c)), closes [#1044](https://github.com/TEDI-Design-System/core/issues/1044)
* **stepper:** add vertical stepper component [#512](https://github.com/TEDI-Design-System/core/issues/512) ([c50b6ca](https://github.com/TEDI-Design-System/core/commit/c50b6cacf39bee15feb9cf8cdb6f3913803aca1d))
* **stepper:** add vertical stepper component [#512](https://github.com/TEDI-Design-System/core/issues/512) ([f86acdc](https://github.com/TEDI-Design-System/core/commit/f86acdc4779bb57c11bb8b7977e10edcc500ae78))
* **tabs, dropdown:** Add community tabs and dropdown [#656](https://github.com/TEDI-Design-System/core/issues/656) [#697](https://github.com/TEDI-Design-System/core/issues/697) ([37f9b7f](https://github.com/TEDI-Design-System/core/commit/37f9b7f224d6450cf5b4297b3e87ffbd03113868))
* **tabs, dropdown:** Add keyboard support for tabs and dropdown [#656](https://github.com/TEDI-Design-System/core/issues/656) [#697](https://github.com/TEDI-Design-System/core/issues/697) ([c430dc4](https://github.com/TEDI-Design-System/core/commit/c430dc4a33d7a3f0e93e2a459ee6ae55117ea4b0))
* **tabs, dropdown:** fix imports [#656](https://github.com/TEDI-Design-System/core/issues/656) [#697](https://github.com/TEDI-Design-System/core/issues/697) ([a2578b9](https://github.com/TEDI-Design-System/core/commit/a2578b98975a99bd69ff6544f5e263e365342bd1))
* **tabs, dropdown:** Update stories [#656](https://github.com/TEDI-Design-System/core/issues/656) [#697](https://github.com/TEDI-Design-System/core/issues/697) ([0c98dfe](https://github.com/TEDI-Design-System/core/commit/0c98dfeca00296c0eb31596d548458b18d20eff3))
* **tabs:** fix tabs keyboard navigation [#656](https://github.com/TEDI-Design-System/core/issues/656) ([084d2e2](https://github.com/TEDI-Design-System/core/commit/084d2e2082104fe9299cc2a33ae85d0e8add2ccf))
* **tabs:** small qa feedback [#656](https://github.com/TEDI-Design-System/core/issues/656) ([bc2375d](https://github.com/TEDI-Design-System/core/commit/bc2375d4b799cd3b63c73eb82ae0c03ffefa29ce))
* **timeline:** add timeline component [#1036](https://github.com/TEDI-Design-System/core/issues/1036) ([#1041](https://github.com/TEDI-Design-System/core/issues/1041)) ([83c184c](https://github.com/TEDI-Design-System/core/commit/83c184cda9cfa2834becae05cad47557f6ea4730))
* **timeline:** TEDI-Ready component [#1094](https://github.com/TEDI-Design-System/core/issues/1094) ([#1122](https://github.com/TEDI-Design-System/core/issues/1122)) ([c6e9fb4](https://github.com/TEDI-Design-System/core/commit/c6e9fb44653b04dee705a9ffd2718045bc3d22ec))
* **vertical-stepper:** add container for icons and link [#512](https://github.com/TEDI-Design-System/core/issues/512) ([#1102](https://github.com/TEDI-Design-System/core/issues/1102)) ([12ccd3c](https://github.com/TEDI-Design-System/core/commit/12ccd3cb0143cd82b60a5251e2a86011bba269e2))
* **vertical-stepper:** add desktop comment [#512](https://github.com/TEDI-Design-System/core/issues/512) ([6a2b542](https://github.com/TEDI-Design-System/core/commit/6a2b5428390d6d480bdc147b8a438826e66c687e))
* **vertical-stepper:** design changes [#512](https://github.com/TEDI-Design-System/core/issues/512) ([#1112](https://github.com/TEDI-Design-System/core/issues/1112)) ([40b9707](https://github.com/TEDI-Design-System/core/commit/40b9707983b2533bc8c195737036fcddb2fd0b85))
* **vertical-stepper:** design changes and additional slot for info components [#512](https://github.com/TEDI-Design-System/core/issues/512) ([#1131](https://github.com/TEDI-Design-System/core/issues/1131)) ([1d4f0da](https://github.com/TEDI-Design-System/core/commit/1d4f0da901e5810de64c4acaa4e566a445d4af18))
* **vertical-stepper:** export stepitem and subitem from vertical-stepper [#512](https://github.com/TEDI-Design-System/core/issues/512) ([02c72a7](https://github.com/TEDI-Design-System/core/commit/02c72a7b912a04e92d8a92ce76efcaed42184339))
* **vertical-stepper:** review changes [#512](https://github.com/TEDI-Design-System/core/issues/512) ([ee3ab3a](https://github.com/TEDI-Design-System/core/commit/ee3ab3ad03900c6a114de4480cd785d26c7595b2))


### BREAKING CHANGES

* **core:** the package name has changed.
Update all imports and dependencies to use the new package name.

# [@tehik-ee/tedi-core-v1.15.5](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.15.4...core-1.15.5) (2025-08-27)


### Bug Fixes

* **storybook:** fix stories [#1031](https://github.com/TEHIK-EE/tedi-design-system/issues/1031) ([#1033](https://github.com/TEHIK-EE/tedi-design-system/issues/1033)) ([97f4b8f](https://github.com/TEHIK-EE/tedi-design-system/commit/97f4b8f3f5c2369b41c4407b57b777aee251bd25))

# [@tehik-ee/tedi-core-v1.15.4](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.15.3...core-1.15.4) (2025-08-27)


### Bug Fixes

* **header:** fix header height variable [#1034](https://github.com/TEHIK-EE/tedi-design-system/issues/1034) ([#1035](https://github.com/TEHIK-EE/tedi-design-system/issues/1035)) ([147db2c](https://github.com/TEHIK-EE/tedi-design-system/commit/147db2c246c71edf99b555921e6a6dea3d8a8c0e))

# [@tehik-ee/tedi-core-v1.15.3](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.15.2...core-1.15.3) (2025-07-30)


### Bug Fixes

* **missing-var:** add missing css variable in tedi-core to fix icon aligment issue [#860](https://github.com/TEHIK-EE/tedi-design-system/issues/860) ([79c2c9d](https://github.com/TEHIK-EE/tedi-design-system/commit/79c2c9d7d582a0e880f816eadfd2b5e178a36d59))

# [@tehik-ee/tedi-core-v1.15.2](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.15.1...core-1.15.2) (2025-07-10)


### Bug Fixes

* **header:** fix tedi-core variable [#931](https://github.com/TEHIK-EE/tedi-design-system/issues/931) ([64af455](https://github.com/TEHIK-EE/tedi-design-system/commit/64af45525ab9c1d9043c3678a1551586f365827e))

# [@tehik-ee/tedi-core-v1.15.1](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.15.0...core-1.15.1) (2025-07-10)


### Bug Fixes

* **header:** fix header css variable and add example logo [#931](https://github.com/TEHIK-EE/tedi-design-system/issues/931) ([#932](https://github.com/TEHIK-EE/tedi-design-system/issues/932)) ([047f568](https://github.com/TEHIK-EE/tedi-design-system/commit/047f5684e44d9aec927ee0568342eee388c0c30d))

# [@tehik-ee/tedi-core-v1.15.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.14.1...core-1.15.0) (2025-06-26)


### Features

* **footer:** TEDI-Ready component [#857](https://github.com/TEHIK-EE/tedi-design-system/issues/857) ([#870](https://github.com/TEHIK-EE/tedi-design-system/issues/870)) ([1eb1a1c](https://github.com/TEHIK-EE/tedi-design-system/commit/1eb1a1c11c3c17c9a9528ecd1a5064fda332208c)), closes [#866](https://github.com/TEHIK-EE/tedi-design-system/issues/866) [#866](https://github.com/TEHIK-EE/tedi-design-system/issues/866) [#866](https://github.com/TEHIK-EE/tedi-design-system/issues/866)

# [@tehik-ee/tedi-core-v1.14.1](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.14.0...core-1.14.1) (2025-06-26)


### Bug Fixes

* **tedi-core:** fix header css variables [#896](https://github.com/TEHIK-EE/tedi-design-system/issues/896) ([#897](https://github.com/TEHIK-EE/tedi-design-system/issues/897)) ([8a7df0c](https://github.com/TEHIK-EE/tedi-design-system/commit/8a7df0c60a1b25b2055752f51e787b0101372f58))

# [@tehik-ee/tedi-core-v1.14.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.13.3...core-1.14.0) (2025-06-26)


### Bug Fixes

* **sidenav:** change tedi-core sidenav variables [#868](https://github.com/TEHIK-EE/tedi-design-system/issues/868) ([#869](https://github.com/TEHIK-EE/tedi-design-system/issues/869)) ([5a86250](https://github.com/TEHIK-EE/tedi-design-system/commit/5a86250b36f229f8db12f0f24e4c059ef8eacaad))
* **tedi-core:** change header css variables [#886](https://github.com/TEHIK-EE/tedi-design-system/issues/886) ([#887](https://github.com/TEHIK-EE/tedi-design-system/issues/887)) ([ae6155e](https://github.com/TEHIK-EE/tedi-design-system/commit/ae6155ea51961bac711e948a2999c55228da052d))


### Features

* **tedi-core:** Add footer variables [#890](https://github.com/TEHIK-EE/tedi-design-system/issues/890) ([#891](https://github.com/TEHIK-EE/tedi-design-system/issues/891)) ([d533417](https://github.com/TEHIK-EE/tedi-design-system/commit/d533417407bc5a89c023298af8a97deb701e0d80))

# [@tehik-ee/tedi-core-v1.13.4](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.13.3...core-1.13.4) (2025-06-25)


### Bug Fixes

* **sidenav:** change tedi-core sidenav variables [#868](https://github.com/TEHIK-EE/tedi-design-system/issues/868) ([#869](https://github.com/TEHIK-EE/tedi-design-system/issues/869)) ([5a86250](https://github.com/TEHIK-EE/tedi-design-system/commit/5a86250b36f229f8db12f0f24e4c059ef8eacaad))
* **tedi-core:** change header css variables [#886](https://github.com/TEHIK-EE/tedi-design-system/issues/886) ([#887](https://github.com/TEHIK-EE/tedi-design-system/issues/887)) ([ae6155e](https://github.com/TEHIK-EE/tedi-design-system/commit/ae6155ea51961bac711e948a2999c55228da052d))

# [@tehik-ee/tedi-core-v1.13.4](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.13.3...core-1.13.4) (2025-06-25)


### Bug Fixes

* **sidenav:** change tedi-core sidenav variables [#868](https://github.com/TEHIK-EE/tedi-design-system/issues/868) ([#869](https://github.com/TEHIK-EE/tedi-design-system/issues/869)) ([5a86250](https://github.com/TEHIK-EE/tedi-design-system/commit/5a86250b36f229f8db12f0f24e4c059ef8eacaad))

# [@tehik-ee/tedi-core-v1.13.4](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.13.3...core-1.13.4) (2025-06-25)


### Bug Fixes

* **sidenav:** change tedi-core sidenav variables [#868](https://github.com/TEHIK-EE/tedi-design-system/issues/868) ([#869](https://github.com/TEHIK-EE/tedi-design-system/issues/869)) ([5a86250](https://github.com/TEHIK-EE/tedi-design-system/commit/5a86250b36f229f8db12f0f24e4c059ef8eacaad))

# [@tehik-ee/tedi-core-v1.13.4](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.13.3...core-1.13.4) (2025-06-20)


### Bug Fixes

* **sidenav:** change tedi-core sidenav variables [#868](https://github.com/TEHIK-EE/tedi-design-system/issues/868) ([#869](https://github.com/TEHIK-EE/tedi-design-system/issues/869)) ([5a86250](https://github.com/TEHIK-EE/tedi-design-system/commit/5a86250b36f229f8db12f0f24e4c059ef8eacaad))

# [@tehik-ee/tedi-core-v1.13.4](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.13.3...core-1.13.4) (2025-06-17)


### Bug Fixes

* **sidenav:** change tedi-core sidenav variables [#868](https://github.com/TEHIK-EE/tedi-design-system/issues/868) ([#869](https://github.com/TEHIK-EE/tedi-design-system/issues/869)) ([d81ad9b](https://github.com/TEHIK-EE/tedi-design-system/commit/d81ad9b0b494c30bf2dd7c0651a46c63995e94e2))

# [@tehik-ee/tedi-core-v1.13.3](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.13.2...core-1.13.3) (2025-06-04)


### Bug Fixes

* **sidenav:** update sidenav min-height variables [#832](https://github.com/TEHIK-EE/tedi-design-system/issues/832) ([b5a9560](https://github.com/TEHIK-EE/tedi-design-system/commit/b5a9560a89535f096c9ea869ce5affc5af687440))

# [@tehik-ee/tedi-core-v1.13.2](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.13.1...core-1.13.2) (2025-05-14)


### Bug Fixes

* **variables:** add missing prefixes for dimensional variables [#511](https://github.com/TEHIK-EE/tedi-design-system/issues/511) ([ba31915](https://github.com/TEHIK-EE/tedi-design-system/commit/ba319158791b9f410184e54f7ae35d64be26f96f))

# [@tehik-ee/tedi-core-v1.13.1](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.13.0...core-1.13.1) (2025-05-14)


### Bug Fixes

* **sidenav,dropdown:** update sidenav and dropdown variables [#511](https://github.com/TEHIK-EE/tedi-design-system/issues/511) ([4559311](https://github.com/TEHIK-EE/tedi-design-system/commit/455931148d2a1a5db975200f97cf43fccebe0f32))

# [@tehik-ee/tedi-core-v1.13.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.12.3...core-1.13.0) (2025-05-07)


### Features

* **tedi-core:** simplify responsive-styles [#741](https://github.com/TEHIK-EE/tedi-design-system/issues/741) ([#742](https://github.com/TEHIK-EE/tedi-design-system/issues/742)) ([fee90ce](https://github.com/TEHIK-EE/tedi-design-system/commit/fee90ce90741115c2ec53ce1f84b9be2bf394ef7))

# [@tehik-ee/tedi-core-v1.12.3](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.12.2...core-1.12.3) (2025-04-28)


### Bug Fixes

* **tedi-core:** reverting mobile list padding to original value [#735](https://github.com/TEHIK-EE/tedi-design-system/issues/735) ([#736](https://github.com/TEHIK-EE/tedi-design-system/issues/736)) ([7252fff](https://github.com/TEHIK-EE/tedi-design-system/commit/7252fff21d40523840fad2723260640d364b04bb))

# [@tehik-ee/tedi-core-v1.12.2](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.12.1...core-1.12.2) (2025-04-28)


### Bug Fixes

* **tedi-core:** update mobile list padding to match design specifications [#733](https://github.com/TEHIK-EE/tedi-design-system/issues/733) ([#734](https://github.com/TEHIK-EE/tedi-design-system/issues/734)) ([3d5917e](https://github.com/TEHIK-EE/tedi-design-system/commit/3d5917e253a9e355bd816a559c2a6c1e214c2b37))

# [@tehik-ee/tedi-core-v1.12.1](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.12.0...core-1.12.1) (2025-04-23)


### Bug Fixes

* **select:** Increase dropdown z-index value [#715](https://github.com/TEHIK-EE/tedi-design-system/issues/715) ([29512ac](https://github.com/TEHIK-EE/tedi-design-system/commit/29512acc65ab455bafb41709108fff14e3774c9c))

# [@tehik-ee/tedi-core-v1.12.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.11.0...core-1.12.0) (2025-04-17)


### Features

* **tedi-core:** add new form field variables [#702](https://github.com/TEHIK-EE/tedi-design-system/issues/702) ([#703](https://github.com/TEHIK-EE/tedi-design-system/issues/703)) ([8ff24b8](https://github.com/TEHIK-EE/tedi-design-system/commit/8ff24b860e1901f1e8e80f29e4a1786126f3f69a))

# [@tehik-ee/tedi-core-v1.11.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.10.1...core-1.11.0) (2025-04-14)


### Features

* **select:** TEDI Select development [#333](https://github.com/TEHIK-EE/tedi-design-system/issues/333) ([#670](https://github.com/TEHIK-EE/tedi-design-system/issues/670)) ([7d1c768](https://github.com/TEHIK-EE/tedi-design-system/commit/7d1c7684e10b91baa2ca969d696e063f273da51f))

# [@tehik-ee/tedi-core-v1.10.1](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.10.0...core-1.10.1) (2025-04-02)

### Bug Fixes

- **base-variables:** convert base dimension values from px to rems [#647](https://github.com/TEHIK-EE/tedi-design-system/issues/647) ([d06ffd1](https://github.com/TEHIK-EE/tedi-design-system/commit/d06ffd15b99f476a3ec51e48e02258714c5ddd83))

# [@tehik-ee/tedi-core-v1.10.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.9.0...core-1.10.0) (2025-04-02)

### Features

- **cards:** Update card story render functions to display HTML [#579](https://github.com/TEHIK-EE/tedi-design-system/issues/579) ([4a7b8a2](https://github.com/TEHIK-EE/tedi-design-system/commit/4a7b8a26f3f0f4e9e0acb1cf83db0a1cf54619da))

# [@tehik-ee/tedi-core-v1.9.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.8.2...core-1.9.0) (2025-03-27)

### Features

- **storybook-styles:** add new styles [#615](https://github.com/TEHIK-EE/tedi-design-system/issues/615) ([#616](https://github.com/TEHIK-EE/tedi-design-system/issues/616)) ([db036d5](https://github.com/TEHIK-EE/tedi-design-system/commit/db036d5b2e73bb1c78cb5b9e90deb2f5da6652ad))

# [@tehik-ee/tedi-core-v1.8.2](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.8.1...core-1.8.2) (2025-03-25)

### Bug Fixes

- **button-group:** add variables [#451](https://github.com/TEHIK-EE/tedi-design-system/issues/451) ([9873e34](https://github.com/TEHIK-EE/tedi-design-system/commit/9873e345506b4befe05f4e39f012073f78a61f76))

# [@tehik-ee/tedi-core-v1.8.1](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.8.0...core-1.8.1) (2025-03-24)

### Bug Fixes

- **fonts:** add minified css to package with correct font paths [#594](https://github.com/TEHIK-EE/tedi-design-system/issues/594) ([#598](https://github.com/TEHIK-EE/tedi-design-system/issues/598)) ([62469d0](https://github.com/TEHIK-EE/tedi-design-system/commit/62469d0ec4a0aefa2bed36c26b457d60e1c52255))

# [@tehik-ee/tedi-core-v1.8.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.7.1...core-1.8.0) (2025-03-20)

### Features

- **fonts:** add fonts to TEDI-Core package [#592](https://github.com/TEHIK-EE/tedi-design-system/issues/592) ([#593](https://github.com/TEHIK-EE/tedi-design-system/issues/593)) ([c83257c](https://github.com/TEHIK-EE/tedi-design-system/commit/c83257c437a1ea39e27ed3d91e4a9b01782dcbc1))

# [@tehik-ee/tedi-core-v1.7.1](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.7.0...core-1.7.1) (2025-03-19)

### Bug Fixes

- **select:** add dropdown variables [#333](https://github.com/TEHIK-EE/tedi-design-system/issues/333) ([#584](https://github.com/TEHIK-EE/tedi-design-system/issues/584)) ([c50757b](https://github.com/TEHIK-EE/tedi-design-system/commit/c50757b7156e595ac5c9ad78b9d44d0d6b8c0b07))

# [@tehik-ee/tedi-core-v1.7.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.16...core-1.7.0) (2025-03-14)

### Features

- **variables:** tedi-core z-index variables [#559](https://github.com/TEHIK-EE/tedi-design-system/issues/559) ([#560](https://github.com/TEHIK-EE/tedi-design-system/issues/560)) ([b04a198](https://github.com/TEHIK-EE/tedi-design-system/commit/b04a198468c072f3d81110ce3b77caed57211c34))

# [@tehik-ee/tedi-core-v1.6.16](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.15...core-1.6.16) (2025-03-10)

### Bug Fixes

- **styles:** fix TEDI core storybook styles [#507](https://github.com/TEHIK-EE/tedi-design-system/issues/507) ([#542](https://github.com/TEHIK-EE/tedi-design-system/issues/542)) ([16e9a0e](https://github.com/TEHIK-EE/tedi-design-system/commit/16e9a0e42074bda93c60c03e2c8dcdb9edd3b9f9))

# [@tehik-ee/tedi-core-v1.6.15](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.14...core-1.6.15) (2025-03-06)

### Bug Fixes

- **button:** revert button-sm-inner-spacing-mobile value change [#533](https://github.com/TEHIK-EE/tedi-design-system/issues/533) ([48cc960](https://github.com/TEHIK-EE/tedi-design-system/commit/48cc960cb8d049fccb4c10fa7df77f36c9aac940))

# [@tehik-ee/tedi-core-v1.6.14](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.13...core-1.6.14) (2025-03-06)

### Bug Fixes

- **font:** fix font src paths to absolute urls [#523](https://github.com/TEHIK-EE/tedi-design-system/issues/523) ([2559ec2](https://github.com/TEHIK-EE/tedi-design-system/commit/2559ec2a3cd39cef78f6edaebeb6e83e26fcef1e))

# [@tehik-ee/tedi-core-v1.6.13](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.12...core-1.6.13) (2025-03-06)

### Bug Fixes

- **button:** update button-sm-inner-spacing-mobile to be the same value as desktop [#533](https://github.com/TEHIK-EE/tedi-design-system/issues/533) ([5c260b3](https://github.com/TEHIK-EE/tedi-design-system/commit/5c260b30664700adfffb0cb1f9cd2fc9dae20e5d))

# [@tehik-ee/tedi-core-v1.6.12](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.11...core-1.6.12) (2025-03-03)

### Bug Fixes

- **fonts:** rewrite fonts path to relative for storybook build [#523](https://github.com/TEHIK-EE/tedi-design-system/issues/523) ([#530](https://github.com/TEHIK-EE/tedi-design-system/issues/530)) ([04446b4](https://github.com/TEHIK-EE/tedi-design-system/commit/04446b42889cec61d6e29989dd2cb2e95c67745e))

# [@tehik-ee/tedi-core-v1.6.11](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.10...core-1.6.11) (2025-03-03)

### Bug Fixes

- **tedi-core:** revert font path change [#523](https://github.com/TEHIK-EE/tedi-design-system/issues/523) ([1ddb412](https://github.com/TEHIK-EE/tedi-design-system/commit/1ddb4127144728911d07a02ebc7755f5fe263434))

# [@tehik-ee/tedi-core-v1.6.10](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.9...core-1.6.10) (2025-03-03)

### Bug Fixes

- **fonts:** fix font paths for angular [#523](https://github.com/TEHIK-EE/tedi-design-system/issues/523) ([#529](https://github.com/TEHIK-EE/tedi-design-system/issues/529)) ([7226a5b](https://github.com/TEHIK-EE/tedi-design-system/commit/7226a5be33cb1b29c352b14fb9bf58e264d80d62))

# [@tehik-ee/tedi-core-v1.6.9](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.8...core-1.6.9) (2025-02-26)

### Bug Fixes

- **tedi-core:** button-xs-icon-size variable change [#236](https://github.com/TEHIK-EE/tedi-design-system/issues/236) ([7788378](https://github.com/TEHIK-EE/tedi-design-system/commit/7788378a7cab96ed0e695dc12130fbc71330f614))

# [@tehik-ee/tedi-core-v1.6.8](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.7...core-1.6.8) (2025-02-20)

### Bug Fixes

- **tedi-core:** Update variables [#490](https://github.com/TEHIK-EE/tedi-design-system/issues/490) ([15a5995](https://github.com/TEHIK-EE/tedi-design-system/commit/15a599509a7cc2e2765b167887f763ffcd60dd24))

# [@tehik-ee/tedi-core-v1.6.7](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.6...core-1.6.7) (2025-02-14)

### Bug Fixes

- **tedi-core:** Update dimensional variables [#488](https://github.com/TEHIK-EE/tedi-design-system/issues/488) ([a95c0f1](https://github.com/TEHIK-EE/tedi-design-system/commit/a95c0f10a77a06e6bfbc6144daec3566daeea51a))

# [@tehik-ee/tedi-core-v1.6.6](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.5...core-1.6.6) (2025-02-14)

### Bug Fixes

- **tedi-core:** Update dimensional variables [#488](https://github.com/TEHIK-EE/tedi-design-system/issues/488) ([9403f34](https://github.com/TEHIK-EE/tedi-design-system/commit/9403f345868937d3f3c5190b43190b3f15fa3167))

# [@tehik-ee/tedi-core-v1.6.5](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.4...core-1.6.5) (2025-02-14)

### Bug Fixes

- **tedi-core:** Update dimensional variables [#407](https://github.com/TEHIK-EE/tedi-design-system/issues/407) ([e12adf4](https://github.com/TEHIK-EE/tedi-design-system/commit/e12adf499b09a180eba5ee0407c897235c4661d2))

# [@tehik-ee/tedi-core-v1.6.4](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.3...core-1.6.4) (2025-02-14)

### Bug Fixes

- **tedi-core:** Update color variables [#407](https://github.com/TEHIK-EE/tedi-design-system/issues/407) ([aec7aa9](https://github.com/TEHIK-EE/tedi-design-system/commit/aec7aa9b41e9d0a35667857f730fcc810ccdafe8))

# [@tehik-ee/tedi-core-v1.6.3](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.2...core-1.6.3) (2025-02-14)

### Bug Fixes

- **tedi-core:** Update color variables [#407](https://github.com/TEHIK-EE/tedi-design-system/issues/407) ([90fad95](https://github.com/TEHIK-EE/tedi-design-system/commit/90fad953ff09451d1177e01924fe4b273d853a91))

# [@tehik-ee/tedi-core-v1.6.2](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.1...core-1.6.2) (2025-02-14)

### Bug Fixes

- **tedi-core:** Update base and color variables [#407](https://github.com/TEHIK-EE/tedi-design-system/issues/407) ([#486](https://github.com/TEHIK-EE/tedi-design-system/issues/486)) ([443df4f](https://github.com/TEHIK-EE/tedi-design-system/commit/443df4f1ff1e9fa3219fe9acdec14a760f7d28b7))

# [@tehik-ee/tedi-core-v1.6.1](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.6.0...core-1.6.1) (2025-02-14)

### Bug Fixes

- **popover:** css variables [#260](https://github.com/TEHIK-EE/tedi-design-system/issues/260) ([#487](https://github.com/TEHIK-EE/tedi-design-system/issues/487)) ([1d077b3](https://github.com/TEHIK-EE/tedi-design-system/commit/1d077b374f6b5854d98db88992f5db118493c8c3))

# [@tehik-ee/tedi-core-v1.6.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.2...core-1.6.0) (2025-02-13)

### Features

- **card:** TEDI-Ready Card component development [#261](https://github.com/TEHIK-EE/tedi-design-system/issues/261) ([#362](https://github.com/TEHIK-EE/tedi-design-system/issues/362)) ([e023f01](https://github.com/TEHIK-EE/tedi-design-system/commit/e023f01cee9f82f157efc1ce92224a0b643abf36))

# [@tehik-ee/tedi-core-v1.5.2](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.1...core-1.5.2) (2025-02-10)

### Bug Fixes

- **popover:** tedi core variables [#260](https://github.com/TEHIK-EE/tedi-design-system/issues/260) ([#472](https://github.com/TEHIK-EE/tedi-design-system/issues/472)) ([b4e00e0](https://github.com/TEHIK-EE/tedi-design-system/commit/b4e00e062e59c9d4dca152999f7cda9890a4ba94))

# [@tehik-ee/tedi-core-v1.5.1](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.0...core-1.5.1) (2025-02-05)

### Bug Fixes

- **tooltip:** fix tedi core variables [#210](https://github.com/TEHIK-EE/tedi-design-system/issues/210) ([#470](https://github.com/TEHIK-EE/tedi-design-system/issues/470)) ([2a2b8d1](https://github.com/TEHIK-EE/tedi-design-system/commit/2a2b8d1df11fb892ec9d53a7e942c16192041c86))

# [@tehik-ee/tedi-core-v1.5.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.4.0...core-1.5.0) (2025-02-03)

### Bug Fixes

- **general:** @tehik-ee/tedi-react package styles are not complete [#406](https://github.com/TEHIK-EE/tedi-design-system/issues/406) ([#408](https://github.com/TEHIK-EE/tedi-design-system/issues/408)) ([4423d90](https://github.com/TEHIK-EE/tedi-design-system/commit/4423d906db8fbc569681cbcd352413b3e81a3680))
- **general:** Remove --dry-run flag from release script [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([8e2078a](https://github.com/TEHIK-EE/tedi-design-system/commit/8e2078ab5210f3ad32fcb6c01c292bcc74f02690))
- **tedi-core:** add missing mixi import to typography-utilities [#419](https://github.com/TEHIK-EE/tedi-design-system/issues/419) ([#420](https://github.com/TEHIK-EE/tedi-design-system/issues/420)) ([add8966](https://github.com/TEHIK-EE/tedi-design-system/commit/add8966af7e6388320bbfcfca56d325c04fab885))
- **tedi-core:** add missing styles to tedi-core [#417](https://github.com/TEHIK-EE/tedi-design-system/issues/417) ([#418](https://github.com/TEHIK-EE/tedi-design-system/issues/418)) ([6c1efca](https://github.com/TEHIK-EE/tedi-design-system/commit/6c1efcac448cfe66e6b635d26558728c5588034f))
- **tedi-core:** Change text color order [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([d0a60a0](https://github.com/TEHIK-EE/tedi-design-system/commit/d0a60a0372b6791ee0222eec1b329903d49ec088))
- **tedi-core:** Typography utilities, classes order, gather them into one file [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([90a4082](https://github.com/TEHIK-EE/tedi-design-system/commit/90a4082af8f5c5b4f6d7d862a9b1d55b5ccdab69))
- **tedi-core:** Update base and typography import order [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([#448](https://github.com/TEHIK-EE/tedi-design-system/issues/448)) ([b864f20](https://github.com/TEHIK-EE/tedi-design-system/commit/b864f208758af481bb926619ab7f754fcb1024dd))
- **tedi-core:** Update typography styles [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([#434](https://github.com/TEHIK-EE/tedi-design-system/issues/434)) ([73f5a1c](https://github.com/TEHIK-EE/tedi-design-system/commit/73f5a1c9ff77496dfb23112b21a3e9dcb96fa0ca))
- **tedi-core:** Update typography styles [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([#435](https://github.com/TEHIK-EE/tedi-design-system/issues/435)) ([9474cdc](https://github.com/TEHIK-EE/tedi-design-system/commit/9474cdc336b0bc6d1cfcad0ce37461f063010071))
- **tedi-core:** Update typography styles [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([#436](https://github.com/TEHIK-EE/tedi-design-system/issues/436)) ([d09e896](https://github.com/TEHIK-EE/tedi-design-system/commit/d09e896f7ff8ec1d46facd5df9bfb6169edae056))

### Features

- **general:** tedi-core, tedi-angular and tedi-react monorepo [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([#403](https://github.com/TEHIK-EE/tedi-design-system/issues/403)) ([95654aa](https://github.com/TEHIK-EE/tedi-design-system/commit/95654aa5bb4d26b925ac51e1968f248707acdc07)), closes [#339](https://github.com/TEHIK-EE/tedi-design-system/issues/339) [#339](https://github.com/TEHIK-EE/tedi-design-system/issues/339) [#398](https://github.com/TEHIK-EE/tedi-design-system/issues/398) [#399](https://github.com/TEHIK-EE/tedi-design-system/issues/399)

# [@tehik-ee/tedi-core-v1.5.0-rc.10](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.0-rc.9...core-1.5.0-rc.10) (2025-01-24)

### Bug Fixes

- **tedi-core:** Update base and typography import order [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([#448](https://github.com/TEHIK-EE/tedi-design-system/issues/448)) ([b864f20](https://github.com/TEHIK-EE/tedi-design-system/commit/b864f208758af481bb926619ab7f754fcb1024dd))

# [@tehik-ee/tedi-core-v1.5.0-rc.9](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.0-rc.8...core-1.5.0-rc.9) (2025-01-21)

### Bug Fixes

- **tedi-core:** Change text color order [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([d0a60a0](https://github.com/TEHIK-EE/tedi-design-system/commit/d0a60a0372b6791ee0222eec1b329903d49ec088))

# [@tehik-ee/tedi-core-v1.5.0-rc.8](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.0-rc.7...core-1.5.0-rc.8) (2025-01-21)

### Bug Fixes

- **tedi-core:** Typography utilities, classes order, gather them into one file [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([90a4082](https://github.com/TEHIK-EE/tedi-design-system/commit/90a4082af8f5c5b4f6d7d862a9b1d55b5ccdab69))

# [@tehik-ee/tedi-core-v1.5.0-rc.7](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.0-rc.6...core-1.5.0-rc.7) (2025-01-21)

### Bug Fixes

- **tedi-core:** Update typography styles [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([#436](https://github.com/TEHIK-EE/tedi-design-system/issues/436)) ([d09e896](https://github.com/TEHIK-EE/tedi-design-system/commit/d09e896f7ff8ec1d46facd5df9bfb6169edae056))

# [@tehik-ee/tedi-core-v1.5.0-rc.6](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.0-rc.5...core-1.5.0-rc.6) (2025-01-21)

### Bug Fixes

- **tedi-core:** Update typography styles [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([#435](https://github.com/TEHIK-EE/tedi-design-system/issues/435)) ([9474cdc](https://github.com/TEHIK-EE/tedi-design-system/commit/9474cdc336b0bc6d1cfcad0ce37461f063010071))

# [@tehik-ee/tedi-core-v1.5.0-rc.5](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.0-rc.4...core-1.5.0-rc.5) (2025-01-21)

### Bug Fixes

- **tedi-core:** Update typography styles [#433](https://github.com/TEHIK-EE/tedi-design-system/issues/433) ([#434](https://github.com/TEHIK-EE/tedi-design-system/issues/434)) ([73f5a1c](https://github.com/TEHIK-EE/tedi-design-system/commit/73f5a1c9ff77496dfb23112b21a3e9dcb96fa0ca))

# [@tehik-ee/tedi-core-v1.5.0-rc.4](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.0-rc.3...core-1.5.0-rc.4) (2025-01-17)

### Bug Fixes

- **general:** @tehik-ee/tedi-react package styles are not complete [#406](https://github.com/TEHIK-EE/tedi-design-system/issues/406) ([#408](https://github.com/TEHIK-EE/tedi-design-system/issues/408)) ([4423d90](https://github.com/TEHIK-EE/tedi-design-system/commit/4423d906db8fbc569681cbcd352413b3e81a3680))

# [@tehik-ee/tedi-core-v1.5.0-rc.3](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.0-rc.2...core-1.5.0-rc.3) (2025-01-16)

### Bug Fixes

- **tedi-core:** add missing mixi import to typography-utilities [#419](https://github.com/TEHIK-EE/tedi-design-system/issues/419) ([#420](https://github.com/TEHIK-EE/tedi-design-system/issues/420)) ([add8966](https://github.com/TEHIK-EE/tedi-design-system/commit/add8966af7e6388320bbfcfca56d325c04fab885))

# [@tehik-ee/tedi-core-v1.5.0-rc.2](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.5.0-rc.1...core-1.5.0-rc.2) (2025-01-16)

### Bug Fixes

- **tedi-core:** add missing styles to tedi-core [#417](https://github.com/TEHIK-EE/tedi-design-system/issues/417) ([#418](https://github.com/TEHIK-EE/tedi-design-system/issues/418)) ([6c1efca](https://github.com/TEHIK-EE/tedi-design-system/commit/6c1efcac448cfe66e6b635d26558728c5588034f))

# [@tehik-ee/tedi-core-v1.5.0-rc.1](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.4.0...core-1.5.0-rc.1) (2025-01-14)

### Bug Fixes

- **general:** Remove --dry-run flag from release script [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([8e2078a](https://github.com/TEHIK-EE/tedi-design-system/commit/8e2078ab5210f3ad32fcb6c01c292bcc74f02690))

### Features

- **general:** tedi-core, tedi-angular and tedi-react monorepo [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([#403](https://github.com/TEHIK-EE/tedi-design-system/issues/403)) ([95654aa](https://github.com/TEHIK-EE/tedi-design-system/commit/95654aa5bb4d26b925ac51e1968f248707acdc07)), closes [#339](https://github.com/TEHIK-EE/tedi-design-system/issues/339) [#339](https://github.com/TEHIK-EE/tedi-design-system/issues/339) [#398](https://github.com/TEHIK-EE/tedi-design-system/issues/398) [#399](https://github.com/TEHIK-EE/tedi-design-system/issues/399)

# [@tehik-ee/tedi-core-v1.4.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.3.0...core-1.4.0) (2025-01-13)

### Features

- **general:** add tedi-core missing package.lock [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([f0d5132](https://github.com/TEHIK-EE/tedi-design-system/commit/f0d5132ad08b6f06ccccefc510908e2ed577ff73))
- **general:** update tedi-core package content [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([9808f6a](https://github.com/TEHIK-EE/tedi-design-system/commit/9808f6aa5782ca33e5e985d8d4985710e3e06fc3))

# [@tehik-ee/tedi-core-v1.3.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.2.0...core-1.3.0) (2025-01-13)

### Features

- **general:** release scss file insteaf of css for tedi-core [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([0cec9e9](https://github.com/TEHIK-EE/tedi-design-system/commit/0cec9e9ce1ac6762742b3d5997ffca8c982984c9))

# [@tehik-ee/tedi-core-v1.2.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.1.0...core-1.2.0) (2025-01-13)

### Features

- **general:** add semantic versioning to tedi-core [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([b266f02](https://github.com/TEHIK-EE/tedi-design-system/commit/b266f029622658162b36b4ef49f73626cfdd09a9))

# [@tehik-ee/tedi-core-v1.1.0](https://github.com/TEHIK-EE/tedi-design-system/compare/core-1.0.0...core-1.1.0) (2025-01-13)

### Features

- **general:** add publishConfig for tedi-core package.json [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([7fe4445](https://github.com/TEHIK-EE/tedi-design-system/commit/7fe4445435b6cd2a52a1f2302f3e72b505bb8681))

# @tehik-ee/tedi-core-v1.0.0 (2025-01-13)

### Features

- Added workflow and semantic release to tedi-core [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([b3f6619](https://github.com/TEHIK-EE/tedi-design-system/commit/b3f66196d2945cab21d8ca6ea1e869eb6822939f))
- **angular:** Cleanup [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([261cc22](https://github.com/TEHIK-EE/tedi-design-system/commit/261cc22bd387c9b3a07f8d5b94926a1c67ca4086))
- **angular:** Cleanup [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([c5c4751](https://github.com/TEHIK-EE/tedi-design-system/commit/c5c4751c21ef99b009ea6ba525e337412abce9bc))
- **angular:** css import/use fix, sb build fix [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([6edb013](https://github.com/TEHIK-EE/tedi-design-system/commit/6edb013ceff463285596138ec103a138bbf6078e))
- **angular:** eslint fixes [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([0185f57](https://github.com/TEHIK-EE/tedi-design-system/commit/0185f57ebd2ec046baea929f21bbbb3954994750))
- **angular:** fix react variables and github pages font [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([1258f85](https://github.com/TEHIK-EE/tedi-design-system/commit/1258f85d8a2f37b8a00e23fdb6a45fc985963d01))
- **angular:** move public to tedi-core [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([4be716b](https://github.com/TEHIK-EE/tedi-design-system/commit/4be716ba7f81efd51abfeab258dc6dafc7f2c2eb))
- **angular:** move semantic-release plugins to root [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([77c548b](https://github.com/TEHIK-EE/tedi-design-system/commit/77c548bba5cf5501206f64be2fb2547388e306c2))
- **angular:** react linting fix [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([eec1baf](https://github.com/TEHIK-EE/tedi-design-system/commit/eec1baf846866858b0b0a75e7365b478cdc6cca3))
- **angular:** root package.json lint fix ([fd9b73b](https://github.com/TEHIK-EE/tedi-design-system/commit/fd9b73b011993bfc4b070d92b7042707d7a6f636))
- **angular:** update variables [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([cbb2030](https://github.com/TEHIK-EE/tedi-design-system/commit/cbb2030ac310e012ef46aeab73e8ba7b83e7e732))
- **general:** Monorepo changes [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([94f453d](https://github.com/TEHIK-EE/tedi-design-system/commit/94f453d8ce081b6867b9b833c048050b34c64549))
- **general:** tedi-core build [#330](https://github.com/TEHIK-EE/tedi-design-system/issues/330) ([319d2dd](https://github.com/TEHIK-EE/tedi-design-system/commit/319d2ddc8d04d2f4eb9b8ea543e4d4d9f9dde800))
