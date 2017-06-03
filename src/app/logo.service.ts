import { Injectable } from '@angular/core';

@Injectable()
export class LogoService {

  public get logoSrc(): string {
    return this._logoSrc;
  }

  public set logoFile(file: File) {
    const reader = new FileReader();
    reader.onload = ()  => this._logoSrc = reader.result;
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this._logoSrc = '';
    }
  }

  private _logoSrc: string = '';

  public reset(): void {
    this._logoSrc = '';
  }

}
