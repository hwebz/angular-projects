import { Inject, Injectable } from '@angular/core';
import { WINDOW, ElectronWindow } from './window';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(@Inject(WINDOW) private window: ElectronWindow) { }

  private get ipcRenderer(): Electron.IpcRenderer {
    return this.window.require('electron').ipcRenderer;
  }

  getContent(): Promise<string> {
    return this.ipcRenderer.invoke('getContent');
  }

  setContent(content: string) {
    this.ipcRenderer.invoke('setContent', content);
  }
}
