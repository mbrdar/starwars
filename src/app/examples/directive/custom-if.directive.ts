import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {
  @Input() set customIf(condition) {
    if (condition) {
      this._viewContainer.createEmbeddedView(this._template);
    } else {
      this._viewContainer.clear();
    }
  }

  constructor(private _viewContainer: ViewContainerRef, private _template: TemplateRef<any>) {
  }

}
