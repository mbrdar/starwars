import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomIfDirective} from './directive/custom-if.directive';
import {LifeCycleHooksComponent} from "./life-cycle-hooks/life-cycle-hooks.component";
import {HooksComponent} from "./hooks/hooks.component";
import {RouterModule} from "@angular/router";
import {NavigationComponent} from './navigation/navigation.component';
import {CustomIfComponent} from './custom-if/custom-if.component';
import { DefaultChangeDetectionComponent } from './default-change-detection/default-change-detection.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import {FormsModule} from "@angular/forms";
import { OnPushChangeDetectionComponent } from './on-push-change-detection/on-push-change-detection.component';
import { RxjsComponent } from './rxjs/rxjs.component';

let routes = [
  {path: '', component: HooksComponent},
  {path: 'examples/hooks', component: HooksComponent},
  {path: 'examples/directive', component: CustomIfComponent},
  {path: 'examples/changedetection', component: ChangeDetectionComponent},
  {path: 'examples/rxjs', component: RxjsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CustomIfDirective,
    LifeCycleHooksComponent,
    HooksComponent,
    NavigationComponent,
    CustomIfComponent,
    DefaultChangeDetectionComponent,
    ChangeDetectionComponent,
    OnPushChangeDetectionComponent,
    RxjsComponent],
  exports: [CustomIfDirective]
})
export default class ExamplesModule {
}
