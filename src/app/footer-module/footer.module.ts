import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFooterComponent} from './page-footer.component'

@NgModule({
  declarations: [PageFooterComponent],
  exports: [PageFooterComponent],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
