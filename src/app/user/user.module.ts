import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';
import { Test } from '../test';
import { DetailComponent } from './detail/detail.component';
//import  { I} from '@angular/core';


@NgModule({
  declarations: [
    UserListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ],
 // providers: [
 //     Test //also -> { provide: Test, useClass: Test}
 // ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { 
  static forRoot(config: any): ModuleWithProviders <UserModule> {
    return {
      ngModule: UserModule,
      providers: [
        {
          provide: 'test',
          useValue: config,
          multi: true
        }
      ]

    }
  }

  static forChild(config: any): ModuleWithProviders<UserModule> {  // мжем да го срещнем като forFeature
    return {
      ngModule: UserModule,
      providers: [
        {
          provide: 'some additional providers',
          useValue: config,
          multi: true
        }
      ]
    }
  }
}
