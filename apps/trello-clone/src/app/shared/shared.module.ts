import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [CommonModule, MatDividerModule],
  exports: [CommonModule, MatDividerModule]
})
export class SharedModule {}
