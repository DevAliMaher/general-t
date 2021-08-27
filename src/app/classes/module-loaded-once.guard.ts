// this class will check if certain class has instance .. if there is will throw error

import { Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

export class ModuleLoadedOnce {
  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(
        `${targetModule.constructor.name} has already been loaded`
      );
    }
  }
}

// ex: if there is no instance of CoreModule ok create new one, if there is throw error
//  note:
// this pattern was used before angular 7 or before angular team added {providedIn: 'root'} to injection
// that pattern was help to keep single tone pattern
// this pattern still useful to add configuration to your module as angular : RouterModule.forRoot(routes) and many libraries use it

export class CoreModule extends ModuleLoadedOnce {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
