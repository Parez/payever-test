import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@NgModule({
    declarations: [],
    imports: [HttpClientModule],
    exports: [CommonModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
    providers: [ApiService],
})
export class SharedModule {}
