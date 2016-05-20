// app
import {BaseComponent, LogService} from '../../frameworks/core.framework/index';
import {LangSwitcherComponent} from '../../frameworks/i18n.framework/index';
import {NavbarComponent} from './navbar.component';

@BaseComponent({
  selector: 'sd-toolbar',
  templateUrl: './app/pages/app/toolbar.component.html',
  styleUrls: ['./app/pages/app/toolbar.component.css'],
  directives: [LangSwitcherComponent, NavbarComponent]
})
export class ToolbarComponent {
  
  constructor(private log: LogService) {}
  
  public openLanguages(e: any): void {
    this.log.debug('openLanguages');
  }
}
