import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentComponent} from "./components/component/component.component";
import {InlineComponentComponent} from "./components/inline-component/inline-component.component";
import {DataBindingComponent} from "./data-binding/data-binding.component";
import {ClassComponent} from "./directives/class/class.component";
import {ForComponent} from "./directives/for/for.component";
import {IfComponent} from "./directives/if/if.component";
import {StyleComponent} from "./directives/style/style.component";
import {SwitchComponent} from "./directives/switch/switch.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ComponentComponent,
    InlineComponentComponent,
    DataBindingComponent,
    ClassComponent,
    ForComponent,
    IfComponent,
    StyleComponent,
    SwitchComponent],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [ComponentComponent,
    InlineComponentComponent,
    DataBindingComponent,
    ClassComponent,
    ForComponent,
    IfComponent,
    StyleComponent,
    SwitchComponent]
})
export class BasicsModule {
}
