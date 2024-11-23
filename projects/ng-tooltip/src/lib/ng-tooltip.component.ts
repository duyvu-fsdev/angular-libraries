import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import { Option, Position } from './ng-tooltip.model';

@Component({
  selector: 'ng-tooltip',
  templateUrl: './ng-tooltip.component.html',
  styleUrls: ['../../styles/ng-tooltip.scss'],
})
export class TooltipComponent implements AfterViewInit {
  @Input() option!: Option;

  position: Position;
  top!: string;
  initTop!: string;
  left!: string;
  initLeft!: string;
  visible: boolean = false;

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.setInitPosition(this.option.position);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.visible = true;
    this.setPosition(this.adjustPosition());
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.visible = false;
  }

  private setInitPosition(position: Position) {
    const wrapperPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipEl = this.el.nativeElement.querySelector('.tooltip-container');
    const initTooltipEl = this.el.nativeElement.querySelector(
      '.init-tooltip-container'
    );
    if (!initTooltipEl || !tooltipEl) return;
    const tooltipPos = initTooltipEl.getBoundingClientRect();

    switch (position) {
      case 'top':
        this.position = 'top';
        this.initTop = `-${tooltipPos.height + 6}px`;
        this.initLeft = `${wrapperPos.width / 2 - tooltipPos.width / 2}px`;
        break;
      case 'left':
        this.position = 'left';
        this.initTop = `${wrapperPos.height / 2 - tooltipPos.height / 2}px`;
        this.initLeft = `-${tooltipPos.width + 6}px`;
        break;
      case 'right':
        this.position = 'right';
        this.initTop = `${wrapperPos.height / 2 - tooltipPos.height / 2}px`;
        this.initLeft = `${wrapperPos.width + 6}px`;
        break;
      default:
        this.position = 'bottom';
        this.initTop = `${wrapperPos.height + 6}px`;
        this.initLeft = `${wrapperPos.width / 2 - tooltipPos.width / 2}px`;
        break;
    }

    if (this.option.class) {
      tooltipEl.classList.add(this.option.class);
      initTooltipEl.classList.add(this.option.class);
    }
    this.cdr.detectChanges();
  }

  private setPosition(position: Position) {
    const wrapperPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipEl = this.el.nativeElement.querySelector('.tooltip-container');
    if (!tooltipEl) return;
    const tooltipPos = tooltipEl.getBoundingClientRect();
    switch (position) {
      case 'top':
        this.position = 'top';
        this.top = `-${tooltipPos.height + 6}px`;
        this.left = `${wrapperPos.width / 2 - tooltipPos.width / 2}px`;
        break;
      case 'left':
        this.position = 'left';
        this.top = `${wrapperPos.height / 2 - tooltipPos.height / 2}px`;
        this.left = `-${tooltipPos.width + 6}px`;
        break;
      case 'right':
        this.position = 'right';
        this.top = `${wrapperPos.height / 2 - tooltipPos.height / 2}px`;
        this.left = `${wrapperPos.width + 6}px`;
        break;
      default:
        this.position = 'bottom';
        this.top = `${wrapperPos.height + 6}px`;
        this.left = `${wrapperPos.width / 2 - tooltipPos.width / 2}px`;
        break;
    }
    this.cdr.detectChanges();
  }

  private adjustPosition(): 'top' | 'bottom' | 'left' | 'right' | undefined {
    const tooltipEl = this.el.nativeElement.querySelector(
      '.init-tooltip-container'
    );
    if (!tooltipEl) return undefined;
    const tooltipPos = tooltipEl.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    if (tooltipPos.right > windowWidth) return 'left';
    if (tooltipPos.left < 0) return 'right';
    if (tooltipPos.bottom > windowHeight) return 'top';
    if (tooltipPos.top < 0) return 'bottom';
    else return this.option.position;
  }
}
